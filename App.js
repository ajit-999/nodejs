var printstuff = function(stuff){
	console.log(stuff);
}

function mainfunction(anotherfunction,value){
	anotherfunction(value);

}  
mainfunction(printstuff,"Ajit Jain");

function printstuff1(){
	console.log("THis is set timeout");
}
setTimeout(printstuff1,5000);
setInterval(printstuff1,2000);

