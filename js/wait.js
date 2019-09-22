
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


/***等待时间，等待timeout。相当于sleep timeout。*/
var wait_func2 = function(timeout, func, param){
	var dtd = $.Deferred(); // 新建一个deferred对象

	var tasks = function(){
					// alert("开始执行！");
					func(param);
					console.log(timeout + func + param+"执行完毕！开始下一轮测试。");
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


//////////////////////////////////////////////////////////////////////////////////////////////


//$(function(){
//    $("button").click(function(){
////            var time = 10000;
//
//        task_list = [[print_now_timestamp, 10000], [print_now_timestamp, 5000],[print_now_timestamp, 15000]];
//        dotasks(task_list);
//
//    });
//});

//task_list是一个list。每个item是一个函数call_func和一个相应的保持时长
//最后一个元素的时间，是无用的，因为后续没有task要等待它了
function dotasks(task_list){
    var dtd_dict = {}

    var previous_dtd = null;
    if(task_list.length<=0){
        console.log("task_list 空了");
        return;
    }

    var task = task_list[0];
    var task_callfunc = task[0];
    var this_ele_id  = task[1];
    var next_ele_id = task[2];
    var task_timelen = task[3];


    task_callfunc(this_ele_id, next_ele_id);
    var dtd = pass_time(task_timelen);
    task_list.shift();
    $.when(dtd).done(function(){
        dotasks(task_list);
    });


}

function print_now_timestamp(){
                console.log(gettimestamp());

}
function pass_time(time){
 var dtd = $.Deferred(); // 新建一个deferred对象
            setTimeout(function() {
                var x = setInterval(function(){
                        time= time - 1000; //reduce each second
                        var value = (time/1000)%60;
//                        $("#1").html(value);
                        if(time==0){
                                clearInterval(x);
                                dtd.resolve("resolve"); // 改变deferred对象的执行状态
                        }
                }, 1000);
            }, 0);

       return dtd.promise();
}

function gettimestamp(){
    var date=new Date();
    var selectTime = date.getTime();//获取时间戳
    return selectTime;
}