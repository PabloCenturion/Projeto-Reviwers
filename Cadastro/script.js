let usuarios = JSON.parse(localStorage.getItem("usuarios")) || 
[{email: "admin@admin.com", userName: "admin", senha: "admim"}];

let input = {};

function cadastro(){
    input.email = document.getElementById("email").value;
    input.userName = document.getElementById("name").value;
    input.senha = document.getElementById("senha").value;

    usuarios.push(input);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    setTimeout(() => {
        window.location.href = "/Pgn Login/index.html"
    });
}
console.log(JSON.parse(localStorage.getItem("usuarios")));
