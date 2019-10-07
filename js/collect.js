class Collector{
    constructor() {

		// 个人信息
	    this.personal = new Dictionary();

	    //第一次读数的索引和具体数字
	    this.numRead1_index = -1;
	    this.numRead1_num = -1;

	    //第二次读数的索引和具体数字
	    this.numRead2_index = -1;
	    this.numRead2_num = -1;

	    // 第一次读图的索引和图的索引
	    this.picRead1_index = -1;
	    this.picRead1_img_index = -1;

	    // 第二次读图的索引和图的索引
		this.picRead2_index = -1;
	    this.picRead2_img_index = -1;


	    //记录点击哪些字
//	    最后一个字
	    this.wordRead1_index = -1;
	    this.wordRead1_word = '';
	    //w声母的字
	    this.wwords1 = [];

	    //记录点击哪些字
	    //	    最后一个字
	    this.wordRead2_index = -1;
	    this.wordRead2_word = '';
//	    w声母的字
	    this.wwords2 = [];

	    // 记录默读句子的答案
	    this.modu_pratice = new Dictionary();
	    //显示的一个列表
	    this.modu_show = [];
	    this.modu = new Dictionary();
	    // 记录默读评估答案
//	    this.modu_eval = new Dictionary();

	    // 记录朗读句子的答案
	    this.langdu_practice = new Dictionary();
	    this.langdu_show = [];
	    this.langdu = new Dictionary();


	    // 记录朗读评估答案
	    //默读和朗读分别有2次评估。分别标记为1-1、1-2、2-1和2-2
	    this.eval = new Dictionary();
//	    this.eval1 = new Dictionary();
//	    this.eval2 = new Dictionary();
    }

    toDict(){
        var dict={

            // 个人信息
            'personal':this.personal.toDict(),

            //第一次读数的索引和具体数字
            'numRead1_index': this.numRead1_index,
            'numRead1_num': this.numRead1_num,

            //第二次读数的索引和具体数字
            'numRead2_index':this.numRead2_index,
            'numRead2_num':this.numRead2_num,

            // 第一次读图的索引和图的索引
            'picRead1_index':this.picRead1_index,
            'picRead1_img_index':this.picRead1_img_index,

            // 第二次读图的索引和图的索引
            'picRead2_index':this.picRead2_index,
            'picRead2_img_index':this.picRead2_img_index,


            //记录点击哪些字
            'wordRead1_index':this.wordRead1_index,
            'wordRead1_word':this.wordRead1_word,
            //w声母的字
            'wwords1':this.wwords1,

            //记录点击哪些字
            'wordRead2_index':this.wordRead2_index,
            'wordRead2_word':this.wordRead2_word,
    //	    w声母的字
            'wwords2':this.wwords2,

            // 记录默读句子的答案
            'modu_pratice':this.modu_pratice.toDict(),
            //显示的一个列表
            'modu_show':this.modu_show,
            'modu':this.modu.toDict(),
            // 记录默读评估答案

            // 记录朗读句子的答案
            'langdu_practice':this.langdu_practice.toDict(),
            'langdu_show':this.langdu_show,
            'langdu':this.langdu.toDict(),


            // 记录朗读评估答案
            'eval':this.eval.toDict()
        };
        return dict;

    }

    toJson(){
        var dict = this.toDict();
        var jsonStr = JSON.stringify(dict);
        return jsonStr;
    }
    setPersonal(sex, age, phone, wechat, alipay, mail,  province, city, zone){
    	this.personal.add('sex', sex);
    	this.personal.add('age', age);
    	this.personal.add('phone', phone);
    	this.personal.add('wechat', wechat);
    	this.personal.add('alipay', alipay);
    	this.personal.add('mail', mail);
    	this.personal.add('province', province);
    	this.personal.add('city', city);
    	this.personal.add('zone', zone);
    }

    setNumRead1(numRead1_index, numRead1_num){
    		    //第一次读数的索引和具体数字
	    this.numRead1_index = numRead1_index;
	    this.numRead1_num = numRead1_num;
    }

     setNumRead2(numRead2_index, numRead2_num){
    		    //第一次读数的索引和具体数字
	    this.numRead2_index = numRead2_index;
	    this.numRead2_num = numRead2_num;
    }

    setPicRead1(picRead1_index, picRead1_img_index){
    	    	    // 第一次读图的索引和图的索引
	    this.picRead1_index = picRead1_index;
	    this.picRead1_img_index = picRead1_img_index;
    }

	setPicRead2(picRead2_index, picRead2_img_index){
			    // 第二次读图的索引和图的索引
			this.picRead2_index = picRead2_index;
		    this.picRead2_img_index = picRead2_img_index;
	}

	setwordRead1(index, word){

		 //记录点击哪些字
	    this.wordRead1_index = index;
	    this.wordRead1_word = word;
	}

    add_wwords1(index, word){
        this.wwords1.push([index, word]);
    }

    add_wwords2(index, word){
        this.wwords2.push([index, word]);
    }

	setwordRead2(index, word){
	    //记录点击哪些字
	    this.wordRead2_index = index;
	    this.wordRead2_word = word;
	}

    //	朗读显示的列表
	setModuShow(llist){
	    // 记录朗读句子的答案
	    this.modu_show = llist;
	 }

	setModu(dict){
	    // 记录默读句子的答案
	    this.modu = dict;
	}

	push2ModuPractice(sentence, choice){
		this.modu_pratice.add(sentence,choice);

	}

	push2Modu(sentence, choice, start_time, finish_time){
		this.modu.add(sentence,[choice, start_time, finish_time]);

	}

//	朗读显示的列表
	setLangduShow(llist){
	    // 记录朗读句子的答案
	    this.langdu_show = llist;
	 }

	setLangdu(dict){
	    // 记录朗读句子的答案
	    this.langdu = dict;
	 }

	push2LangduPractice(sentence, choice){
		this.langdu_practice.add(sentence,choice);
	}

	push2Langdu(sentence, choice, start_time, finish_time){
		this.langdu.add(sentence,[choice, start_time, finish_time]);

	}

	setEval(key, value){
	    // 记录默读评估答案
	    this.eval.add(key, value);
	}

//	setEval1(key, value){
//	    // 记录默读评估答案
//	    this.eval1.add(key, value);
//	}
//
//	setEval2(key, value){
//	    // 记录默读评估答案
//	    this.eval2.add(key, value);
//	}
}

