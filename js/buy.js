$('.jian').click(function(){
	var num = $(this).siblings('input');
	if(parseInt(num.val())){
		num.val(parseInt(num.val()) - 1);
		var sl = $(this).siblings('input').val();
		var djg = $(this).parents('li').siblings('.dj').find('.djg').html();
		$(this).parents('li').siblings('.xj').find('em').text(parseInt(sl) * parseFloat(djg));
	}else{
		num.val('0');
	}
	total();
})


$('.jia').click(function(){
	var num = $(this).siblings('input');
	num.val(parseInt(num.val()) + 1);
	var sl = $(this).siblings('input').val();
	var djg = $(this).parents('li').siblings('.dj').find('.djg').html();
	$(this).parents('li').siblings('.xj').find('em').text(parseInt(sl) * parseFloat(djg));
	total();
})

function total(){
	var s = 0;
	for (var i = 0;i < $('.shuliang').length; i++) {
		s += parseInt($('.shuliang').eq(i).val()) * parseFloat($('.djg').eq(i).html())
	}
	$('.zongjia').html(s.toFixed(2));
}

$(function(){
	$('.jiage b').html($('.shuliang').index());
	for (var j = 0; j < $('.xj em').length; j++) {
		$('.xj em').eq(j).html($('.djg').eq(j).text() * $('.shuliang').eq(j).val());
	}
	total();
	$('.zj-top-img span').html($('.shuliang').index());
})


$('.gojiesuan :checkbox').click(function(){
//	if(this.chicked){
//		console.log()
//		
//	}else{
//		$('.fxk :checkbox').prop('checked',false);
//	}
	$('.fxk :checkbox').prop('checked',true);
});

$('.fxk :checkbox').click(function(){
	if(!$(this).checked){
		$('.gojiesuan input').prop('checked',false);
	}
})

$('.plsc').click(function(){
	var xz = $('.fxk :checked').length;
	if(xz == 0){
		alert('请至少选择一项');
		return;
	}
	
	if(confirm('确定删除所选项?')){
		var checkarr = new Array();
		$('.fxk :checked').each(function(){
			checkarr.push($(this).val());
		});
//		$.ajax({
//			type:"POST",
//			url:"deletemore",  没文件
//			data :{'delitems':checkarr.toString()},
//			success:function(success){
//				$('.fxk :checked').attr('checked',false);
//				window.location.reload();
//			}
//		});
		
		for (var b = 0; b < $('.fxk :checkbox').length; b++) {
			if($('.fxk :checked')){
				$('.zj-bottom-list-box-bottom-left-box').eq(b).remove();
				total();
			}
		}
			
		
	}
})
