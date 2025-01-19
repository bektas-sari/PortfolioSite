// Sayfa yüklendiğinde bir hoş geldiniz mesajı göster
document.addEventListener('DOMContentLoaded', () => {
    alert("Portfolyo siteme hoş geldiniz!");
});

// Menüye tıklanınca aktif sınıfı ekleyelim
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});
