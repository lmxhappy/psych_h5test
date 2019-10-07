
function go_next_page(this_ele_id){
            //1 隐藏本页
            $("#page"+this_ele_id).parent().removeClass("z-current");
            $("#page"+this_ele_id).find("li").hide();

            //2 到下一页
            var next_ins = getNextPageId();
            console.log(next_ins);

            var next_ele_id = 0;
            if(typeof(next_ins)==="object"){
//                alert('object');
                next_ele_id = next_ins[0];
                callback_func = next_ins[1];
                callback_func();
            }else{
                next_ele_id = next_ins;
            }
             $("#page"+next_ele_id).parent().addClass("z-current");
            $("#page"+next_ele_id).find("li").show();
            console.log("正在展示第"+next_ele_id+"页");


            return next_ele_id;
}


// num 就是1个页面；2就是两个页面；
function control_show(this_ele_id, num){

    //从9页跳转到0页
    var next_ele_id = null;
    var task1 = function(){
         go_next_page(this_ele_id);
    };

    task_list = [];
    nextPageList = listNextPageId(num);
    console.log(nextPageList);
    for(var i = 0;i<nextPageList.length;i++){
        next_ele_id = nextPageList[i];

        var task = function(this_ele_id, next_ele_id){
            //1 隐藏本页
            $("#page"+this_ele_id).parent().removeClass("z-current");
            $("#page"+this_ele_id).find("li").hide();

             $("#page"+next_ele_id).parent().addClass("z-current");
            $("#page"+next_ele_id).find("li").show();
        };

        console.log(task);

        var task_time = next_ele_id in page_show_time_dict?page_show_time_dict[next_ele_id]:default_show_time;

        task_list.push([task, this_ele_id, next_ele_id, task_time]);

        this_ele_id = next_ele_id;

    }

     console.log(JSON.stringify(task_list));
     dotasks(task_list);

//     移动一下当前指针
     goNstep(nextPageList.length);
}


// num 就是1个页面；2就是两个页面；
function control(this_ele_id, num, timelen){
    console.log(timelen);
     wait_func(timelen, numberTest).done(function(){
             console.log("哈哈，成功了！");
            endUp();

//            tmp_id = getNextPageId();
           go_next_page(this_ele_id);


            if(num <=1){
                return;
            }{


                var next_ins = getNextPageId();
                console.log(next_ins);

                var next_ele_id = 0;
                if(typeof(next_ins)==="object"){
    //                alert('object');
                    next_ele_id = next_ins[0];
                    callback_func = next_ins[1];
                    callback_func();
                }else{
                    next_ele_id = next_ins;
                }

                // 毫秒数
                page_show_time = next_ele_id in page_show_time_dict?page_show_time_dict[tmp_id]:default_show_time;
                if(next_ele_id==0)
                {
                    page_show_time=1000;
                }

                control(next_ele_id, num-1, page_show_time);
            }

            
        })
}

// num 就是1个页面；2就是两个页面；
function control_page_show( timelen){
    console.log(timelen);
     wait_func(timelen, numberTest).done(function(){
             console.log("哈哈，成功了！");
            endUp();


//            $("#page"+this_ele_id).parent().removeClass("z-current");
//            $("#page"+this_ele_id).find("li").hide();


        })
}

function pipeline(timeout, preAction, nextAction){
    preAction();
    wait(timeout).done(function(){
             console.log("哈哈，成功了！");
            nextAction();    
    })
}

function showVoidPage(){
    // $(".z-current").removeClass("z-current");
    // $(".z-current").find("li").hide();
   $("#page10").parent().removeClass("z-current");
    $("#page10").find("li").hide();

    $("#page0").parent().addClass("z-current");
    $("#page0").find("li").show();

    console.log("show void page");

                    
}

function hideVoidPage(){
    $("#page0").parent().removeClass("z-current");
    $("#page0").find("li").hide();

    $("#page10").parent().addClass("z-current");
    $("#page10").find("li").show();

    console.log("hide void page");
}
// $("#page11").parent().bind('cssClassChanged', function(){ alert("done") });

