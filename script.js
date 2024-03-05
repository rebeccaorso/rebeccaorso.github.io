let aTeatro = document.querySelector("#aTeatro");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

document.addEventListener("DOMContentLoaded", function () {
    let card = document.getElementById("aTeatro");
    card.addEventListener("click", function () {
        let url = "https://github.com/rebeccaorso/Progetto_Finale_Teatro";
        window.open(url, "_blank");
    });
});

function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    let mailtoLink = "mailto:rebeccaorso@gmail.com?subject=Richiesta di contatto dal portfolio GitHub" + encodeURIComponent(message);
    
    window.location.href = mailtoLink;
}