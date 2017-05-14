
/*
//传统事件绑定  脚本事件绑定
var box=document.getElementById('box');
	box.onclick=function(){
		alert(this.innerHTML);
	}


多个程序员开发的可能使得页面有多个window.onload,但前边的会被覆盖
window.onload=function(){
	

}
window.onload=function(){

}

解决办法：

window.onload=function(){
	
	
	


}
if(typeof window.onload=='function'){
	var save=null;
	save=window.onload;
}
window.onload=function(){
	save();//避免覆盖

}

事件切换

box.onclick=function(){
	//this.className='blue';//一级切换

}




var box=document.getElementById('box');
box.onclick=toBlue;



function toRed(){
	this.className='red';
	this.onclick=toBlue;
}
function toBlue(){
	this.className='blue';
	this.onclick=toRed;
}
function toYellow(){
	this.className='yellow';
}


通过匿名函数执行某一个函数，该函数里的this指window，可以通过call冒充


对象操作可以通过数组来完成
window['onload']=function(){
	
}


//现代事件绑定DOM2






*/
window.onload=function(){

var box=document.getElementById('box');





	


}
