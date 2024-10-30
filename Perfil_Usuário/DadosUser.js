let isPrivate = false; // Estado inicial de privacidade

function showMessage(message, isSuccess) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = 'alert ' + (isSuccess ? 'alert-success' : 'alert-error');
    messageDiv.style.display = 'block';

    // Ocultar a mensagem após 3 segundos
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}

// Função para carregar as configurações do localStorage
function loadSettings() {
    const savedImage = localStorage.getItem('userImage');
    const savedPrivacy = localStorage.getItem('isPrivate');

    if (savedImage) {
        document.getElementById('userImage').src = savedImage;
    }

    if (savedPrivacy === 'true') {
        document.getElementById('flexRadioDefault1').checked = true;
        isPrivate = true;
        document.getElementById('fileInput').disabled = true; // Desabilita a escolha de imagem
    } else {
        document.getElementById('flexRadioDefault2').checked = true;
        isPrivate = false;
        document.getElementById('fileInput').disabled = false; // Habilita a escolha de imagem
    }
}

// Função para alternar a privacidade
function togglePrivacy() {
    const userImage = document.getElementById('userImage');
    const fileInput = document.getElementById('fileInput');
    const radioButtons = document.getElementsByName('flexRadioDefault');

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isPrivate = radioButtons[i].id === 'flexRadioDefault1';
            break;
        }
    }

    if (isPrivate) {
        userImage.src = '/Perfil_Usuário/img/usuario.jpg'; // Imagem padrão para privado
        fileInput.disabled = true; // Desabilita a escolha de imagem
    } else {
        fileInput.disabled = false; // Habilita a escolha de imagem
    }
}

// Função para visualizar a imagem
function previewImage() {
    const fileInput = document.getElementById('fileInput');
    const userImage = document.getElementById('userImage');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            userImage.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Função para salvar a imagem e configurações no localStorage
function saveImage() {
    const userImage = document.getElementById('userImage');
    const fileInput = document.getElementById('fileInput');

    if (!isPrivate && fileInput.files && fileInput.files[0]) {
        // Salva a imagem escolhida pelo usuário
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('userImage', e.target.result); // Salva a imagem no localStorage
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        // Salva a imagem padrão para privado
        localStorage.setItem('userImage', '/Perfil_Usuário/img/usuario.jpg');
    }

    // Salva a configuração de privacidade
    localStorage.setItem('isPrivate', isPrivate);
    console.log('Configurações salvas');
}

// Carregar as configurações ao iniciar
window.onload = function() {
    loadSettings();
};