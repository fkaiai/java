package cn.ee.ff.test;

import cn.ee.ff.dao.UserMapper;
import cn.ee.ff.po.User;
import cn.ee.ff.service.UserService;
import cn.ee.ff.service.impl.UserServiceImpl;
import com.github.pagehelper.PageInfo;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("/applicationContext.xml")
public class mybatisTest {

    @Autowired
    UserService userService;

    @Test
    public void mmm(){

        PageInfo<User> pageInfo = userService.listUser(2,4);
        List<User> list = pageInfo.getList();

        Map<String,Object> map = new HashMap<String,Object>();
        List<User> dataList = new ArrayList<User>();
        for(User user:list){
            dataList.add(user);
        }
        map.put("data",dataList);
        System.out.println(map);
//        System.out.println(list);
    }
}
