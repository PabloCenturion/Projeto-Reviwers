function login() {
    let usuarios = [];
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    // Verifica se há usuários salvos no localStorage
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    console.log(usuarios);

    if (email.value === "admin@admin.com" && senha.value === "admin") {
        setTimeout(() => {
            window.location.href = "/pag inicial/pag-inicial.html";
        });
        return; 
    }
    else{
        for(var i=0;i<usuarios.length;i++){
            if(email.value == usuarios[i].email && senha.value == usuarios[i].senha){   
                console.log(usuarios[i].value);
                window.location.href = "/pag inicial/pag-inicial.html";
                localStorage.setItem("estaLogado", true);
                break;
            }
    }
    // Se nenhum usuário for encontrado, exibe o alerta
    alert("Usuário ou senha inválidos!");
    }
}
