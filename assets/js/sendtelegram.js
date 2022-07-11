//bot token
var telegram_bot_id = ""; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = ; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, number, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    number = document.getElementById("number").value;
    message = document.getElementById("message").value;
    message = "Ism, Familiya: " + u_name + "\nTelefon raqami " + number + "\nSavol: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("message").value = "";
    return false;
};
