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

        //전체선택/전체해제
    $("#chk1").change(function(){//변경
        var chk1 = $("#chk1").prop("checked");
        if(chk1 == true){
            $("#chk2, #chk3,#chk4,#chk5,#chk6,#chk7").prop("checked",true);
            $(".type01").addClass("checked");
        }else{
            $("#chk2, #chk3,#chk4,#chk5,#chk6,#chk7").prop("checked",false);
            $(".type01").removeClass("checked"); 
        }
    });
    //개인정보처리방침(선택)/개인정보 제3자제공 동의(선택)
    $("#chk2, #chk3").change(function(){
        var chk6 = $("#chk6").prop("checked");
        var chk7 = $("#chk7").prop("checked");
        if(chk6 == true){//개인정보처리방침(선택)
            $(".type07").addClass("checked");
        }else{
            $(".type07").removeClass("checked");
        }
        if(chk7 == true){//개인정보 제3자제공(선택)
            $(".type08").addClass("checked");
        }else{
            $(".type08").removeClass("checked");
        }
        if(chk6 == true && chk7 == true){
            $(".type02").addClass("checked");
        }else{
            $(".type02").removeClass("checked");
        }
    });

    $(document).ready(function(){
        $(".login").click(function(){
            var href1 = $(this).attr("href");
            window.open(href1, "그래픽","width=500px,height=700 left=100px top=100px");
            return false;
        })
    });

    $(document).ready(function(){
        $(".popup").click(function(){
            var href1 = $(this).attr("href");
            window.open(href1, "그래픽","width=500px,height=700 left=100px top=100px");
            return false;
        })
    });
});