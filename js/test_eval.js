

$(function(){

	var list = new List();
	$("fieldset input").each(function(){
//	    alert("set");
        $(this).click(function(){
             var label = $(this).attr('label');
//               alert(label);
//            var content = $(this).html();
            // console.log(list);
            if(list.contains(label)){
                list.remove(label);
            }else{
                list.append(label);
            }
             console.log(list);
        });
	});



    $(".eval_commit").click(function(){
//        // console.log("ddddddddddddddddddddddddd");
//        var ele = $(this).parents(".m-img");
//        // console.log(ele);
//        var pageId = ele.attr('id');
//        // console.log(pageId);
//
//         ele_id = parseInt(pageId.substr(4));
////        var next_ele_id =ele_id+1;
//        var next_ele_id = getComplexNextPageId();
//        // console.log(next_ele_id);
//
//        $("#page"+ele_id).parent().removeClass("z-current");
//        $("#page"+ele_id).find("li").hide();
//
//        $("#page"+next_ele_id).parent().addClass("z-current");
//        $("#page"+next_ele_id).find("li").show();

        continue_next_page(this);

        var this_id = $(this).attr('id');
        var eval_id = $(this).attr('evalid');
        collector.setEval(eval_id, list.toString());


        list.clear();
        //提交数据
    });
});