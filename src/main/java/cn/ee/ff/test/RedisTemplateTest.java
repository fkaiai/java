package cn.ee.ff.test;

import cn.ee.ff.service.impl.RedisTemplateImpl;
import cn.ee.ff.util.RedisCacheUtil;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("/applicationContext.xml")
public class RedisTemplateTest {

    @Autowired
    private RedisCacheUtil<Object> redisCache;

    @Autowired
    RedisTemplateImpl redisTemplateImpl;

    @Test
    public void test(){
        /*System.out.println(redisTemplateImpl.findById(16));
        System.out.println(redisCache.getCacheObject("ti"));*/


    }
}
