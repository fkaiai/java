package cn.ee.ff.service.impl;

import cn.ee.ff.dao.UserMapper;
import cn.ee.ff.service.RedisTemplate;
import cn.ee.ff.util.RedisCacheUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RedisTemplateImpl implements RedisTemplate {

    @Autowired
    UserMapper userMapper;

    @Autowired
    private RedisCacheUtil<Object> redisCache;


    @Override
//    @Cacheable("findById")
    public String findById(Integer id) {

        String aa = userMapper.selectById(id).getAddress();
        redisCache.setCacheObject("ti",aa);
        return aa;

    }
}

