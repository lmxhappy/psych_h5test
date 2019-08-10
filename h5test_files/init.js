
// num 就是1个页面；2就是两个页面；
function control(next_ele_id, num){

     wait_func(choiceWindowTime, numberTest).done(function(){
             console.log("哈哈，成功了！");
            endUp();
            $("#page"+next_ele_id).parent().removeClass("z-current");
            $("#page"+next_ele_id).find("li").hide();
            
            tmp_id =next_ele_id +1;
            $("#page"+tmp_id).parent().addClass("z-current");
            $("#page"+tmp_id).find("li").show();
            console.log("正在展示第"+tmp_id+"页");

            if(num <=1){
                return;
            }{
                control(tmp_id, num-1);
            }

            
        })
}
// $("#page11").parent().bind('cssClassChanged', function(){ alert("done") });

$(function(){

        $('#page15').parent().addClass("z-current");
        $('#page15').find("li").show();

        var ele = $('#nr').find("li[ctype='7']");
        ele.css("width", "50%");

        $('#nr').find("li[ctype='l']").click(function(){
          var ele_id = $(this).parents(".m-img").attr('id');
            ele_id = parseInt(ele_id.substr(4));
            var next_ele_id =ele_id+1;
          
            li_id = $(this).attr('id');
            if(li_id == 'inside_9701325528'){
                var next_ele_id =ele_id-1;

            }
            $("#page"+ele_id).parent().removeClass("z-current");
            $("#page"+ele_id).find("li").hide();
            
            $("#page"+next_ele_id).parent().addClass("z-current");
            $("#page"+next_ele_id).find("li").show();
            if(next_ele_id==10||next_ele_id==13){
                // var defer = numberTest();
                //判断时间timer开启

                // numberTest();

                // wait(choiceWindowTime).done(function(){
                //      alert("哈哈，成功了！");
                //     endUp();
                // })

                // console.log(next_ele_id);

                wait_func(choiceWindowTime, numberTest).done(function(){
                     console.log("哈哈，成功了！");
                    endUp();
                    $("#page"+next_ele_id).parent().removeClass("z-current");
                    $("#page"+next_ele_id).find("li").hide();
                    
                    tmp_id =next_ele_id +1
                    $("#page"+tmp_id).parent().addClass("z-current");
                    $("#page"+tmp_id).find("li").show();
                    console.log("正在展示第"+tmp_id+"页");

                    wait_func(choiceWindowTime, numberTest).done(function(){
                         console.log("哈哈，成功了！");
                        endUp();
                        $("#page"+tmp_id).parent().removeClass("z-current");
                        $("#page"+tmp_id).find("li").hide();
                        
                        // 第13页
                        third_id =tmp_id +1
                        $("#page"+third_id).parent().addClass("z-current");
                        $("#page"+third_id).find("li").show();
                        console.log("正在展示第"+third_id+"页");
                
                    })
                })
            }


            if(next_ele_id==16){
                control(next_ele_id, 2);
            }

        });
});