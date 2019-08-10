/***此js是为了演示视觉判断能力
*2016.09.28
*Liu Mingxing
*/

/***需要的参数都定义在params里面。*/

//下面的数据包括要显示的图片名字（不包括后缀），元素是按序排列的，展示也是按此顺序的。这个变量可能会被调整。
//var imgArr=[-1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 3, 2, 3, 2, 3, 2, 3, 0, 1, 0, 1, 0, 1, 0, 1];



//////////////////////////////////////////////////程序生成、使用的中间变量（参数）
//下面的数组是imgArr中图片的显示时间（毫秒）
var index=0;
var timer=null;
var intervalArr=[]
var isExist=0//F代表存在，J代表不存在。用1代表F，2代表J，0代表什么都没有选，或者选错了。
//var choiceTimeLen = -1;

var choiceWindowStartTime=null;//选择开始的时刻，绝对时间（毫秒）
var choiceTime=null;//选择的时刻，绝对时间（毫秒）
var haveChosen = false;

/**存有所有测试的结果*/
//var allResult = []
var allResult = new Array();
var testSeries = null;
//console.log(testSeries);


////////////////////////////////////////////////////////////////////////////////////////////////
/***/
$(function(){

});



function onlyUnique(value, index, self) {   
    return self.indexOf(value) === index;  
}  
  
// usage example:  
//var a = ['a', 1, 'a', 2, '1'];  


//进入全屏
function requestFullScreen() {
    var de = document.documentElement;
    if (de.requestFullscreen) {
          de.requestFullscreen();
      } else if (de.mozRequestFullScreen) {
          de.mozRequestFullScreen();
      } else if (de.webkitRequestFullScreen) {
          de.webkitRequestFullScreen();
     }
}
//退出全屏
 function exitFullscreen() {
     var de = document;
     if (de.exitFullscreen) {
         de.exitFullscreen();
     } else if (de.mozCancelFullScreen) {
         de.mozCancelFullScreen();
     } else if (de.webkitCancelFullScreen) {
         de.webkitCancelFullScreen();
     }
}
/**整个测试，包括N轮测试，一次测试就是oneTest*/
function tests(){
	$('#start').hide();
	
	//interTime=intervalArr[0];
	//立马开始第一个index的显示
	$("#numbers").show();
}

/***将整个测试结果整体上传*/
function uploadWholeResult()
{
	console.log('enter func uploadWholeResult');
	
	console.log(allResult);
	//allResult.toJSON
	var jsonStr = JSON.stringify(allResult);
	console.log(jsonStr);
}


/***将整个测试结果整体上传*/
function uploadOneTestResult()
{
	console.log('enter func uploadWholeResult');
	
	console.log(allResult);
	//allResult.toJSON
	var jsonStr = JSON.stringify(allResult);
	console.log(jsonStr);
}

/**测试之前，先准备一下*/
function prepare()
{
	//为总体测试设计一个随机的显示队列
	testSeries = getTestSeries();
	//console.log(testSeries);
	
	//设置一轮显示的时间，两个参数都是全局变量
	setIntervalArr(prepareTime, targetInterTime);
}

/**设置一下图片数组中的图片显示时间*/
function setIntervalArr(plusShowTime, ImgShowTime)
{
	for(var i=0; i<existHeartImgArr.length;i++)
	{
		//console.log(existHeartImgArr[i]);
		//intervalArr[i] = interTime;
		intervalArr[i] = ImgShowTime;
	}

	//console.log(intervalArr);

	intervalArr[0]=plusShowTime;	
	//console.log(intervalArr);
}

/**得到一个测试轮回序列*/
function getTestSeries()
{
	/*var arr = [1,2,3,4]; 
	var arr2 = arr.sort(randomsort);  
	alert(arr2);  
	*/
	var series = []
	var heartShapeNum = testNum * heartShapeRate;
	var noheartNum = testNum - heartShapeNum;
	for(var i = 0;i<heartShapeNum;i++){
		series.push(1);
	}
	for(var i = 0;i<noheartNum;i++){
		series.push(0);
	}
	
	//console.log(series);
	for(var i=0;i<100;i++)
	{
		var series = series.sort(randomsort);  
		//console.log(series);
	}
	
	return series;
	/*
	series = arr2;
	
	console.log(series);

	return series;
	*/
}

function randomsort(a, b) {  
    return Math.random()>.5 ? -1 : 1;  
//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1  
}  

/***整个测试已经完全做完。做好清理工作。*/
function endWholeTest()
{
	console.log('测试已经结束，谢谢参与');
	clearInterval(timer);  
	
	uploadWholeResult();
	
	$("#end").show();
	
	exitFullscreen();
}

