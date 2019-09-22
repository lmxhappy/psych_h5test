
$(function(){
    $("button").click(function(){
//            var time = 10000;

        task_list = [[print_now_timestamp, 10000], [print_now_timestamp, 5000],[print_now_timestamp, 15000]];
        dotasks(task_list);

    });
});
////task_list是一个list。每个item是一个函数call_func和一个相应的保持时长
//function dotasks(task_list){
//    var dtd_dict = {}
//
//    var previous_dtd = null;
//    for(var i=0;i<task_list.length;i++){
//        var task = task_list[i];
//        var task_callfunc = task[0];
//        var task_timelen = task[1];
//
//        //第一次不需要等待，后面都需要等待
//        if(i == 0){
//            console.log("here");
//            task_callfunc();
//            var dtd = pass_time(task_timelen);
//            dtd_dict[i]= dtd;
//        }else{
//            console.log(i);
//            previous_dtd = dtd_dict[i-1];
//            console.log(previous_dtd);
//            console.log(dtd_dict);
//            $.when(previous_dtd).done(function(){
//                task_callfunc();
//                var dtd = pass_time(task_timelen);
////                previous_dtd = dtd;
////                console.log(previous_dtd);
//                dtd_dict[i]= dtd;
//            });
//        }
//    }
//}


//task_list是一个list。每个item是一个函数call_func和一个相应的保持时长
function dotasks(task_list){
    var dtd_dict = {}

    var previous_dtd = null;
    if(task_list.length<=0){
        console.log("task_list 空了");
        return;
    }

    var task = task_list[0];
    var task_callfunc = task[0];
    var task_timelen = task[1];


    task_callfunc();
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