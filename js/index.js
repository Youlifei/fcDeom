//固定客服框
$(function(){
	$("#kf .btn").click(function(){
	$("#kf .image").hide();
	$("#kf .btn").html("+");
	$("#kf .btn").click(function(){
		$("#kf .image").show();
		$("#kf .btn").html("×");
	})
	return false;
})
})
//缓冲广告效果
$(function(){
	var timer = null;
	var $guang_a = $(".guang_a");
	function move(obj,target){
		clearTimeout(timer);
		timer=setInterval(function(){
			var speed = (target - obj.offsetTop)/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(target == obj.offsetTop){
				clearTimeout(timer);
			}else{
				obj.style.top = obj.offsetTop + speed + "px";
			}
		},30)
	}
	var pic = document.getElementById("guang_a");
	window.onscroll = function(){
		var oTop = document.body.scrollTop || document.documentElement.scrollTop;
		move(pic,50+oTop)
	}
})


//导航
$("#list a").mouseenter(function(){
	$(this).css("color","#e2b000","background","#fff")
}).mouseout(function(){
	$(this).css("color","#fff","background","#e2b000")
})

//  二级菜单    调用函数
/*window.onload = function(){
	new ListMenu().init();

function ListMenu(){
	$(this) = list.children;//一级菜单
	$(this).init = function(){
		for(let i = 0;i < $(this).length ; i++){
			$(this)[i].onmouseenter = function(){
				$(this).show(this[i].children[0]);
			}.bind(this)
			$(this)[i].onmouseleave = function(){
				$(this).hide(this[i].children[0]);
			}.bind(this)
		}
	}
	$(this).show = function(obj){
		obj.style.display = "block";
	}
	$(this).hide = function(obj){
		obj.style.display = "none";
	}
}
}*/
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
	var timer = setInterval(auto,2500);
	function auto(){
		index++;
		//边界处理
		if(index == $("ol li").size()){
			index = 0;
		}
		$(".foucus1 ol li").eq(index).addClass("current").siblings().removeClass("current");
		$(".foucus1 ul li").eq(index).fadeIn(1500).siblings().fadeOut(1500);
	}
