/**	
\s 		匹配空格，制表符或换行符

	var pattern=/goo\sgle/;
	var str='goo gle';
	alert(pattern.test(str));

\b 		匹配是否到达边界，后边非数字字母
	var pattern=/google\b/;
	var str='google ';
	alert(pattern.test(str));


| 		或模式匹配


() 		原子组（看作一个字符），可以使用\1或$1访问相应原子组，\0表示匹配的整体
	var pattern=/8(.*)8/;
	var str='this is 8fadfafaf8';
	alert(pattern.test(str));
	alert(RegExp.$1);//获取分组中第一个原子组

var pattern=/8(.*)8/;
	var str='this is 8fadfafaf8';
	alert(str.replace(pattern, "<strong>$1</strong>"));

	var pattern=/(.*)\s(.*)/;
	var str='baidu google';
	alert(str.replace(pattern, "$2 $1"));
 贪婪     		惰性
 + 				+?
 ?   			??
 * 				*?
  {n}			{n}?
  {n,}			{n,}?
  {m,n}			{m,n}?

	//var pattern=/[a-z]+/;//这里是用了贪婪模式
	var pattern=/[a-z]+?/;//这里使用了惰性模式
	var str='abcfafaf';
	alert(str.replace(pattern,'1'));

	//var pattern=/[a-z]+/;//这里是用了贪婪模式
	var pattern=/[a-z]+?/g;//这里开启了全局，使用了惰性模式
	var str='abcfafaf';
	alert(str.replace(pattern,'1'));

//var pattern=/8(.*)8/g;//这里开启了全局，使用了贪婪模式
	var pattern=/8(.*?)8/g;//这里使用了惰性模式，开启了全局
	var str='8google88google88google88google8';
	alert(str.replace(pattern,'<strong>$1</strong>'));

	var pattern=/8([^8]*?)8/g;//另一种禁止贪婪的方式
	var str='8google88google88google88google8';
	alert(str.replace(pattern,'<strong>$1</strong>'));

*/


window.onload=function(){
	
	var pattern=/8([^8]*?)8/g;//另一种禁止贪婪的方式
	var str='8google88google88google88google8';
	alert(str.replace(pattern,'<strong>$1</strong>'));






}