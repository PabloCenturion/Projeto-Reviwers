<<<<<<< HEAD
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || 
[{email: "admin@admin.com", userName: "admin", senha: "admim"}];

let input = {};
=======
let usuarios = [
    {email: "admin@admin.com", userName: "admin", senha: "admim"}
]

let input = {}
>>>>>>> 273a6e40968bfbf86351f3eb8cd6e1d72c3c75cc

function cadastro(){

    input.email = document.getElementById("email").value;
    input.userName = document.getElementById("name").value;
    input.senha = document.getElementById("senha").value;

<<<<<<< HEAD
=======
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    
>>>>>>> 273a6e40968bfbf86351f3eb8cd6e1d72c3c75cc
    usuarios.push(input);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    setTimeout(() => {
        window.location.href = "/Pgn Login/index.html"
    });
}
console.log(JSON.parse(localStorage.getItem("usuarios")));
