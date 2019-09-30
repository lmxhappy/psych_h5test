
//设置页面某个元素的html
function set_sentences(page_id, sentence, div_loc){

        var td_ele = $('#page'+page_id).find(div_loc);
        // console.log(td_ele);

        $(td_ele).html(sentence);
}


$(function(){
    ///////////////////////////////////////默读///////////////////////////////////////////////////
        ///////////////////////////////////////默读练习/////////////////////////

    // 这是替换的。原来是有显示的
    modu_test_sentences = ['这只鸵鸟飞的很高','天气晴朗,适合去公园游玩'];
    set_sentences(20, modu_test_sentences[0], "#modu-test-content");

    // 下一个要显示的index
    test_cur_index = 1;


    // 对错的两个按钮绑定click事件。
    // 第21页
    //20、21组成一个loop，两次loop
    //跳出这个循环
    $(".modu_test").click(function(){
        // alert("dfdf");
        var result = $(this).attr('result');
        var modu_test_content = $('#page20').find("#modu-test-content").html();

//        收集显示和答题结果
        collector.push2ModuPractice(modu_test_content, result);
        console.log(collector);
        console.log('默读');


        //跳出这个循环，进入循环后的下一页——22页
        if(test_cur_index >= modu_test_sentences.length){
                    // test_next_page_id = 22;
//                    test_next_page_id = getNextPageId();
                    var next_ins = getNextPageId();
                    var next_ele_id = 0;
                    if(typeof(next_ins)==="object"){
//                        alert('object');
                        next_ele_id = next_ins[0];
                        callback_func = next_ins[1];
                        callback_func();
                    }else{
                        next_ele_id = next_ins;
                    }

                    console.log(next_ele_id);
                    test_next_page_id= next_ele_id;

                    $("#page21").parent().removeClass("z-current");
                    $("#page21").find("li").hide();
                    $("#page"+test_next_page_id).parent().addClass("z-current");
                    $("#page"+test_next_page_id).find("li").show();
                    return;

        }
        
        console.log("句子已经显示完了");
        $("#page21").parent().removeClass("z-current");
        $("#page21").find("li").hide();
        
        $("#page20").parent().addClass("z-current");
        $("#page20").find("li").show();
        

        //主进度条，后退一格
        cur_page_list_index--;

        set_sentences(20, modu_test_sentences[test_cur_index], "#modu-test-content");
        test_cur_index +=1;
    });

        ///////////////////////////////////////默读正式/////////////////////////

    // 这是替换的。原来是有显示的
    // modu_sentences = ['这只鸵鸟飞的很高','天气晴朗,适合去公园游玩', '的地方打发算法算法','地方打发方法------'];
    modu_sentences = ['牛顿发明了电灯','十月一号是国庆节','香蕉和菠菜都是水果','中国国旗是五星红旗','中国和美国是相邻的','课本大多数是纸质的','小鸡用四条腿在地上跑','金鱼摇摆尾巴在水里游','山羊最喜欢吃新鲜的竹子','天上的大雁排成了人字形','丁丁正在用小刀削自动铅笔','夏天田地里很多青蛙在叫','早晨,太阳从西边的群山间升起','春节是个合家团圆的日子','这河水很脏,能看清河底的石块','夜晚,湖面倒映着月亮的影子','他今天生日,妈妈给他买了块月饼','乐乐的小狗看到陌生人会狂叫','乌云密布,妈妈准备把被子拿出去晒晒','打雷了,不久就响起哗啦啦的雨点声','大家一边吃着元宵,一边欣赏着天上的月牙','端午节时,超市开始卖各式各样的粽子','这件男孩衣服真好看,尤其是裙子上的花边格外漂亮','大家都说新发的校服好看,女生裙子的颜色漂亮'];
    modu_sentences = randomList(modu_sentences);
    collector.setModuShow(modu_sentences);

    set_sentences(23, modu_sentences[0], "#modu-content");

    // 下一个要显示的index
    cur_index = 1;

    next_page_id = 25;
    $(".modu").click(function(){

        var result = $(this).attr('result');
        var td_ele = $('#page23').find("#modu-content");
        var modu_content = $(td_ele).html();

//        收集显示和答题结果
        collector.push2Modu(modu_content, result);
        console.log(collector);
        console.log('默读');

        // alert("ddffd========");
        // 下一页
        // 跳出这个循环，进入循环后的下一页——25页
        if(cur_index >= modu_sentences.length){

                    test_next_page_id = getNextPageId();

                    $("#page24").parent().removeClass("z-current");
                    $("#page24").find("li").hide();
                    $("#page"+next_page_id).parent().addClass("z-current");
                    $("#page"+next_page_id).find("li").show();
                    return;
        }
        
        console.log("句子已经显示完了");
        $("#page24").parent().removeClass("z-current");
        $("#page24").find("li").hide();
        
        $("#page23").parent().addClass("z-current");
        $("#page23").find("li").show();

       //主进度条，后退一格
        cur_page_list_index--;

        set_sentences(23, modu_sentences[cur_index], "#modu-content");
        cur_index +=1;
    });
      ///////////////////////////////////////默读///////////////////////////////////////////////////
          ///////////////////////////////////////朗读练习/////////////////////////

    // 这是替换的。原来是有显示的
    langdu_test_sentences = ['土豆是黄色的','叔叔在南极拍了很多绿色植物的照片'];
    set_sentences(32, langdu_test_sentences[0], "#langdu-test-content");

    // 下一个要显示的index
    langdu_test_cur_index = 1;


    // 对错的两个按钮绑定click事件。
    //32是朗读练习
    //32、33组成一个loop，两次loop
    //跳出这个循环
    $(".langdu_test").click(function(){
        // alert("dfdf");
        var result = $(this).attr('result');
        var langdu_test_content = $('#page32').find("#langdu-test-content").html();

//        收集显示和答题结果
        collector.push2LangduPractice(langdu_test_content, result);
        console.log(collector);
        console.log('默读');

        //跳出这个循环，进入循环后的下一页——22页
        if(langdu_test_cur_index >= langdu_test_sentences.length){
                    // test_next_page_id = 22;
//                    test_next_page_id = getNextPageId();
                     var next_ins = getNextPageId();
                    var next_ele_id = 0;
                    if(typeof(next_ins)==="object"){
//                        alert('object');
                        next_ele_id = next_ins[0];
                        callback_func = next_ins[1];
                        callback_func();
                    }else{
                        next_ele_id = next_ins;
                    }

                    test_next_page_id= next_ele_id;
                    console.log('朗读练习'+test_next_page_id);
                    $("#page33").parent().removeClass("z-current");
                    $("#page33").find("li").hide();
                    $("#page"+test_next_page_id).parent().addClass("z-current");
                    $("#page"+test_next_page_id).find("li").show();
                    return;

        }

        console.log("句子已经显示完了");
        $("#page33").parent().removeClass("z-current");
        $("#page33").find("li").hide();

        $("#page32").parent().addClass("z-current");
        $("#page32").find("li").show();


        //主进度条，后退一格
        cur_page_list_index--;

        set_sentences(32, langdu_test_sentences[langdu_test_cur_index], "#langdu-test-content");
        langdu_test_cur_index +=1;
    });
        ///////////////////////////////////////朗读正式/////////////////////////
  // 这是替换的。原来是有显示的
    // langdu_sentences = ['这只鸵鸟飞的很高','天气晴朗,适合去公园游玩', '的地方打发算法算法','地方打发方法------'];
    var langdu_sentences = ['老虎是食草动物','安徒生喜欢写童话','儿童节是七月一号','盲人的听力比较好','一元钱可以换十二角','豹子跑起来速度很快','小兔子爬树能力很强','小兔子喜欢吃胡萝卜','日常穿的衣服是木头做的','一年有时有三百六十六天','冬日的池塘里开满了荷花','十块钱可以换成两个五块','鸟在飞行时靠耳朵辨别方向','老师用红色水笔批改作业','小峰说他是二月三十号出生的','寒假可以去哈尔滨看冰雕','这太阳不错,可以看到了好多颗星星','有许多动物生活在热带雨林里','她性格内向,总喜欢和小朋友一起玩','瀑布从高处落下,飞溅起许多水沫','这只小花猫非常乖巧,总围着我脚边汪汪叫','快放学时,校门口站着许多接孩子的家长','放暑假了,小丽穿上漂亮的花棉袄去姥姥家玩','在生日聚会中,他把生日蛋糕分给每位朋友'];
    
    langdu_sentences = randomList(langdu_sentences);
    collector.setLangduShow(langdu_sentences);


    // 下一个要显示的index
    var langdu_cur_index = 1;

    /**
    @ page_list:[27,28,29]
    @ langdu_sentences: 要显示的集合
    @ langdu_cur_index: 现在的位置
     html_loc: html位置
    */
    first = 28;//click进入的，通过click事件进入的
    second = 29;//自动进入的。折返回28，从而形成一个循环
    third = 30;

   set_sentences(first, langdu_sentences[0], "#langdu-content");

    // 27、28循环多次
    //这是对28的一个截流，这返回头部
    //first就是头，也就是可以更加抽象，second就是尾巴，first就是头，third就是后面一个next
    $(".langdu").click(function(){
        // alert("ddffd========");
        // console.log(langdu_sentences);

        var result = $(this).attr('result');
        var td_ele = $('#page28').find("#langdu-content");
        var modu_content = $(td_ele).html();

        collector.push2Langdu(modu_content, result);
        console.log(collector);
        console.log('朗读');

//        console.log("句子已经显示完了");

        $("#page"+second).parent().removeClass("z-current");
        $("#page"+second).find("li").hide();

        // 下一页
        if(langdu_cur_index >= langdu_sentences.length){
                    

                    $("#page"+third).parent().addClass("z-current");
                    $("#page"+third).find("li").show();

                    return;
        }
        
        //或者回头部
        $("#page"+first).parent().addClass("z-current");
        $("#page"+first).find("li").show();
        
        //主进度条，后退一格
        cur_page_list_index--;

        set_sentences(first, langdu_sentences[langdu_cur_index], "#langdu-content");
        langdu_cur_index +=1;

    });

});