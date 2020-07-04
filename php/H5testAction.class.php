<?php
/*
首页
*/

//require_once("Mobile-Detect-2.8.22/Mobile_Detect.php");

class H5testAction extends Action {
	public function index()
	{
		
		$this->display('h5test');
	}
	public function post_data(){
        $json_str = file_get_contents('php://input');

        $result_obj = json_decode($json_str, true);

       // echo $json_obj;
        //echo $json_str;
        //echo $_POST;

        $personal = $result_obj['personal'];
        //var_dump($personal);

//         $data['name'] =   $personal["name"];
        $data['sex'] =   $personal["sex"];
        $data['age'] = $personal["age"];
        $data['phone'] = $personal["phone"];
//         $data['wechat'] =  $personal["wechat"];
        $data['wechat'] =  $personal["name"]; //暂时在mysql里面占用这个，前端已经取消了微信号了
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
	}
}
?>
