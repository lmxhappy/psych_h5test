function GetUrlParms(param)
{
//console.log(window.location.href);
var href = window.location.href;

 var pairs=href.split("/");//在逗号处断开
//console.log(pairs);
 for(var i=0;i<pairs.length;i++)
 {
  var pos=pairs[i].indexOf(param);//查找name=value
   if(pos==-1) continue;//如果没有找到就跳过
        return pairs[i+1];
 }
}


