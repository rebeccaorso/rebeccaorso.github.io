let aTeatro = document.querySelector("#aTeatro");

document.addEventListener("DOMContentLoaded", function () {
    let card = document.getElementById("aTeatro");
    card.addEventListener("click", function () {
        let url = "https://github.com/rebeccaorso/Progetto_Finale_Teatro";
        window.open(url, "_blank");
    });
});
