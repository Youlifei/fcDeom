$(".nav a").mouseenter(function(){
	$(this).css("color","#e2b000") 
}).mouseout(function(){
	$(this).css("color","#fff")
})
//手风琴
$(".ilistmw").mouseover(function(){
	$(this).css({"height":135,"background":"#065706","border":0}).siblings(".slast").css("height",61)
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
//鼠标操作
	$(".foucus1 ol li").mouseenter(function(){
		clearInterval(timer);//停止定时器
		index = $(this).index()-1;
		auto();
		
	})
	$(".foucus1 ol li").mouseout(function(){
		timer = setInterval(auto,1500);
	})
})
//上拉下拉
$(".foucus2 ul li").mouseenter(function(){
	$(this).stop().find("p").animate({"bottom":0},300);
	
})
$(".foucus2 ul li").mouseout(function(){
	$(this).stop().find("p").animate({"bottom":-30},300);
	
})

/*
 	//所有图片
var listCon ="";
for(var i = 0 ; i < 6 ; i++){
	listCon += `<li>
					<a href="#" class="pro"><img src="images/1.jpg" alt="" /></a>
					<div class="p_con">
						<a href="#" class="p_cco">糯冰种漂翠圆条手镯</a>
						<div class="a_con">
							<div class="p_con1">
								<span>【货号】:jd157272</span>
								<span>【结缘价】:￥28800元</span>
							</div>
							<div class="p_con2">
								<a href="#" class="cc_con"><sapn></sapn></a>
							</div>
						</div>
						
					</div>
				</li>`
}
$(".produ").html(listCon)*/

window.onload = function(){
	//使用ajax请求index.json中的数据
	var deff = $.ajax({
		type:"get",
		url:"index.json",
		async:true
	});
	deff.done(function(json){
		var title = "";//内容
		for(var i = 0;i < json.list.length;i++){
			//拼接类型名称
			var pro = json.list[i];
			title +=`	<li>
							<a href="#" class="pro"><img src="images/${pro.src}" alt="" /></a>
							<div class="p_con">
								<a href="#" class="p_cco">${pro.name}</a>
								<div class="a_con">
									<div class="p_con1">
										<span>【货号】:${pro.sso}</span>
										<span>【结缘价】:￥${pro.price}元</span>
									</div>
									<div class="p_con2">
										<a href="#" class="cc_con"><sapn></sapn></a>
									</div>
								</div>
									
								</div>
							</li>
							`
		}
		$(".produ").html(title);
	})
}

