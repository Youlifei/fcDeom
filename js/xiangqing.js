//大图选项卡 放大镜
$(function(){
	var $left = $(".actimgs ol li");//小图
		$cons = $(".actimgs ul li");//大图
	$left.mouseover(function(){
		$(this).addClass("active")
			   .siblings()
			   .removeClass("active");
		var index = $(this).index();
		$cons.eq(index)
			 .addClass("coon")
			 .siblings()
			 .removeClass("coon");
	})
})
