var time1 = null;
	h = 0;
time1 = setInterval(ctlbt,4000);

function ctlbt(){
	h++;
	if(h > $('.ctlbt-ul').length - 1){
		h = 0;
	}
	$('.ctlbt-ul').eq(h).fadeIn().siblings('div').fadeOut();
}
$('.ctlbt').hover(function(){
	$('.ctlbt .btn1').stop(true,true).fadeIn();
	clearInterval(time1);
},function(){
	$('.ctlbt .btn1').stop(true,true).fadeOut();
	time1 = setInterval(ctlbt,4000);
})

$('.ctlbt .btnr').click(function(){
	ctlbt();
})

$('.ctlbt .btnl').click(function(){
	h--;
	if(h < 0){
		h = $('.ctlbt-ul').length - 1;
	}
	$('.ctlbt-ul').eq(h).fadeIn().siblings('div').fadeOut();
})




//楼层轮播图
var r = 0;
var tim = null;
tim = setInterval("lclbt($('.lc-con-box-left-top .lc-con-box-left-top-box'),$('.lc-con-box-left-top .dian'))",4000);
$('.lc-con-box-left-top').hover(function(){
	clearInterval(tim);
	$('.lc-con-box-left-top .btn1').stop(true,true).fadeIn();
},function(){
	tim = setInterval("lclbt($('.lc-con-box-left-top .lc-con-box-left-top-box'),$('.lc-con-box-left-top .dian'))",4000);
	$('.lc-con-box-left-top .btn1').stop(true,true).fadeOut();
})
$('.lc-con-box-left-top .btnr').click(function(){
	lclbt($('.lc-con-box-left-top .lc-con-box-left-top-box'),$('.lc-con-box-left-top .dian'));
})
$('.lc-con-box-left-top .btnl').click(function(){
	lclbtl($('.lc-con-box-left-top .lc-con-box-left-top-box'),$('.lc-con-box-left-top .dian'));
})

$('.lc-con-box-left-top .dian').click(function(){
	$('.lc-con-box-left-top .lc-con-box-left-top-box').eq($(this).index()).fadeIn().siblings('div').fadeOut();
	$(this).addClass('active').siblings().removeClass('active');
	r = $(this).index();
})

function lclbt(obj,yuan){
	r++;
	if(r > obj.length - 1){
		r = 0;
	}
	yuan.eq(r).addClass('active').siblings().removeClass('active');
	obj.eq(r).fadeIn().siblings('div').fadeOut();
}
function lclbtl(obj,yuan){
	r--;
	if(r < 0){
		r = obj.length - 1;
	}
	yuan.eq(r).addClass('active').siblings().removeClass('active');
	obj.eq(r).fadeIn().siblings('div').fadeOut();
}


//食品饮料那小动画
$('.lc-con-box-left-bootom-box-con-t').hover(function(){
	$(this).stop(true,true).animate({
		top : -10,
	},200)
},function(){
	$(this).stop(true,true).animate({
		top : 0,
	},200)
})

//二楼层轮播图
var tim1 = null;
var s = 0;
tim1 = setInterval(elbt,4000);

function elbt(){
	s++;
	if(s > $('.lc-con-box-left-top1 .lc-con-box-left-top-box').length - 1){
		s = 0;
	}
	$('.lc-con-box-left-top1 .dian').eq(s).addClass('active').siblings().removeClass('active');
	$('.lc-con-box-left-top1 .lc-con-box-left-top-box').eq(s).fadeIn().siblings('div').fadeOut();
}
$('.lc-con-box-left-top1 .btnr').click(function(){
	elbt();
})
$('.lc-con-box-left-top1 .btnl').click(function(){
	s--;
	if(s < 0){
		s = $('.lc-con-box-left-top1 .lc-con-box-left-top-box').length - 1;
	}
	$('.lc-con-box-left-top1 .dian').eq(s).addClass('active').siblings().removeClass('active');
	$('.lc-con-box-left-top1 .lc-con-box-left-top-box').eq(s).fadeIn().siblings('div').fadeOut();
})

$('.lc-con-box-left-top1').hover(function(){
	clearInterval(tim1);
	$('.lc-con-box-left-top1 .btn1').stop(true,true).fadeIn();
},function(){
	tim1 = setInterval(elbt,4000);
	$('.lc-con-box-left-top1 .btn1').stop(true,true).fadeOut();
})

$('.lc-con-box-left-top1 .dian').click(function(){
	$('.lc-con-box-left-top1 .lc-con-box-left-top-box').eq($(this).index()).fadeIn().siblings('div').fadeOut();
	$(this).addClass('active').siblings().removeClass('active');
	s = $(this).index();
})

//家居厨房那小动画
$('.lc-con-box-left-bottom-box1-center-t').hover(function(){
	$(this).stop(true,true).animate({
		top : -10,
	},200)
},function(){
	$(this).stop(true,true).animate({
		top : 0,
	},200)
})

//三楼层轮播图
var tim2 = null;
var s1 = 0;
tim2 = setInterval(slbt,4000);

