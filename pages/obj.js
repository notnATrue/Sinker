
var globalItems = {};


onclick = function(){
    console.log('prepare');
}



fetch('imglist.txt')
.then(response => { return response.blob() })
.then(myBlob => { 
    console.log(myBlob);
    var newObj = URL.createObjectURL(myBlob); 
                let x = document.querySelector('.constructor');
                x.innerHTML = newObj;
                console.log(newObj)});




//Cookie: is_gm=0; __utma=199970983.555770766.1526513054.1526513054.1526513054.1; __utmc=199970983; __utmz=199970983.1526513054.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); _ym_uid=1526513055768153231; _ym_isad=1; _ym_visorc_14443408=w; __utmt=1; tmr_detect=1%7C1526517180498; __utmb=199970983.20.10.1526513054; autologin=VNHE3mThfDnOQty8WeokJmcONo985PfvTBECI4HtPREAXiw2yL69MyDS8957hne65%2FzzTN0nrphpwiyvbEmKxTuP4p5gpIKq5DpqNbzW45eAZNrEoyxdOXIHhFPPDkJHBsX%2Fd4AG%2BdWsUiY%2B1RFqGjCaIlAukzIChiXcHvbA%2BzU%3D; sign=GyQpDgOh9p3Juno97xW37FlHoHukGju43AsFkrODbVUrGs3RpCUhZ2%2BNshN9hethbGqPhGX1VoC8Kvn9181ghGr%2BJJhXXGRO6vD3V%2FKGxfbw5j00nxwWJX6oBlx%2BDTtRe3Hgmu8U15MVkgtHejLAXx4xXdI5rXxXfpiKP9bImS0%3D; tg_key=mgzvxt8zdjj8fehkrnp4e6guaw; bb_sessionhash=81e2fd8ce226ecdb4086682133ad3166
                          