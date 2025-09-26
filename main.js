document.addEventListener("DOMContentLoaded", () => {
    // Carregar Header
    fetch("header.html")
        .then(response => {
            if (!response.ok) throw new Error("Header não encontrado");
            return response.text();
        })
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
            initMenuToggle();
        })
        .catch(error => console.error("Erro ao carregar header:", error));

    // Carregar Footer
    fetch("footer.html")
        .then(response => {
            if (!response.ok) throw new Error("Footer não encontrado");
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
            updateYear();
        })
        .catch(error => console.error("Erro ao carregar footer:", error));
});

function initMenuToggle() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }
}

function updateYear() {
    const yearSpan = document.querySelector(".year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}
