package cn.ee.ff.service;

import cn.ee.ff.po.User;
import com.github.pagehelper.PageInfo;

public interface UserService {

    //查询用户
    User selectById(Integer id);

    //查询所有
    public PageInfo<User> listUser(int currentPage, int pageSize);
}