function slbt(){
	s1++;
	if(s1 > $('.lc-con-box-left-top2 .lc-con-box-left-top-box').length - 1){
		s1 = 0;
	}
	$('.lc-con-box-left-top2 .dian').eq(s1).addClass('active').siblings().removeClass('active');
	$('.lc-con-box-left-top2 .lc-con-box-left-top-box').eq(s1).fadeIn().siblings('div').fadeOut();
}
$('.lc-con-box-left-top2 .btnr').click(function(){
	slbt();
})
$('.lc-con-box-left-top2 .btnl').click(function(){
	s1--;
	if(s1 < 0){
		s1 = $('.lc-con-box-left-top2 .lc-con-box-left-top-box').length - 1;
	}
	$('.lc-con-box-left-top2 .dian').eq(s1).addClass('active').siblings().removeClass('active');
	$('.lc-con-box-left-top2 .lc-con-box-left-top-box').eq(s1).fadeIn().siblings('div').fadeOut();
})

$('.lc-con-box-left-top2').hover(function(){
	clearInterval(tim2);
	$('.lc-con-box-left-top2 .btn1').stop(true,true).fadeIn();
},function(){
	tim2 = setInterval(slbt,4000);
	$('.lc-con-box-left-top2 .btn1').stop(true,true).fadeOut();
})

$('.lc-con-box-left-top2 .dian').click(function(){
	$('.lc-con-box-left-top2 .lc-con-box-left-top-box').eq($(this).index()).fadeIn().siblings('div').fadeOut();
	$(this).addClass('active').siblings().removeClass('active');
	s1 = $(this).index();
})

//四楼层轮播图

var tim3 = null;
var s2 = 0;
tim3 = setInterval(silbt,4000);

function silbt(){
	s2++;
	if(s2 > $('.lc-con-box-left-top3 .lc-con-box-left-top-box').length - 1){
		s2 = 0;
	}
	$('.lc-con-box-left-top3 .dian').eq(s2).addClass('active').siblings().removeClass('active');
	$('.lc-con-box-left-top3 .lc-con-box-left-top-box').eq(s2).fadeIn().siblings('div').fadeOut();
}
$('.lc-con-box-left-top3 .btnr').click(function(){
	silbt();
})
$('.lc-con-box-left-top3 .btnl').click(function(){
	s2--;
	if(s2 < 0){
		s2 = $('.lc-con-box-left-top3 .lc-con-box-left-top-box').length - 1;
	}
	$('.lc-con-box-left-top3 .dian').eq(s2).addClass('active').siblings().removeClass('active');
	$('.lc-con-box-left-top3 .lc-con-box-left-top-box').eq(s2).fadeIn().siblings('div').fadeOut();
})

$('.lc-con-box-left-top3').hover(function(){
	clearInterval(tim3);
	$('.lc-con-box-left-top3 .btn1').stop(true,true).fadeIn();
},function(){
	tim3 = setInterval(silbt,4000);
	$('.lc-con-box-left-top3 .btn1').stop(true,true).fadeOut();
})

$('.lc-con-box-left-top3 .dian').click(function(){
	$('.lc-con-box-left-top3 .lc-con-box-left-top-box').eq($(this).index()).fadeIn().siblings('div').fadeOut();
	$(this).addClass('active').siblings().removeClass('active');
	s2 = $(this).index();
})

/*
 
 * 控制楼层
 * 
 * */
var mark = 1;
var div = $('.lc-con-box');
$(window).scroll(function(){
	if(mark == 1){
		
		var scr = $(window).scrollTop();
		$.each(div, function() {
			var current = div.eq($(this).index()).offset().top + $(this).height() / 2;
			if(scr < current){
				$('.lckzq-btn li').eq($(this).index()).addClass('active').siblings().removeClass('active')
				if($(document).scrollTop() < 3115){
					$('.lckzq-btn li').removeClass('active');
				}else if($(document).scrollTop() > 5720){
					$('.lckzq-btn li').removeClass('active');
				}
				return false;
			}
		});
	}
})
$('.lckzq-btn li').click(function(){
	if(mark == 1){
		mark = 2;
		$('.lckzq-btn li').eq($(this).index()).addClass('active').siblings().removeClass('active')
		$('body,html').animate({
			scrollTop : div.eq($(this).index()).offset().top,
		},300,function(){
			mark = 1;
		})
	}
})
/*
 
 * 返回顶部
 * */
$('.lckzq-bottom-gotop').click(function(){
	$('body,html').animate({
		scrollTop : 0
	},0)
})


//楼层控制器轮播图

var tim4 = null;
var s3 = 0;
tim4 = setInterval(lclbt1,4000);

function lclbt1(){
	s3++;
	if(s3 > $('.lckzq-lbt-t').length - 1){
		s3 = 0;
	}
	$('.lckzq-lbt .dian').eq(s3).addClass('active').siblings().removeClass('active');
	$('.lckzq-lbt-t').eq(s3).fadeIn().siblings('div').fadeOut();
}

$('.lckzq-lbt').hover(function(){
	clearInterval(tim4);
},function(){
	tim4 = setInterval(lclbt1,4000);
})

$('.lckzq-lbt .dian').click(function(){
	$('.lckzq-lbt .lckzq-lbt-t').eq($(this).index()).fadeIn().siblings('div').fadeOut();
	$(this).addClass('active').siblings().removeClass('active');
	s3 = $(this).index();
})