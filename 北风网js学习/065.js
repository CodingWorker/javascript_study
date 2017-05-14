/*

键盘事件 W3C与IE
键盘事件 onkeydown按下任意键  onkeyup弹起任意键
onkeypress按下字符键 abc 123 标点符号 特殊字符，非字符键包括shift ctrl alt等

document.onkeydown=function(){//按下任意键盘触发
	alert(123);
}

	//编码charCode 与keypress事件共用,键盘上可以输出的字符的键的asii编码，区分大小写
	document.onkeypress=function(evt){//按下任意键盘触发
		用keypress调用keyCode，火狐总是返回0
		alert(evt.charCode);
	}


	//键码keyCode  键盘上的任意键的代码，对数字字母字符集，就是其ascii编码，且不受大小写影响（统一为小写的编码）
	document.onkeydown=function(evt){//按下任意键盘触发
	//	alert(evt.keyCode);
	}


//W3Cevnt属性和方法
evt.target
e.stopPropagation()取消冒泡



IE浏览器event相对应的属性和方法
evt.srcElement
e.cancelBubble=true; 取消冒泡，默认为false


事件流：冒泡和捕获
document-html-body-div-input
捕获：从外向内
冒泡：从内向外依次触发


*/
window.onload=function(){
var box=document.getElementsByTagName('input')[0];
box.onclick=function(evt){
	alert(evt.target);//点击哪里就可以获得该元素对象，此处获得input对象
	alert(evt.target.tagName);//获取元素名
}


}