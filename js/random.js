function randomsort(a, b) {  
    return Math.random()>.5 ? -1 : 1;  
//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1  
}  

function randomList(list){

	 //console.log(series);
    for(var i=0;i<100;i++){
        list = list.sort(randomsort);  
        //console.log(series);
    }

    return list;
}
