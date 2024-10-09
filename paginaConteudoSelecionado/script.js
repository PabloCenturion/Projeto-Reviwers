document.getElementById("eye-action").addEventListener("click", function(){

    if(this.classList.contains("bi-eye")){

        this.classList.remove("bi-eye")

        this.classList.add("bi-eye-fill")

    }else{

        this.classList.remove("bi-eye-fill")

        this.classList.add("bi-eye")

    }

    this.classList.toggle("watched")

});


document.getElementById("save-list-action").addEventListener("click",function(){

   if(this.classList.contains("bi-bookmark-plus")){


    this.classList.remove("bi-bookmark-plus")

    this.classList.add("bi-bookmark-check-fill")

   }else{

    this.classList.remove("bi-bookmark-check-fill")

    this.classList.add("bi-bookmark-plus")

   }

    this.classList.toggle("saved-list")

    showListGroups()


})


document.getElementById("star-action").addEventListener("click", function(){


    if(this.classList.contains("bi-star")){

        this.classList.remove("bi-star")

        this.classList.add("bi-star-fill")

    }else{

        this.classList.remove("bi-star-fill")

        this.classList.add("bi-star")

    }

    this.classList.toggle("rated")




})

document.getElementById("like-action").addEventListener("click",function(){


    if(this.classList.contains("bi-heart")){

        this.classList.remove("bi-heart")

        this.classList.add("bi-heart-fill")

        showAlert("<i class='bi bi-heart like-Icon-Alert'></i>'Título' foi <strong>adicionado</strong> aos seus Filmes Curtidos", 'primary');


    }else{

        this.classList.remove("bi-heart-fill")

        this.classList.add("bi-heart")

        showAlert("<i class='bi bi-heart like-Icon-Alert'></i>'Título' foi <strong> excluído </strong> dos seus Filmes Curtidos", 'danger');

    }

    this.classList.toggle("liked")


})


document.getElementById("dislike-action").addEventListener("click",function(){

    if(this.classList.contains("bi-hand-thumbs-down")){

        this.classList.remove("bi-hand-thumbs-down")

        this.classList.add("bi-hand-thumbs-down-fill")

    }else{

        this.classList.remove("bi-hand-thumbs-fill")

        this.classList.add("bi-hand-thumbs-down")
    }

    this.classList.toggle("disliked")


})

//função global para alertas

function showAlert(textAlert,typeAlert){

    const alertsAction = document.getElementById("alertsAction");

    const alert = `
        <div class="alert alert-${typeAlert} alert-dismissible fade show" role="alert">
          ${textAlert}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

        alertsAction.innerHTML = alert;

}

//função para aparecer o list group bootstrap

function showListGroups(){

    const listGroupAction = document.getElementById("listGroupAction");

    const listGroupSintax = 
    `

    <ul class="list-group">
    <li class="list-group-item">Lista de Observação</li>
    <li class="list-group-item">Criar Lista +</li>
    </ul> `

    listGroupAction.innerHTML = listGroupSintax

}

function openModalRate(){

    const modalCorpo = `<section class="container-modal-rate">

        <h2>Avaliação de 'Titulo'</h2>
        <h3>Dê uma nota de 0 a 10:</h3>

        <div class="list-stars-rate">
            <i class="bi bi-star star-size"></i>
            <i class="bi bi-star star-size"></i>
            <i class="bi bi-star star-size"></i>
            <i class="bi bi-star star-size"></i>
            <i class="bi bi-star star-size"></i>
            <i class="bi bi-star star-size"></i>
            <i class="bi bi-star star-size"></i>
            <i class="bi bi-star star-size"></i>
            <i class="bi bi-star star-size"></i>
            <i class="bi bi-star star-size"></i>
        </div>
        
        <a type="button"><span>clique aqui e detalhe sua avaliação</span></a>

        <div class="container-button">

        <button type="button" class="btn btn-outline-primary button-color-register">Registrar</button>

    </div>

    </section>`
    
    const divModalRate = document.getElementById("modalRateDiv")

    divModalRate.innerHTML = modalCorpo

}

function openComentModal(){




}









