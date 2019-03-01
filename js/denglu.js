window.onload = function(){
	var name = document.getElementById("zhu_c1");
	var mima = document.getElementById("zhu_c2");
	var btn = document.getElementById("btn2");
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0; i<arr.length;i++){
		var item =arr[i].split("=");
		if(item[0] == "uname"){
			var tname = item[1];
		}
		if(item[0] == "umima"){
			var tmima = item[1];
		}
	}
	console.log(tname,tmima)
	btn.onclick=function(){
		if(tname==name.value && tmima == mima.value){
			alert("登陆成功");
		}else{
			alert("登陆失败");
		}
		
	}
}
