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
	    this.wordRead1 = new List();
	    //记录点击哪些字
	    this.wordRead2 = new List();

	    // 记录默读句子的答案
	    this.modu = new Dictionary();
	    // 记录默读评估答案
	    this.modu_eval = new Dictionary();

	    // 记录朗读句子的答案
	    this.langdu = new Dictionary();
	    // 记录朗读评估答案
	    this.langdu_eval = new Dictionary();
    }

    setPersonal(sex, age, phone, wechat, mail, city){
    	this.personal.add('sex', sex);
    	this.personal.add('age', age);
    	this.personal.add('phone', phone);
    	this.personal.add('wechat', wechat);
    	this.personal.add('mail', mail);
    	this.personal.add('city', city);
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

	setwordRead1(list){

		 //记录点击哪些字
	    this.wordRead1 = list;
	}

	setwordRead2(list){
	    //记录点击哪些字
	    this.wordRead2 = list;
	}

	setModu(dict){
	    // 记录默读句子的答案
	    this.modu = dict;
	}

	setModuEval(dict){
	    // 记录默读评估答案
	    this.modu_eval = dict;
	}

	setLangdu(dict){
	    // 记录朗读句子的答案
	    this.langdu = dict;
	 }

	 setLangduEval(dict){
	    // 记录朗读评估答案
	    this.langdu_eval = dict;
	}

}