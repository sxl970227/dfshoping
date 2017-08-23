$('.gd2-list-top li').hover(function(){
	$(this).children('a').addClass('active').parent().siblings().children().removeClass('active');
	$('.gd2-list-con ul').eq($(this).index()).show().siblings().hide();
})

$('.gd').click(function(){
	//list消失
	$(this).prev().hide();
	//自己按钮消失
	$(this).hide();
	//后面的按钮显示
	$(this).next().show();
	//更多显示
	$(this).next().next().show();
	//让不限复原
	$(this).prev().prev().children().css({
		background : '#005aa0',
        color: '#fff'
	});
	//让list的样式复原
	$(this).prev().children('li').children().removeClass('active');
	//当前后面的按钮选择
	$(this).next().click(function(){
		//让原按钮显示
		$(this).prev().show();
		//原list显示
		$(this).prev().prev().show();
		//当前按钮隐藏
		$(this).hide();
		//当前list隐藏
		$(this).next().hide();
	})
});
//点击list时取消不限的样式
$('.gd-list li').click(function(){
	$(this).children().addClass('active').parent().siblings().children().removeClass('active');
	$(this).parent().prev().children().css({
		background : '#fff',
		color : '#000'
	})
})

//销量那些按钮
$('.content-con-right-center-nav-con-box p').click(function(){
	$('.content-con-right-center-nav-con-box').children('em,span').hide();
	$(this).addClass('active').parent().siblings('div').children('p').removeClass('active');
	if($(this).siblings('span').css('display') == 'block'){
		$(this).siblings('span').hide().siblings('em').show();
	}
	$(this).siblings('span').show();
	$(this).siblings('span').click(function(){
		$(this).hide().siblings('em').show();
		$(this).siblings('p').addClass('active').parent().siblings('div').children('p').removeClass('active');
	})
	$(this).siblings('em').click(function(){
		$(this).hide();
		$(this).prev().show();
		$(this).siblings('p').addClass('active').parent().siblings('div').children('p').removeClass('active');
	})
})
//大图 列表
$('.dt').click(function(){
	$(this).children().addClass('active').parent().siblings().children().removeClass('active');
	$('.content-box').eq($(this).index()).show().siblings().hide();
	console.log($(this).index())
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