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

document.getElementById("checkin").addEventListener("click", () => {

    if (!navigator.geolocation) {
        alert("Thiết bị không hỗ trợ GPS");
        return;
    }

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            document.getElementById("location").innerHTML =
                "📍 " + lat + "<br>" + lng;

        },

        function(error) {

            alert("Không lấy được GPS");

            console.log(error);

        }

    );

});

document.getElementById("checkin").addEventListener("click", () => {
    if (!navigator.geolocation) {
        alert("Thiết bị không hỗ trợ GPS");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            document.getElementById("location").innerHTML =
                "📍 " + lat + "<br>" + lng;
        },
        function(error) {
            alert("Không lấy được GPS");
            console.log(error);
        }
    );
});

