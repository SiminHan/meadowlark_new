/**
 * Created by simin on 2016/4/30.
 */
/*
var fortunes=[
    "fortunes1",
    "fortunes2",
    "fortunes3",
    "fortunes4"
];
*/
var express=require('express');
var app=express();
var handlebars=require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT||3000);

app.use(function(req,res,next){
    res.locals.showTests=app.get('env')!=='production'&&req.query.test==='1';
    next();
});

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
  // res.type('text/plain');
    //res.send('Meadowlark Travel');
    res.render('home');
});

var fortune=require('./lib/fortune.js');
app.get('/about',function(req,res){
   // res.type('text/plain');
   // res.send('About Meadowlark Travel');

   // var randomFortune=fortunes[Math.floor(Math.random()*fortunes.length)];
   // res.render('about',{fortune:randomFortune,haha:"hahahahaha"});
    res.render('about',{
        pageTestScript:'qa/tests-about.js',
        fortune:fortune.getFortune(),
        haha:"hahahahaha"

    });
    //res.render('about');
});

//404
app.use(function(req,res){
   // res.type('text/plain');
    res.status(404);
   // res.send('404-Not found');
    res.render('404');
});

//500
app.use(function(err,req,res,next){
    console.error(err.stack);
   // res.type('text/plain');
    res.status(500);
    //res.send('500-Server Error');
    res.render('500');
});

app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+app.get('port')+';press Ctrl - C to terminate');
});
