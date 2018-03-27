// JavaScript Document
var HONORUS = window.HONORUS || {};
(function($) {
    HONORUS.Global={
        init:function(){
            //this.url = 'http://www-sit.honor.cn/';
            this.url = 'http://id1.honor.cn/';
            this.site = 'us';
            //跳转support结果页
            this.supportRelult = 'http://www.hihonor.com/'+ this.site +'/support/search-result/';
            this.sPage = 'http://www.hihonor.com/us/search/',
                //this.sPage = 'index.html',
                this.userLib = {
                    errorSystem:'System error.',
                    error1key:'Please enter a keyword.',
                    error2key:'Enter at least 2 characters.',
                    errorMore100key:'No more than 100 characters.',
                },
                this.hotSearch = [
                    ['Honor 5X','https://store.hihonor.com/us/honor-5x'],
                    ['Honor 8','https://store.hihonor.com/us/honor-8'],
                    ['software','http://www.hihonor.com/us/support/software-list/index.html'],
                    ['Manual','http://www.hihonor.com/us/support/manual-list/index.html'],
                    ['Store','https://store.hihonor.com/us'],
                ],
                this.pcNav();
            this.mobileNav();
            this.bannerSlider();
            this.bannerwidth();
            this.categoryFilter();
            if($('.home').length){
                this.productSlider();
                this.emaiSubscribe();
            }
            this.eventAll();
            this.searchGeneric();
            if(this.checkScreen() != 'xs'){
                this.pcnavSearch();
            }else{
                this.mobilesearch();
            }
            if($('.search-result').length){
                this.searchResult();
            }

        },
        checkScreen:function(){
            var w_w = $(window).width();
            if(w_w <768){
                return 'xs';
            }else if(w_w >= 768 ||w_w < 992){
                return 'sm';
            }else if(w_w >= 992 ||w_w < 1120){
                return 'md';
            }else{
                return 'lg';
            }
        },
        pcNav:function(){
            var timer = null;
            var timer2 = null;
            var timer3 = null;
            function navSecslide() {
                $('#nav-cont .navlist a').removeClass('active');
                $('.js-nav').removeClass('active');
                $('#nav-cont-wrap .nav-cont-wrap').find('.subnav-item').stop(true, false).filter(":visible").slideUp(500);
            }
            function navSearchslide(){
                $('.nav-search a').removeClass('active');
                $('#navsearch-box').find('.navsearch-item').stop(true, false).filter(":visible").slideUp(500);
            }
            $(document).on('mouseleave', '#nav-cont', function (e) {
                    timer2 = setTimeout(function () {
                        navSecslide();
                    }, 400);
                })
                .on('mouseenter click','.nav-list a',function(e){
                    var secAtr = $(this).attr('data-sec-menu');
                    $(this).addClass('active');
                    $(this).siblings().removeClass('active');
                    $(secAtr).slideDown();
                    $(secAtr).siblings().slideUp();
                    if(!$(this).hasClass('js-nav')){
                        $(this).removeClass('active');
                        $('.nav-cont-wrap').children('.subnav-item').slideUp();
                    }
                })
                .on('mouseenter','.js-treemunu',function(e){
                    var treeatr = $(this).attr('data-treeimg');
                    $(treeatr).fadeIn();
                    $(treeatr).siblings().fadeOut();
                })
                .on('mouseenter', '#nav-cont-wrap', function (e) {
                    clearTimeout(timer2);
                })
                .on('mouseleave', '#nav-cont-wrap', function (e) {
                    timer2 = setTimeout(function () {
                        navSecslide();
                    }, 500);
                })
                //个人中心头像
                .on('mouseleave', '.js-navsearch', function (e) {
                    timer3 = setTimeout(function () {
                        navSearchslide();
                    }, 400);
                })
                .on('mouseenter','.js-navsearch',function(e){
                    $(this).addClass('active');
                    $(this).siblings().removeClass('active');
                    var navSearch = $(this).attr('data-search-navbtn');
                    $(navSearch).slideDown();
                    $(navSearch).siblings().slideUp();
                    var navseachrLeft = $(this).offset().left;
                    console.log(navseachrLeft)
                    var navSearchWidth=$(navSearch).width();
                    $(navSearch).css('left',navseachrLeft-navSearchWidth+50);
                })
                .on('mouseenter', '#navsearch-box', function (e) {
                    clearTimeout(timer3);
                })
                .on('mouseleave', '#navsearch-box', function (e) {
                    timer3 = setTimeout(function () {
                        navSearchslide();
                    }, 500);
                })



        },
        mobileNav:function(){
            var mtime = null;

            function mobileUse() {
                $('.mobile-usercontent').children('.navsearch-item').stop(true, false).filter(":visible").slideUp(500);
            }
            $(document).on('mouseenter','.js-mobile-userbtn',function(e){
                    var mUser = $(this).attr('data-msearch');
                    var mUserx = $(this).offset().left;
                    var mUserw = $(mUser).width();
                    $(mUser).slideDown();
                    if($(window).width()>767 && $(window).width()<=991){
                        $(mUser).css('left',mUserx-mUserw+45);
                    }
                    if($('html').hasClass('mobile-opening')){
                        $('.js-mobile-menubtn').trigger('click');
                        $('html').removeClass('active');
                    }
                })
                .on('click','.js-mobile-menubtn',function(){
                    var mmuneAtr = $(this).attr('data-mobile-menu');
                    if(!$('html').hasClass('mobile-opening')){
                        $('html').addClass('mobile-opening');
                        if($(window).width()<=767){
                            $('#main').animate({left:'-100%'},450);
                        }else{
                            $('html').animate({left:'-50%'},450);
                        }
                    }else{
                        $('html').removeClass('mobile-opening');
                        if($(window).width()<=767){
                            $('#main').animate({left:'0'},450);
                        }else{
                            $('html').animate({left:'0'},450);
                        }
                    }
                })
                .on('mouseenter', '#mnavuser', function (e) {
                    clearTimeout(mtime);
                })
                .on('mouseleave','.js-mobile-userbtn,#mnavuser',function(e){
                    mtime = setTimeout(function () {
                        mobileUse();
                    }, 400);
                })
                .on('click','.mobile-menulist .hasmore>a,.js-threesub-nav>a',function(e){
                    if($(this).hasClass('active')){
                        $(this).removeClass('active');
                        $(this).next('ul').slideUp();
                    }else{
                        $(this).addClass('active');
                        $(this).parent().siblings().children('a').removeClass('active');
                        $(this).next('ul').slideDown().end().parent().siblings().children('ul').slideUp();
                    }
                })
                .on('click','.js-footertitle',function(e){
                    if($(window).width()<=767){
                        if($(this).hasClass('active')){
                            $(this).removeClass('active');
                            $(this).parent().next('ul').slideUp();
                        }else{
                            $(this).addClass('active');
                            $(this).parent().next('ul').slideDown();
                            //debugger;
                            $(this).parents('.foot-parent').siblings().find('.foot-title').removeClass('active');
                            $(this).parents('.foot-parent').siblings().find('.foot-title').next('ul').slideUp();
                        }
                    }
                })

        },
        bannerwidth:function(){

            /*$('.index-banner').width($(window).width());
             if($(window).width()>=768){
             $('.index-banner').height($(window).height());
             $('.index-banner .swiper-wrapper').height($(window).height());
             $('.position-imgbox').height($(window).height());

             }*/
        },
        bannerSlider:function(){
            if ($(".swiper-container").length <= 0 || $(".swiper-container > .swiper-wrapper > .swiper-slide").length <= 1) {
                $(".swiper-container .arrow-left, .swiper-container .arrow-right, .swiper-container .swiper-pagination").addClass("hidden");
                $(".swiper-container").addClass("no-swiper");
                return;
            }
            if($(window).width()<=767){
                $(".swiper-container .arrow-left, .swiper-container .arrow-right").addClass("hidden");
            }else{
                $(".swiper-container .arrow-left, .swiper-container .arrow-right").removeClass("hidden");
            }
            var interval = parseInt($(".swiper-container").parent().attr("data-interval")) || 5000;
            var speed = parseInt($(".swiper-container").parent().attr("data-speed")) || 1000;
            var indexSwiper = new Swiper('.index-banner .swiper-container',{
                pagination : '.index-banner .swiper-pagination',
                paginationClickable: true,
                loop: true,
                autoplay:interval,
                speed:speed,
                grabCursor : true,
                resizeReInit : true,
                noSwiping: true,
                calculateHeight:true,
                //mousewheelControl : true,
                onInit: function(swiper){
                    $(swiper.getSlide(swiper.activeIndex)).find(".txt-verticalbox").fadeIn(1000).addClass('animation-in');
                    $('.banner-content-right').height($('.index-banner').height())
                    $(window).resize(function(){
                        $('.banner-content-right').height($('.index-banner').height())
                    })
                },
                onSlideChangeStart: function (swiper) {
                    var $active = $(swiper.getSlide(swiper.activeIndex)).find(".txt-verticalbox");
                    var $prev = $(swiper.container).find(".txt-verticalbox").filter(":visible");
                    $prev.stop(true, true).fadeOut().removeClass('animation-in');
                    $active.stop(true, true).delay(500).fadeIn(800).addClass('animation-in');
                }
            });

            $('.index-banner .arrow-left').on('click', function(e){
                e.preventDefault();
                indexSwiper.swipePrev();
            })
            $('.index-banner .arrow-right').on('click', function(e){
                e.preventDefault();
                indexSwiper.swipeNext();
            })

        },
        categoryFilter:function(){
            var windowWidht = $(window).width();
            var itemlength = $('.list-of-categories').children().length;
            var itemWidth = windowWidht/4;
            if(windowWidht>=768) {
                if(itemlength>5){
                    $('.list-of-categories').bxSlider({
                        slideWidth: 200,
                        minSlides: 1,
                        maxSlides: 5,
                        moveSlides: 5,
                        pager: false,
                        infiniteLoop: false,
                        controls: true,
                        speed: 300,
                        easing: 'linear',
                        /*nextText: '<img src="images/global/icon-arrow-right.png">',
                         prevText: '<img src="images/global/icon-arrow-left.png">',*/
                        onSliderLoad: function(){
                            if(itemlength <= 5){
                                //$(this).next().children().addClass('hidden');
                            }
                        }
                    });
                }
            }else{
                if(itemlength>4){
                    $('.list-of-categories').bxSlider({
                        slideWidth: itemWidth,
                        minSlides: 1,
                        maxSlides: 4,
                        moveSlides: 4,
                        pager: false,
                        infiniteLoop: false,
                        controls: true,
                        speed: 300,
                        easing: 'linear',
                    });
                }

            }
        },
        productSlider:function(){
            var interval = parseInt($(".swiper-container").parent().attr("data-interval")) || 5000;
            var speed = parseInt($(".swiper-container").parent().attr("data-speed")) || 1000;
            if($(window).width()<=767){
                var xwidth = $(window).width()-30;
                $('.big-productslider .product-bigbox').height(xwidth*366/396 + 106);
                $('.big-productslider').width(xwidth);
                $('.big-productslider').height(xwidth*366/396 + 140);
                var bigproductSwiper = new Swiper('.big-productslider .swiper-container',{
                    pagination : '.big-productslider .swiper-pagination',
                    paginationClickable: true,
                    loop: true,
                    spaceBetween: 30,
                    autoplay:interval,
                    speed:speed
                });
                var signUpSwiper = new Swiper('.sign-sliderbox .swiper-container',{
                    pagination : '.sign-sliderbox .swiper-pagination',
                    paginationClickable: true,
                    loop: true,
                    spaceBetween: 30,
                    autoplay:interval,
                    speed:speed
                });

            }
            // sign up swiper
            $('.sign-sliderbox .item').css("background-image", function (i, v) {
                var url = $(window).width() >= 768 ? $(this).attr("data-big-img") : $(this).attr("data-small-img");
                return "url(" + url + ")";
            });


        },
        eventAll:function(){
            $(document).on('focus', '.js-inputbtn', function(e){
                    $(this).parents('.sign-input-item').addClass('active');
                })
                .on('blur', '.js-inputbtn', function(e){
                    //$(this).parents('.sign-input-item').removeClass('active')
                    var inputTxt = $(this).parents('.sign-input-item').find('.js-inputbtn').text();
                })
                .on('click','.js-signsbmit',function(e){
                    $(this).toggleClass('active');
                })
                .on('click','js-toemail-btn',function(e){
                    var title = $(this).attr("data-email-title") || "";
                    var body = $(this).attr("data-email-body") || "";
                    var email = $(this).attr("data-email-addr") || "hihonor.in@huawei.com";
                    var url = $(this).attr("data-email-url") || document.URL;

                    title = title.replace("{webtitle}", document.title);
                    body = body.replace("{webtitle}", document.title);
                    body = body.replace("{weburl}", url);
                    $(this).attr("href", "mailto:" + email + "?subject=" + title + " &body=" + body);
                })
        },
        searchGeneric:function(){
            //Quick link start
            var hotArr = [];
            for(var i in HONORUS.Global.hotSearch){
                hotArr.push('<li><a href="'+ HONORUS.Global.hotSearch[i][1] +'" target="_blank" class="ui-link">'+ HONORUS.Global.hotSearch[i][0] +'</a></li>')
            }
            $('.group-0>ul').empty().append(hotArr.join(''));
        },
        pcnavSearch:function(){
            var nav_placeholder =$('.nav-input-txt').attr('placeholder');
            var list;
            var index;
            var sto;
            //单击展开搜索文本框
            $(document).on('click','.nav-search-icon',function(){

                    //如果当前页是搜索页
                    if($('.search-box').length){
                        $('.input-focus').focus();
                        return false;
                    }
                    //按钮隐藏
                    $(this).css({'opacity':'0','cursor':'default'});
                    $('.nav-search-wrap').show();
                    $('.nav-list').animate({'margin-top':'-70px'});
                    setTimeout(function(){
                        $('.nav-input-txt').focus(function(){
                                list=$('.tipbox .group-0>ul>li');
                                index=0;
                                var inputLength = $.trim($(this).val()).length;
                                switch(inputLength){
                                    case 0:
                                        //初始化tipbox内容
                                        $('.tipbox .group-0').show();
                                        $('.tipbox .group-1').hide();
                                        $('.tipbox').slideDown(function(){
                                            $(document).on('click',function(e){
                                                var target  = $(e.target);
                                                if(target.closest(".nav-search-wrap").length == 0){
                                                    $('.tipbox').hide();
                                                    $('.tipbox .group-0>ul>li,.tipbox .group-1>ul>li').removeClass('on');
                                                }
                                            })
                                        });
                                        break;
                                    case 1:
                                        break;
                                    default:
                                        keyTip($.trim($(this).val()));

                                }

                            })
                            .blur(function(){
                                try{ clearTimeout(sto); }
                                catch(e) {};
                            })
                            .keyup(function(e){
                                var inputLength = $.trim($(this).val()).length;
                                if(inputLength == 0){
                                    try{ clearTimeout(sto); }
                                    catch(e) {};
                                    $('.tipbox').show();
                                    $('.tipbox .group-1').hide();
                                    $('.tipbox .group-0').show();
                                    list=$('.tipbox .group-0>ul>li');
                                    index=0;
                                }else if(inputLength >= 2 && (e.keyCode >=48 && e.keyCode <= 111) || inputLength >= 2 && e.keyCode == 8 || inputLength >= 2 && e.keyCode == 32){
                                    //进入联想词提示
                                    try{ clearTimeout(sto); }
                                    catch(e) {};
                                    sto =setTimeout(function(){
                                        keyTip($.trim($('.nav-input-txt').val()))
                                    },600)
                                }
                                if(e.keyCode == 38){//上
                                    if(index>=0&&index<=list.length){
                                        index--;
                                        if(index==(-1)){
                                            index=list.length-1;
                                        }
                                        list.eq(index).removeClass('on');
                                        list.eq(index-1).addClass('on');
                                        $('.nav-input-txt').val(list.eq(index-1).find('a').text())
                                    }
                                }else if(e.keyCode == 40){//下
                                    if(index<list.length){
                                        list.eq(index-1).removeClass('on');
                                        list.eq(index).addClass('on');
                                        index++;
                                        if(index==list.length){
                                            index=0;
                                        }
                                        $('.nav-input-txt').val(list.eq(index-1).find('a').text())
                                    }
                                }else if(e.keyCode == 13){
                                    if(inputLength == 0){
                                        location.href = HONORUS.Global.sPage+'?word='+nav_placeholder;
                                    }else if(inputLength == 1){
                                        alert(HONORUS.Global.userLib.error2key);
                                    }else if(inputLength >100){
                                        alert(HONORUS.Global.userLib.errorMore100key);return;
                                    }else{
                                        if($('.tipbox .group-0').css('display') == 'block'){
                                            window.open($('.tipbox .group-0').find('li.on').children().attr('href'));
                                            $('.nav-input-txt').val('');
                                        }else{
                                            location.href = HONORUS.Global.sPage+'?word='+againstAttack($.trim($(this).val()));
                                        }
                                    }
                                }


                            })
                    },500)
                })
                //单击关闭搜索文本框
                .on('click','.nav-search-wrap .close',function(){
                    var time;
                    if($('.tipbox').css("display")=='none'){
                        time=0;
                    }else{
                        time=500;
                        $('.tipbox').slideUp();
                    }
                    setTimeout(function(){
                        $('.nav-input-txt').val('');
                        $('.nav-list').animate({'margin-top':'0'});
                        $('.nav-search-icon').css({'opacity':'1','cursor':'pointer'})
                        setTimeout(function(){
                            $('.nav-search-wrap').hide();
                        },500)
                    },time)
                })

            function keyTip(word){
                $.ajax({
                    url: HONORUS.Global.url + 'marketing/search/suggest',
                    type: 'GET',
                    dataType: 'jsonp',
                    jsonp: 'jsoncallback',
                    data: {word:word , site: HONORUS.Global.site},
                    beforeSend:function(){
                        $('.tipbox .group-0').hide();
                    },
                    success:function(data){
                        if(data.resultCode == 1){
                            $('.tipbox').hide();
                            return;
                        }
                        if(data.resultList.length == 0){
                            index = 100;
                            $('.tipbox').hide();
                            return;
                        }else{
                            var arr = []
                            for(var i in data.resultList){
                                arr.push('<li><a href="javascript:;" onclick="">'+ data.resultList[i] +'</a></li>')
                            }
                            $('.tipbox .group-1 ul').empty().append(arr.join(''));
                            $('.tipbox .group-1').show();
                            $('.tipbox').fadeIn(1,function(){
                                $(document).on('click',function(e){
                                    var target  = $(e.target);
                                    if(target.closest(".nav-search-wrap").length == 0){
                                        $('.tipbox').hide();
                                        $('.tipbox .group-0>ul>li,.tipbox .group-1>ul>li').removeClass('on');
                                    }
                                })
                            });
                            //切换提示框内容
                            index = 0;
                            list.removeClass('on');
                            list=$('.tipbox .group-1>ul>li');
                            $('.tipbox .group-1 li').click(function(){
                                //联想词搜索
                                location.href = HONORUS.Global.sPage + '?word='+$(this).find('a').text();
                            })
                        }

                    },
                    error:function(){}
                })
            }

        },
        mobilesearch:function(){
            var nav_placeholder =$('.nav-input-txt').attr('placeholder');
            var sto;
            $(document).on('click','.mobile-searchicon-close',function(){
                $('.mobile-sinput').val('');
            })
            $('.mobile-sinput').focus(function(){
                    var inputLength = $(this).val().length;
                    switch(inputLength){
                        case 0:
                            //初始化
                            $('.mobile-tipbox').css('right','20px');
                            $('.mobile-tipbox .group-1').hide();
                            $('.mobile-tipbox .group-0').show();
                            break;
                        case 1:
                            break;
                        default:
                            keyTip($.trim($(this).val()));
                            $('.mobile-tipbox .group-0').hide();
                            $('.mobile-tipbox .group-1').show();
                    }
                })
                .blur(function(){
                    try{ clearTimeout(sto); }
                    catch(e) {};
                    $('.mobile-tipbox').blur().css('right','-115%');//退出联想词
                })
                .keyup(function(e){
                    var inputLength = $(this).val().length;
                    if(e.keyCode == 13){
                        if(inputLength == 0){
                            location.href = HONORUS.Global.sPage+'?word='+nav_placeholder;
                        }else if(inputLength == 1){
                            alert(HONORUS.Global.userLib.error2key);
                        }else{
                            location.href = HONORUS.Global.sPage+'?word='+ againstAttack($.trim($(this).val()));
                        }
                    }
                    if(inputLength == 0){
                        try{ clearTimeout(sto); }
                        catch(e) {};
                        $('.mobile-tipbox li:first').html('<div class="mobile-tipbox-return"></div>Quick link');
                        $('.mobile-tipbox .group-0').show();
                        $('.mobile-tipbox .group-1').hide();
                    }else if(inputLength >= 2){
                        //进入联想词提示
                        try{ clearTimeout(sto); }
                        catch(e) {};
                        sto =setTimeout(function(){
                            keyTip($.trim($('.mobile-sinput').val()))
                        },1000)
                    }
                })
                .on('click swiperight','.mobile-tipbox-return',function(){
                    $('.mobile-tipbox').blur().css('right','-115%');//退出联想词
                })


            function keyTip(word){
                $.ajax({
                    url: HONORUS.Global.url + 'marketing/search/suggest',
                    type: 'GET',
                    dataType: 'jsonp',
                    jsonp: 'jsoncallback',
                    data: {word:word , site: HONORUS.Global.site},
                    success:function(data){
                        if(data.resultCode == 1){
                            //alert(HONORUS.Global.userLib.errorSystem);
                            return;
                        }
                        if(data.resultList.length == 0){
                            console.log(data.resultList.length)
                            return;
                        }
                        var arr = []
                        for(var i in data.resultList){
                            arr.push('<li><a href="javascript:;" onclick="">'+ data.resultList[i] +'</a></li>')
                        }
                        $('.mobile-tipbox .group-1 ul').empty().append(arr.join(''));
                        $('.mobile-tipbox li:first').html('<div class="mobile-tipbox-return"></div>Suggested Searches');
                        $('.mobile-tipbox').css('right','20px');//切换联想词
                        $('.mobile-tipbox .group-0').hide();
                        $('.mobile-tipbox .group-1').show();
                        $('.mobile-tipbox .group-1 li').click(function(){
                            //联想词搜索
                            location.href = HONORUS.Global.sPage + '?word='+$(this).find('a').text();
                        })

                    },
                    error:function(){}
                })
            }

        },
        searchResult:function(){
            var placeholder =$('.input-focus').attr('placeholder');
            var index=0;
            var list;
            var sto;
            //主搜索框

            $('.input-focus').focus(function(){
                    $("html, body").animate({ scrollTop: 0 },100);
                    if(HONORUS.Global.checkScreen() == 'xs'){
                        $('body').css('overflow','hidden');
                        $('.fixbg').removeClass('bgwhite');
                        $('.search-tipbox').css({'background':'#fff','box-shadow':'0 1px 4px #999'});
                        $('.fixbg').fadeIn();
                    }
                    var inputLength = $(this).val().length;
                    switch (inputLength){
                        case 0:
                            $('.group-head').text('Quick link');
                            $('.search-tipbox .group-0').show();
                            $('.search-tipbox .group-1').hide();
                            $('.search-tipbox').slideDown(function(){
                                hideSearchTipbox();
                                function hideSearchTipbox() {
                                    $(document).one('click',function(e){
                                        var target  = $(e.target);
                                        if(target.closest(".input-position").length == 0){
                                            setTimeout(function(){
                                                $('.search-tipbox').hide();
                                                $('.fixbg').fadeOut();
                                                $('.input-focus').removeClass('active');
                                            },100)
                                        }else{
                                            hideSearchTipbox();
                                        }
                                    })
                                }
                            });
                            list=$('.search-tipbox .group-0>ul>li');
                            index=0;
                            break;
                        case 1:
                            break;
                        default:
                            keyTip($.trim($(this).val()));
                            $('.search-tipbox').slideDown(function(){
                                hideSearchTipbox();
                                function hideSearchTipbox() {
                                    $(document).one('click',function(e){
                                        var target  = $(e.target);
                                        if(target.closest(".input-position").length == 0){
                                            setTimeout(function(){
                                                $('.search-tipbox').hide();
                                                $('.fixbg').fadeOut();
                                                $('.input-focus').removeClass('active');
                                            },100)
                                        }else{
                                            hideSearchTipbox();
                                        }
                                    })
                                }
                            });
                            list=$('.search-tipbox .group-1>ul>li');
                            index=0;
                    }
                    $(this).addClass('active');
                })
                .blur(function(){
                    try{ clearTimeout(sto); }
                    catch(e) {};
                    if($('.input-focus').val() == placeholder){
                        $('.input-focus').val('');
                    }
                    if(HONORUS.Global.checkScreen() == 'xs'){
                        $('body').css('overflow','inherit');
                        $('.fixbg').removeClass('bgwhite');
                        $('.search-tipbox').css({'background':'#fff','box-shadow':'0 1px 4px #999'});
                        //$('.fixbg').fadeOut();
                    }
                    list.removeClass('on');
                    index=0;
                })
                //主搜索框关键字联想
                .keyup(function(e){
                    if(HONORUS.Global.checkScreen() == 'xs'){
                        $('.fixbg').addClass('bgwhite');
                        $('.search-tipbox').css({'background':'none','box-shadow':'none'});
                    }
                    var inputLength = $.trim($('.input-focus').val()).length;
                    if(inputLength >= 2 && (e.keyCode >=48 && e.keyCode <= 111) || inputLength >= 2 && (e.keyCode >=8 && e.keyCode <= 0) || inputLength >= 2 && e.keyCode == 32 || inputLength >= 2 && e.keyCode == 229 || inputLength >= 2 && e.keyCode == 0){
                        //if(inputLength >= 2 && (e.keyCode <=36 && e.keyCode >= 41)){
                        try{ clearTimeout(sto); }
                        catch(e) {};
                        sto =setTimeout(function(){
                            keyTip($.trim($('.input-focus').val()))
                        },600)
                    }else if(inputLength == 0){
                        $('.group-head').text('Quick link');
                        $('.search-tipbox .group-0').show();
                        $('.search-tipbox .group-1').hide();
                        list=$('.search-tipbox .group-0>ul>li');
                        index=0;
                    }
                    if(e.keyCode == 38){//上
                        if(index>=0&&index<=list.length){
                            index--;
                            if(index==(-1)){
                                index=list.length-1;
                            }
                            list.eq(index).removeClass('on');
                            list.eq(index-1).addClass('on');
                            $('.input-focus').val(list.eq(index-1).find('a').text())
                        }
                    }else if(e.keyCode == 40){//下
                        if(index<list.length){
                            list.eq(index-1).removeClass('on');
                            list.eq(index).addClass('on');
                            index++;
                            if(index==list.length){
                                index=0;
                            }
                            $('.input-focus').val(list.eq(index-1).find('a').text())
                        }
                    }else if(e.keyCode == 13){
                        if(inputLength == 0){
                            location.href = HONORUS.Global.sPage+'?word='+placeholder;
                        }else if(inputLength == 1){
                            alert(HONORUS.Global.userLib.error2key);
                            return;
                        }else if(inputLength >100){
                            alert(HONORUS.Global.userLib.errorMore100key);return;
                        }else{
                            if($('.search-tipbox .group-0').find('li.on').length ==0){
                                location.href = HONORUS.Global.sPage+'?word='+ againstAttack($.trim($(this).val()));
                            }else{
                                window.open($('.search-tipbox .group-0').find('li.on').children().attr('href'));
                                $('.input-focus').val('');
                                $('.input-focus').blur();
                            }
                        }

                    }
                })


            //搜索product、support、community-box类别切换
            $(document).on('click','.big-category li:first+li a',function(){
                    var word = $('.input-focus').val() || 'Honor 8';
                    if(word.length == 0){
                        $('.input-focus').focus();
                        alert(HONORUS.Global.userLib.error1key);
                        return;
                    }else if(word.length == 1){
                        $('.input-focus').focus();
                        alert(HONORUS.Global.userLib.error2key);
                        return;
                    }else{
                        open(HONORUS.Global.supportRelult+'?keywords='+word);
                    }
                })
                .on('click','.search-box .close',function(){
                    $('.input-focus').val('');
                })
                .on('click',function(){
                    //$('.search-tipbox').hide();
                })

            //Filter wap
            $(document).on('click','#product-box .left-nav',function(){
                    setTimeout(function(){
                        if(HONORUS.Global.checkScreen() == 'xs'){
                            $('.left-box').show();
                            $('body').css({'overflow':'hidden','cursor':'pointer'});
                            $(document).on('click',function(e){
                                var target  = $(e.target);
                                if(target.closest("#product-box .left-box").length == 0){
                                    $('.left-box').hide();
                                    $('body').css({'overflow':'inherit','cursor':'auto'});
                                }
                            })
                        }
                    },50)
                })
                //Filter类别选择
                .on('click','#product-box .left-box>ul>li>a',function(){
                    if($(this).parent().hasClass('active')){
                        $(this).parent().removeClass('active');
                    }else{
                        $(this).parent().addClass('active');
                        $(this).parent().parents().siblings().children('li').removeClass('active')
                    }

                })
                //Filter子类
                .on('click','#collapse1>ul>li>a,#collapse2>ul>li>a,#collapse3>ul>li>a',function(){

                    nowPage = 1;
                    var word = $.trim($('.input-focus').val());
                    if(word.length == 0){
                        if(HONORUS.Global.checkScreen() == 'xs'){
                            $('.left-box').hide();
                            $('body').css('overflow','inherit');
                        }
                        var cate = $(this).attr('data-val');
                        keywordsSearch(placeholder,cate,0,pageSize-1);
                        $(this).parent().siblings().removeClass('active');
                        $(this).closest('.left-box').find('.panel-collapse').find('li').removeClass('active')
                        $(this).parents().addClass('active');
                    }else if(word.length == 1){
                        if(HONORUS.Global.checkScreen() == 'xs'){
                            $('.left-box').hide();
                            $('body').css('overflow','inherit');
                        }
                        $('.input-focus').focus();
                        setTimeout(function(){
                            alert(HONORUS.Global.userLib.error2key);
                        },500)
                    }else{
                        if(HONORUS.Global.checkScreen() == 'xs'){
                            $('.left-box').hide();
                            $('body').css('overflow','inherit');
                        }
                        var cate = $(this).attr('data-val');
                        keywordsSearch(word,cate,0,pageSize-1);
                        $(this).parent().siblings().removeClass('active');
                        $(this).closest('.left-box').find('.panel-collapse').find('li').removeClass('active')
                        $(this).parents().addClass('active');
                    }
                })

            var nowPage = 1;
            var nowpagination = 1;
            var count = 0;
            var paginationLenght = 4;
            var pageSize =5;

            //查询
            function keywordsSearch(word,category,fromRank,toRank){
                if(location.href.indexOf('?') > -1){
                    $('.input-focus').val(againstAttack(GetQueryString('word')));
                }
                //如果为空则搜默认关键词
                var word = word || placeholder;
                $.ajax({
                    url:HONORUS.Global.url + 'marketing/search/isearch',
                    type:'GET',
                    dataType:'jsonp',
                    jsonp:'jsoncallback',
                    data: {word:word,site:HONORUS.Global.site,category:category,fromRank:fromRank,toRank:toRank},
                    success:function(data){
                        if(data.resultCode == 1){
                            alert(HONORUS.Global.userLib.errorSystem);return;
                        }
                        var tempArr = [];
                        for(var i in data.resultList){
                            var jsonObj = eval('(' + data.resultList[i] + ')');
                            var newDate = new Date(jsonObj.releaseTime.replace(/-/g,"/"));
                            var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                            tempArr.push('<div class="item">');

                            //如果有图片 且 小类为产品
                            if(jsonObj.img && jsonObj.img !='null' && jsonObj.type =='page'){
                                tempArr.push('<img class="item-img" src="'+ jsonObj.img +'" alt="">');
                            }
                            //标题
                            tempArr.push('<h2><a href="'+ jsonObj.url +'" target="_blank">'+ jsonObj.title +'</a></h2>');
                            //价格
                            if(newDate.getDate() <=9){
                                add0 = '0'+newDate.getDate();
                            }else{
                                add0 = newDate.getDate();
                            }
                            if(jsonObj.vmallPrice && jsonObj.vmallPrice !='null'){
                                tempArr.push('<div><span class="money">'+jsonObj.vmallPrice+'</span>' + month[newDate.getMonth()] + ' ' + add0 + ',' + newDate.getFullYear() + '</div>');
                            }else{
                                tempArr.push('<div>' + month[newDate.getMonth()] + ' ' + add0 + ',' + newDate.getFullYear() + '</div>');
                            }
                            //描述
                            if(jsonObj.description !='null'){
                                //如果wap下没图片，则显示3行
                                /*if(HONORUS.Global.checkScreen() =='xs' && !jsonObj.img){
                                 tempArr.push('<div class="describe" style="-webkit-line-clamp: 3;">'+ jsonObj.description +'</div>');
                                 }else{
                                 tempArr.push('<div class="describe">'+ jsonObj.description +'</div>');
                                 }*/
                                if(HONORUS.Global.checkScreen() =='xs'){
                                    if(jsonObj.img == '' || jsonObj.img == 'null'){
                                        //wap没图片就显示3行
                                        tempArr.push('<div class="describe" style="-webkit-line-clamp: 3;">'+ jsonObj.description +'</div>');
                                    }else{
                                        //有图片就1行
                                        tempArr.push('<div class="describe">'+ jsonObj.description +'</div>');
                                    }
                                }else{
                                    if(jsonObj.img == '' || jsonObj.img == 'null'){
                                        //pc没图片
                                        tempArr.push('<div class="describe">'+ jsonObj.description +'</div>');
                                    }else{
                                        //有图片高度调整
                                        tempArr.push('<div class="describe" style="min-height: 73px;">'+ jsonObj.description +'</div>');
                                    }
                                }

                            }else{
                                tempArr.push('<div class="describe">'+jsonObj.title+'.</div>');
                            }
                            tempArr.push('</div>');
                        }
                        if(tempArr.join('') == ''){
                            $('#product-box .items').empty().append('<br><br><br>')
                        }else{
                            $('#product-box .items').empty().append(tempArr.join(''));
                        }
                        $('.right-side .tip-txt span,.down-side .tip-txt span').text(data.count);
                        count = Math.ceil(data.count / pageSize);

                        if(count >0){
                            var sb = new StringBuilder();
                            sb.append('<li><a href="javascript:;" onClick="nextOrPrePage(\'pre\')">&lt;</a></li>');
                            var nowpaginationpage = Math.ceil(nowPage / paginationLenght)
                            var end = nowpaginationpage * paginationLenght;
                            var start = end - paginationLenght + 1;
                            nowpagination = start;
                            if (start > 1)
                            {
                                sb.append('<li><a href="javascript:;" onClick="pagination()">...</a></li>');
                            }
                            if (end > count)
                            {
                                end = count;
                            }
                            for (var i = start;i <= end; i++)
                            {
                                if (i == nowPage)
                                {
                                    sb.append('<li><a class="active" href="javascript:;" onClick="nextOrPrePage(\'\','+i+')">'+i+'</a></li>');
                                }else
                                {
                                    sb.append('<li><a href="javascript:;" onClick="nextOrPrePage(\'\','+i+')">'+i+'</a></li>');
                                }
                            }

                            if (end < count)
                            {
                                sb.append('<li><a href="javascript:;" onClick="pagination(\'next\')">...</a></li>');
                            }
                            sb.append('<li><a href="javascript:;" onClick="nextOrPrePage(\'next\')">&gt;</a></li>');
                            $('.paging').empty().append(sb.toString())

                        }else(
                            $('.paging').empty()
                        )
                    },
                    error:function(data){
                        console.log(data)
                    }
                })

                nextOrPrePage = function(type,index){
                    if (type == "next")
                    {
                        nowPage++;
                        if (nowPage > count)
                        {
                            nowPage = count;
                        }
                    }else if (type == "pre"){
                        nowPage--;
                        if (nowPage < 1)
                        {
                            nowPage = 1;
                        }
                    }else{
                        nowPage = index;
                    }

                    var fromRank = (nowPage - 1) * pageSize/* +1*/;
                    var toRank = fromRank + pageSize -1;
                    keywordsSearch(word,category,fromRank,toRank);
                    $("html, body").animate({ scrollTop: $('.right-side').offset().top }, 0);
                }

                pagination = function(type){
                    if (type == "next")
                    {
                        nowpagination = nowpagination + paginationLenght;
                        nowPage = nowpagination;

                    }else
                    {
                        nowpagination = nowpagination - paginationLenght;
                        nowPage = nowpagination;
                    }
                    nextOrPrePage('', nowPage);
                }
            }
            //提示框
            function keyTip(word){
                $.ajax({
                    url: HONORUS.Global.url + 'marketing/search/suggest',
                    type: 'GET',
                    dataType: 'jsonp',
                    jsonp: 'jsoncallback',
                    data: {word:word , site: HONORUS.Global.site},
                    beforeSend:function(){
                        $('.search-tipbox .group-0').hide();
                    },
                    success:function(data){
                        if(data.resultCode == 1){
                            $('.search-tipbox').hide();
                            //alert(HONORUS.Global.userLib.errorSystem);
                            return;
                        }
                        if(data.resultList.length == 0){
                            $('.search-tipbox').hide();
                            return false;
                        }
                        var arr = []
                        for(var i in data.resultList){
                            arr.push('<li><a href="javascript:;" onclick="">'+ data.resultList[i] +'</a></li>')
                        }
                        $('.search-tipbox .group-1 ul').empty().append(arr.join(''));
                        $('.search-tipbox').show();
                        $('.group-head').text('Suggested Searches');
                        $('.search-tipbox .group-1').show();
                        //切换提示框内容
                        list.removeClass('on');
                        list=$('.search-tipbox .group-1>ul>li');
                        $('.group-1 li').click(function(e){
                            //联想词搜索
                            var word = $(this).find('a').text();
                            if(word.length == 1){
                                alert(HONORUS.Global.userLib.error2key);
                            }else if(word.length >100){
                                alert(HONORUS.Global.userLib.errorMore100key);return;
                            }else{
                                location.href = HONORUS.Global.sPage+'?word='+word;
                            }
                        })

                    },
                    error:function(){}
                })
            }

            //页面打开
            var word = againstAttack($.trim(GetQueryString('word'))),category = '';
            if(word !='' && word != null){
                $('.input-focus').val(word);
                keywordsSearch(word,category,0,pageSize-1)
            }

        },
        emaiSubscribe:function(){
            //邮件订阅
            $('.honor8_close').click(function () {
                $('.context-show').removeClass('on');
                $('.honor8-tease-grey-bg').removeClass('on');
                document.getElementById("email").value='';
            });
            $('body').click(function(){
                $('.context-show').removeClass('on');
                $('.honor8-tease-grey-bg').removeClass('on');
            });
            $('.email_submit').click(function () {
                $('label.error').hide();
                var Honor8email = document.getElementById("email").value;
                var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
                ismail = reg.test(Honor8email);
                if (!ismail) {
                    $('label.error').show();
                } else {
                    $.ajax({
                        url: '//hihonor.us8.list-manage.com/subscribe/post',
                        type: 'post',
                        dataType: 'jsonp',
                        jsonp: 'jsoncallback',
                        jsonpCallback: 'testFun',
                        data: {u: 'fc6493eca45094a3cad5fd64f', id: '5f3f6237e9', EMAIL: Honor8email},
                        'error': function (e) {
                            $('.honor8-tease-grey-bg').fadeIn().addClass('on');
                            $('.context-show').addClass('on')
                        },
                        'success': function (data) {
                            $('.honor8-tease-grey-bg').fadeIn().addClass('on');
                            $('.context-show').addClass('on')
                        }
                    });
                }
            })

        }
    }

})(jQuery);

$(document).ready(function($){
    HONORUS.Global.init();



});

$(window).resize(function(){
    HONORUS.Global.bannerwidth();
    //HONORUS.Global.categoryFilter();
})

//分页
function StringBuilder()
{
    this.data=new Array("");
}
StringBuilder.prototype.append=function()
{
    this.data.push(arguments[0]);
    return this;
}
StringBuilder.prototype.toString=function()
{
    return this.data.join("");
}

//获取url参数
function GetQueryString(name)
{
    //中文乱码
    /*var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;*/
    var lot = location.search;
    var reg = new RegExp(".*" + name + "\\s*=([^=&#]*)(?=&|#|).*","g");
    return decodeURIComponent(lot.replace(reg, "$1"));
}
//防注入攻击
function againstAttack(inputStr){
    var inputStr = inputStr.replace(/\/|\\|\<|\>|\'/g, " ");
    return inputStr;
}
