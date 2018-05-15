// import { request } from 'https';
var express = require('express'),
    app = express();

const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/pages/index.html');
    console.log('Connected user headers ' + req.rawHeaders);
    console.log('API headers ' + res.getHeaderNames());
    // if (req.cookies.type === "ninja" && req.cookies.connection === "trusted")
});

app.use(express.static(__dirname + '/pages'));

app.get('/imglist.txt', function(req, res){
    res.redirect('/');
});

// app.get('/imglist.txt', function(req, res){
//     res.send = 'http://localhost:8080/imglist.txt';
// });

app.get('/api', function(req, res) {
    res.send('api under constrution');
});



app.listen(8080);












// app.post('/log', function (req, res) {
//     if (req.body.password === '1234' && req.body.email === 'Owner@gmail.com') {
//         res.setHeader('Set-Cookie', ['type=ninja', 'connection=trusted']);
//         res.send('cookie under constrution');
//     } else {
//         res.send('Secure url detected xD');
//     };
// });

// app.post('/reg', function(req, res) {
//     console.log(req.cookies);
//     if (req.body.password === '1234' && req.body.password2 === req.body.password) {
//         res.setHeader('Set-Cookie', ['type=ninja', 'connection=trusted']);
//         res.send('registration under constraction');
//     } else {
//         res.sendStatus(200)}
// });


    // var c = JSON.stringify('http://localhost:8080/imglist.txt');
    // res.sendFile(c);
    // res.send(JSON.stringify(imglist.txt));
   //res.redirect('img.html');
   // res.location('imglist.txt');
    // res.redirect('file:///D:/ShowYourSkill/pages/imglist.txt');

// app.get('/log', function(req, res) {
//     console.log(req.cookies);
//     res.redirect('index.html');
// });
// app.get('/reg', function(req, res) {
//     if(req.cookies !== "connection=trusted; type=ninja"){
//         res.redirect('/index.html');
//     } else {res.sendStatus(404);}
// });



// app.get('/tools', function(req, res){
//     res.redirect('tools.html');
// });








// app.get('/loggin', function (req, res) {
//    res.send(res.header + res.sendStatus(404));
// });
//console.log("user-thisCookie = " + res.cookie);
    //console.log(req.body.password);

//         xhttp.open('POST', 'http:/localhost:3000/reg',false)
        
//         document.getElementById("carouselExampleIndicators").setAttribute("type", "display:block");
//     } else {this.response.href = "http:/localhost:3000/reg"}


//   res.setHeader('Set-Cookie',['type=unkwnow', 'connection=unknown'])
//   console.log('req-cookies - ' + JSON.stringify(req.cookies))
//   console.log('res-cookies - ' + res.clearCookie('token'))



//  console.log("regular:" + req.headers.cookie.split("/\[\w+\]/g"));
//     res.setHeader('Set-Cookie', ['type=unlogged', 'connection=semi-inkognito']);
    
//     console.log(res.cookie)






 //  request.name = "trusted";
    // var x = {};
    // x.chch = req.headers.cookie;
    // let cook = JSON.stringify(req.headers.cookie);

    // console.log(x.chch);
    // if(req.headers === "trusted") {
    //     res.cookie = "AcceptedCookie";
    //     res.redirect('index.html');
    // } else {}

    // function check(){
    //     return res.cookie('e-mail');
    // }

    // function CreateUser(emailu, passu){
    //     emailu = this.emailu;
    //     passu = this.passu;
    //     return console.log(emailu + " " + passu);
    // };
    //  let user = {
    //      name:"name",
    //      pas:"pass",
    //  }
     //createUser(user);
    // let loggedUser = new CreateUser();

    // console.log(res.cookie('e-mail', 'pass', { domain: 'http://localhost:8080', path: '/index.html', secure: false }));


/*res.render(view [, locals] [, callback])
Renders a view and sends the rendered HTML string to the client. Optional parameters:

locals, an object whose properties define local variables for the view.
callback, a callback function. If provided, the method returns both the possible error and rendered string, but does not perform an automated response. When an error occurs, the method invokes next(err) internally.*/
// res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
// res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });

    // var homework = document.querySelector('#homework');
    // homework.addEventListener('click', function(){
    //     console.log(homework.attributes);
    // });
    // res.redirect('Homework.html');
    // console.log(req.body);



    // req.accepts('text/html');
    // res.location('D:\ShowYourSkill\pages\Homework.html');


        //let users = {
        //     getLength: function(this.length){
        //         return this.legth
        //     }
        // }
        // function CreateUser(m, p){
        //     this.m = m;
        //     this.p = p;
        //     return   function CreateUser(email, pass) {
        //         email = this.email;
        //         pass = this.pass;
        //         return console.log('keys');
        //         };

        //         let user = {
        //             name:undefined,
        //             pas:undefined,
        //         }

        //         let loggedUser = new CreateUser();

        //         CreateUser.call(user);
        // };


        // let loggedUser = new CreateUser();

        // let x = CreateUser.call(user);
        // console.log(x);
