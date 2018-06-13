
// var header = document.querySelector('.enc');
var div = document.querySelector('.input-group-sm');
// header.appendChild(div);
var divIn = document.createElement('div');
divIn.className = "col";
div.appendChild(divIn);

var input1 = document.createElement('input');
input1.className = "input";
input1.setAttribute('id','word');
input1.setAttribute("placeholder","Input data")


divIn.appendChild(input1);

var inputNum = document.createElement('input');
inputNum.className = "input";
inputNum.setAttribute('id', 'number');
inputNum.setAttribute("placeholder","Input number , that would be a key")
divIn.appendChild(inputNum);

var inputDecrypt = document.createElement('input');
inputDecrypt.setAttribute("placeholder","Input encrypted data")
inputDecrypt.className = "input";
div.appendChild(inputDecrypt);

var inputDecrNum = document.createElement('input');
inputDecrNum.setAttribute("placeholder","Input key")
inputDecrNum.className = "input";
div.appendChild(inputDecrNum);

var butDecrypt = document.createElement('button');
butDecrypt.className = "btn";
butDecrypt.setAttribute('type','button');
butDecrypt.innerText = 'Decrypt';
div.appendChild(butDecrypt);

butDecrypt.addEventListener('click',
  Decrypt
  );
var divResult = document.querySelector('#resFirst');
  divResult.setAttribute('style' , 'width:50%');

var divRes = document.querySelector('#resSecond');
    divRes.setAttribute('style' , 'width:50%');


  var but = document.createElement('button');
  but.className = "btn btn-primary";
  but.setAttribute('type','button');
  but.innerText = 'Encrypt';
  
  divIn.appendChild(but);
    but.addEventListener('click' ,

    encryptCesar
    );
function newObject(a, b){

  var liResult = document.createElement('div');
  liResult.setAttribute('style','word-wrap: break-word')
  liResult.className = "h6"


  var x="";
  for(var i = 0 ; i < a.length ; i++){
    
   x += a[i];
   console.log(x)
  }

  liResult.innerText = x;

  if(b == 1){
    let en = document.querySelector('#en');
    en.innerText = x;
    // divResult.appendChild(liResult)
  } else {
    let dc = document.querySelector('#dc');
    dc.innerText = x}
    // divRes.appendChild(liResult)};
  
};


 function Decrypt(){
  let targetValue = inputDecrypt.value;
  let targetIndex = inputDecrNum.value;
  var letterArray = [];
  var newLetterArray = [];
  for (var i = 0 ; i < targetValue.length ; i++){
   letterArray[i]= targetValue.charCodeAt(i);
   console.log(letterArray[i]);
  };
  for(var i = 0 ; i < letterArray.length ; i++){
    var x;
    var oldWord = parseInt(letterArray[i]);
    var newWord = parseInt(letterArray[i]-targetIndex);
    x += newWord;
    console.log(newWord)

   newLetterArray[i] = String.fromCharCode(newWord);
  }
  newObject(newLetterArray);
  console.log(letterArray);
  console.log(newLetterArray);
 }
 function encryptCesar(){
   
  let targetValue = input1.value;
  let targetIndex = inputNum.value;
  console.log(targetValue  )
  console.log(targetIndex  )
   var letterArray = [];
   var newLetterArray = [];
   for (var i = 0 ; i < targetValue.length ; i++){
    letterArray[i] = targetValue.charCodeAt(i);

   }
   for(var i = 0 ; i < letterArray.length ; i++){
     var oldWord = parseInt(letterArray[i]);
     var newWord = parseInt(letterArray[i] + parseInt(targetIndex));

    newLetterArray[i] = String.fromCharCode(newWord);

   }
   newObject(newLetterArray,1);
   console.log(letterArray);
   console.log(newLetterArray); 
};
function goHome(){
  window.location.href = "https://notnainside.herokuapp.com/"
}

//  Object.defineProperty(golobalObject , "value" , {
//   get: function(){
//     return this.name;
//   },
//   set: function(value){
//     this.name = value;
//     console.log(this.name);
//   }
// });
 

