var i = 0;
var timer = null;
var timer11 = null;
var n = 0;
//二级联动里的
timer = setInterval("play($('.huise-con-con-right-bottom-box'),'div')",4000);

$('.huise-con-con-right-bottom .btnl').click(function(){
	clearInterval(timer);
	leftbtn($('.huise-con-con-right-bottom-box'),'div');
})

$('.huise-con-con-right-bottom .btnt').click(function(){
	clearInterval(timer);
	play($('.huise-con-con-right-bottom-box'),'div');
})
hoverr($('.huise-con-con-right-bottom'),$('.huise-con-con-right-bottom .btn'));

//主播推荐那
timer11 = setInterval("play1($('.zb-zbtj-left-ul li'))",4000);
$('.zb-zbtj-left-box .btnl').click(function(){
	
//	leftbtn($('.zb-zbtj-left-ul li'));
	n--;
	if(n < 0){
		n = $('.zb-zbtj-left-ul li').length-1;
	}
	$('.zb-zbtj-left-ul li').eq(n).fadeIn().siblings().fadeOut();
})

$('.zb-zbtj-left-box .btnr').click(function(){
	play1($('.zb-zbtj-left-ul li'));
})
$('.zb-zbtj-left-box').hover(function(){
	$('.zb-zbtj-left-box .btn').stop(true,true).fadeIn();
	clearInterval(timer11);
},function(){
	$('.zb-zbtj-left-box .btn').stop(true,true).fadeOut();
	timer11 = setInterval("play1($('.zb-zbtj-left-ul li'))",4000);
})
//二级联动里的
function play1(obj){
	n++;
	if(n == obj.length){
		n = 0;
	}
	
	obj.eq(n).fadeIn().siblings().fadeOut();
}

function play(obj,iTarget){
	i++;
	if(i > obj.length - 1){
		i = 0;
	}
	obj.eq(i).fadeIn().siblings(iTarget).fadeOut();
}

function leftbtn(obj,iTarget){
	i--;
	if(i < 0){
		i = obj.length - 1;
	}
	obj.eq(i).fadeIn().siblings(iTarget).fadeOut();
}

function hoverr(obj,btn){
	obj.hover(function(){
		btn.stop(true,true).fadeIn();
	},function(){
		btn.stop(true,true).fadeOut();
		timer = setInterval("play($('.huise-con-con-right-bottom-box'),'div')",4000);
	})
}
//全球购
var timer2 = null;
var m = 0;
timer2 = setInterval(qqgplay,5000);
function qqgplay(){
	m++;
	if(m == $('.qqg-left-ul li').length){
		m = 0;
		
	}
	$('.qqg-left-ul li').eq(m).fadeIn().siblings().fadeOut();
	$('.qqg .yuan').eq(m).addClass('active').siblings().removeClass('active');
}
$('.qqg .btnr').click(function(){
	qqgplay();
	
})
$('.qqg .btnl').click(function(){
	m--;
	if(m < 0){
		m = $('.qqg-left-ul li').length - 1;
		
	}
	$('.qqg .yuan').eq(m).addClass('active').siblings().removeClass('active');
	$('.qqg-left-ul li').eq(m).fadeIn().siblings().fadeOut();
})
$('.qqg').hover(function(){
	$('.qqg .btn').stop(true,true).fadeIn();
	clearInterval(timer2);
},function(){
	$('.qqg .btn').stop(true,true).fadeOut();
	
	timer2 = setInterval(qqgplay,5000)
})

$('.qqg .yuan').click(function(){
	$('.qqg-left-ul li').eq($(this).index()).fadeIn().siblings('li').fadeOut();
	$(this).addClass('active').siblings().removeClass('active');
	m = $(this).index();
})

//全球购右
var timer3 = null,
	l = 0;
timer3 = setInterval(qqgyplay,3000);
function qqgyplay(){
	l++;
	if(l > $('.qqg-right .qqg-right-box').length - 1){
		l = 0;
	}
	$('.qqg-right .qqg-right-box').eq(l).fadeIn().siblings('div').fadeOut();
}

$('.qqg-right').hover(function(){
	clearInterval(timer3);
	$('.qqg-right .btn1').stop(true,true).fadeIn();
},function(){
	$('.qqg-right .btn1').stop(true,true).fadeOut();
	timer3 = setInterval(qqgyplay,3000);
})

$('.qqg-right .btnr').click(function(){
	qqgyplay();
})

$('.qqg-right .btnl').click(function(){
	l--;
	if(l < 0){
		l = $('.qqg-right .qqg-right-box').length - 1;
	}
	$('.qqg-right .qqg-right-box').eq(l).fadeIn().siblings('div').fadeOut();
})

//全球购下面的
var timer4 = null,
	k = 0;
timer4 = setInterval(qqgyplay1,3000);
function qqgyplay1(){
	k++;
	if(k > $('.qqg-right1 .qqg-right-box').length - 1){
		k = 0;
	}
	$('.qqg-right1 .qqg-right-box').eq(k).fadeIn().siblings('div').fadeOut();
}

$('.qqg-right1').hover(function(){
	clearInterval(timer4);
	$('.qqg-right1 .btn1').stop(true,true).fadeIn();
},function(){
	$('.qqg-right1 .btn1').stop(true,true).fadeOut();
	timer4 = setInterval(qqgyplay1,3000);
})

$('.qqg-right1 .btnr').click(function(){
	qqgyplay1();
})

$('.qqg-right1 .btnl').click(function(){
	k--;
	if(k < 0){
		k = $('.qqg-right1 .qqg-right-box').length - 1;
	}
	$('.qqg-right1 .qqg-right-box').eq(k).fadeIn().siblings('div').fadeOut();
})