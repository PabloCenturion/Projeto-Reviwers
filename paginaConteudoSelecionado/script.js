/////////////////////////////////DOM/////////////////////////////////////////

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

    <div class="brothers-title">
    <h2 class="title-rate">Avaliação de 'Titulo'</h2>
    <div class="button-remove"><i class="bi bi-x-lg x-size"></i></div>
</div>

    <h3 class="subtitle-rate">Dê uma nota de 0 a 10:</h3>

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
    
    <a type="button" onclick="openComentModal()"><span>clique aqui e detalhe sua avaliação</span></a>

    <div class="container-button">

    <button type="button" class="btn btn-outline-primary button-color-register">Registrar</button>

</div>

</section>`
    
    const divModalRate = document.getElementById("modalRateDiv")

    divModalRate.innerHTML = modalCorpo

}

function openComentModal(){

    const comentModalCorpo = ` <section class="container-modal-coment">

        <div class="brothers-title">
            <h2 class="title-rate">Avaliação de 'Titulo'</h2>
            <div class="button-remove"><i class="bi bi-x-lg x-size"></i></div>
        </div>
            <h3 class="subtitle-rate">Dê uma nota de 0 a 10:</h3>

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
        <label for="review-coment" class="form-label"></label>
        <textarea class="form-control" id="review-coment" rows="5" placeholder="Digite aqui sua Crítica"></textarea>

        <div class="container-button">

            <button type="button" class="btn btn-outline-primary button-color-register">Registrar</button>
    
        </div>
        

    </section>` 

    const modalComentDiv = document.getElementById("modalComentDiv")

    modalComentDiv.innerHTML = comentModalCorpo


}

///////////////////////////////LOCAL STORAGE E JSON/////////////////////////////

//funçao construtora para criação de itens

function Actors (actorName, movies){

    this.actorName = actorName
    this.movies = movies

}


function Characters(name, actorName){

    this.name = name
    this.actorName = actorName

}

function Filme(titulo,ano,classification,duracao,genero, sinopse, streaming, director, producer){

    this.titulo = titulo

    this.ano = ano

    this.classification = classification

    this.duracao = duracao

    this.genero = genero

    this.sinopse = sinopse

    this.streaming = streaming

    this.director = director

    this.producer = producer

        this.showInfoMovie = function() {

            return `Título: ${this.titulo}\nAno: ${this.ano}\Classificação: ${this.classification}\nDuração: ${this.duracao} min\nGênero: ${this.genero}\nSinopse: ${this.sinopse}\nStreaming: ${this.streaming}\nDiretor: ${this.director}\nProdutora: ${this.producer}`;
    }
}


// Criando 5 filmes
const filme1 = new Filme(
    "Inception", 
    2010, 
    16, 
    148, 
    "Ficção Científica", 
    "Um ladrão que invade os sonhos das pessoas é contratado para realizar um último trabalho.", 
    "Netflix", 
    "Christopher Nolan", 
    "Emma Thomas"
  );
  
  const filme2 = new Filme(
    "The Matrix", 
    1999, 
    18, 
    136, 
    "Ação", 
    "Um hacker descobre que o mundo em que vive é uma simulação controlada por máquinas.", 
    "HBO Max", 
    "The Wachowskis", 
    "Joel Silver"
  );
  
  const filme3 = new Filme(
    "Parasite", 
    2019, 
    14, 
    132, 
    "Drama", 
    "Uma família pobre se infiltra na vida de uma família rica com consequências inesperadas.", 
    "Amazon Prime", 
    "Bong Joon-ho", 
    "Kwak Sin-ae"
  );
  
  const filme4 = new Filme(
    "Avengers: Endgame", 
    2019, 
    12, 
    181, 
    "Aventura", 
    "Os Vingadores restantes tentam reverter as ações de Thanos e salvar o universo.", 
    "Disney+", 
    "Anthony e Joe Russo", 
    "Kevin Feige"
  );
  
  const filme5 = new Filme(
    "Interstellar", 
    2014, 
    14, 
    169, 
    "Ficção Científica", 
    "Um grupo de astronautas viaja através de um buraco de minhoca para salvar a humanidade.", 
    "Netflix", 
    "Christopher Nolan", 
    "Emma Thomas"
  );


  const filmes = []

  filmes.push(filme1)
  filmes.push(filme2)
  filmes.push(filme3)
  filmes.push(filme4)
  filmes.push(filme5)

localStorage.setItem("listaFilmes", JSON.stringify(filmes))

  
  // Exibindo as informações dos filmes
  console.log(filme1.showInfoMovie());
  console.log(filme2.showInfoMovie());
  console.log(filme3.showInfoMovie());
  console.log(filme4.showInfoMovie());
  console.log(filme5.showInfoMovie());