//鼠标操作
	$(".foucus1 ol li").mouseenter(function(){
		clearInterval(timer);//停止定时器
		index = $(this).index()-1;
		auto();
		
	})
	$(".foucus1 ol li").mouseout(function(){
		timer = setInterval(auto,2500);
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
//动态创建li  使用ajax  json
window.onload = function(){
	//使用ajax请求index.json中的数据
	var deff = $.ajax({
		type:"get",
		url:"index.json",
		async:true
	});
	deff.done(function(json){
		var title = "";//内容
		for(var attr in json){
		for(var i = 0;i < json.list.length;i++){
			//拼接类型名称
			var pro = json.list[i];
			title +=`<li>
							<a href="page.html?cname=${attr}&pid=${pro.id}" class="pro"><img src="images/${pro.src}" alt="" /></a>
							<div class="p_con">
								<a href="xiangqing.html" class="p_cco">${pro.name}</a>
								<div class="a_con">
									<div class="p_con1">
										<span>【货号】:${pro.sso}</span>
										<span>【结缘价】:￥${pro.price}元</span>
									</div>
									<div class = "com">
										<button data-id="${pro.id}" data-name="${pro.name}" data-sic="${pro.src}" data-sso="${pro.sso}" data-price="${pro.price}">加入购物车</button>
									</div>
									<div class="p_con2">
										<a href="xiangqing.html?cname=${attr}&pid=${pro.id}" class="cc_con">查看详情>></a>
									</div>
								</div>
									
								</div>
							</li>
							`
		}
		$(".produ").html(title);
	}
	})
	
	//添加购物车
	var arr = [];//用于存放多个商品
	$(".produ").on("click","button",function(){//委托
		//获取当前购买的商品信息存入到cookie中
		var json = {};//用来存放一个商品信息
			json = {
				//使用data方式获得data-*的自定义属性值
				id:$(this).data("id"),
				name:$(this).data("name"),
				src:$(this).data("src"),
				sso:$(this).data("sso"),
				price:$(this).data("price"),
				count:1//累加重复商品数量
			}
			var flag = true;//假设值为true时  可以想数组中push一个对象；
			//先取出cookie中的所有商品 判断当前存入的商品在cookie中是否存在如果存在就将商品的数量+1;
			//如果不纯在 就将该商品存入到arr数组中
			var cookieInfo = getCookie("produ");//取出的是一个数组
			//如果数组中有数据就判断
			if(cookieInfo.length !=0){
				//判断当前购买的商品cookieInfo中是否存在
				for(var i = 0 ; i< cookieInfo.length;i++){
					if(json.id == cookieInfo[i].id){//说明该json中存入的商品被购买过
						//将i对应的商品count值+1
						cookieInfo[i].count++;
						arr=cookieInfo;//因为最终将arr素组存入到cookie中所以要将cookieInfo中的数据赋值给arr
						flag = false;
						break;	
					}
				}
			}
			if(flag){
				//将json存入到数组中
				arr.push(json);
			}
			//console.log(arr);
			//把数组存入到cookie中
			setCookie("produ",JSON.stringify(arr));
			if( !confirm("点击确定-继续购买，点击取消-跳转到购物车结算") ){
				//页面跳转
				location.href = "xiangqing.html";
			}
			
	})
}



//第二个轮播图  无缝轮播图
$(function(){
	//设置定时器
	var timer = setInterval(auto,2500);
	var index = 0;
	function auto(){
		index++;
		var imgW = $(".czt1 ul li img").eq(0).width();
		$(".czt1 ul").animate({"margin-left":-imgW},2000,function(){
			//回调函数把第一张图片放在最后
			$(".czt1 ul li:first").appendTo(".czt1 ul")
			$(".czt1 ul").css("margin-left",0)
		})
	}
	//移入右键停止定时器
	$(".czt1 #right").mouseover(function(){
		clearInterval(timer);
	})
	//移出右键启动定时器
	$(".czt1 #right").mouseout(function(){
		timer = setInterval(auto,2500);
	})
	//移入左键停止定时器
	$(".czt1 #left").mouseover(function(){
		clearInterval(timer);
	})
	//移出左键启动定时器
	$(".czt1 #left").mouseout(function(){
		timer = setInterval(auto,2500);
	})
	//点击右键
	$(".czt1 #right").click(function(){
		//先停止定时器
		$(".czt1 ul").animate({"margin-left":-570},1000,function(){
			$(".czt1 ul").css("margin-left",0);
			$(".czt1 ul li:first").appendTo(".czt1 ul");
			
		});
	//点击左键
	$(".czt1 #left").click(function(){
		$(".czt1 ul li:last").prependTo(".czt1 ul");
		$(".czt1 ul").css("margin-left",-570);
		$(".czt1 ul").animate({"margin-left":0},1000);
	})
})
	return false;
})
//选项卡左
$(function(){
	var $list = $(".ifczstab li"),
		$cons = $("#xuan ul");
		$list.mouseover(function(){
			$(this).addClass("active")
				   .siblings()
				   .removeClass("active");
			var index = $(this).index();
			$cons.eq(index)
				 .addClass("ifczstab1")
				 .siblings()
				 .removeClass("ifczstab1");
		})
})
//选项卡右
$(function(){
	var $list = $(".gztabt1 a"),
		$cons = $(".gztabt2 ul");
		$list.mouseover(function(){
			$(this).addClass("gztabt_h")
				   .siblings()
				   .removeClass("gztabt_h");
				   var index = $(this).index();
				   $cons.eq(index)
				   		.addClass("gztabcb")
				   		.siblings()
				   		.removeClass("gztabcb");
		})
})
