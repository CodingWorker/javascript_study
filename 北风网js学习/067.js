/*

W3C的DOM2级的添加和移除事件方法
添加事件
addEventListener()
移除事件


removeEventListener()
1、解决覆盖问题
window.addEventListener('load',function(){
	alert(1);
},false);
window.addEventListener('load',function(){
	alert(2);
},false);
window.addEventListener('load',function(){
	alert(3);
},false);



2、解决重复添加同名函数问题,不报错,仅执行一遍
window.addEventListener('load',init,false);
window.addEventListener('load',init,false);
window.addEventListener('load',init,false);
function init(){
	alert(1);
}




3、是否可以传递this
传统方法
window.onload=function(){
	var box=document.getElementById('box');
	box.onclick=function(){
		//toBlue.call(this);//函数冒充
	}
DOM2方法

window.addEventListener('load',function(){
	var box=document.getElementById('box');
	box.addEventListener('click',toBlue,false)
},false);

	function toRed(){
		this.className='red';
		this.removeEventListener('click',toRed,false);
		this.addEventListener('click',toBlue,false);
	}
	function toBlue(){
		this.className='blue';
		this.removeEventListener('click',toBlue,false);
		this.addEventListener('click',toRed,false);
	}



4、解决添加一个额外的方法会否覆盖或只能执行一次
window.addEventListener('load',function(){
	var box=document.getElementById('box');
	alert(123);
	box.addEventListener('click',toBlue,false)
},false);

	function toRed(){
		this.className='red';
		this.removeEventListener('click',toRed,false);
		this.addEventListener('click',toBlue,false);
	}
	function toBlue(){
		this.className='blue';
		this.removeEventListener('click',toBlue,false);
		this.addEventListener('click',toRed,false);
	}


但IE8及以下并不支持W3C的此方法

冒泡
addEventListener('click',function(){},true);//true时是捕获，false时是冒泡
------------------------------------------
IE的事件绑定机制
attachEvent();没有第三个参数

detachEvent();

1、解决了覆盖问题，但顺序是倒过来的
window.attachEvent('onload',function(){
	alert(1);
});
window.attachEvent('onload',function(){
	alert(2);
});
window.attachEvent('onload',function(){
	alert(3);
});
2、相同的函数屏蔽问题不能解决
window.attachEvent('onload',init);
window.attachEvent('onload',init);
window.attachEvent('onload',init);
function init(){
	alert(1);
}

3、不能传递this
window.attachEvent('onload',function(){
	var box=document.getElementById('box');
	box.attachEvent('onclick',function(){
		alert(this===box);
		alert(this===window);//不能传递this
	});
});

4、解决添加一个额外的方法会否覆盖或只能执行一次
不会覆盖，但会倒着执行

window.attachEvent('onload',function(){
	var box=document.getElementById('box');
	box.attachEvent('onclick',function(){
		alert(1);
	});
	box.attachEvent('onclick',function(){
		alert(2);
	});
});
------------------------------
IE上的切换器

window.attachEvent('onload',function(){
	var box=document.getElementById('box');
	box.attachEvent('onclick',toBlue);
});



	function toRed(){
		var that=window.event.srcElement;
		//alert(that===box);
		that.className='red';
		that.detachEvent('onclick',toRed);
		that.attachEvent('onclick',toBlue);
	}
	function toBlue(){
		var that=window.event.srcElement;
		//alert(that===box);
		that.className='blue';
		that.detachEvent('onclick',toBlue);
		that.attachEvent('onclick',toRed);
	}




*/
IE和W3C兼容事件切换器


function addEvent(){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false);
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type,fn);
	}
}

function getTarget(evt){
	if(evt){
		return evt.target;
	}else if(window.event.srcElement){
		return window.event.srcElement;
	}
}




