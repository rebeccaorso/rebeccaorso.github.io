let aTeatro = document.querySelector("#aTeatro");
let login = document.querySelector("#login")
let name = document.querySelector("#name");
let email = document.querySelector("#email");


document.addEventListener("DOMContentLoaded", function () {
    let card = document.getElementById("aTeatro");
    card.addEventListener("click", function () {
        let url = "https://github.com/rebeccaorso/Progetto_Finale_Teatro";
        window.open(url, "_blank");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let cardLogin = document.getElementById("login");
    cardLogin.addEventListener("click", function () {
        let url = "https://github.com/rebeccaorso/login_project";
        window.open(url, "_blank");
    });
});

function sendEmail() {
    let message = document.getElementById("message").value;
    let mailtoLink = "mailto:rebeccaorsogiacone@gmail.com?subject=Richiesta di contatto dal portfolio GitHub&body=" + encodeURIComponent(message);

    window.location.href = mailtoLink;
}


