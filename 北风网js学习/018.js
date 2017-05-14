/**正则表达式
创建方法：
	1、new对象
		var box=new RegExp('box');//第一个必选参数是匹配的字符串
		var box=new RegExp('box','ig');//第二个参数是模式修饰符
// var box=new RegExp('box');
	// alert(box);//返回正则表达式的字面量表示法/box/
	2、字面量法
	var box=/box/ig;
	alert(box);
	
	测试/匹配正则表达式
	1、模式.test() 返回布尔值
	2、模式.exec() 返回包含查找字符串相关信息数组,没有返回null
其他功能两者类似
	
	var pattern=new RegExp('Box','i');
	var str='This is a box!';
	alert(pattern.test(str));
	alert(pattern.exec(str));

	var str='This is a box!';
	alert(/Box/i.test(str));


i 	忽略大小写
g 	全局匹配（匹配所有的）
m 	多行匹配

*/

window.onload=function(){
	var str='This is a box!';
	alert(/Box/i.exec(str));






}