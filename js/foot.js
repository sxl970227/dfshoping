//底部轮播图

var tim5 = null;
var s4 = 0;
tim5 = setInterval(dblbt,4000);

function dblbt(){
	s4++;
	if(s4 > $('.foot-con-left-lbt-t').length - 1){
		s4 = 0;
	}
	$('.foot-con-left-lbt .dian').eq(s4).addClass('active').siblings().removeClass('active');
	$('.foot-con-left-lbt-t').eq(s4).fadeIn().siblings('div').fadeOut();
}

$('.foot-con-left-lbt').hover(function(){
	clearInterval(tim5);
	$('.foot-con-left-lbt .btn1').stop(true,true).fadeIn();
},function(){
	tim5 = setInterval(dblbt,4000);
	$('.foot-con-left-lbt .btn1').stop(true,true).fadeOut();
	
})
$('.foot-con-left-lbt .btnr').click(function(){
	dblbt();
})

$('.foot-con-left-lbt .btnl').click(function(){
	s4--;
	if(s4 < 0){
		s4 = $('.foot-con-left-lbt-t').length - 1;
	}
	$('.foot-con-left-lbt .dian').eq(s4).addClass('active').siblings().removeClass('active');
	$('.foot-con-left-lbt-t').eq(s4).fadeIn().siblings('div').fadeOut();
})

$('.foot-con-left-lbt .dian').click(function(){
	$('.foot-con-left-lbt .foot-con-left-lbt-t').eq($(this).index()).fadeIn().siblings('div').fadeOut();
	$(this).addClass('active').siblings().removeClass('active');
	s4 = $(this).index();
})


//底部轮播图下面的动画小图片
$('.foot-con-left-bottom-box-t').hover(function(){
	$(this).stop(true,true).animate({
		top : -10,
	},200)
},function(){
	$(this).stop(true,true).animate({
		top : 0,
	},200)
})

//底部的选项卡
$('.foot-con-right-title li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.foot-con-right-con').eq($(this).index()).show().siblings('.foot-con-right-con').hide();
})

//向上滚动
var tm = null
var ii = 0;
tm = setInterval(function(){
	
	if(ii == -145){
		ii = 0;
		$('.gd-box a').animate	({
			top : 0,
		},0)
	}
	ii -= 29;
	$('.gd-box a').animate	({
		top : ii,
	},200)
},3000)
