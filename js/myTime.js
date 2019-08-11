/**时间相关的**/

function curSec()
{
	var myDate = new Date();
	var hour = myDate.getHours(); //获取当前小时数(0-23)
	hour = hour > 9?hour:"0"+hour;
	
	var min = myDate.getMinutes(); //获取当前分钟数(0-59)
	min = min > 9?min:"0"+min;

	var sec = myDate.getSeconds(); //获取当前秒数(0-59)搜索
	sec = sec > 9?sec:"0"+sec;

	var cur = hour + ":"+ min + ":" +sec;
	console.log("cur time:"+cur);
	
	return cur;
}