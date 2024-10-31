let isPrivate = false;

function showMessage(message, isSuccess) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = 'alert ' + (isSuccess ? 'alert-success' : 'alert-error');
    messageDiv.style.display = 'block';

    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 1500);
}

function loadSettings() {
    const savedImage = localStorage.getItem('userImage');
    const savedPrivacy = localStorage.getItem('isPrivate');
    const savedData = JSON.parse(localStorage.getItem('userData'));

    
    if (savedImage) {
        document.getElementById('userImage').src = savedImage;
    }

    if (savedPrivacy === 'true') {
        document.getElementById('privacyPrivate').checked = true;
        isPrivate = true;
    } else {
        document.getElementById('privacyPublic').checked = true;
        isPrivate = false;
    }

    if (savedData) {
        if (!isPrivate) {

            document.getElementById('inputName').value = savedData.name || '';
            document.getElementById('inputEmail').value = savedData.email || '';
            document.getElementById('inputBio').value = savedData.bio || '';
            document.getElementById('inputBirthDate').value = savedData.birthDate || '';
            document.getElementById('inputLocation').value = savedData.location || '';
        } else {
            
            document.getElementById('userImage').value = src="/Perfil_Usuário/img/usuario.jpg";
            document.getElementById('inputName').value = 'Usuário Anônimo';
            document.getElementById('inputEmail').value = savedData.email;
            document.getElementById('inputBio').value = 'Perfil Privado';
            document.getElementById('inputBirthDate').value = savedData.birthDate;
            document.getElementById('inputLocation').value = '';
        }
    }
}

function previewImage() {
    const fileInput = document.getElementById('fileInput');
    const userImage = document.getElementById('userImage');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            userImage.src = e.target.result;
            showMessage('Imagem carregada com sucesso!', true);
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function togglePrivacy() {
    const radioButtons = document.getElementsByName('privacyOption');

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isPrivate = radioButtons[i].id === 'privacyPrivate';
            break;
        }
    }

    if (isPrivate) {
        document.getElementById('inputName').value = 'Usuário Anônimo'; 
        showMessage('O perfil está configurado como privado.', true);
    } else {
        showMessage('O perfil está configurado como público.', true);
    }
}

function saveData() {
    const fileInput = document.getElementById('fileInput');
    const inputName = document.getElementById('inputName').value || 'Usuário Anônimo'; 
    const inputEmail = document.getElementById('inputEmail').value;
    const inputBio = document.getElementById('inputBio').value;
    const inputBirthDate = document.getElementById('inputBirthDate').value;
    const inputLocation = document.getElementById('inputLocation').value;

    
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('userImage', e.target.result);
            showMessage('Imagem salva com sucesso!', true);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        localStorage.setItem('userImage', '/Perfil_Usuário/img/usuario.jpg'); 
        showMessage('Configurações salvas com a imagem padrão.', true);
    }

    
    localStorage.setItem('isPrivate', isPrivate);

   
    const userData = {
        name: isPrivate ? 'Usuário Anônimo' : inputName,
        email: inputEmail,
        bio: inputBio,
        birthDate: inputBirthDate,
        location: inputLocation,
        privacy: isPrivate ? 'privado' : 'público'
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    showMessage('Configurações salvas com sucesso!', true);
}

window.onload = function() {
    let estalogado = localStorage.getItem('userData') === "true"
    if (estalogado) {
        
    } else {
        
    }
    loadSettings();
};