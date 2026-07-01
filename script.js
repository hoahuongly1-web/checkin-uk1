const tg = window.Telegram.WebApp;

tg.ready();

const user = tg.initDataUnsafe.user;

if(user){
    document.getElementById("user").innerHTML =
    "Hello " + user.first_name;
}else{
    document.getElementById("user").innerHTML =
    "Running outside Telegram";
}

