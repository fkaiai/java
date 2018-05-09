package cn.ee.ff.job;

import org.quartz.SchedulerException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.ParseException;

public class FirstJob {

    private static final Logger log = LoggerFactory.getLogger(FirstJob.class);

    public void executeInternal() throws SchedulerException,ParseException {

        // 记录debug级别的信息
        log.debug("This is debug message.");
        // 记录info级别的信息
        log.info("This is info message.");
        // 记录error级别的信息
        log.error("This is error message.");


    }


}
