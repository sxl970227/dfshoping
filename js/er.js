
$('.ban-con-ul li').hover(function(){
	$(this).children('div').show();
},function(){
	$(this).children('div').hide();
})

$('.ban-con-right-top-left-ul li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.non .ban-con-right-top-left-ul-con').eq($(this).index()).show().siblings().hide();
})

$('.huise').hover(function(){
	$(this).children('.huise-con').show();
},function(){
	$(this).children('.huise-con').hide();
})