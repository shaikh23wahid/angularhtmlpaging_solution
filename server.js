var express=require('express');
var app=express();

require('./router/main')(app);

app.use(express.static(__dirname + '/public'));
app.set('views',__dirname + '/views');

app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

var server=app.listen(3200,function(){
    console.log("Express is running on port 3200");
});