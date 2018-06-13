

var login = document.querySelector('#sign-up');
login.addEventListener('click', function() {
    
    let loc = localStorage;
    
    fetch('/in', {
        method: "POST",
        body: JSON.stringify(localStorage),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    })
    .then(res => res.url)
    .then(data => window.location.assign(data))
    .catch(err => console.log(err));
});


// fetch('/api/users/Snkr').then(res => res.json).then(data => console.log(data))

























// paste.call()
// function paste  (){
    
//     let block = document.createElement('object')
//     block.innerHTML = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"
//     let _body = document.body.appendChild(block);
//     console.log(block)
// }
