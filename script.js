document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const userEmail = document.getElementById("userEmail").value;
            const password = document.getElementById("password").value;

            console.log("Tentando login com:", userEmail, password); // Testando no Console

            if (userEmail === "admin@example.com" && password === "senha123") {
                localStorage.setItem("userRole", "admin");
                alert("Login bem-sucedido como administrador!");
                console.log("Salvou no LocalStorage: userRole = admin");
                window.location.href = "admin.html";
            } else {
                localStorage.setItem("userRole", "user");
                alert("Login bem-sucedido como usuário comum!");
                console.log("Salvou no LocalStorage: userRole = user");
                window.location.href = "index.html";
            }
        });
    }
});
