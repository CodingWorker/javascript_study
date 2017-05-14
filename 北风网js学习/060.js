window.onload=function(){
	var box=document.getElementById('box');
	/*
	//获取行内css样式
	//alert(box.style.width);//获取的是字符串
	//alert(box.style.height);
	//获取计算后的，不能设置
	var style=window.getComputedStyle?window.getComputedStyle(box,null):null || box.currentStyle
	//alert(style);
	//获取外联样式
	//var sheet=document.styleSheets[0];
	//alert(sheet.cssRules[0].cssText);
	var link=document.getElementsByTagName('link');
	alert(link);
*/
	//这三种都不能获取实际大小

	1、alert(box.client.width);//没有单位但默认返回数值，不是字符串，没有px
		alert(box.client.height);
	2、如果设置了其他的单位，还会转换为像素px
	增加边框无变化；
	增加外边距无变化
	上面两个都不算在里面

	padding内边距算在里面（增加大小）；滚动条也算在里面（减少大小）

	如果没有设置内边距和滚动条且未设置css大小样式则非IE返回计算后的大小，IE则返回0


}




