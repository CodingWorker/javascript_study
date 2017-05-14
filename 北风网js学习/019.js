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
	1、模式.test() 返回布尔值，开启全局时，会存有查找指针，再次匹配时会从下一位开始查找
	2、模式.exec() 返回包含查找字符串相关信息数组,没有返回null
其他功能两者类似
上边两个好像不涉及全局匹配，找到一个即返回，即使设置了模式匹配g
	
	var pattern=new RegExp('Box','i');
	var str='This is a box!';
	alert(pattern.test(str));
	alert(pattern.exec(str));

	var str='This is a box!';
	alert(/Box/i.test(str));


i 	忽略大小写
g 	全局匹配（匹配所有的）
m 	多行匹配



字符串中的正则测试方法
match(pattern);返回pattern中的子串数组或null，没有开启全局匹配时仅返回第一个
replace(regexp|substr, 'string')用'string'替换第一个参数，返回替换后的字符串，没有全局匹配时只替换第一个
search(regexp)返回第一个匹配的位置，否则返回-1
split(pattern)返回字符串按指定pattern拆分成的数组

	alert(str.match(/Box/i));
	var new_str=str.replace(/box/,'haha');
	alert(str.search(/box/));
	new_str=str.split(/box/);
	alert(new_str);


RegExp对象的静态属性，直接调用无需申明
input 		当前被匹配的字符串
leftContext  最后一次所匹配到的字符串之前的部分
rightContext 最后一次所匹配到的字符串之后的部分
lastMatch 最后一个匹配的字符串
lastParen 最后一个的圆括号内的字符串，即最后一个原子组
multiline 用于指定死否所有的表达式都用于多行的布尔值,支持性非常差

var str="This is a Box!That is a box!".match(/bo(x)/igm);;
	//alert(str);
 	//alert(RegExp.input);//返回This is a box!
 	//alert(RegExp.leftContext);//返回This is a 
    //alert(RegExp.rightContext);//返回!
    //alert(RegExp.lastMatch);
    //alert(RegExp.lastParen);
    //alert(RegExp.multiline);


实例属性：
global 		是否设置了全局查找
ignoreCase  是否设置了大小写不区分
multiline  	是否设置了多行匹配
source  	正则表达式的原字符串,即是正则表达式的内容 	
laseIndex 	返回数字，代表最近一次匹配的内容的最后字符在原字符串的下标,兼容性不好







*/

window.onload=function(){
	var pattern=/bo(x)/igm;
	// alert(pattern.global);
	// alert(pattern.ignoreCase);
	// alert(pattern.multiline);
	// alert(pattern.source);
	var str="box box box";
	pattern.test(str);
	pattern.lastIndex=0;//可以设置下一次从哪里查找匹配
	alert(pattern.test(str));
	//alert(pattern.lastIndex);//返回3，即匹配的box的x在第3位




}