/*操作表格*/

//thead标签、tfoot标签、capation标签在一个表格只能有一个
//tbody可以有多个
window.onload=function(){
	/*
	var table=document.createElement('table');//创建一个节点的同时也生成了它，只能在一处使用，不能多处共用
	//这也造成了在之后不用在找了，因为这个变量就只该节点，无论他在哪里，除非被重新赋值覆盖
	document.body.appendChild(table);
	//table=document.getElementsByTagName('table')[0];//不用再找了
	table.width='500px'; //table.setAttribute('width',300);
	table.border='1px';
	var cap=document.createElement('caption');
	var thead=document.createElement('thead');
	var tfoot=document.createElement('tfoot');
	table.appendChild(cap);
	table.appendChild(thead);
	table.appendChild(tfoot);
	table.firstChild.innerHTML='人员表';//也可以用文本节点
	var tr=document.createElement('tr');
	thead.appendChild(tr);
	th1=document.createElement('th');
	th2=document.createElement('th');
	th3=document.createElement('th');
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	th1.innerHTML='姓名';
	th2.innerHTML='性别';
	th3.innerHTML='年龄';
	tr1=document.createElement('tr');
	thead.parentNode.insertBefore(tr1,tfoot);
	for(var i=0;i<3;i++){
		tr1.appendChild(document.createElement('td'));
	}
	tr1.firstChild.innerHTML='张三';
	tr1.firstChild.nextSibling.innerHTML='男';
	tr1.lastChild.innerHTML='23';
	tr2=document.createElement('tr');
	tr1.parentNode.insertBefore(tr2,tfoot);
	for(var i=0;i<3;i++){
		tr2.appendChild(document.createElement('td'));
	}
	tr2.firstChild.innerHTML='李四';
	tr2.firstChild.nextSibling.innerHTML='女';
	tr2.lastChild.innerHTML='22';
	tfoot.appendChild(document.createElement('tr'));
	tfoot.firstChild.appendChild(document.createElement('td'));
	tfoot.firstChild.firstChild.innerHTML='合计:';
	tfoot.firstChild.firstChild.setAttribute('colspan',3);
	*/
	//使用DOM获取表格数据
	var table=document.getElementsByTagName('table')[0];
	//alert(table.childNodes.length);
	//alert(table.children[0].innerHTML);//可以忽略空格
	
	//除非是添加的标签可以同构child获取，但自己在html页面写的难免有空格，从而firstChld可能是个空文本，因此以后最后好使用children
	//alert(table.children[2].children[1].children[1].innerHTML);

	//HTML DOM

	//alert(table.caption.innerHTML);
	//table.caption.innerHTML='员工表';
	//alert(table.tHead);
	//alert(table.tBodies[0]);
	//alert(table.rows.length);
	//alert(table.tBodies[0].rows.length);
	//alert(table.tBodies[0].rows[0].cells[0].innerHTML);
	//alert(table.tBodies[0].rows[1].cells[1].innerHTML);
	table.deleteCaption();
	table.deleteTHead();
	table.tBodies[0].deleteRow(0);
	table.tBodies[0].rows[0].deleteCell(2);


}







