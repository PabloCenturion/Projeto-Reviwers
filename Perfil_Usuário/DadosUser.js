function goBack() {
    window.location.href = 'Perfil_Usuário\mod lucas\index.html'; // Subs
}

let isPrivate = false;

function togglePrivacy() {
    const userImage = document.getElementById('userImage');
    const userName = document.getElementById('userName');

    if (isPrivate) {
        userImage.src = '/Perfil_Usuário/img/usuario.jpg';
        userName.textContent = 'Nome do Usuário';
    } else {
        userImage.src = '/Perfil_Usuário/img/imagem_padrao.jpg';
        userName.textContent = 'Nome Privado';
    }

    isPrivate = !isPrivate;
}

function previewImage() {
    const fileInput = document.getElementById('fileInput');
    const userImage = document.getElementById('userImage');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            userImage.src = e.target.result;
        }

        reader.readAsDataURL(fileInput.files[0]);
    }
}


function saveImage() {
    const fileInput = document.getElementById('fileInput');
    
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const userImage = document.getElementById('userImage');
            userImage.src = e.target.result; // Atualiza a imagem exibida
            console.log('Imagem salva com sucesso!'); // Mensagem de sucesso
        }

        reader.readAsDataURL(fileInput.files[0]);
    } else {
        console.log('Nenhuma imagem foi selecionada.');
    }
}


