//内联 脚本 DOM2三种模型

//  第三种 DOM2级事件

/*
事件对象
对象.时间处理函数=函数
onclick也叫事件侦听器或监听器

document.onclick=function(){//页面点击
        alert(); 
    }

document.onclick=function(){
        alert(this);


document.onclick=box;
function box(){
    alert(this);
}
事件对象一般称为event对象

document.onclick=function(){
    //alert(arguments.length);//如果是事件处理函数绑定的函数，浏览器会默认传递一个参数，这个参数就是event对象
    //alert(arguments[0]);//object MouseEvent
}

document.onclick=function(a){
    alert(a);//弹出默认对象传参，IE又不支持
}
兼容处理
document.onclick=function(a){
    var e=a || window.event;//IE支持window.event,谷歌支持两者
    alert(e);


 //鼠标按钮 主鼠标 鼠标左键  一般用mousedown代替onclick
    document.onmousedown=function(evt){
        var e=evt || window.event;
        alert(e.button);//检测鼠标的哪个键被按下，返回0表示左键，返回1表示中建，返回2表示右键
        //IE有兼容性问题，IE有自己的button属性值0-7



//跨浏览器鼠标按钮
    document.onmousedown=function(evt){
       var a=getbutton(evt);
       if(a==0) alert('左键');
       if(a==1) alert('中键');
       if(a==2) alert('右键');
    }

    
//跨浏览器鼠标按钮
function getbutton(evt){
    var  e=evt||window.event;
    if(evt){
        return e.button;
    }else if(window.event){
        switch(e.button){
            case 1:
                return 0;
                break;
            case 4:
                return 1;
                break;
            case 2:
                return 2;
                break;
            case 0:
                return 2;//兼容360的浏览器
                break;
        }
    } 

}


 //可视区和屏幕坐标 点击区域距离页面和屏幕之间的距离
    document.onclick=function(evt){
        var e=evt || window.event;
        //alert(e.clientX);距页面可视区左方距离
        //alert(e.clientY);距页面可视区上边距离
        alert(e.screenX);//距离屏幕左方距离
        alert(e.screenY);//距离屏幕上方距离

 
    }



*/




window.onload=function(){
    var input=document.getElementsByTagName('input')[0];
   
//修改键 Shift Ctrl Alt Windows键，配合鼠标操作
    document.onclick=function(evt){
        var e=evt||window.event;
        //alert(e.shiftKey);//单击同时按下shift键才返回true否则false
        //alert(e.ctrlKey);
        alert(e.altKey)

    }


}

















