/***2017.7.2*/
var choiceWindowSec = 20; 
var choiceWindowTime = choiceWindowSec * 1000; 
var soundTime = choiceWindowTime
var soundFile = "/Data/8858_clip.mp3";
var paramUrl =  "/Index/Speed/testResult";
var idxUrl =  "/Index/Speed/setEndIdx";
var choice = []
var lastIdx = 0;

/****================================*/
function uploadResult(url, data){
        // console.log(data);
        $.ajax({
                type: 'POST',
                url:url,
                data:data,
                success:function(data){
                        console.log(data);
                },
                dataType:'json'
        });
}
function endUp()
{
	// console.log("20s已经过去了");

//	$("#numbers").hide();
     $('#numbers').find('td').unbind("click"); //移除click

	var id = $("#id").html();
	// console.log(id);
	$('#numbers').find('td').dblclick(function(){
		
                $(this).siblings().css("border-right", "0px none rgb(51, 51, 51)");
                $(this).css("border-right", "1px solid black");
		numberid = $(this).attr("numberid");
		lastIdx = numberid;
		// console.log(numberid);
		
		var data = {"id":id,"lastIdx":lastIdx};
		uploadResult(idxUrl, data);
	});
	curSec();

	var user = GetUrlParms('user');
	// console.log(user);
	var data = {"id":id,"lastIdx":lastIdx,"choice":JSON.stringify(choice), 'user':user};
	//var data = {"id":id,"lastIdx":lastIdx,"choice":choice, 'user':user};
	// console.log(data);

//    省事起见，暂时不上传数据了，最后一次性上传数据
//	uploadResult(paramUrl, data);
	


	// console.log(location.href);
	$("#begin").show();
	var times = GetUrlParms('times');
	//alert(typeof times);
	times = parseInt(times);
	if(location.href.indexOf("times") > 0 && times >= 2)
	{
		//location.href="/Index/Speed/thanks";
		$("#begin").children("a").attr("href", "/Index/Speed/thanks");
		$("#begin").children("a").html("点击结束");
		//console.log("jump");
		//$("#begin").children("a").attr("href", "Index/Speed/option");
	}else{
		var user = GetUrlParms('user');
		var desc = GetUrlParms('desc');
		//如果要查找参数key:
		times++;
		if(user!=undefined && desc !=undefined)
		{
        		//var url = $('#beginhref').attr('href');
        		//console.log(url);
        		var newHref='/Index/Speed/option/user/'+user+'/desc/'+desc+'/times/'+times;
        		// console.log(newHref);
        		$('#beginhref').attr('href', newHref);
		}
		//$("#begin").children("a").attr("href", "/Index/Speed/option/times");
	}
	
}

function sound(dtd){
	// console.log(dtd);
	playSound(soundFile);
}

/**测试时间倒计时**/
function tests()
{
	curSec();
	$("#target").show();
}

/**真的开始试验了*/
function continueAction()
{
	// console.log("in continueAction");
	$("#target").hide();

	curSec();

	$("#numbers").show();
		

	//判断时间timer开启
//	wait(choiceWindowTime).done(endUp);

	//wait(18*1000).done(sound);

}

function numberTest(){
	curSec();
		
	var dtd = $.Deferred(); // 新建一个deferred对象


	//setTimeout(sound,18000);
	setTimeout("sound(dtd)",soundTime);
}

function numberTest2(){
	curSec();

	var dtd = $.Deferred(); // 新建一个deferred对象


	//setTimeout(sound,18000);
	setTimeout("sound(dtd)",soundTime);
}

$(function(){

	 

	/**选择数字*/
	$('.numbers td').click(function(){
//			 alert("Testddd");
			//增加绿色北京
			// $(this).addClass('green-bg');

			var num = $(this).html();
			// $(this).css("text-decoration", "line-through");
			$(this).css("background-color", " green");

			//就是给出随机数字数组的偏移量
			var numberId = $(this).attr('numberId');
			console.log(numberId);
			numberId = parseInt(numberId);
		
			//防止多次点击，多次存入
			var ret = $.inArray(numberId, choice);
			// console.log(ret);
			//不在，才插入

			if(ret == -1){
				choice.push(numberId);
			}
			// console.log(choice);
			
	}); 


});
