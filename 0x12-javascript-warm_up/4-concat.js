#!/usr/bin/node
const args = process.argv;
if(args[2] === undefined && args[3] === undefined){
    console.log('undefined is undefined');
}
else if(args[2] === undefined){
    console.log('undefined is ' + args[3]);
}
else if(args[3] === undefined){
    console.log(args[2] + ' is undefined');
}
else{
    console.log(args[2] + ' is ' + args[3]);
}
