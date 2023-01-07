$(document).ready(function(){
    //상단검색
    $(".search div").slideUp(0);
    $(".search").bind("mouseenter",function(){
        $(".search div").stop().slideDown("fast","easeOutBounce");
    });        
        $(".search").bind("mouseleave",function(){
            if($("#search").is(":focus")==true){
        $(".search div").show();
    }else{
        $(".search div").stop().slideUp(200,"easeOutBounce");
    }
    }).focusout(function(){
    $(".search div").stop().slideUp(200,"easeOutBounce");
        $("search").val("");
    });
    
    
    
    //메뉴
    $("#main_menu").before("<p class='bg'></p>")
    $(".bg,.sub").hide();
    $("#main_menu>ul").mouseenter(function(){
    $(".bg,.sub").stop().slideDown("fast");
    }).mouseleave(function(){
    $(".bg,.sub").stop().slideUp();
    });
    
    $(".bg").mouseover(function(){
    $(this).stop().show();
    $(".sub").stop().show();
    }).mouseout(function(){
    $(this).stop().slideUp();
    $(".sub").stop().slideUp();
    });
    
    $(".sub").mouseover(function(){
    $(this).css("background-color","rgba(139, 106, 97, 0.8)");
    }).mouseout(function(){
    $(this).css("background-color","");
    });
    
    
    //new_slide
    var li_n=$(".new_slide li").width();
    var n = li_n * $(".new_slide li").size()+"px";
    $(".new_slide").css("width",n);
    $(".new_slide li:last").prependTo(".new_slide");
    $(".new_slide").css("margin-left",-li_n+"px");
    
    $(".btn2_1").click(function(){
        $(".new_slide:not(:animated)")
        .animate({marginLeft:parseInt($(".new_slide").css("margin-left"))-li_n+"px"},"fast","swing",function(){
            $(".new_slide li:first").appendTo(".new_slide");
            $(".new_slide").css("margin-left",-li_n+"px");
        });
    });
    
    $(".btn2_2").click(function(){
        $(".new_slide:not(:animated)")
        .animate({marginLeft:parseInt($(".new_slide").css("margin-left"))+li_n+"px"},"fast","swing",function(){
            $(".new_slide li:last").prependTo(".new_slide");
            $(".new_slide").css("margin-left",-li_n+"px");
        });
    });
    
    //best_slide
    var li_b=$(".best_slide li").width();
    var b = li_b * $(".best_slide li").size()+"px";
    $(".best_slide").css("width",b);
    $(".best_slide li:last").prependTo(".best_slide");
    $(".best_slide").css("margin-left",-li_b+"px");
    
    $(".btn3_1").click(function(){
        $(".best_slide:not(:animated)")
        .animate({marginLeft:parseInt($(".best_slide").css("margin-left"))-li_b+"px"},"fast","swing",function(){
            $(".best_slide li:first").appendTo(".best_slide");
            $(".best_slide").css("margin-left",-li_b+"px");
        });
    });
    
    $(".btn3_2").click(function(){ // >
        $(".best_slide:not(:animated)")
        .animate({marginLeft:parseInt($(".best_slide").css("margin-left"))+li_b+"px"},"fast","swing",function(){
            $(".best_slide li:last").prependTo(".best_slide");
            $(".best_slide").css("margin-left",-li_b+"px");
        });
    });
    
    //video
    var li_w=$(".video li").width();
    var w = li_w * $(".video li").size()+"px";
    $(".video").css("width",w);
    $(".video li:last").prependTo(".video");
    $(".video").css("margin-left",-li_w+"px");
    
    $(".btn4_1").click(function(){ // <
        $(".video:not(:animated)")
        .animate({marginLeft:parseInt($(".video").css("margin-left"))-li_w+"px"},"fast","swing",function(){
            $(".video li:first").appendTo(".video");
            $(".video").css("margin-left",-li_w+"px");
        });
    });
    
    $(".btn4_2").click(function(){ // >
        $(".video:not(:animated)")
        .animate({marginLeft:parseInt($(".video").css("margin-left"))+li_w+"px"},"fast","swing",function(){
            $(".video li:last").prependTo(".video");
            $(".video").css("margin-left",-li_w+"px");
        });
    });
    
    //하트 및 장바구니
    $(".heart1 img").toggle(function(){
        $(this).attr("src","images/i1/1-1.png");
    },function(){
        $(this).attr("src","images/i1/1.png");
    });

    $(".basket1 img").toggle(function(){
        $(this).attr("src","images/i1/2-1.png");
    },function(){
        $(this).attr("src","images/i1/2.png");
    });

    //캐릭터 선택
    $('#icon_frodo').click(function(){
        $('#slide1_ryan').css("display","none");
        $('#slide1_choon').css("display","none");
        $('#slide1_muzi').css("display","none");
        $('#slide1_con').css("display","none");
        $('#slide1_apeach').css("display","none");
        $('#slide1_tube').css("display","none");
        $('#slide1_jayg').css("display","none");
        $('#slide1_neo').css("display","none");
        $('#slide1_frodo').css("display","block");
    });
    $('#icon_ryan').click(function(){
        $('#slide1_frodo').css("display","none");
        $('#slide1_choon').css("display","none");
        $('#slide1_muzi').css("display","none");
        $('#slide1_con').css("display","none");
        $('#slide1_apeach').css("display","none");
        $('#slide1_tube').css("display","none");
        $('#slide1_jayg').css("display","none");
        $('#slide1_neo').css("display","none");
        $('#slide1_ryan').css("display","block");
    });
    $('#icon_choon').click(function(){
        $('#slide1_frodo').css("display","none");
        $('#slide1_ryan').css("display","none");
        $('#slide1_muzi').css("display","none");
        $('#slide1_con').css("display","none");
        $('#slide1_apeach').css("display","none");
        $('#slide1_tube').css("display","none");
        $('#slide1_jayg').css("display","none");
        $('#slide1_neo').css("display","none");
        $('#slide1_choon').css("display","block");
    });
    $('#icon_muzi').click(function(){
        $('#slide1_frodo').css("display","none");
        $('#slide1_ryan').css("display","none");
        $('#slide1_choon').css("display","none");
        $('#slide1_con').css("display","none");
        $('#slide1_apeach').css("display","none");
        $('#slide1_tube').css("display","none");
        $('#slide1_jayg').css("display","none");
        $('#slide1_neo').css("display","none");
        $('#slide1_muzi').css("display","block");
    });
    $('#icon_con').click(function(){
        $('#slide1_frodo').css("display","none");
        $('#slide1_ryan').css("display","none");
        $('#slide1_choon').css("display","none");
        $('#slide1_muzi').css("display","none");
        $('#slide1_apeach').css("display","none");
        $('#slide1_tube').css("display","none");
        $('#slide1_jayg').css("display","none");
        $('#slide1_neo').css("display","none");
        $('#slide1_con').css("display","block");
    });
    $('#icon_apeach').click(function(){
        $('#slide1_frodo').css("display","none");
        $('#slide1_ryan').css("display","none");
        $('#slide1_choon').css("display","none");
        $('#slide1_muzi').css("display","none");
        $('#slide1_con').css("display","none");
        $('#slide1_tube').css("display","none");
        $('#slide1_jayg').css("display","none");
        $('#slide1_neo').css("display","none");
        $('#slide1_apeach').css("display","block");
    });
    $('#icon_tube').click(function(){
        $('#slide1_frodo').css("display","none");
        $('#slide1_ryan').css("display","none");
        $('#slide1_choon').css("display","none");
        $('#slide1_muzi').css("display","none");
        $('#slide1_con').css("display","none");
        $('#slide1_apeach').css("display","none");
        $('#slide1_jayg').css("display","none");
        $('#slide1_neo').css("display","none");
        $('#slide1_tube').css("display","block");
    });
    $('#icon_jayg').click(function(){
        $('#slide1_frodo').css("display","none");
        $('#slide1_ryan').css("display","none");
        $('#slide1_choon').css("display","none");
        $('#slide1_muzi').css("display","none");
        $('#slide1_con').css("display","none");
        $('#slide1_apeach').css("display","none");
        $('#slide1_tube').css("display","none");
        $('#slide1_neo').css("display","none");
        $('#slide1_jayg').css("display","block");
    });
    $('#icon_neo').click(function(){
        $('#slide1_frodo').css("display","none");
        $('#slide1_ryan').css("display","none");
        $('#slide1_choon').css("display","none");
        $('#slide1_muzi').css("display","none");
        $('#slide1_con').css("display","none");
        $('#slide1_apeach').css("display","none");
        $('#slide1_tube').css("display","none");
        $('#slide1_jayg').css("display","none");
        $('#slide1_neo').css("display","block");
    });

    $(document).ready(function(){
        $(".login").click(function(){
            var href1 = $(this).attr("href");
            window.open(href1, "그래픽","width=500px,height=700 left=100px top=100px");
            return false;
        })
    });
});