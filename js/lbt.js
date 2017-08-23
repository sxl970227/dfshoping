


var timer1 = null;
var flag = true;
timer1 = setInterval(move,3000);
var j = 0;
function move(){
	j++;
	if(j > $('.lbt-pr-jd li').length - 1){
		j = 0;
		
	}
	$('.lbt .yuan').eq(j).addClass('active').siblings().removeClass('active');
//	$('.lbt-pr-jd li');
	$('.lbt-pr-jd li').eq(j).fadeIn()
	$('.lbt-pr-jd li').eq(j).siblings('li').fadeOut();
	
}
$('.lbt').hover(function(){
	$('.btnn').stop(true,true).fadeIn();
	clearInterval(timer1);
},function(){
	$('.btnn').stop(true,true).fadeOut();
	timer1 = setInterval(move,3000);
})
$('.btnnl').click(function(){
	j--;
	if(j < 0 ){
		j = $('.lbt-pr-jd li').length - 1;
	}
	
	$('.lbt .yuan').eq(j).addClass('active').siblings().removeClass('active');
	$('.lbt-pr-jd li').fadeOut();
	$('.lbt-pr-jd li').eq(j).fadeIn();
})

$('.btnnr').click(function(){
	
	move();
})

$('.lbt .yuan').click(function(){
	$('.lbt-pr-jd li').eq($(this).index()).fadeIn().siblings('li').fadeOut();
	$(this).addClass('active').siblings().removeClass('active');
	j = $(this).index();
})
//
//var width=1920
//var left=$(".lbt-pr-jd-t").position().left
//jjs()
//window.onresize=function(){
//	jjs()
//}
//function jjs(){
//	var newWidth=$(window).width()
//	var i=width-newWidth
//	$('.lbt-pr-jd-t').css("left",left-i+"px")
//}
