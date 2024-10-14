let email,Nome,Senha;

function conta(userName, email, senha){
    this.email = email
    this.userName = userName
    this.senha = senha;

    this.mostrarDados = function() {

        return `Nome de Usuário: ${this.userName}\nEmail: ${this.email}\nSenha: ${this.senha}`;
}
}
function Imput(){
    email = document.getElementById("email").value;
    Nome = document.getElementById("Nome").value;
    Senha = document.getElementById("Senha").value;

    localStorage.setItem("email",email);
    localStorage.setItem("Nome",Nome);
    localStorage.setItem("Senha",Senha);
}
console.log(localStorage.getItem("email"));
