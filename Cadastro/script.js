let input = {};

function puxaPagina(){
    setTimeout(() => {
    window.location.href = "/Pgn Login/index.html";
    });
}

function cadastro() {
    input.email = document.getElementById("email").value;
    input.userName = document.getElementById("name").value;
    input.senha = document.getElementById("senha").value;

    // Verifica se já há um array de usuários no localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Adiciona o novo input ao array de usuários
    usuarios.push(input);

    // Salva o array atualizado no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Redireciona para a página de login após o cadastro
    if(!input.email || !input.userName || !input.senha){
        alert("Preencha o Formulário Corretamente!");
    }else{
        puxaPagina();
    }
}
// Exibe os usuários salvos no console para conferência
console.log(JSON.parse(localStorage.getItem("usuarios")));
console.log(document.getElementById("senha").value);
