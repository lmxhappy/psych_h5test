function num2filename(img_num_list){

    var dir = 'imgs/';
    img_file_list = [];
    for (var i = 0;i<img_num_list.length;i++){
        var num = img_num_list[i];
        var file_name = dir+'img'+num+'.png' ;
        img_file_list.push(file_name);
    }

    return img_file_list;
}


$(function(){

    ////////////////////////////////////设置图测试

//
//        function set_img2page(img_num_list, page_id){
//            var dir = 'imgs/';
//
//                // img_file_list=[]
//            for (var i=0;i<=img_num_list.length;i++){
//                order = img_num_list[i];
//                var file_name = dir+'img'+order+'.png';
//                // console.log(file_name);
//                // img_file_list.push(file_name);
//                var td_ele = $('#page'+page_id).find("td[numberid="+i+"]");
//                var img_content = '<img style="display: block; height:100%;weight:100%;" draggable="false" src="'+file_name+'">';
//                $(td_ele).html(img_content);
//
//            }
//        }
//          function set_img2page(img_num_list, page_id, col_num, row_num, prefix,suffix, format){
//            var tbody_content = '';
//            for(var i=0;i<row_num;i++){
//                var row_html = '<tr>';
//                for(var j=0;j<col_num;j++){
//                    var idx = (i+1)*(j+1)-1;
//
//                    img_num_index = img_num_list[idx]
//
//                    var col_html = '<td align="center" valign="middle" idx ="'+idx+'" img_num="'+img_num_index +'" class="">';
//                     var img_content = '<img style="display: block; height:100%;weight:100%;" draggable="false" src="'+file_name+'">';
//
//                    col_html += prefix++suffix;
//                    col_html += '</td>';
//
//                    row_html+= col_html;
//                }
//
//                row_html += '</tr> ';
//
//                tbody_content += row_html;
//            }
//
//             $('#page'+page_id).find("tbody").html(tbody_content);
//
//        }


        img_num_list = [3,2,1,5,4,2,5,3,4,1,5,2,3,1,4,3,1,2,4,5,2,1,3,5,4,1,4,5,3,2,1,3,4,2,5,4,2,3,5,1,4,5,2,1,3,5,2,1,4,3]
        img_file_list = num2filename(img_num_list);
//        set_hanzi2page( img_file_list,12);

        prefix =  '<img style="display: block; height:100%;weight:100%;" draggable="false" src="';
        suffix = '">';

        set_hanzi2page( img_file_list, 12, 10, 5, prefix, suffix,'');

        img_num_list2= [1,5,3,4,2,5,3,4,1,2,3,5,1,2,4,1,5,2,4,3,4,1,3,2,5,1,2,4,5,3,2,1,4,5,3,2,4,3,1,5,5,2,1,3,4,5,2,1,3,4]

        img_file_list2 = num2filename(img_num_list2);
        set_hanzi2page(img_file_list2,14, 10, 5, prefix, suffix, '');
        
        //图片点击
//        $("#imgs").find("td").click(function(){
//            $(this).css("border","2px green solid");
//        });

    ////////////////////////////////////设置汉字测试

        
        function set_hanzi2page(img_num_list, page_id, col_num, row_num, prefix,suffix, format){
            var tbody_content = '';
            for(var i=0;i<row_num;i++){
                var row_html = '<tr>';
                for(var j=0;j<col_num;j++){
                    var idx = (i+1)*(j+1)-1;

                    var col_html = '<td align="center" valign="middle" idx ='+idx+' class="">';

                    col_html += prefix+img_num_list[idx]+suffix;
                    col_html += '</td>';

                    row_html+= col_html;
                }

                row_html += '</tr> ';

                tbody_content += row_html;
            }

             $('#page'+page_id).find("tbody").html(tbody_content);

        }
        var hanzi_content = ['不','我','他','大','国','会','你','过','后','所','家','方','多','学','如','动','面','定','天','理','心','前','开','军','意','它','公','全','关','外','两','改','手','美','利','西','月','回','代','老','门','儿','东','水','真','义','入','平','气','别','打','电','目','直','命','队','展','眼','书','白','光','象','根','住','告','张','万','格','车','今','让','运']

        set_hanzi2page( hanzi_content, 16, 12, 6, '', '','');

        var hanzi_content2 = ['在','人','来','上','说','时','生','下','用','道','无','事','成','去','法','同','现','起','看','小','主','她','本','想','日','力','使','明','点','正','高','问','向','头','新','加','话','合','内','化','先','海','立','员','论','走','口','认','题','活','女','总','场','市','山','金','马','司','非','听','放','王','路','南','北','死','取','拉','领','清','带','争']

        set_hanzi2page(hanzi_content2, 17, 12, 6, '', '','');



    //////////////////////////////////设置数字
        ////////////////////////////////////数字1和2/////////////////////////////////////////////////////////
    // function set_list2page(number_list, page_id){
    //     for (var i=0;i<=number_list.length;i++){ 

    //         number = number_list[i];
    //         // console.log(number);
    //         var td_ele = $('#page'+page_id).find("td[numberid="+i+"]");
    //         // console.log(td_ele);
                
    //         $(td_ele).html(number);

    //     }
    // }

    number_list1 = [2,7,6,9,4,7,6,9,4,2,6,9,4,2,7,9,4,2,7,6,4,2,7,6,9,2,9,4,7,6,7,4,6,2,9,6,2,7,4,9,4,9,2,7,6,4,7,9,6,2]
    // set_list2page(number_list1, 10);
    set_hanzi2page( number_list1, 10, 10, 5, '', '','');


    number_list2=[6,4,9,2,7,2,9,4,9,2,6,7,4,9,2,7,2,6,9,4,9,7,4,6,2,7,9,6,4,2,7,9,2,6,4,9,6,7,2,4,9,4,6,2,7,6,7,2,4,9]
    // set_list2page(number_list2, 13);
    set_hanzi2page( number_list1, 13, 10, 5, '', '','');

    // alert("here");
    //数字点击
    // $(".numbers").find("td").click(function(){
    //     console.log($(this));
    //     alert("numbers");
    //     $(this).addClass('green-bg');
    // });

    //数字、汉字
    $('.numbers td').each(function(){
            // alert("each");
            $(this).click(function(){
                // console.log($(this));
                // alert("numbers");
                $(this).addClass('green-bg');
                $(this).css("border","2px green solid");

                var ele_id = $(this).parents(".m-img").attr('id');



                var index = $(this).attr('idx');
                var word = $(this).html();

                console.log($(this));
                ele_id = ele_id.substr(4);
                ele_id = parseInt(ele_id);
                console.log(ele_id+' '+index+' '+word);

                switch(ele_id){
                     case 10:
                         console.log("数字1");
                         console.log(collector);
                         collector.setNumRead1(index, word)  ;
                         break;
                     case 13:
                        console.log("数字2");
                        collector.setNumRead2(index, word);
                        break;
                     case 16:
                          console.log("汉字1");
                          collector.setwordRead1(index, word);
                          break;
                     case 17:
                          console.log("汉字2");
                          collector.setwordRead1(index, word);
                          break;
                     case 12:
                          console.log("图1");
                          collector.setPicRead1(index, word);

                            break;
                     case 14:
                            console.log("图2");
                            collector.setPicRead2(index, word);

                            break;
                }
            });

    });

});

