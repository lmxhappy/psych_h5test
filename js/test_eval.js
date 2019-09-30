

$(function(){

	var list = new List();
	$(".eval").click(function(){
		// alert("eval");

		var content = $(this).html();
		// console.log(list);
		if(list.contains(content)){
			list.remove(content);
		}else{
			list.append(content);
		}
		// console.log(list);
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
        collector.setEval(this_id, list.toString());


        list.clear();
        //提交数据
    });
});