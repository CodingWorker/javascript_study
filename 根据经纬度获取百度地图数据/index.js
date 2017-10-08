$(function(){
	window.WEB={};
	WEB.API_HOST='http://api.map.baidu.com/geocoder/v2/';
	WEB.API_KEY='1NtPaGOxwzioSL05xKI2Mk99cQ3QpVMI';
	WEB.LOCAL_FILE_PATH='./gis.txt';
	WEB.api_url="http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location=39.983424,116.322987&output=json&pois=1&ak=1NtPaGOxwzioSL05xKI2Mk99cQ3QpVMI";

	WEB.data=[];
	WEB.fileContent='';

	getLocalFile();
	// run();


});

function getLocalFile(){
		$.ajax({
             type: "get",
             async: false,
             url: WEB.LOCAL_FILE_PATH,
             dataType: "jsonp",
             success: function(data){
             	WEB.fileContent=data;
             },
             error: function(){
                 console.log('fail');
             }
         });
}

function run(){


	buildUrl(location,ak)
	processLocation(WEB.api_url);
}

function buildUrl(location){
	//http://api.map.baidu.com/geocoder/v2/?
	//callback=renderReverse&location=39.983424,116.322987&output=json&pois=1&ak=1NtPaGOxwzioSL05xKI2Mk99cQ3QpVMI
	return WEB.API_HOST+'?'+'callback=renderReverse&location='+location+'&output=json&pois=1&ak='+WEB.API_KEY;
}

function processLocation(url){
	$.ajax({
             type: "get",
             async: false,
             url: url,
             dataType: "jsonp",
             success: function(data){
             	if(typeof data!='object') data=JSON.parse(data);
             	let addressComponent=data.result.addressComponent;
             	let country=addressComponent.country;
             	let province=addressComponent.province;
             	let city=addressComponent.city;

             	let item=country+','+province+','+city;
             	WEB.data.push(item);
             },
             error: function(){
                 console.log('fail');
             }
         });
}