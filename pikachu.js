var express=require('express');
var app=express();

var config=require('./config.json');

for( i in config.gits ){
	app.all('/'+config.gits[i].name,function(req,res){
		res.send('pika pika');
	});
};

app.all('*',function(req,res){
	res.send('pi pikachu');
});

app.listen(config.port);
