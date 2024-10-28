let usuarios = [];

function login() {
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    // Verifica se há usuários salvos no localStorage
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log(usuarios);

    if (email.value === "admin@admin.com" && senha.value === "admin") {
        setTimeout(() => {
            window.location.href = "/pag inicial/pag-inicial-testes/corpo/index.html";
        }, 1000);
        return; 
    }
<<<<<<< HEAD
    else{
        for(var i=0;i<usuarios.length;i++){
            if(email.value == usuarios[i].email && senha.value == usuarios[i].senha){   
                console.log(usuarios[i].value);
                window.location.href = "/pag inicial/pag-inicial.html";
                localStorage.setItem("estaLogado", true);
            }
=======

    // Loop para verificar os outros usuários cadastrados
    for (var i = 0; i < usuarios.length; i++) {
        if (email.value === usuarios[i].email && senha.value === usuarios[i].senha) {
            console.log("Login bem-sucedido:", usuarios[i].userName);
            window.location.href = "/pag inicial/pag-inicial-testes/corpo/index.html";
            localStorage.setItem("estaLogado", true);
            return; // Para o loop quando encontrar um usuário válido
>>>>>>> 5bc7798d028c7ad84d27537a9529872b98c287cd
        }
    }

    // Se nenhum usuário for encontrado, exibe o alerta
    alert("Usuário ou senha inválidos!");
}

login
