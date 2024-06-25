// Function to check if all required fields are filled
function checkForm() {
    let name = document.getElementById("name").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (name !== "" && lname !== "" && phone !== "" && phone !== "e" ) {
        document.getElementById("submitButton").removeAttribute("disabled");
    } else {
        document.getElementById("submitButton").setAttribute("disabled", "disabled");
    }
} +998930479919

// Event listeners for input fields to check on input change
document.getElementById("name").addEventListener("input", checkForm);
document.getElementById("lname").addEventListener("input", checkForm);
document.getElementById("phone").addEventListener("input", checkForm);




//bot token
let telegram_bot_id = "7305433064:AAFF6raNcjLMKVT5QR3Il3sIGpzCBFzh-xM"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
let chat_id = 1889969457; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
let u_name, address, age, phone;
let ready = function() {
    u_name = document.getElementById("name").value;
    lname = document.getElementById("lname").value;
    phone = document.getElementById("phone").value;
    message = "Ismi: " + u_name + "\nFamilya: " + lname +"\nTelefon raqam: " + phone;
};
function sendtelegram() {   
    ready();
    let settings = {
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
        window.location.href = 'ok.html';
    });
    document.getElementById("name").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";
    
    return false;
    
};



