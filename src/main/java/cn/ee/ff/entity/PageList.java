package cn.ee.ff.entity;

import java.util.List;

public class PageList {

    private List<?> rows;
    private Long total; //总条数

    public PageList(List<?> rows,Long total) {
        this.rows = rows;
        this.total = total;

    }


    public List<?> getRows() {
        return rows;
    }

    public void setRows(List<?> rows) {
        this.rows = rows;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    @Override
    public String toString() {
        return "PageList{" +
                "rows=" + rows +
                ", total=" + total +
                '}';
    }
}
