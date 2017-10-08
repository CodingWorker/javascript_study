var fs = require("fs");
var http = require('http');
var querystring = require('querystring');

var host='api.map.baidu.com';
var path='/geocoder/v2/';
var api_key='e6Dvp0C2VyRjjU2tiSDLOk22uhiVu6yo';

var locationData=[];

// 异步读取
var data = fs.readFileSync('./gis.txt').toString();
var data=data.split('\r\n');
for(var i=0;i<data.length;i++){
	let location=data[i].split(',');
	let pageContent=download(location[1]+','+location[0],parsePageJson);
	
	if(i==0){
		break;
	}

	continue;
}

function parsePageJson(json){
	let addressComponent=pageContent.result.addressComponent;
	let country=addressComponent.country;
	let province=addressComponent.province;
	let city=province.city;

	let locationStr=country+','+province+','+city;

	locationData.push(locationStr);
	console.log(locationData);
}

function download(location,callback){
	let data = querystring.stringify({
	      location:location,
	      output: 'json',
	      pois:1,
	      ak:api_key
		});

	let options = {
	    hostname: host,
        port: 80,
        path: path +'?'+ data,
	    method: 'GET'
	};
	console.log(options);

	//发送请求
	let req = http.request(options,function(res){
	    res.setEncoding('utf8');
	    res.on('data',function(chunk){
		let returnData = chunk;
		returnData = returnData.replace(/\r\n/g,'')
		returnData=returnData.replace(/\n/g,'').replace(/\r/g,'');
	        //let returnData = chunk.replace('\r\n','');//如果服务器传来的是json字符串，可以将字符串转换成json
	        let content=parse(returnData);
	        console.log(content);
	        console.log(JSON.parse(content));
	        callback(JSON.parse(returnData));
	    });
	});
	//如果有错误会输出错误
	req.on('error', function(e){
	     console.log('错误：' + e);
	});
	req.end();
}


function parse(data){
	let filePath='./json.txt';

	fs.writeFile(filePath, data,  function(err) {
	   if (err) {
	       return console.error(err);
	   }
	   console.log("数据写入成功！");
	});

	return fs.readFileSync(filePath).toString().replace('\r\n','');;
}