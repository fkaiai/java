$.get(basePath + '/activity/common/getProducts',params,function (res) {
    if (res.status == '0'&&res.data.length>0) {

        $.each(res.data,function(i,item){

            $.each(item.activityProductList,function(index,res){

                //如果有活动价，为直降商品 用活动价，否则为免息或者利息打折 用市场价
                var price = 0,
                    rightTxt = '',
                    iconTxt = '';
                if(i==0){
                    price = res.couponPrice;
                    iconTxt = '<span class="g-mark">秒杀</span>';
                }else{
                    if (res.couponPrice){
                        price = res.couponPrice;
                        var downPrice = Math.floor(res.marketPrice - res.couponPrice);
                        if(downPrice>0){
                            iconTxt = '<span class="g-mark">直降<br/>'+ downPrice +'</span>';
                        }else{
                            iconTxt = '<span class="g-mark">直降</span>';
                        }
                    } else {
                        price = res.marketPrice;
                        if (res.isFreeInterest == 1) {
                            if(res.bestDiscount==0){
                                iconTxt = '<span class="g-mark">6期<br/>免息</span>';
                            }else if(res.bestDiscount>0&&res.bestDiscount<10){
                                iconTxt = '<span class="g-mark">利息<br/>'+ res.bestDiscount +'折</span>';
                            }
                        }
                    }
                    //rightTxt = '<span class="g-pay">月供'+res.monthPay+'起</span>';
                }
                rightTxt = '<span class="g-old-price">¥'+ res.marketPrice +'</span>';

                var a = '<li class="g-border" onclick="doubleElevenFirst.jump('+res.skuId+','+res.spuId+')">'
                    +    '<div class="g-item">'
                    +        iconTxt
                    +        '<img class="g-img" src="'+(imgsPath+res.thumb)+'" alt="">'
                    +        '<p class="g-name">'+res.skuName+'</p>'
                    +        '<p class="g-price"><span class="g-1"><i class="g-symbol">¥</i>'+ price +'</span>'+ rightTxt +'</p>'
                    +        '<a class="g-btn" href="javascript:;"></a>'
                    +    '</div>'
                    +'</li>';
                $(a).appendTo($(".goods-wrap").eq(i));
            });
        });
    }
});