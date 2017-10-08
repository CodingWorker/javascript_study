var fs = require("fs");
var filePath='./json.txt';
var destPath='./json-new.txt';

var data = fs.readFileSync(filePath);
var data=data.toString().replace('\r\n','');

fs.writeFile(destPath, data,  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
});