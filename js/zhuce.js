window.onload=function(){
	var input = document.getElementsByTagName("input");
	var span = document.getElementsByTagName("span");
	var oBtn = document.getElementById("btn");
	var arr = [0,0,0,0,0];
	input[0].onblur = function(){
		var namestr = this.value;
		if(namestr !=""){
			var reg = /^[\u4e00-\u9fa5]{2,6}$/;
			if(reg.test(namestr)){
				span[0].style.display = "none";
				arr[0] = 1;
				//console.log(namestr)
				setCookie("uname",namestr);
			}else{
				span[0].innerText = "请输入中文2~6个";
				span[0].style.display = "inline-block";
				arr[0] = 2;
			}
		}
	};
	//console.log(namestr)
	input[1].onblur = function(){
		var miastr = this.value;
		if(miastr !=""){
			var reg = /^\d{6}$/;
			if(reg.test(miastr)){
				span[1].style.display = "none";
				arr[1] = 1;
				setCookie("umima",miastr);
			}else{
				span[1].innerText = "请输入6位数字";
				span[1].style.display = "inline-block";
				arr[1] =2;
			}
		}
	};
	input[2].onblur=function(){
		var str = this.value;
		if(str !=""){
			var str1 = input[1].value;
			if(str == str1){
				span[2].style.display = "none";
				arr[2] = 1;
				
			}else{
				span[2].innerText = "密码不一致";
				span[2].style.display = "inline-block";
				arr[2] =2;
			}
		}
	};
	input[3].onblur = function(){
		var youstr = this.value;
		if(youstr != ""){
			var reg = /^\d+@(112|113|qq)\.(com|con)$/;
			if(reg.test(youstr)){
				span[3].style.display = "none";
				arr[3] = 1;
				
			}else{
				span[3].innerText = "请输入邮箱";
				span[3].style.display = "inline-block";
				arr[3] = 2;
			}
		}
	}
	input[4].onblur = function(){
		var shoustr = this.value;
		if(shoustr !=""){
			var reg = /^(138|152|156|175)\d{8}$/;
			if(reg.test(shoustr)){
				span[4].style.display = "none";
				arr[4] = 1;
				
			}else{
				span[4].innerText = "请输入正确的手机号";
				span[4].style.display="inline-block";
				arr[4] = 2;
			}
		}
	};
	oBtn.onclick = function(){
	var num = arr[0] * arr[1] * arr[2] * arr[3] * arr[4];
		if(num == 0){
			alert("您未输入完");
		}else if(num == 1){
			alert("验证成功");
			location.href = "denglu.html";
		}else{
			alert("您输入不合法");
		}
	};
}