var testCounter = 0;
/***/
function oneTest()
{	if(testCounter >= testNum)
	{
		endWholeTest();
		return;
	}
	
	if(index === 0)
	{
		console.log('index == 0');
		$('#transfer').show();
	}
	
	var imgArr = null;
	var existHeart = testSeries[testCounter];
	if(existHeart)
		imgArr = existHeartImgArr;
	else	
		imgArr = noHeartImgArr;
	
	var arrLen = imgArr.length;
	if(index < arrLen)
	{
			var item=imgArr[index];
			var uri="Public/Images/"+item+".bmp";
			$("#theImg").attr("src",uri);

			//如果有必要开始下一轮，才开始。
			if(index <= arrLen-1)
			{
				interTime=intervalArr[index];
				console.log(uri+" 展示时间："+interTime);

				//清除定时器，暂停执行这个定时任务，修改周期后开始下一轮
				clearInterval(timer);   
				timer=setInterval(oneTest, interTime);
			}
			
			index++;
	}else{
		//等待用户选择
		waitForUserChoice();
	}
}

/*
function existHeartImg()
{
	
	
}*/

/***等待用户作出选择。当演示完毕之后，就需要用户按键选择是否有心形出现过。
*用户可能并没有选择。*/
function waitForUserChoice()
{
	$('#transfer').hide();
	$('#choice').show();
			
	//清除定时器，暂停执行下一轮
	clearInterval(timer);    
			
	//开启键盘输入,等待用户输入
	bind_keyboard();
	//waitForChoice(3000);
	choiceWindowStartTime = new Date().getTime();
	console.log('choiceWindowStartTime:'+choiceWindowStartTime);
			
	//判断时间开启
	wait(choiceWindowTime)
		.done(endUp);
}

/**
*一轮测试之后，将现场处理一下，并为下轮做好准备；并开启下一轮测试。
*/
function endUp()
{
	//用不上，直接注释掉
	//this.interTime=1000;
	//interTime=intervalArr[index];
				
	this.index=0;
				
	unbind_keyboard();
	$('#transfer').show();
	$('#choice').hide();
	$("#theImg").attr("src","");

	/***整理本次结果，并将其存入总结果中*/			
	var thisResult = getResult();
	console.log(thisResult);
	allResult.push(thisResult);
	console.log(allResult);
	
	/***重置一下刚刚这轮测试使用到的全局变量*/
	resetResultVars();	
	
	testCounter++;
	thisResult['urlId'] = urlId;
	thisResult['clientId'] = clientId;
	/**提交数据*/
	var jsonStr_res = JSON.stringify(thisResult);
	console.log(jsonStr_res);
	var jsonObj = eval('(' + jsonStr_res + ')');
	
	/*console.log('============================');
	console.log(urlId);*/
	$.post(
		"/Index/Index/collectResult",
		jsonObj,
		//{"test":1},
		function(result){
			console.log(result);
		}
	);
	
	
	timer=setInterval(oneTest,interTime);
}

/**
*一轮结果的收集，包括按键是哪个，按键时长等。
*/
function getResult()
{
	var result = {}
	result['isExist'] = isExist;
	
	var choiceTimeLen = -1;
	result['testSerial'] = testCounter;
	
	/**用true传有点问题，老是被后台php当做是0，所以这里直接用1和0来表示true和false了*/
	var chosen = 0;
	if(haveChosen)
		chosen = 1;
	
	result['haveChosen'] = chosen;
	
	
	/**这次测试，里面是否存在心形*/
	result['existHeart'] = testSeries[testCounter];
	
	
	/***选择了的时候，choiceTime才会被设置过，choiceTimeLen才有意义，否则就设置为-1*/
	if(haveChosen)
	{
		choiceTimeLen = choiceTime - choiceWindowStartTime;
	}		
	
	result['choiceTimeLen'] = choiceTimeLen;
	result['choiceTime'] = choiceTime;

	return result;
}
function resetResultVars()
{
	isExist = 0;
	//choiceTimeLen = -1;
	//haveChosen = false;
}

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

function bind_keyboard(){
	haveChosen = false;

	$(document).keydown(keydownFunc);
	console.log('bind keyboard');
}
function unbind_keyboard()
{
	$(document).unbind('keydown', keydownFunc);
}


/***等待用户案件
*timeout:milliseconds
*/
function waitForChoice(timeout)
{
	if(timeout<=0)
	{
		console.log('timeout should be positive');
		return;
	}
	
	var start = new Date().getTime();
	var ok = false;
	for (var i = 0; i < 1e7; i++) {
		//console.log('for loop');
		if ((new Date().getTime() - start) > timeout){
			//console.log('break from for loop');
			ok = true;
			 break;
		}

		if(haveChosen)
		{
			console.log('have choose ');
			ok = true;
			break;
		}
	}
	
	if(ok)
	{
		$(document).unbind('keydown', keydownFunc);
	}
	//状态回复 
	//haveChosen = false;
}

		
function sleep(milliseconds) {
		  var start = new Date().getTime();
		  for (var i = 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds){
			  break;
			}
		  }
}
		
