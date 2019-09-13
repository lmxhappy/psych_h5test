
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
                // 毫秒数
                page_show_time = tmp_id in page_show_time_dict?page_show_time_dict[tmp_id]:default_show_time;
                if(tmp_id==0&& num-1<2)
                {
                    num=3;
                }
                control(tmp_id, num-1, page_show_time);
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
page_id_list =[1,2,3,4,5,6,7,8,9,0,10,11,0, [12, pic_control_callback],[18, numberRead2_callback_func],0, 13,[18,pic2_explain_callback],0, 14,15,16,[18,wordRead2_callback],17,[18,finish_first_test],19,0,20,21,[18, modu_callback],23,24,25,26,27,0,32,33,[18, langdu_callback], 28,29,30,31,34];

//当前显示的是index是0的，即page1，所以下一个是index为1的page
var cur_page_list_index = 1;
console.log(cur_page_list_index);

//默认20秒
default_show_time = 20000;
page_show_time_dict = {0:1000, 10:20000, 11:20000, 12:20000, 13:20000, 14:20000};


function getNextPageId()
{
    console.log(cur_page_list_index);

    if(cur_page_list_index>=page_id_list.length){
        return -1;
    }

    next_page_id = page_id_list[cur_page_list_index];
    cur_page_list_index +=1;
    
    return    next_page_id;
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
        cur_page_list_index = this_page_index+1;
        console.log(cur_page_list_index);
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
    $('#page18 li[ctype="7"] span').html("本测试结束，请进行下一测试。");

}

$(function(){

        showPage(1);

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


        //以下代码是往前（下一个页面走）
        $('#nr').find("li[ctype='l']").click(function(){
            //获得当前显示的页面的id
          var ele_id = $(this).parents(".m-img").attr('id');
            ele_id = parseInt(ele_id.substr(4));
            // var next_ele_id =ele_id+1;
            var next_ins = getNextPageId();
            console.log(next_ins);
            
            $("#page"+ele_id).parent().removeClass("z-current");
            $("#page"+ele_id).find("li").hide();

            var next_ele_id = 0;
            if(typeof(next_ins)==="object"){
//                alert('object');
                next_ele_id = next_ins[0];
                callback_func = next_ins[1];
                callback_func();
            }else{
                next_ele_id = next_ins;
            }
//            console.log(next_ele_id);
            console.log("next_ele_id:"+next_ele_id);

//            li_id = $(this).attr('id');
//            if(li_id == 'inside_9701325528'){
//                var next_ele_id =ele_id-1;
//
//            }
            switch(next_ele_id) {
                case 0:
                    $("#page0").parent().addClass("z-current");
                    $("#page0").find("li").show();
//                    alert("0");
                    control(next_ele_id, 1,1000);
                    break;
                 case 10:
                    // 第一次显示数字

                    //空屏
                    // console.log('空屏前');
                    // pipeline(10, showVoidPage, hideVoidPage);
                    // console.log("空屏后");

                    choiceWindowTime = 20000;
     
                    $("#page"+next_ele_id).parent().addClass("z-current");
                    $("#page"+next_ele_id).find("li").show();
                    alert("10");
                    control(next_ele_id, 1, choiceWindowTime);
                    break;
//                 case 12:
//                    //图片、数字、图片
//
//                    // sleep(1000);
//                    choiceWindowTime = 20000;
//                    control(next_ele_id, 1, choiceWindowTime);
//                    break;
                case 16:
                    choiceWindowTime = 20000;

//                    alert("16");
                    control(next_ele_id, 2, choiceWindowTime);

                 default:
//                    alert("default");
                    
                    $("#page"+next_ele_id).parent().addClass("z-current");
                    $("#page"+next_ele_id).find("li").show();
                    break;
            } 
        });
});