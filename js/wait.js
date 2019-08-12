
/***等待时间，等待timeout。相当于sleep timeout。*/
var wait = function(timeout){
	var dtd = $.Deferred(); // 新建一个deferred对象

	var tasks = function(){
					//alert("执行完毕！");
					console.log("执行完毕！开始下一轮测试。");
					dtd.resolve(); // 改变deferred对象的执行状态
	};
	setTimeout(tasks,timeout);
			
	/**必须返回dtd，以后面的链式执行。*/
	return dtd;
};
/***等待时间，等待timeout。相当于sleep timeout。*/
var wait_func = function(timeout, func){
	var dtd = $.Deferred(); // 新建一个deferred对象

	var tasks = function(){
					// alert("开始执行！");
					func();
					console.log("执行完毕！开始下一轮测试。");
					dtd.resolve(); // 改变deferred对象的执行状态
	};
	setTimeout(tasks,timeout);
			
	/**必须返回dtd，以后面的链式执行。*/
	return dtd;
};

		
function sleep(milliseconds) {
		  var start = new Date().getTime();
		  for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds){
			  break;
			}
		  }
}



/***等待用户作出选择。当演示完毕之后，就需要用户按键选择是否有心形出现过。
*用户可能并没有选择。*/
function waitForUserChoice(choiceWindowTime)
{
//	$('#transfer').hide();
//	$('#choice').show();
			
	//清除定时器，暂停执行下一轮
//	clearInterval(timer);    
			

	//waitForChoice(3000);
	choiceWindowStartTime = new Date().getTime();
	console.log('choiceWindowStartTime:'+choiceWindowStartTime);
			
	//判断时间开启
	wait(choiceWindowTime)
		.done(endUp);
}
// 堵塞
function sleep(delay) {
  var start = (new Date()).getTime();
  while ((new Date()).getTime() - start < delay) {
    continue;
  }
}