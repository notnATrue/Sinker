
var globalItems = {};


onclick = function(){
    console.log('prepare');
}



fetch('imglist.txt')
.then(response => { return response.blob() })
.then(myBlob => { 
    console.log(myBlob);
    var newObj = URL.createObjectURL(myBlob); 
                let x = document.querySelector('.head');
                let y = document.createElement('h4');
                y.innerText = newObj;
                x.appendChild(y);
                console.log(newObj)});





                          