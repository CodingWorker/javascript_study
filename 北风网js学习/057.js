/*操作表格*/

//thead标签、tfoot标签、capation标签在一个表格只能有一个
//tbody可以有多个
window.onload=function(){
	var box=document.getElementById('box');
	/*
	检测浏览器是否支持DOM1级CSS能力或DOM2级CSS能力
	alert(document.implementation.hasFeature('CSS','2.0'));
	alert(document.implementation.hasFeature('CSS2','2.0'));
	这种检测在IE上检测不精确，但IE还是支持的
行内 内联  外联
	1、访问样式	
		行内访问 
		
	
	alert(box.style);//返回样式对象
	box.style.backgroundColor='red';
	alert(box.style.backgroundColor);
	alert(box.style.float);//非IE浏览器对关键字/保留字报错，此时用
	//box.style.cssFloat;IE则用box.style.styleFloat,这时其他则不能识别
	跨浏览器
	alert(box.style.cssFloat || box.style.styleFloat);
	
	//给属性赋值：
	box.style.color='red';
	box.style.fontSize='20px';
	box.style.cssFloat='left';
	box.style.styleFloat='left';//IE支持

	DOM2级为style提供了一些属性方法，都支持的仅有cssText（获取css代码）
	其他的都不兼容
	style方式只能获得和设置行内样式，其他两种获得不到
	
	//计算过的样式的获取
	var style=window.getComputedStyle(box,null);
	alert(style.fontSize);//尽管我们并没有设置，但是计算过的，一般表示默认样式和设置后的样式，IE不支持
	
	var style=box.currentStyle;//IE支持这个，火狐不支持
	解决兼容性
	alert(window.getComputedStyle?window.getComputedStyle:null || box.currnetStyle)
*/
	border属性被计算后就不存在了，不能获取该复合性属性，要border-color,border-weight,
	等









}







