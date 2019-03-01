//导航
$("#list a").mouseenter(function(){
	$(this).css("color","#e2b000","background","#fff")
}).mouseout(function(){
	$(this).css("color","#fff","background","#e2b000")
})

//结算
$(function(){
	$(".btna i").click(function(){
		$(".jsk").animate({"bottom":0},1000,function(){
			$(".fkbz").animate({"right":0},1000)
		})
	})
	$(".btnq").click(function(){
		$(".fkbz").animate({"right":-300},1000,function(){
			$(".jsk").animate({"bottom":-230},1000)
		})
	})

//合计多少钱
	var cookieInfo =getCookie("produ");
	var sum = 0;
	for(var i = 0;i < cookieInfo.length ;i++){
		var price = cookieInfo[i].price;
		sum += parseInt(price);
	}
	var arr = $(".jsk p span").html(sum);
	console.log(arr)
})

//大图选项卡 放大镜
$(function(){
	var $left = $(".actimgs ol li");//小图
		$cons = $(".actimgs #small li");//中图
		$consa = $(".actimgs #small");//中图框
		$big = $(".actimgs ul big");//色块
		$img_d = $(".actimgs .img_d img");//大图
		$consW = $cons.eq(0).width();//中图宽
		$consH = $cons.eq(0).height();//中图高 
		$small = $("#small");
		$bigg = $("#bigg");
		$img_da =$(".img_d"); //大图框
		//console.log($img_d)
		$left.mouseenter(function(){
			index = $(this).index();
			$(this).addClass("active")
			 	   .siblings()
			  	   .removeClass("active");
			$cons.eq(index)
				 .addClass("coon")
				 .siblings()
				 .removeClass("coon");
			
				/*  .addClass("act_ive")
				  .siblings()
				  .removeClass("act_ive");*/
				 
			
	})
	$("#small").mouseenter(function(){
		//console.log($img_da)
		$(".img_d").show()
		$(".bigImage").eq(index).show().siblings().hide()
	}).mouseleave(function(){
		$(".img_d").hide()
		$(".bigImage").eq(index).hide()
	})
	
		$("#small").on({
			"mousemove" : function(e){
				/*var index = $(this).index();
				$img_d.eq(index)
				  .addClass("act_ive")
				  .siblings()
				  .removeClass("act_ive");*/
				var $img_dW = $img_d.eq(0).width();
				var $img_dH = $img_d.eq(0).height();
				var e = e ||event;
				var x = e.pageX - $small.offset().left- $bigg.width()/2;
				var y = e.pageY - $small.offset().top - $bigg.height()/2;
				var maxL = $small.width() - $bigg.width();
				var maxT = $small.height() - $bigg.height();
					x = Math.min(Math.max(0,x),maxL);
					y = Math.min(Math.max(0,y),maxT);
					$bigg.css({
						left : x,
						top : y,
						backgroundPositionX : -x,
						backgroundPositionY : -y
					})
					var $img_dLeft = x*$img_dW / $consW;
					var $img_dTop = y*$img_dH / $consH;
					$(".bigImage").css({
						left : -$img_dLeft,
						top : -$img_dTop
					})
			}
		})
		
})


$(function(){
		//获取路径信息
		var str = location.href;//http://http://127.0.0.1/fcDeom/page.html?cname=list&pid=shop01
		
		str = str.split("?")[1];//cname=list&pid=shop01
		var arr = str.split("&");
		var cname = arr[0].split("=")[1];//list
		//console.log(cname);
		var pid = arr[1].split("=")[1];   //shop01  id
		//console.log(pid)
		//请求服务器数据根据cname和pid的值确定要显示的某个商品
		$.ajax({
			type:"get",
			url:"index.json",
			async:true,
			success : function(json){
				//console.log(json.list )
				var arr = json.list;
				var str = "";
				for(var i = 0; i < arr.length ; i++){
					if(pid == arr[i].id){
						str +=`<img src="images/${arr[i].src}" alt="" />
								<p>${arr[i].name}</p>
								<p>【货号】:${arr[i].sso}</p>
								<p>结缘价】:￥${arr[i].price}元</p>
								<button>购买</button>`;
								break;
					}
				}
				$(".shopinfo").html( str );
			}
			
		});
})



