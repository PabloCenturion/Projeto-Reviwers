function exibirUsuarioInfos(){

    const usuario = JSON.parse(localStorage.getItem("userData"));

    const imgUserLocalStorage = localStorage.getItem("userImage");

    const divShowUserInfos = document.getElementsByClassName("container-user")[0];

    const structUser =  ` 
    
    <img class="user-img" src="${imgUserLocalStorage}" alt="foto de perfil do usuario" width="100" height="100">

    <div class="info-usuario">

        <div class="user-name">${usuario.name}</div>
         <div class="user-bio">${usuario.bio}</div>
        
    </div>`

    divShowUserInfos.innerHTML = structUser;

}

exibirUsuarioInfos()