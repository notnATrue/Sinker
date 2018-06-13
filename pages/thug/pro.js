
var x,y;
fetch('imglist.txt')
  .then(response => response.text())
  .then(text => globalItems.img = text)
  .then(addict => { x = globalItems.img;
                    y = x.split(/[ ]+/g);
                    globalItems.imgArr = y;
                    })
  .then(getBG);
var rndm = [];
function getBG() {
  var i = getRandom(0, globalItems.imgArr.length);
  
   rndm.push(i);
  dot();
  
  console.log('fetched');

  
  function dot() {

    var img = new Image();
    img.setAttribute('class','hire');
    
    
    img.onload =  function () {
      console.log(rndm);
      var bg = document.querySelector('.bg-image');
      bg.style.opacity = 0.05;
      bg.src = img.src;

      var c = 0.05 ;
      console.log(new Date());
      var cont = document.querySelector('.container');
      
      document.body.appendChild(bg);
      
      var y = setInterval(function(){
        if(c >= 1){
          
          clearInterval(y);
          
          var t = 1;
          var time = 0;
          var z = setInterval(function(){
            time += 25;
            if(time >= 10000){
              bg.style.opacity = t;
              t -= 0.01;
                if (bg.style.opacity <= 0.02){
                  clearInterval(z);
                  time = 0;
                  dot();
                }
            }
          }, 25);
      };
        // console.log(bg.style.opacity);
        bg.style.opacity = c;
        c += 0.01;
      }, 25);
    };
    
    img.src = globalItems.imgArr[i];
    rndm.push(img.src);
    console.log(i);
    i = getRandom(0, globalItems.imgArr.length);
    console.log('before ', i);
      for (var j = 1; j <= rndm.length; j++) {
       console.log(globalItems.imgArr[i])
       console.log(rndm[j])
        if (globalItems.imgArr[i] === rndm[j]){
          i = getRandom(0, globalItems.imgArr.length);
          alert('after ');
        } else {return}
      }
    console.log(i);
  };

  document.addEventListener('keypress', add);
  
  function add(){
    if (!(!x) === true){
      clearInterval(x);
      console.log('pressed');
    };
  };
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

  
  
  
  
  
  
  
  //var x = globalItems.img;
 // console.log(x);
 // console.log(globalItems);
  //   var x = document.querySelector('.content');

  // fetch('http://localhost:8080/img.json',{mode: 'no-cors'})
  // .then(response => response.json())
  // .then(jsonResponse => console.log(jsonResponse))    





  // var client = new XMLHttpRequest();
// client.open('GET', 'http://localhost:3000/imglist.txt');
// client.onreadystatechange = function() {
//   var x = JSON.stringify(response);
// }
// client.send();

// fetch('http://localhost:8080/img.html',{mode: 'no-cors'}).then(function(response){
//     var x = response.text();
//     alert(x)
// })

// .then(function (x){
//     alert(x);
// });

// var myRequest = new Request('http://localhost:8080/imglist.txt');

// fetch(myRequest,{mode: 'no-cors'})
//   .then(function(response) { return response.json(); })
//   .then(function(data) {
//     for (var i = 0; i < data.products.length; i++) {
//       var listItem = document.createElement('.content');
//       listItem.innerHTML = data.value;
//       document.body.appendChild(listItem);
//     }
//   });




// fetch('http://localhost:8080/imglist.txt',{mode:'no-cors'})
// .then(response => {
//     response.json().then(function(data){
//         var x = document.querySelector('.content');
//         x.innerHTML = data;
//         alert(data);
//     });
// });

// var myHeaders = new Headers();
//           myHeaders.append("Content-Type", "text/plain");
//           myHeaders.append("Content-Length", 255);
//           myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

// function FetchDemo(){
//   let url = 'http://localhost:8080/imglist.txt';
//   let options = {
    // Все опции:
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
     // GET, PUT, DELETE etc.
//  method: 'POST',
// headers: headers,
    /*
      https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
      Сюда можно передать любые http headers как просто обьектом:
      {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
      Или через конструктор
*/
      

      // https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
    // Любые данные для вашего запроса
// body: body, 
// mode: 'no-cors',
    /*
      CORS: Cross-Origin Resourse Shairing
      Если просто: то в каком режиме кросс-доммености будет сделан запрос
      Если сложно: доки: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    */
//   };
//   fetch( url,
//     {method: 'GET', header: {"Content-type": "application/x-www-form-urlencoded"}} )
//   .then( function( res ){
//     console.log(res);
//   }
   
//   );
// }
// var c = readTextFile('http://localhost:8080/imglist.txt');
// function readTextFile()
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", 'http://localhost:8080/img.html', true);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
    // rawFile.send(null);
// }

// function reqListener () {
//     console.log(this.responseText);
//   }
  
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener , );
//   oReq.open("GET", "http://localhost:3000/imglist.txt",);
//   alert(response.text)
//   oReq.send();



//   var xhr=new XMLHttpRequest();
// xhr.onload=function(){
//     console.log(xhr.responseText);
// }
// xhr.open("GET","http://localhost:3000/imglist.txt");
// xhr.send();
// var x = response.headers;
// console.log(x)
// fetch(
//     'http://localhost:3000/imglist.txt',
//     {   method: 'GET',
//         headers: new Headers(
//            {"Content-Type": "application/json",
//             "Accept":"application/json"}
//         ),

//         body: JSON.stringify(
//            {'name': 'Tom', 'password': 'Soyer'}
//         )
//      }
//    ).then( response => { console.log(response);})
//     .catch(err => console.log(err))



