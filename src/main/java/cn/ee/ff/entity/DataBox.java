package cn.ee.ff.entity;

public class DataBox {

    private Integer ask;

    private String code;

    private String message;

    private Object data ;

    //private Object data;
    public DataBox() {
        this.ask = 1;
        this.code = "12";
        this.message = "123";
        this.data = "";
    }

    public DataBox(Integer ask, String code, String message) {
        this.ask = ask;
        this.code = code;
        this.message = message;
        this.data = "";
    }

    public DataBox(Integer ask, String code, String message, Object data) {
        this.ask = ask;
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public Integer getAsk() {
        return ask;
    }

    public void setAsk(Integer ask) {
        this.ask = ask;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
