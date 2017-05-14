window.onload=function(){
	var box=document.getElementById('box');
	/*
	//操作样式表 通过变换id来更改样式
	计算样式只能获取不能赋值
	
	//document.implementation.hasFeature('styleSheets','2.0');//检测是否支持外联是样式表
	var link=document.getElementsByName('link')[0];
	var sheet=link.sheet;//获得链接的css样式表的对象，非IE支持
 	//在IE下，要用styleSheet
	var sheet=link.sheet || link.styleSheet;
	
	更加简便的方法
	var sheet=document.styleSheets;//得到所有link样式表对象的集合
	var sheet=sheet[0];//获得第一个外联样式表的对象
	上面的方法所有浏览器都兼容

	属性：
	 sheet.disabled;// 是否被禁用
	 sheet.href;//url
	 sheet.media;//集合
	 sheet.title;//
	 
	var sheet=document.styleSheets[0];
	//alert(sheet.cssRules);//css样式表规则的集合,火狐浏览器支持，其他不支持
	//alert(sheet.cssRules[0]);//获取css样式表的第一个规则的对象		
	//alert(sheet.cssRules[0].cssText);//获取css样式表的第一个规则的内容
	//alert(sheet.cssRules[1].selectorText);//获取css样式表的第一个规则的选择符即#box
	//sheet.deleteRule(1);//删除第二个规则,火狐谷歌支持，IE不支持
	//sheet.insertRule("body{background-color:blue;}",0);//插入一条样式,第二个参数指明要插入的位置，IE不支持

	//IE的替代方法
	sheet.rules;
	sheet.removeRule(1);
	sheet.addRule(元素名，添加的样式，添加位置);
*/
	//跨浏览器获得规则集合
	var sheet=document.styleSheets[0];
	var rules=sheet.cssRules || sheet.rules;

	//跨浏览器删除规则
	function deleteRule(sheet,position){
		if(sheet.deleteRule){
			sheet.deleteRule(position);
		}else{
			sheet.removeRule(position);
		}
	}

	//跨浏览器添加规则
	function deleteRule(sheet,selectorText,cssText,position){
		if(sheet.deleteRule){
			sheet.insertRule(selectorText+'{'+cssText+'}',position);//这步分情况修改
		}else{
			sheet.addRule(selectorText,cssText,position);
		}
	}


	//alert(rules[0].style.width);//能够获得外联样式表第一个规则的width值，谷歌在服务器上就可以用（本地返回null），火狐IE都支持
	rules[1].style.color='blue';//修改的是样式表中的


}







