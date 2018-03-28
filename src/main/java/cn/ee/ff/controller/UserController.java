package cn.ee.ff.controller;

import cn.ee.ff.entity.DataBox;
import cn.ee.ff.entity.PageList;
import cn.ee.ff.po.User;
import cn.ee.ff.service.impl.UserServiceImpl;
import com.github.pagehelper.PageInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
//@RestController
public class UserController {

    protected final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private UserServiceImpl userServiceImpl;

    @RequestMapping("/user")
    public DataBox queryUser(HttpServletRequest request,HttpServletResponse response){
        String id=request.getParameter("id");
        System.out.println(id);
        DataBox aaa=new DataBox();
        logger.debug("DEBUG TEST 这个地方输出DEBUG级别的日志");
        String add=userServiceImpl.selectById(Integer.valueOf(id)).getAddress();
        System.out.println(add);

        Cookie c_add=new Cookie("cc_add",add);
        c_add.setMaxAge(60 * 60 * 24 * 14);
        response.addCookie(c_add);

        return aaa;
    }

    //分页查询
    @RequestMapping(value = "/userPage")
    public PageList userPage(HttpServletRequest req, Model model){

        String currentPageStr = req.getParameter("offset"); //当前页
        String pageSizeStr = req.getParameter("limit"); //每页条数

        PageInfo<User> pageInfo = userServiceImpl.listUser(Integer.valueOf(currentPageStr),Integer.valueOf(pageSizeStr));
        List<User> list = pageInfo.getList();

        /*List<User> userList =new ArrayList<>();

        for(User user:list){
            userList.add(user);
        }*/
        System.out.println(list);
        return new PageList(list,pageInfo.getTotal());
    }



}
