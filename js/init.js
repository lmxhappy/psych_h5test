
// num 就是1个页面；2就是两个页面；
function control(next_ele_id, num, timelen){
    console.log(timelen);
     wait_func(timelen, numberTest).done(function(){
             console.log("哈哈，成功了！");
            endUp();

            
            $("#page"+next_ele_id).parent().removeClass("z-current");
            $("#page"+next_ele_id).find("li").hide();
            
            // sleep(1000);

            // tmp_id =next_ele_id +1;
            tmp_id = getNextPageId();
            $("#page"+tmp_id).parent().addClass("z-current");
            $("#page"+tmp_id).find("li").show();
            console.log("正在展示第"+tmp_id+"页");

            if(num <=1&&tmp_id!=0){
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
page_id_list =[1,2,3,4,5,6,7,8,9,0,10,11,0, 12,0, 13,0, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,0,32,33,[18, langdu_callback], 28,29,30,31]
cur_page_list_index = 1;

//默认20秒
default_show_time = 20000;
page_show_time_dict = {0:1000, 10:20000, 11:20000, 12:20000, 13:20000, 14:20000}


function getNextPageId()
{
    if(cur_page_list_index>=page_id_list.length){
        return -1;
    }

    next_page_id = page_id_list[cur_page_list_index];
    cur_page_list_index +=1;
    
    return    next_page_id;
}
function showPage(pageId){
        $('#page'+pageId).parent().addClass("z-current");
        $('#page'+pageId).find("li").show();

        cur_page_list_index = page_id_list.indexOf(pageId);
}

function langdu_callback(){
    $("#page18").find("span").html("练习结束，请点击开始，进入正式实验。");
    alert("langdu_callback");
}


$(function(){

        showPage(27);

        var ele = $('#nr').find("li[ctype='7']");
        ele.css("width", "100%");

        $('#nr').find("li[ctype='l']").click(function(){
          var ele_id = $(this).parents(".m-img").attr('id');
            ele_id = parseInt(ele_id.substr(4));
            // var next_ele_id =ele_id+1;
            var next_ins = getNextPageId();
            var next_ele_id = 0;
            if(typeof(next_ins)==="object"){
                alert('object');
                next_ele_id = next_ins[0];
                callback_func = next_ins[1];
                callback_func();
            }else{
                next_ele_id = next_ins;
            }
            console.log(next_ele_id);

            li_id = $(this).attr('id');
            if(li_id == 'inside_9701325528'){
                var next_ele_id =ele_id-1;

            }
            
            $("#page"+ele_id).parent().removeClass("z-current");
            $("#page"+ele_id).find("li").hide();
            console.log("next_ele_id:"+next_ele_id);

            switch(next_ele_id) {
                case 0:
                    $("#page0").parent().addClass("z-current");
                    $("#page0").find("li").show();
                    control(next_ele_id, 2,1000);
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
                    control(next_ele_id, 1, choiceWindowTime);
                    break;
                 case 12:
                    //图片、数字、图片

                    // sleep(1000);
                    choiceWindowTime = 20000;
                    control(next_ele_id, 3, choiceWindowTime);
                    break;
                case 16:
                                    choiceWindowTime = 20000;

                    control(next_ele_id, 2, choiceWindowTime);

                 default:
                    
                    
                    $("#page"+next_ele_id).parent().addClass("z-current");
                    $("#page"+next_ele_id).find("li").show();
                    break;
            } 
        });
});