// 10数字，12图，13数字，14图
//27是朗读的说明页面，后面要跟page0（1秒的空屏）,18是一个介绍
// 20、21默读练习，前面是page0，后面是page18
//12后面要第二个读数测试，要有一个说明页面，所以插入18
// 10、101是第一次数字，前者显示用，后者点选用。
//23是默读的题目页面
page_id_list =[1,2,3,4,5,6,7,8,9,0,10,101, 11,0, 12,121,[18, numberRead2_callback_func],0, 13,131, [18,pic2_explain_callback],0, 14,141, 15,0,16,161, [18,wordRead2_callback],0,17,171, [18,finish_first_test], 19, 0,0,20,21,[18, modu_callback],23,24,25,26,27,0,0,32,33,[18, langdu_callback], 28,29,30,31,34];

//当前显示的是index是0的，即page1，所以下一个是index为1的page
var cur_page_list_index = 1;
console.log(cur_page_list_index);

//默认20秒
default_show_time = 20000;
page_show_time_dict = {0:1000, 10:10000, 11:20000, 12:20000, 13:10000, 14:20000, 16:15000, 17:15000};

//往后走了n步
function goNstep(num){
    cur_page_list_index += num;

}
//有副作用
function getNextPageId()
{
//    console.log(cur_page_list_index);

    if(cur_page_list_index>=page_id_list.length){
        return -1;
    }

    cur_page_list_index +=1;
     next_page_id = page_id_list[cur_page_list_index];

    return    next_page_id;
}

//没有副作用
function nextPageId()
{
//    console.log(cur_page_list_index);

    if(cur_page_list_index>=page_id_list.length){
        return -1;
    }

    next_page_id = page_id_list[cur_page_list_index+1];
    return    next_page_id;
}

//没有副作用
// num接下来的几个
function listNextPageId(num){
//    console.log(cur_page_list_index);
    var nextPageList = []
    for(var i = 0;i<num;i++){
        if(cur_page_list_index>=page_id_list.length){
            break;
        }

        next_page_id = page_id_list[cur_page_list_index+i+1];
        nextPageList.push(next_page_id)    ;

    }

    return nextPageList;

}
function getComplexNextPageId()
{
    var next_ins = getNextPageId();
            console.log(next_ins);
            var next_ele_id = 0;
            if(typeof(next_ins)==="object"){
//                alert('object');
                next_ele_id = next_ins[0];
                callback_func = next_ins[1];
                callback_func();
            }else{
                next_ele_id = next_ins;
            }

      return next_ele_id;
}

function showPage(pageId){
        $('#page'+pageId).parent().addClass("z-current");
        $('#page'+pageId).find("li").show();

        this_page_index = page_id_list.indexOf(pageId);
        console.log('本页的index'+this_page_index);

        cur_page_list_index = this_page_index;
}

function langdu_callback(){
    $('#page18 li[ctype="7"] span').html("练习结束，请点击开始，进入正式实验。");
}

function modu_callback(){
    langdu_callback();
}

function numberRead2_callback_func(){
    $('#page18 li[ctype="7"] span').html("请继续完成快速读数测试二");
}

function pic2_explain_callback(){
    $('#page18 li[ctype="7"] span').html("请继续完成快速读图测试二");

}

function finish_first_test(){
    $('#page18 li[ctype="7"] span').html("本测试结束，请进行下一测试。");

}
function pic_control_callback(){
//图片、数字、图片

                    choiceWindowTime = 20000;
//                    control(next_ele_id, 1, choiceWindowTime);
                    control_page_show(choiceWindowTime);
}

function wordRead2_callback(){
    $('#page18 li[ctype="7"] span').html("请继续完成快速读字表测试二。");

}

function isContinueShow(ele_id){
    if([9, 11,18, 15,19,27].indexOf(ele_id) >=0 ){
        var nextId = nextPageId();
        if(ele_id == 18 && [19, 23, 28].indexOf(nextId)>= 0){
            return false;
        }
        return true;
    }

    return false;
}

