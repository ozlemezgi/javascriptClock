//kullanıcıdan adı alma ve ekrana bastırma kısmı
let getName = prompt("Lütfen adınızı girin.") 
let selectName = document.querySelector("#myName")
selectName.innerHTML = `${getName}` 

//saat ve gün verisini alma
let clock = document.querySelector("#myClock")
var d = new Date(); 
var n = d.toLocaleTimeString();
var x=d.getDay();

//gün bilgisini değiştirme
if(x==1){
    x="pzt"
}else if(x==2){
    x="salı"
}else if(x==3){
    x="çarşamba"
}else if(x==4){
    x="perşembe"
}else if(x==5){
    x="cuma"
}else if(x==6){
    x="cumartesi"
}else if(x==7){
    x="pazar"
}

//saat ve gün verisini ilgili alana bastırma
clock.innerHTML =`${n} ${x}`