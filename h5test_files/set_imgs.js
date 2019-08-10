$(function(){

    ////////////////////////////////////设置图测试
          
        // function img_page(page_id, img_content){
        //     for (var i=1;i<=5*10;i++)
        //     { 
        //         var td_ele = $('#page'+page_id).find("td[numberid="+i+"]");
        //         // console.log(td_ele);

        //         var img_content = '<img style="display: block; height:100%;weight:100%;" draggable="false" src="'+img_file_list[0]+'">';

        //         $(td_ele).html(img_content[0]);

        //     }
        // }

        
        function set_img2page(img_num_list, page_id){
            var dir = 'imgs/';

                // img_file_list=[]
            for (var i=0;i<=img_num_list.length;i++){ 
                order = img_num_list[i];
                var file_name = dir+'img'+order+'.png';
                // console.log(file_name);
                // img_file_list.push(file_name);
                var td_ele = $('#page'+page_id).find("td[numberid="+i+"]");
                var img_content = '<img style="display: block; height:100%;weight:100%;" draggable="false" src="'+file_name+'">';
                $(td_ele).html(img_content);

            }
        }
            

        img_num_list = [3,2,1,5,4,2,5,3,4,1,5,2,3,1,4,3,1,2,4,5,2,1,3,5,4,1,4,5,3,2,1,3,4,2,5,4,2,3,5,1,4,5,2,1,3,5,2,1,4,3]
        set_img2page( img_num_list,11);

        img_num_list2= [1,5,3,4,2,5,3,4,1,2,3,5,1,2,4,1,5,2,4,3,4,1,3,2,5,1,2,4,5,3,2,1,4,5,3,2,4,3,1,5,5,2,1,3,4,5,2,1,3,4]
        set_img2page(img_num_list2,14);


    ////////////////////////////////////设置汉字测试

        
        function set_hanzi2page(img_num_list, page_id, prefix,suffix, format){
            // console.log(img_num_list);
                // img_file_list=[]
            for (var i=0;i<=img_num_list.length;i++){ 
                content = img_num_list[i];
                var file_name = prefix+content+suffix;
                // console.log(file_name);
                // img_file_list.push(file_name);
                var td_ele = $('#page'+page_id).find("td[numberid="+i+"]");
                $(td_ele).html(file_name);

            }
        }
        var hanzi_content = ['不','我','他','大','国','会','你','过','后','所','家','方','多','学','如','动','面','定','天','理','心','前','开','军','意','它','公','全','关','外','两','改','手','美','利','西','月','回','代','老','门','儿','东','水','真','义','入','平','气','别','打','电','目','直','命','队','展','眼','书','白','光','象','根','住','告','张','万','格','车','今','让','运']

        set_hanzi2page( hanzi_content, 16,'', '','');

        var hanzi_content2 = ['在','人','来','上','说','时','生','下','用','道','无','事','成','去','法','同','现','起','看','小','主','她','本','想','日','力','使','明','点','正','高','问','向','头','新','加','话','合','内','化','先','海','立','员','论','走','口','认','题','活','女','总','场','市','山','金','马','司','非','听','放','王','路','南','北','死','取','拉','领','清','带','争']

        set_hanzi2page(hanzi_content2, 17, '', '','');



    //////////////////////////////////设置数字
        ////////////////////////////////////数字1和2/////////////////////////////////////////////////////////
    function set_list2page(number_list, page_id){
        for (var i=0;i<=number_list.length;i++){ 

            number = number_list[i];
            // console.log(number);
            var td_ele = $('#page'+page_id).find("td[numberid="+i+"]");
            // console.log(td_ele);
                
            $(td_ele).html(number);

        }
    }

    number_list1 = [2,7,6,9,4,7,6,9,4,2,6,9,4,2,7,9,4,2,7,6,4,2,7,6,9,2,9,4,7,6,7,4,6,2,9,6,2,7,4,9,4,9,2,7,6,4,7,9,6,2]
    set_list2page(number_list1, 10);


number_list2=[6,4,9,2,7,2,9,4,9,2,6,7,4,9,2,7,2,6,9,4,9,7,4,6,2,7,9,6,4,2,7,9,2,6,4,9,6,7,2,4,9,4,6,2,7,6,7,2,4,9]
    set_list2page(number_list2, 13);


});
