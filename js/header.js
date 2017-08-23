show($('.evx'),$('.vx1'));
show($('.shop'),$('.list'));
show($('.gwc'),$('.gwc-con'));


function show(obj,value){
	obj.hover(function(){
		value.stop(true,true).show();
		
	},function(){
		value.stop(true,true).hide();
	})
}
