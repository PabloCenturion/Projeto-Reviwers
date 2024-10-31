let input = {};

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
    setTimeout(() => {
        window.location.href = "/Pgn Login/index.html";
    });
}

// Exibe os usuários salvos no console para conferência
console.log(JSON.parse(localStorage.getItem("usuarios")));
