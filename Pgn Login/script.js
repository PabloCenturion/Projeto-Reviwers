let usuarios = [];

function login(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    console.log(usuarios);

    if(email.value == "admin@admin.com" && senha.value == "admin"){
        setTimeout(() => {
            window.location.href = "/pag inicial/pag-inicial-testes/corpo/index.html"
        },);
    }
    else{
        for(var i=0;i<usuarios.length;i++){
            if(email.value == usuarios[i].email && senha.value == usuarios[i].senha){   
                console.log(usuarios[i].value);
                window.location.href = "/pag inicial/pag-inicial-testes/corpo/index.html"
                localStorage.setItem("estaLogado", true);
            }
        }
        alert("Usuário ou senha inválidos!");
    }
}
