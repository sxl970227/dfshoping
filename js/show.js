$('.sel').click(function(){
	$(this).find('ul').show();
})

$('.sel').hover(function(){
	
},function(){
	$(this).find('ul').hide();
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
/*
 
 * 返回顶部
 * */
$('.lckzq-bottom-gotop').click(function(){
	$('body,html').animate({
		scrollTop : 0
	},0)
})

$('.zj-con-con-center-left-top-top-t').mouseover(function(){
	$('.zj-con-con-center-left-top-top-t-t-dt').show();
	$('.smallbox').show();
})

$('.zj-con-con-center-left-top-top-t').mouseout(function(){
	$('.zj-con-con-center-left-top-top-t-t-dt').hide();
	$('.smallbox').hide();
})

$('.zj-con-con-center-left-top-top-t').mousemove(function(e){
	var e = e || window.event;
	var left = e.pageX - $(this).offset().left - $('.smallbox').width() / 2;
	var top = e.pageY - $(this).offset().top - $('.smallbox').height() / 2;
	var disX = $(this).width() - $('.smallbox').width();
	var disY = $(this).height() - $('.smallbox').height();
	
	var time = null,
		time1 = null;
	if(left < 0){
		left = 0;
		time = 0;
	}else if(left > disX){
		left = disX;
		time = disX;
	}else{
		left = left;
		time = left;
	}
	
	if(top < 0){
		top = 0;
		time1 = 0;
	}else if(top > disY){
		top = disY;
		time1 = disY;
	}else{
		top = top;
		time1 = top;
	}
	
	$('.smallbox').css({
		left : left,
		top : top
	});
	
	$('.zj-con-con-center-left-top-top-t-t-dt-box img').css({
		top : -time1 *2,
		left : -time *2
	})
})



$('.next').click(function(){
	$('.clear_float').stop(true,true).animate({
		left : -280
	},600)
})
$('.prev').click(function(){
	$('.clear_float').stop(true,true).animate({
		left : 0
	},600)
})

$('.clear_float li').hover(function(){
	$('.clear_float img').removeClass('active');
	$(this).find('img').addClass('active');
	$('.zj-con-con-center-left-top-top-t-t-xt img').eq($(this).index()).show().siblings().hide();
	$('.zj-con-con-center-left-top-top-t-t-dt-box img').eq($(this).index()).show().siblings().hide();
})

$('.ysfl').click(function(){
	$(this).children().toggleClass('active');
})

var num = $('.num1');
$('.jia').click(function(){
	num.val(Math.abs(parseInt(num.val()))+1);
})

$('.jian').click(function(){
	if (parseInt(num.val())==1){
		$('.num1').attr('disabled',true);
	}else{
		num.val(Math.abs(parseInt(num.val()))-1);
	}
	
})

$('.wenhao').hover(function(){
	$(this).children().show();
},function(){
	$(this).children().hide();
})

$('.erwei').mouseover(function(){
	$('.bigerweima').show();
})

$('.bigerweima').mouseout(function(){
	$('.bigerweima').hide();
})

$('.xaddress').click(function(){
	$('.xxxaddress').show();
})
$.ajax({
	type:"get",
	url:"json/cityTest.json",
	async:true,
	dataType:'json',
	success:function(success){
		data = success;
		console.log(data);
		var str = "";
		$.each(data,function(name,sheng){
			str += "<span>"+sheng.name+"</span>";
		});
		$('.sheng').eq(0).html(str);
		$('.sheng').eq(0).children().click(function(){
			var val = $(this).html();
			$('.xxxaddress li').eq(0).html(val);
			$('.xxxaddress li').eq(0).removeClass('active');
			$('.xxxaddress li').eq(1).addClass('active');
			$('.sheng').eq(0).hide();
			$('.sheng').eq(1).show();
			var str1 = '';
			$.each(data,function(name,sheng){
				var val = $('.xxxaddress li').eq(0).html();
				if(sheng.name == val && sheng.city != undefined){
					$.each(sheng.city,function(c,city){
						str1 += "<span>"+city.name+"</span>";
					})
				}
			});
			$('.sheng').eq(1).html(str1);
			$('.sheng').eq(1).children().click(function(){
				var val = $(this).html();
				console.log(val)
				$('.xxxaddress li').eq(1).html(val);
				$('.xxxaddress li').eq(1).removeClass('active');
				$('.xxxaddress li').eq(2).addClass('active');
				$('.sheng').eq(1).hide();
				$('.sheng').eq(2).show();
				var str2 = '';
				$.each(data,function(name,sheng){
					var val = $('.xxxaddress li').eq(0).html();
					var val1 = $('.xxxaddress li').eq(1).html();
					if(sheng.name == val && sheng.city != undefined){
						$.each(sheng.city,function(c,city){
//							console.log(city)
							if(city.name == val1 && city.area != undefined){
								$.each(city.area,function(q,qu){
									str2 += "<span>"+qu+"</span>";
								})
							}
							
						})
					}
				});
				$('.sheng').eq(2).html(str2);
				$('.sheng').eq(2).children().click(function(){
					var val = $(this).html();
					var val2 = $('.xxxaddress li').eq(0).html();
					$('.xxxaddress li').eq(2).html(val);
					$('.xxxaddress').hide();
					$('.xaddress span').html(val2);
				})
		});
		});
		
		
	},error(error){
		console.log(error);
	}
});

$('.xxxaddress li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.sheng').eq($(this).index()).show().siblings('.sheng').hide();
});
$('.dell').click(function(){
	$('.xxxaddress').hide();
})

$('.zj-con-bottom-left-tab li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$(this).children('span').addClass('active').parent().siblings().children('span').removeClass('active');
	$('.zj-con-bottom-left-tabcon').eq($(this).index()).show().siblings('.zj-con-bottom-left-tabcon').hide();
})

$('.plxq-tabcon').click(function(){
	$(this).find('p,a').addClass('active').parent().siblings().find('p,a').removeClass('active');
	
	$('.plxq-con').eq($(this).index() - 1).show().siblings('.plxq-con').hide();
})
