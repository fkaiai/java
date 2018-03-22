package cn.ee.ff.service.impl;

import cn.ee.ff.dao.UserMapper;
import cn.ee.ff.po.User;
import cn.ee.ff.service.UserService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {


    @Autowired
    UserMapper userMapper;



    @Override
    public User selectById(Integer id) {
        return userMapper.selectById(id);
    }

    @Override
    public PageInfo<User> listUser(int currentPage, int pageSize) {
        if (currentPage>0 && pageSize>0) {
            PageHelper.startPage(currentPage, pageSize);
        }
        List<User> list = userMapper.selectAll();
        PageInfo<User> pageInfo = new PageInfo<User>(list);
        return pageInfo;

    }

}
