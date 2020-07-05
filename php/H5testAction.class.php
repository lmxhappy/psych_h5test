<?php
/*
首页
*/

//require_once("Mobile-Detect-2.8.22/Mobile_Detect.php");

require_once __DIR__.'/oss-2.3.0/autoload.php';

use OSS\OssClient;
use OSS\Core\OssException;

class H5testAction extends Action {
	public function index()
	{
		
		$this->display('h5test');
	}

	public function example()
	{

		$this->display('example');
	}

    public function post_wav(){
        //print_r($_POST);
        //print_r($_FILE);
        //print_r($_FILES);

        $filename = $_POST['filename'];

        //$file = ROOT_PATH."/upload_data/test.pcm";
        //print_r($file);

        //ini_set('display_errors',1);
        //error_reporting(E_ALL);
        $local_file = './upload_data/'.$filename;
        $move_result = move_uploaded_file($_FILES['webmasterfile']['tmp_name'], $local_file);
        print_r($move_result);
        print($filename);
        $this->up2oss($filename, $local_file);
    }


    // 文件名称:            $object = "<yourObjectName>";
    // <yourLocalFile>由本地文件路径加文件名包括后缀组成，例如/users/local/myfile.txt            $filePath = "<yourLocalFile>";
    public function up2oss($object, $filePath){

        //if (is_file(__DIR__ . '/./autoload.php')) {
        //    require_once __DIR__ . '/./autoload.php';
        //}
        //if (is_file(__DIR__ . '/../vendor/autoload.php')) {
          //  require_once __DIR__ . '/../vendor/autoload.php';
        //}



        // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录 https://ram.console.aliyun.com 创建RAM账号。
        $accessKeyId = "LTAI4FkywCbYfXR7AkbZdMhy";
        $accessKeySecret = "DYwQPCmeXMDYrSn7ECn2wKm11gOng1";
        // Endpoint以杭州为例，其它Region请按实际情况填写。
        $endpoint = "http://oss-cn-beijing.aliyuncs.com";
        // 存储空间名称
        $bucket= "lunyin";



        try{
            $ossClient = new OssClient($accessKeyId, $accessKeySecret, $endpoint);

            $ossClient->uploadFile($bucket, $object, $filePath);
        } catch(OssException $e) {
            printf(__FUNCTION__ . ": FAILED\n");
            printf($e->getMessage() . "\n");
            return;
        }
        print(__FUNCTION__ . ": OK" . "\n");
    }

	public function post_data(){
        $json_str = file_get_contents('php://input');
        print($json_str);
        $result_obj = json_decode($json_str, true);
        //print_r($result_obj);
       // echo $json_obj;
        //echo $json_str;
        //echo $_POST;

        $personal = $result_obj['personal'];
        //var_dump($personal);

        $data['sex'] =   $personal["sex"];
        $data['age'] = $personal["age"];
        $data['phone'] = $personal["phone"];
        $data['wechat'] =  $personal["wechat"];
        $data['alipay'] =  $personal["alipay"];
        $data['mail'] =  $personal["mail"];
        $data['province'] =   $personal["province"];
        $data['city'] =  $personal["city"];
        $data['zone'] =  $personal["zone"];
        $data['numRead1_index']  =  $result_obj['numRead1_index'];
        $data['numRead1_num'] =    $result_obj['numRead1_num'];
        $data['numRead2_index'] =   $result_obj['numRead2_index'];
        $data['numRead2_num']  =  $result_obj['numRead2_num'];
         $data['picRead1_index']  = $result_obj['picRead1_index'];
         $data['picRead1_img_index']   =$result_obj['picRead1_img_index'];
        $data['picRead2_index'] =   $result_obj['picRead2_index'];
        $data['picRead2_img_index']  =  $result_obj['picRead2_img_index'];
         $data['wordRead1_index']  = $result_obj['wordRead1_index'];
         $data['wordRead1_word'] =  $result_obj['wordRead1_word'];
          $data['wwords1'] = json_encode($result_obj['wwords1'], JSON_UNESCAPED_UNICODE);
         $data['wordRead2_index'] =  $result_obj['wordRead2_index'];
         $data['wordRead2_word'] =  $result_obj['wordRead2_word'];
          $data['wwords2'] =  json_encode($result_obj['wwords2'], JSON_UNESCAPED_UNICODE);
          $data['modu_pratice'] =  json_encode($result_obj['modu_pratice'], JSON_UNESCAPED_UNICODE);
          $data['modu_show'] =  json_encode($result_obj['modu_show'], JSON_UNESCAPED_UNICODE);
          $data['modu'] =  json_encode($result_obj['modu'], JSON_UNESCAPED_UNICODE);
         $data['langdu_practice'] =   json_encode($result_obj['langdu_practice'], JSON_UNESCAPED_UNICODE);
         $data['langdu_show'] =   json_encode($result_obj['langdu_show'], JSON_UNESCAPED_UNICODE);
         $data['langdu'] =   json_encode($result_obj['langdu'], JSON_UNESCAPED_UNICODE);
         $data['eval'] =   json_encode($result_obj['eval'], JSON_UNESCAPED_UNICODE);

         //print_r($data);
         $ret = M('h5test')->add($data);
        //echo "----sql:".M('h5test')->getLastSql();

         //echo $ret;

         //print_r($result_obj['eval']);
         //print_r(json_encode($result_obj['eval'], 256));
         //echo PHP_VERSION;

	}
}
?>
