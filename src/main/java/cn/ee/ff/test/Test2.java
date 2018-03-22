package cn.ee.ff.test;

import cn.ee.ff.dao.UserMapper;
import cn.ee.ff.po.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("/applicationContext.xml")
public class Test2 {

    /*@Resource
    private User user;*/

    @Autowired
    private UserMapper userMapper;

    @Test
    public void test11(){
        System.out.println(userMapper.selectById(16).getAddress());
    }
}
