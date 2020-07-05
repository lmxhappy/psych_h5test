class Luyin{
    constructor() {

	    let recorder = new Recorder();

	    this.recorder = recorder;
    }

     start(){
                this.recorder.start();
                 console.log("开始录音");
     }

     stop(){
                this.recorder.stop();
                 console.log("播放录音");
     }

     play(){
                this.stop();
                this.recorder.play();
                 console.log("播放录音");
     }

     upload_luyin(filename){
              var myblob = this.recorder.getWAVBlob();

                 console.log(myblob);

                 var formData = new FormData();
                 formData.append("webmasterfile", myblob);

//                 wav结尾的文件
                 formData.append("filename", filename+'.wav');

                 console.log('上传数据');
                 console.log(formData);

                 return $.ajax({
                    type: 'POST',
                    url:'/Index/H5test/post_wav',
                    data:formData,
                    processData: false,
                    contentType: false,
                    success:function(data){
                        console.log(data);

                    }
                });
    }

    toJson(){
        var dict = this.toDict();
        var jsonStr = JSON.stringify(dict);
        return jsonStr;
    }

}

