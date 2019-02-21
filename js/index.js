$(".nav a").mouseenter(function(){
	$(this).css("color","#e2b000") 
}).mouseout(function(){
	$(this).css("color","#fff")
})
//手风琴
$(".ilistmw").mouseover(function(){
	$(this).css({"height":151,"background":"#065706","border":0}).siblings().css("height",61)
}).mouseout(function(){
	$(this).css({"height":79,"background":"#012701","border-bottom":"solid 1px #fff"}).siblings().css("height",79)
})

//轮播图
$(function(){
	//设置定时器
	var index =0;
	
	var timer = setInterval(auto,1500);
	function auto(){
		index++;
		//边界处理
		if(index == $("ol li").size()){
			index = 0;
		}
		$(".foucus1 ol li").eq(index).addClass("current").siblings().removeClass("current");
		$(".foucus1 ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
})

//所有图片
var $list = $(".produ li");
$.each($list,function(index,ele){
	$(this).css("background-image",`url(images/${index+1}.jpg)`)
})



