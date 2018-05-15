
var x;
fetch('imglist.txt')
  .then(response => response.text())
  .then(text => globalItems.img = text);

  
  console.log(globalItems);
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

var myHeaders = new Headers();
          myHeaders.append("Content-Type", "text/plain");
          myHeaders.append("Content-Length", 255);
          myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

function FetchDemo(){
  let url = 'http://localhost:8080/imglist.txt';
  let options = {
    // Все опции:
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
    method: 'POST', // GET, PUT, DELETE etc.
    headers: headers,
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
    
    body: body, // Любые данные для вашего запроса
    mode: 'no-cors',
    /*
      CORS: Cross-Origin Resourse Shairing
      Если просто: то в каком режиме кросс-доммености будет сделан запрос
      Если сложно: доки: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    */
  };
  fetch( url,
    {method: 'GET', header: {"Content-type": "application/x-www-form-urlencoded"}} )
  .then( function( res ){
    console.log(res);
  }
    // promise stuff
  );
}
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