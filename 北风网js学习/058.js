window.onload=function(){
	var box=document.getElementById('box');
	/*
	//操作样式表 通过变换id来更改样式
	box.id='box1';//更改id从而使用css样式表中相应的样式，但id唯一不允许改变
	//不建议通过变换id来改变css样式
*/
	//通过class,class调用可以叠加
	box.className='a b';
	box.className='b';//这个会重写为b



}





