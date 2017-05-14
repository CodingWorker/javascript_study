

/*

var box = new Date(2007, 10, 15, 17, 22, 45, 15);
alert(box);																	//Thu Nov 15 2007 17:22:45 GMT+0800
alert('toString:' + box.toString());									//Thu Nov 15 2007 17:22:45 GMT+0800 
alert('toLocaleString:' + box.toLocaleString());				//2007-11-15 17:22:45 PS谷歌返回的Thu Nov 15 2007 17:22:45 GMT+0800 
alert('valueOf:' + box.valueOf());									//1195118565015


var box = new Date(2007, 10, 15, 17, 22, 45, 15);
alert(box.toDateString());
alert(box.toTimeString());
alert(box.toLocaleDateString());
alert(box.toLocaleTimeString());
alert(box.toUTCString());

box.setTime(100);
alert(box.getTime());
alert(box.getYear());//废弃
box.setFullYear(2009);
alert(box.getFullYear());
box.setMonth(5);
alert(box.getMonth());

var box = new Date();
alert(box.getMonth() + 1);

alert(box.getMonth() + 1); //月份要加1才是最终的月份

box.setUTCFullYear(2008);
alert(box.getUTCFullYear());

alert(box.getUTCHours()); //东八区有8个小时的差距
所有getUTCHous和getHous相差8个小时

var box = new Date(2007, 10, 15, 10, 22, 45, 15);
alert(box.getTimezoneOffset());
*/




var box = new Date();
alert(box.getFullYear() + '-' + box.getMonth() + '-' + box.getDate() + ' ' + box.getHours() + ':' + box.getMinutes() + ':' + box.getSeconds());















