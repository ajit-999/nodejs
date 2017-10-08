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
/*var http = require('http');
	http.createServer(function(request,response){
      response.writeHead(200,{"Content-Type":"text/plain"});
      response.write("Ajit Jain");
      response.end();
	}).listen(5000);
	*/

/*var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringbell = function(){
	console.log("Ring ring ring");
	eventEmitter.emit('bellrings','Welcome');

}

eventEmitter.on('doorOpen',ringbell);
eventEmitter.on('bellrings',function(message){
console.log(message);
})
eventEmitter.emit('doorOpen');

*/
/*var fs = require('fs');
fs.readFile('input.txt',function(err,data){
	if (err) {
		console.log(err);
	}
	else{
		console.log("Async Data is "+data.toString());
	}
});
var data = fs.readFileSync('input.txt');
console.log("Sync Data is " + data.toString());
console.log("this is end");

*/

/*var fs = require('fs');
var readableStream = fs.createReadStream('input.txt');
var data = '';
readableStream.setEncoding('UTF8');
readableStream.on('data',function(chunk){
	data +=chunk;

}) ;
readableStream.on('end',function(){
	console.log(data);
});

var writeData = "Hello World";
var writeableStream = fs.createWriteStream('output.txt');
writeableStream.write(writeData,'UTF8');
writeableStream.end();
writeableStream.on('finish',function(){
	console.log("Write Completed");
});
*/
var fs = require('fs');
var readableStream = fs.createReadStream('in.txt');
var writeableStream = fs.createWriteStream('out.txt');
readableStream.pipe(writeableStream);


 


