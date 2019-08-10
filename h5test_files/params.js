

	
/***如果小于等于0，那么就不要设置，使用了，否则就要覆盖本地的默认设置
@param data:从服务器获得ajax数据*
*/
function setTestVars(data)
{
	if(!data)
		return;
				
			//data.userName
	if(data.imgTime)
				targetInterTime =parseInt(data.imgTime);
			
	if(data.plusTime)
				prepareTime = parseInt(data.plusTime);

	if(data.heartPercent)
				heartShapeRate = parseInt(data.heartPercent);
			
	if(data.userTime)
				choiceWindowTime = parseInt(data.userTime);
			
	if(data.testNum)
	{
				testNum = parseInt(data.testNum);
				console.log(testNum);
	}
}
