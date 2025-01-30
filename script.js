document.addEventListener("DOMContentLoaded", function() {
    // Lógica de login
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const userEmail = document.getElementById("userEmail").value;
            const password = document.getElementById("password").value;

            console.log("Tentando login com:", userEmail, password);

            if (userEmail === "admin@example.com" && password === "senha123") {
                localStorage.setItem("userRole", "admin");
                console.log("Salvou no localStorage: userRole = admin");
                alert("Login bem-sucedido como administrador!");
                window.location.href = "admin.html";
            } else {
                localStorage.setItem("userRole", "user");
                console.log("Salvou no localStorage: userRole = user");
                alert("Login bem-sucedido como usuário comum!");
                window.location.href = "index.html";
            }
        });
    }

    // Lógica do painel de administração
    const userRole = localStorage.getItem("userRole");

    if (userRole !== "admin") {
        alert("Acesso negado! Você não tem permissão para acessar esta página.");
        window.location.href = "index.html";
    }

    // Logout
    document.getElementById("logout")?.addEventListener("click", function() {
        localStorage.removeItem("userRole");
        alert("Você saiu do sistema!");
        window.location.href = "index.html";
    });

    // Botões de postagem
    const postVideoBtn = document.getElementById("postVideoBtn");
    const postPhotoBtn = document.getElementById("postPhotoBtn");
    const postTextBtn = document.getElementById("postTextBtn");

    // Formulários
    const videoForm = document.getElementById("videoForm");
    const photoForm = document.getElementById("photoForm");
    const textForm = document.getElementById("textForm");

    // Área de conteúdo postado
    const postedContent = document.getElementById("postedContent");

    // Mostrar formulário de vídeo
    postVideoBtn?.addEventListener("click", function() {
        hideAllForms();
        videoForm.classList.remove("hidden");
    });

    // Mostrar formulário de foto
    postPhotoBtn?.addEventListener("click", function() {
        hideAllForms();
        photoForm.classList.remove("hidden");
    });

    // Mostrar formulário de texto
    postTextBtn?.addEventListener("click", function() {
        hideAllForms();
        textForm.classList.remove("hidden");
    });

    // Publicar vídeo
    videoForm?.addEventListener("submit", function(event) {
        event.preventDefault();
        const videoUrl = document.getElementById("videoUrl").value;
        postedContent.innerHTML += `<div class="post"><h4>Vídeo Postado:</h4><iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe></div>`;
        videoForm.reset();
        hideAllForms();
    });

    // Publicar foto
    photoForm?.addEventListener("submit", function(event) {
        event.preventDefault();
        const photoFile = document.getElementById("photoFile").files[0];
        if (photoFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                postedContent.innerHTML += `<div class="post"><h4>Foto Postada:</h4><img src="${e.target.result}" alt="Foto" style="max-width: 100%;"></div>`;
            };
            reader.readAsDataURL(photoFile);
        }
        photoForm.reset();
        hideAllForms();
    });

    // Publicar texto
    textForm?.addEventListener("submit", function(event) {
        event.preventDefault();
        const textContent = document.getElementById("textContent").value;
        postedContent.innerHTML += `<div class="post"><h4>Texto Postado:</h4><p>${textContent}</p></div>`;
        textForm.reset();
        hideAllForms();
    });

    // Função para esconder todos os formulários
    function hideAllForms() {
        videoForm?.classList.add("hidden");
        photoForm?.classList.add("hidden");
        textForm?.classList.add("hidden");
    }
});