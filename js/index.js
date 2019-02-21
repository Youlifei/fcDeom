$(".nav a").mouseenter(function(){
	$(this).css("color","#e2b000") 
}).mouseout(function(){
	$(this).css("color","#fff")
})
//手风琴
$(".ilistmw").mouseover(function(){
	$(this).css({"height":130,"background":"#065706","border":0})
}).mouseout(function(){
	$(this).css({"height":79,"background":"#012701","border-bottom":"solid 1px #fff"})
})
$(".ilistmw a").mouseover(function(){
	$(this).css("color","#e2b000")
}).mouseout(function(){
	$(this).css("color","#fff")
})
