/*var printstuff = function(stuff){
	console.log(stuff);
}

function mainfunction(anotherfunction,value){
	anotherfunction(value);

}  
mainfunction(printstuff,"Ajit Jain");

function printstuff1(){
	console.log("This is set timeout");
}
setTimeout(printstuff1,5000);
//setInterval(printstuff1,2000);

console.log("User 1 made a request");
setTimeout(callback,5000);

console.log("User 2 made a request");
setTimeout(callback,5000);

console.log("User 2 made a request");
setTimeout(callback,5000);

function callback(){
	console.log("Queried the databse amd deleiverd data in 5 seconds");
}


var athelete = require('./athelete.js');
athelete.relay(); 
athelete.longjump();
*/
var http = require('http');
	http.createServer(function(request,response){
      response.writeHead(200,{"Content-Type":"text/plain"});
      response.write("Ajit Jain");
      response.end();
	}).listen(5000);


 


