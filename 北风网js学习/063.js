//内联 脚本 DOM2三种模型

//内联样式1
/* <input type="button" value='按钮' onclick="alert('lle');"></input> */
//内联样式2	
/*<input type="button" value='按钮' onclick="box();"></input>

function box(){
	alert('lle');
}//如果放在一个匿名函数里面就不能直接访问，这形成了一个闭包
现在基本不用内联模型
*/

//脚本模型
//  第一种
window.onload=function(){
	var input=document.getElementsByTagName('input')[0];
	//  第一种
	// input.onclick=function(){
	// 	alert(123);
	// }
	//第二种
	/*
	input.onclick=box;//不能加括号
}
function box(){
	alert(123);
	*/


//事件处理函数：鼠标事件 键盘事件 HTML事件
//1、鼠标事件
     //onclick单击 ondbclick双击
     onmousedown鼠标按下 onmouseup鼠标抬起
     onmouseover鼠标滑过  onmouseout鼠标离开
     onmousemove 鼠标移动

  2、键盘事件
  	 onkeydown键盘按下（不需要任何对象）直接onkeydown=function(){}
  	 onkeypress 键盘字符键按下
  	 onkeyup 释放键盘键

  3、HTML事件
     onload加载事件 
     onunload 卸载事件，刷新时或关闭时
     onselect 选择文本框里的一个或多个字符触发
        input.onselect=function(){}
     onchange 当文本框里的字符改变且文本框失去焦点时执行
        input.onchange=function(){}
     onfocus 当页面或元素获得焦点时触发
        input.onfocus=
     onblur 当页面或元素失去焦点时触发
     	input.onblur
     onsubmit 当表单提交后执行，必须要form,且在form上触发
        form.onsubmit 
     onreset 针对重置按钮，基本不用
     onresize 当窗口变化大小时执行，必须在window上触发
        window.onresize 
     onscroll 当滚动条滚动时触发
     	window.onscroll=function(){}
     	textarea.onscroll=function(){}
     



































}