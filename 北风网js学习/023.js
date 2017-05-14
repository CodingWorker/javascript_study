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


exec()返回匹配数组

	//var pattern=/^[a-z]+\s\d{4}/;
	//var pattern=/^[a-z]+?/;//禁止贪婪

var pattern=/^([a-z]+)\s(\d{4})$/;
	var str='google 2012';
	alert(pattern.exec(str));//返回数组，第一个是整体匹配数组，之后是原组

//捕获性分组
var pattern=/(\d+)([a-z])/;//捕获性分组，捕获所有的分组并返回所有分组
	var str='123abc';
	alert(pattern.exec(str));//返回数组，第一个是整体匹配数组，之后是原组

//非捕获性分组
	var pattern=/(\d+)(?:[a-z])/;//非捕获性分组，第二个分组不返回
	var str='123abc';
	alert(pattern.exec(str));//返回数组，仅返回第一个分组



//使用分组嵌套，从外向内获取
	var pattern=/(a?(b?(c?)))/;//贪婪匹配,嵌套分组
	var str='abc';
	alert(pattern.exec(str));//a[0]是整个匹配到的字符串，a[1]是第一个分组，a[2]是第二个分组。a[3]是第三个分组


//使用前瞻捕获
	var pattern=/goo(?=gle)/;//匹配的是goo,?=gle并不会返回，但它是匹配的规则，表示goo后必须是gle
	var str='google';
	alert(pattern.exec(str));


//使用非前瞻捕获
	var pattern=/goo(?!gle)/;//匹配的是goo,?!gle并不会返回，但它是匹配的规则，表示goo后不能是gle
	var str='goobbb';
	alert(pattern.exec(str));


//特殊字符匹配
	var pattern=/\[/;//转义正则里的特殊字符
	var str='[';
	alert(pattern.exec(str));

pattern.test($str)
pattern.exec(str)这两个只会匹配一个，并返回布尔值和数组，而再次调用时他们才会在第一次查找的基础上继续查找，返回下一个匹配，总之，第一次调用时仅仅返回匹配的第一个
再次调用时才会继续返回下一个，这两个应该能与RegExp.lastIndex一同使用

	var pattern=/^\d+/gm;//
	var str='1.baidu\n2.google\n3.sina\n4.bing\n5.yahoo\n';
	alert(pattern.exec(str));
	alert(pattern.exec(str));
	alert(str.replace(pattern,'#'));


//使用换行模式
	var pattern=/^\d+/gm;//
	var str='1.baidu\n2.google\n3.sina\n4.bing\n5.yahoo\n';
	alert(pattern.exec(str));
	alert(pattern.exec(str));
	alert(str.replace(pattern,'#'));



常用的正则
1、邮政编码
	var pattern=/[1-9]\d{5}/;
	var str='100084';//一共6位，全为数字，第一位不能为0
	alert(pattern.test(str));

2、文件压缩包
	var pattern=/^[^\?^\/^\\^:^\*^\|^"^<^>]+\.zip|rar|7z|gz/;
	var str='213.rar';//以.zip、.rar、.gz、.7z结尾，不能包含/\<>?:"*|
	alert(pattern.test(str));

3、删除多余空格
	var pattern=/\s/g;
	var str='2 1 3.rar';
	alert(str.replace(pattern,''));

4、删除首位空格
方法一：
	var pattern1=/^\s+/g;//强制首
	var str=' 2  1 3 ';
	//alert(str.trim());
	result=str.replace(pattern1,'');
	var pattern2=/\s+$/;//强制尾
	result=result.replace(pattern2,'');
	alert(result.length);
方法二:
	var pattern1=/^(\s+)(.*)(\s+)/g;//贪婪捕获和分组
	var str=' 2  1 3 ';
	result=str.replace(pattern1,'$2');
	alert('|'+result+'|');
方法三：
	var pattern1=/^\s*(.+?)\s*$/;//非贪婪捕获
	var str=' 2  1 3 ';
	result=str.replace(pattern1,'$1');
	alert('|'+result+'|');
或
	var pattern=/^\s*(.+?)\s+$/;//非贪婪捕获
	var str=' 2  1 3 ';
	result=pattern.exec(str)[1];
	alert('|'+result+'|');

5、简单的邮箱验证
	var pattern=/^([\w\.\-]+)@([\w\-]+)\.([a-zA-Z]{2,4})/;
	var str='123@163.com';//
	result=pattern.exec(str);
	alert(result);


*/


window.onload=function(){

	var pattern=/^([\w\.\-]+)@([\w\-]+)\.([a-zA-Z]{2,4})/;
	var str='123@163.com';//
	result=pattern.exec(str);
	alert(result);



}