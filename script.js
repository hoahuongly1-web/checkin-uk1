const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe.user;

if (user) {
    document.getElementById("user").innerHTML =
        "Xin chào " + user.first_name;
} else {
    document.getElementById("user").innerHTML =
        "Running outside Telegram";
}

