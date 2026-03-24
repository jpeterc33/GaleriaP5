document.addEventListener("DOMContentLoaded", function () {
    console.log("Galeria p5.js carregada com sucesso");

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        card.addEventListener("click", function () {
            console.log("A abrir projeto:", card.querySelector("h2").textContent);
        });
    });
});
