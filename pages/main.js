

window.addEventListener("load", function () {
    var date = new Date();
    if (localStorage.getItem('Tony') === 'undefined' ||
        localStorage.getItem('Tony') === null) {
        createElement.call(
            this,
            'Tony',
            imgz(),
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.',
             0, 0);
    } else {
            let s = localStorage;
            logg(s);
            for (key in s) {
            var x = localStorage.getItem(key);
                if (x !== null) {
                var y = JSON.parse(x)
                createElement.call(this, y.name, y.img, y.text, y.likes, y.d);
                logg(x);
                };
            };
        };

    function imgz(){
        let x = Math.random();
        let y = Math.round(x);
            if (y === 1){
            return '';
            } else { return ''};
    };
});

var input = document.querySelector('#input');
let upload = document.querySelector('#upload');
var textarea = document.querySelector('#textarea');
var but = document.querySelector('#button');
    but.addEventListener('click', creation
    );
var btn_clear = document.querySelector('#clear');
    btn_clear.addEventListener('click', function(){
        localStorage.clear();
    });

function Constuctor(name, img, text) {
    this.name = name;
    this.img = img;
    this.text = text;
};

function creation() {
    if (input.value === "" || upload.value === "" || textarea.value === ""){
        return;
    };
    
    var cons = new Constuctor();
        cons.name = input.value;
        cons.img = upload.value;
        cons.text = textarea.value;
    createElement(cons.name , cons.img , cons.text, 0);
};

function createElement(name, img, text, likes, d) {
    
   var data = new Date();

    var x = {name, img, text, likes, d};
    if (x.name.length > 42){
        console.log(x.name)
        x.name.substr = x.name.substr(0, 42);
    }
    localStorage.setItem(x.name, JSON.stringify(x));
    
    var c = localStorage.getItem(name);

    if (JSON.parse(c).d === null || JSON.parse(c).d === undefined ||
        JSON.parse(c).d === 'undefined' || JSON.parse(c).d === 0) {
        x.d = data.toUTCString();
        localStorage.setItem(x.name, JSON.stringify(x));
        logg(localStorage);
    };

    var div = document.createElement('div');
        div.className = "div-res";
    
    var h = document.createElement('h2');
        h.className = "h6";
        h.innerText = name;

    var dateT = document.createElement('h4');
        dateT.innerText = JSON.parse(localStorage[name]).d;

    let imgS = document.createElement('img');
        imgS.className = "img";
        imgS.src = img;
        
    let textRes = document.createElement('div');
        textRes.className = "h6";
        textRes.innerText = text;
    
    var res = document.querySelector('.content');
        res.appendChild(div);

    var like = document.createElement('a');
        like.innerText = localStorage.getItem('likes');
        like.className = "like btn";
        like.innerText = JSON.parse(localStorage.getItem(name)).likes;
        
        like.addEventListener('click', function() {
            localStorage.getItem(name);
            var js_likes = JSON.parse(localStorage.getItem(name));
            var x = new But();
            x.likes = js_likes.likes;
            x.getLike();
            js_likes.likes = x.likes;

            var l = JSON.stringify(js_likes);
            localStorage.setItem(name, l);

            like.innerText = js_likes.likes;
        });

    div.appendChild(h);
    div.appendChild(dateT);
    div.appendChild(imgS);
    div.appendChild(textRes);
    div.appendChild(like);
    };

function But(likes) {
    this.likes = likes;
    this.getLike = function(){
        return this.likes++;
    };
};
function logg(t){
    console.log(t);
};



var i = 0;
var timer = function() {
    console.log('timer = ' + i);
    i++;
    setTimeout(timer, 2000);
};

//timer();

/*
var loginValidationService = function(login) { 
    return new Promise((resolve, reject) => {
        if (login.length > 4) {
            resolve('ok');
        } else {
            reject('error');
        }
    }); 
}

loginValidationService('us')
.then(res => { console.log(res) })
.catch(res => { console.log(res) }) */

var doRegister = function(user) { 
    return fetch('/api/register', {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  }).then(res => {
      return res.json();
  });
};
//
doRegister({ login: "user332", password: '54321' })
.then(res => {
    console.log('registration: ');
    console.log(res);
});
//
doRegister({ login: "user123123123", password: '12345' })
.then(res => {
    console.log('registration: ');
    console.log(res);
});


