/*
json是一种数据结构表示方法,实际就是字符串，任何表示都要加上""
简单值；对象；数组
简单值：字符串 数值 布尔值 null
10 "hello" true null

对象：
	//js对象表示
	var box={
		name:'ll',
		age:100
	}; 
	alert(box.name);
	//json对象表示
	{"name":"lee","age":100}


数组：
	//js数组表示
	var box=['ll',100];
	]; 
	alert(box.name);
	//json数组表示
	["lee","age",100]


最常用的json结构
	[
		{
			"title":"a",//字符串要用双引号
			"num":1
		},
		{
			"title":"b",//字符串要用双引号
			"num":2
		},
		{
			"title":"c",//字符串要用双引号
			"num":3
		}
	]

//模拟加载JSON数据文件你的方法
//var json=load('demo.json');//将json字符串加载进来并赋值给变量
//解析和序列化
    //法一：
	//使用eval()来执行/解析字符串里的JS原生字符串代码
	var box=eval(json);//但这种方法不安全
	alert(box[0].name);

	//法二
	var json='[{"name":"a","num":1},{"name":"b","num":2},{"name":"c","num":3}]';
	//alert(json);//模拟加载json过程
	//alert(JSON);
	var box=JSON.parse(json);
	// alert(box);

//js原生数组对象转换为json数据
	var box=[
		{
			"title":"a",//字符串要用双引号
			"num":1
		},
		{
			"title":"b",//字符串要用双引号
			"num":2
		},
		{
			"title":"c",//字符串要用双引号
			"num":3
		}
	];
	var json=JSON.stringify(box);//将js原生字符串转换为json数据
	alert(json);

var json=JSON.stringify(box,['title']);//第二个参数指明仅要title的项

var json=JSON.stringify(box,function(key,value){
	if(key=='title'){
		return 'Mr.'+value;
	}else{
		return value;
	}
});//第二个参数也可以是函数，自动传递键值对到函数参数，火狐3.x执行此函数时有bug
alert(json);


	var json=JSON.stringify(box,['title'],4);//第二个参数也可以是函数，自动传递键值对到函数参数
	alert(json);//第三个参数可以使其输出时排版缩进


var json=JSON.stringify(box,null,4);//第二个参数null,全部返回

toJSON:
	var box=[
		{
			"title":"a",//字符串要用双引号
			"num":1,
			toJSON:function(){
				return this.title;//这项只返回tite的值，其他不返回
			}
		},
		{
			"title":"b",//字符串要用双引号
			"num":2
		},
		{
			"title":"c",//字符串要用双引号
			"num":3
		}
	];
	var json=JSON.stringify(box,null,4);//第二个参数也可以是函数，自动传递键值对到函数参数
	alert(json);


*/
window.onload=function(){

	var json='[{"title":"a","num":1},{"title":"b","num":2},{"title":"c","num":3}]';
	box=JSON.parse(json,function(key,value){
		if(key=='title'){
			return 'Mr.'+value;
		}else{
			return value;
		}
	});
	alert(box[0].title);













}