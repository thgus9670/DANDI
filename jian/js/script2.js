$(function(){
    //submenu 숨긴다.
    $('.submenu_wrap').hide();
    //마우스를 li에 올리면, submenu가 아래로 미끌어지듯 내려온다.
    $('.gnb li').mouseenter(function(){
        $(this).children('.submenu_wrap').stop().slideDown();
    });
    //마우스가 li(submenu포함)를 벗어나면, submenu가 위로 미끌어지듯 올라간다.
    $('.gnb li').mouseleave(function(){
        $(this).children('.submenu_wrap').stop().slideUp();
    });
});

/*검색창*/
$(function () {
	$("#popup_find").hide();
	$(".util_find a").click(function () {
		$("#popup_find").fadeIn(0);
	});
	$(".close").click(function () {
		$("#popup_find").fadeOut(0);
	});
});

//tab
$(function(){
    //.board li a를 누르면
    $('.board li a').click(function(){
        //눌러진 a의 부모요소에 'on'클래스가 추가되고, 부모의 형제요소들은 .on이 지워진다. 
        $(this).parent().addClass('on').siblings().removeClass('on');
    });

    
});

