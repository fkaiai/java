package cn.ee.ff.dao;

import cn.ee.ff.po.User;

import java.util.List;

public interface UserMapper {

    User selectById(Integer id);

    List<User> selectAll();
}