function recordtime(){
   var nextId = nextPageId();

//   23默读、28朗读
   if(23===nextId){
        var d = new Date();
        var n = d.getTime();
        $("#modu-content").attr("start_time", n);
   }

   if(28 ===nextId){
        var d = new Date();
        var n = d.getTime();
        $("#langdu-content").attr("start_time", n);
   }
}
function isContinueTwoShow(ele_id){
    if([27].indexOf(ele_id) >=0 ){
//        var nextId = nextPageId();
//        if(ele_id == 18 && [19, 23, 28].indexOf(nextId)>= 0){
//            return false;
//        }
        return true;
    }

    return false;
}

function continue_next_page(this_ele){
        //获得当前显示的页面的id
            var ele_id = $(this_ele).parents(".m-img").attr('id');
            ele_id = parseInt(ele_id.substr(4));

            if(isContinueShow(ele_id)){
                console.log("连续播放3页")

                control_show(ele_id, 3);
                return;
            }else{
                console.log("不！！！连续播放3页")
            }

//            为了默读、朗读第一个题的时间
            recordtime();

//            if(isContinueTwoShow(ele_id)){
//                  console.log("连续播放2页")
//                control_show(ele_id, 2);
//
//            }else{
//                              console.log("不！！！连续播放2页")
//            }

            $("#page"+ele_id).parent().removeClass("z-current");
            $("#page"+ele_id).find("li").hide();

            var next_ins = getNextPageId();
            console.log(next_ins);

            var next_ele_id = 0;
            if(typeof(next_ins)==="object"){
//                alert('object');
                next_ele_id = next_ins[0];
                callback_func = next_ins[1];
                callback_func();
            }else{
                next_ele_id = next_ins;
            }
            console.log("next_ele_id:"+next_ele_id);

            $("#page"+next_ele_id).parent().addClass("z-current");
            $("#page"+next_ele_id).find("li").show();

//            switch(next_ele_id) {
//                case 0:
//                    if(ele_id==9){
////                        上面的逻辑已经执行了，就不再重复执行
//                        break;
//                    }
//
//                    $("#page0").parent().addClass("z-current");
//                    $("#page0").find("li").show();
////                    alert("0");
//                    control(next_ele_id, 1,1000);
//                    break;
////                 case 10:
////                    // 第一次显示数字
////
////                    //空屏
////                    // console.log('空屏前');
////                    // pipeline(10, showVoidPage, hideVoidPage);
////                    // console.log("空屏后");
////
////                    choiceWindowTime = 20000;
////
////                    $("#page"+next_ele_id).parent().addClass("z-current");
////                    $("#page"+next_ele_id).find("li").show();
////                    alert("10");
////                    control(next_ele_id, 1, choiceWindowTime);
////                    break;
//
//                case 16:
//                    choiceWindowTime = 20000;
//
//                    control(next_ele_id, 2, choiceWindowTime);
//                    break;
//                 default:
//                    $("#page"+next_ele_id).parent().addClass("z-current");
//                    $("#page"+next_ele_id).find("li").show();
//                    break;
//            }
}

$(function(){

        showPage(31);

        var ele = $('#nr').find("li[ctype='7']");
        ele.css("width", "100%");

        $('#nr').find("li[ctype='p']").click(function(){
            //获得当前显示的页面的id
            var ele_id = $(this).parents(".m-img").attr('id');
            ele_id = parseInt(ele_id.substr(4));


            $("#page"+ele_id).parent().removeClass("z-current");
            $("#page"+ele_id).find("li").hide();

            var next_ele_id = ele_id-1;

            $("#page"+next_ele_id).parent().addClass("z-current");
            $("#page"+next_ele_id).find("li").show();

            cur_page_list_index--;
        });

//        $('#nr').find("button[type='submit']").click(function(){
//            alert("dfdfd");
//        });
        //以下代码是往前（下一个页面走）
        $('#nr').find("li[ctype='l'], .go-next-page").click(function(){ //,button[type='submit']
            continue_next_page(this);
        });

        $('#modu_read_finish').click(function(){ //,button[type='submit']
            var d = new Date();
            var n = d.getTime();
            $("#modu-content").attr("finish_time", n);
            continue_next_page(this);
        });




//         $('#nr').find("button[type='submit']").click(function(e){ //,
//
//
//                                  e.preventDefault();
//                                  event.stopPropagation();
//
//            continue_next_page(this);
//        });

});