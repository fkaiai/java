package cn.ee.ff.test.quartz;

import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.quartz.QuartzJobBean;

public class FirstScheduledJob extends QuartzJobBean {

    private MyBean myBean;

    @Override
    protected void executeInternal(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        System.out.println("FirstScheduledJob Executes");
        myBean.method2();
    }

    public void setMyBean(MyBean myBean){
        this.myBean=myBean;
    }

}
