var express=require('express');
var app=express();

var config=require('./config.json');

app.use(express.bodyParser());

for( i in config.gits ){
	app.all('/'+config.gits[i].name,function(req,res){
		res.send("pikachu");
	});
};

app.all('*',function(req,res){
	res.send('pi pikachu');
});

app.listen(config.port);
