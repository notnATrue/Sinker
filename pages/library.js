
var des = document.querySelector('#description');
var ex = document.querySelector('#Example');
var prac = document.querySelector('#MyPractice');
var link = document.querySelector('#Link');

var library = document.querySelector('#Library');
var fetch_btn = document.querySelector('#javascript');
    fetch_btn.addEventListener('click', function(){
        event.preventDefault();
        mySon();
    });

var ninja_btn = document.querySelector('#ninja-tactics');
    ninja_btn.addEventListener('mouseover', function(event) {
        // event.preventDefault();
        blobMasta();
    });

var _data = {}

var globalData = {}  

function calcTime(before, after){
    this.before = parseInt(before);
    this.after = parseInt(after);
    Logger(this.after - this.before);
};

function getJSON() {
    return fetch('/myJSON.json')
    .then(res => {return res.json()})
    .then(data => _data.JS = JSON.stringify(data))
    .catch(err => console.log(err)); 
};

function mySon () {
    
    getJSON().then(f => {
        let d = _data.JS; 
        des.setAttribute('href', JSON.parse(d).description);

        let e = _data.JS; 
        ex.innerHTML = JSON.parse(e).example; 

        let p = decodeURI(_data.JS) ; 
        prac.innerHTML = JSON.parse(p).practice;

        let l = _data.JS; 
        link.innerHTML = JSON.parse(l).links;

        var awka = document.querySelectorAll('#copyrights a');
        awka.forEach(function(item) {
            item.setAttribute('href', item.innerHTML);
            console.log(item);
        });

    fetch('' + des.getAttribute('href'))
    .then(res => res.text())
    .then(data => des.innerHTML = data);
    }).catch(err => Logger(err))
};

function Logger(item) {
    console.log(item);
}

function blobMasta() {
    return fetch('mySon.json')
    .then(res => res.blob())
    .then(myBlob => {
        blobReader(myBlob);
        var newObj = URL.createObjectURL(myBlob);
        binded(newObj);
        });
    };

function binded(a) {
    this.a = a;
    myFetch(this.a);
}; 

function myFetch(item) {
    this.item = item;
    return fetch(this.item)
    .then(res => { return res.text(); })
    .then(data => {
        var x = data;
        des.innerHTML += x;
        x.className = "helloworld";
        scrollBot();
    }) 
    .catch(err => console.log(err));              
};


function scrollBot() {
    var go = document.getElementsByTagName('body')[0];
    go.scrollIntoView(0);
};

function blobReader(blob) {
    var reader = new FileReader();
    reader.onload = function() {
        // var newText = decodeURI(reader.result);
        // var newExp = newText.split(/<.*>/)[1].replace(',', '')
        
        // var c = decodeURI(newExp);
        // console.log("blobreader-reg+uri - " + c);
        des.innerHTML += reader.result;
    };
    reader.readAsText(blob);
};





// var fonts = {
//     state: null,
//     hiddenElems: function(event) {
//         console.log(event)
//     },
//     setState : function(state) {
//         this.state = state;
//         return this.state;
//     },
//     getState: function() {
//         return this;
//     }
// };




