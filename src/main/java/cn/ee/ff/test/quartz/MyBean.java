package cn.ee.ff.test.quartz;

import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component("myBean")
public class MyBean {
    public void printMessage(){
        Date date =new Date();
        SimpleDateFormat sf =new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        System.out.println("mybean Executes"+sf.format(date));
    }

    public void method2(){
        System.out.println("method2");
    }


}
