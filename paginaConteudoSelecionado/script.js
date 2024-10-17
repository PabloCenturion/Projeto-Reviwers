///////////////////////////////// DOM /////////////////////////////////////////

const eyeAction = document.getElementById("eye-action");
const listAction = document.getElementById("save-list-action");
const starAction = document.getElementById("star-action");
const likeAction = document.getElementById("like-action");
const dislikeAction = document.getElementById("dislike-action")


eyeAction.addEventListener("click", function() {

    this.classList.toggle("bi-eye-fill");

    this.classList.toggle("bi-eye");

    this.classList.toggle("watched");

    //se tiver com o olho preenchido(assistido) ele será true
    let foiAssistido = this.classList.contains("bi-eye-fill"); //true
    localStorage.setItem("eye-changes", foiAssistido);

    console.log("Foi Assistido:", localStorage.getItem("eye-changes"));
});

listAction.addEventListener("click", function() {

    this.classList.toggle("bi-bookmark-check-fill");

    this.classList.toggle("bi-bookmark-plus");

    this.classList.toggle("saved-list");

    // Se o item estiver salvo na lista, será true
    let foiSalvo = this.classList.contains("bi-bookmark-check-fill");
    localStorage.setItem("list-changes", foiSalvo);

    console.log("Foi Salvo Na Lista:", localStorage.getItem("list-changes"));

    const listGroupAction = document.getElementById("listGroupAction");

    
    if(foiSalvo){
        showListGroups();
        listGroupAction.style.display = "block";  // Mostra o elemento

    }else{

        listGroupAction.style.display = "none"
    }

});

starAction.addEventListener("click", function() {

    this.classList.toggle("bi-star-fill");

    this.classList.toggle("bi-star");

    this.classList.toggle("rated");

    // Se o item estiver avaliado, será true
    //a função class.list.contains retorna true ou fake por isso let foiAvaliado é uma variavel bool

    let foiAvaliado = this.classList.contains("bi-star-fill");
    localStorage.setItem("star-changes", foiAvaliado);

    console.log("Foi Avaliado:", localStorage.getItem("star-changes"));

    const rateAction = document.getElementById("modalRateDiv");

    if(foiAvaliado){

        openModalRate();
        rateAction.style.display = "block"

    }else{

        rateAction.style.display = "none"

    }

});



likeAction.addEventListener("click", function() {


    this.classList.toggle("bi-heart-fill");

    this.classList.toggle("bi-heart");

    this.classList.toggle("liked");
    

    // Se o item estiver curtido, será true
    let foiCurtido = this.classList.contains("bi-heart-fill");
    localStorage.setItem("like-changes", foiCurtido);

    console.log("Foi Like:", localStorage.getItem("like-changes"));

    if (foiCurtido) {
        dislikeAction.disabled = true;  

        showAlert("<i class='bi bi-heart like-Icon-Alert'></i>'Título' foi <strong>adicionado</strong> aos seus Filmes Curtidos", 'primary');
    } else {
        dislikeAction.disabled = false;  

        showAlert("<i class='bi bi-heart like-Icon-Alert'></i>'Título' foi <strong>excluído</strong> dos seus Filmes Curtidos", 'danger');
    }

});

dislikeAction.addEventListener("click", function() {

    this.classList.toggle("bi-hand-thumbs-down-fill");

    this.classList.toggle("bi-hand-thumbs-down");

    this.classList.toggle("disliked");

    likeAction.disabled = true;


    // Se o item estiver com dislike, será true
    let foiDisliked = this.classList.contains("bi-hand-thumbs-down-fill");
    localStorage.setItem("dislike-changes", foiDisliked);

    console.log("Foi Dislike:", localStorage.getItem("dislike-changes"));

    if(foiDisliked){

        likeAction.disabled = true;  

    }else{

        likeAction.disabled = false;  

    }

});


//uma função global (para tds os icones) para salvar alteração do localStorage mostrando o status do icone

function changeIconState(idElement, localStorageKey, iconTrue, iconFalse, classColor){

    let foiAlterado = localStorage.getItem(localStorageKey) === "true";

    idElement.classList.toggle(iconTrue, foiAlterado)
    idElement.classList.toggle(iconFalse, !foiAlterado)
    idElement.classList.toggle(classColor, foiAlterado)
}


window.onload = function() {

    
    changeIconState(eyeAction, "eye-changes", "bi-eye-fill", "bi-eye", "watched")

    changeIconState(listAction, "list-changes", "bi-bookmark-check-fill", "bi-bookmark-plus", "saved-list")

    changeIconState(starAction, "star-changes", "bi-star-fill", "bi-star", "rated");

    changeIconState(likeAction, "like-changes", "bi-heart-fill", "bi-heart", "liked")

    changeIconState(dislikeAction, "dislike-changes", "bi-hand-thumbs-down-fill", "bi-hand-thumbs-down", "disliked")


};



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

function validandoSeJaExisteInput(){

     const existingInput = listGroupAction.querySelector("input");

     if (existingInput) {
         alert("Você já está criando uma lista. Complete a lista antes de criar outra."); 
         return; 
         };


}

function addNewList() {

    const listGroupAction = document.getElementsByClassName("list-group")[0]; 

    validandoSeJaExisteInput()

    const itemsExist = document.getElementsByTagName("li");

    const newListInput = document.createElement("input"); //criando o input para o nome da nova lista

    //css
    newListInput.type = "text"; 
    newListInput.placeholder = "digite o nome da nova lista";
    newListInput.classList.add("list-group-item"); //classe da lista do bootstrap
    //css

    listGroupAction.insertBefore(newListInput, itemsExist[1]); //inserindo elemento novo no indice 1 (segundo) da lista 

    // adicionando funcionalidade na tecla enter quando o usuario digitar o nome da nova lista

    newListInput.addEventListener("keydown", function (evento) {
        if (evento.key === "Enter") { 

            const listName = newListInput.value.trim(); // pega o que foi digitado com (value) e tira os espaços com trim()

            if (listName !== "") {

                const newListItem = document.createElement("li"); //criando nova lista
                newListItem.classList.add("list-group-item"); // adiciona a classe de estilo do bootstrap
                newListItem.innerText = listName; // Define o texto como o nome digitado

                listGroupAction.insertBefore(newListItem, itemsExist[1]);

                //removendo o input apos inserção da nova lista
                listGroupAction.removeChild(newListInput);
            } else {
                alert("Por favor, insira um nome para a lista.");
            }
        }
    });
}



//função para aparecer o list group bootstrap

function showListGroups(){

    const listGroupAction = document.getElementById("listGroupAction");

    const listGroupSintax = 
    `

    <ul class="list-group">
    <li class="list-group-item">Lista de Observação</li>
    <li class="list-group-item list-group-item-action" onclick="addNewList()"><em><strong>Criar Lista +</strong></em></li>

    </ul> `

    listGroupAction.innerHTML = listGroupSintax

}

function openModalRate(){

    const modalCorpo = `<section class="container-modal-rate">

    <div class="brothers-title">
    <h2 class="title-rate">Avaliação de 'Titulo'</h2>
    <div class="button-remove"> <i class="bi bi-x-lg x-size" onclick="closeModal('modalRateDiv')"></i></div>
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

    document.getElementById("modalRateDiv").style.display = "none";

    const comentModalCorpo = ` <section class="container-modal-coment">

        <div class="brothers-title">
            <h2 class="title-rate">Avaliação de 'Titulo'</h2>
            <div class="button-remove"><i class="bi bi-x-lg x-size" onclick="closeModal('modalComentDiv')"></i></div>
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

function openModalCast(){

    const modalCastDiv = document.getElementById("modalCastDiv");

    const modalCastSintax = `<section class="container-modal-cast">
        <div class="brothers-title"><p class="title-modal-cast">Personagens/Elenco</p>
            <div class="button-remove"><i class="bi bi-x-lg x-size" onclick="closeModal('modalCastDiv')"></i></div>
        </div>
        
        <div class="display-cast">

        <div class="imgs-cast">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="imgs-cast">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="imgs-cast">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="imgs-cast">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="imgs-cast">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="imgs-cast">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="imgs-cast">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="imgs-cast">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="imgs-cast">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="imgs-cast">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>


        <div class="imgs-cast">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="imgs-cast">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>
    </div>
    </section>
`

modalCastDiv.innerHTML = modalCastSintax;

}

function closeModal(idModal) {
    document.getElementById(idModal).style.display = "none";
}


//fazer sistema de comentarios de acordo com o usuario cadastrado no JSON 
function createComent(){

    const comentBody = `<div class="coment-struct">
        <article class="header-coment">
            <img src="./ImgsPagConteudoSelecionado/iconAvatar.png" alt="foto de perfil do usuario" >
            <p id="userName">UserName</p>
            <p id="userRate">9.0★</p>
        </article>

        <article class="coment-content">
            <p id="comentContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida libero ac egestas malesuada. Enean a ipsum a purus consequat dapibus in in magna.</p>
        </article>

        <article class="coment-interaction">
            <button type="button"><i class="bi bi-chat-left-dots coment-size"></i></a>
            <button type="button"><i class="bi bi-hand-thumbs-up coment-size"></i></a>
            <button type="button"><i class="bi bi-hand-thumbs-down coment-size"></i></a>
         </article>
    </section>
</div>

`



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

function Filme(title,year,classification,time,genre, synopsis, streaming, director, producer){

    this.title = title

    this.year = year

    this.classification = classification

    this.time = time

    this.genre = genre

    this.synopsis = synopsis

    this.streaming = streaming

    this.director = director

    this.producer = producer

        this.showInfoMovie = function() {

            return `Título: ${this.title}\nAno: ${this.year}\Classificação: ${this.classification}\nDuração: ${this.time} min\nGênero: ${this.genre}\nSinopse: ${this.sinopse}\nStreaming: ${this.streaming}\nDiretor: ${this.director}\nProdutora: ${this.producer}`;
    }
}



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

  
  console.log(filme1.showInfoMovie());
  console.log(filme2.showInfoMovie());
  console.log(filme3.showInfoMovie());
  console.log(filme4.showInfoMovie());
  console.log(filme5.showInfoMovie());


  function Serie(title,year,classification,seasons,episodes,genre,synopsis,director,producer){

    this.title = title

    this.year = year

    this.classification = classification

    this.genre = genre

    this.synopsis = synopsis

    this.director = director

    this.producer = producer

    this.seasons = seasons

    this.episodes = episodes

    
    this.showInfoSerie = function() {

        return `Título: ${this.title}\nAno: ${this.year}\Classificação: ${this.classification}\nDuração: ${this.time} min\nGênero: ${this.genre}\nSinopse: ${this.sinopse}\nStreaming: ${this.streaming}\nDiretor: ${this.director}\nProdutora: ${this.producer} \nTemporadas: ${this.seasons} \nEpisodios: ${this.episodes}`;
}

  }

const serie1 = new Serie(
    "Breaking Bad", 
    2008, 
    18, 
    "Crime, Drama", 
    "Um professor de química que se transforma em um traficante de metanfetamina.", 
    "Vince Gilligan", 
    "Mark Johnson", 
    5, 
    62
);

const serie2 = new Serie(
    "Game of Thrones", 
    2011, 
    18, 
    "Fantasia, Drama", 
    "Nove famílias nobres lutam pelo controle dos Sete Reinos de Westeros.", 
    "David Benioff", 
    "D.B. Weiss", 
    8, 
    73
);

const serie3 = new Serie(
    "Stranger Things", 
    2016, 
    16, 
    "Ficção Científica, Mistério", 
    "Um grupo de amigos se envolve em eventos sobrenaturais ao tentar encontrar seu amigo desaparecido.", 
    "The Duffer Brothers", 
    "Shawn Levy", 
    4, 
    34
);

const serie4 = new Serie(
    "The Crown", 
    2016, 
    16, 
    "Drama, Biografia", 
    "A história do reinado da Rainha Elizabeth II e os eventos políticos e sociais que moldaram o século 20.", 
    "Peter Morgan", 
    "Andy Harries", 
    5, 
    50
);

const serie5 = new Serie(
    "The Mandalorian", 
    2019, 
    14, 
    "Ação, Aventura", 
    "Um caçador de recompensas mandaloriano navega pelos confins da galáxia, longe da autoridade da Nova República.", 
    "Jon Favreau", 
    "Kathleen Kennedy", 
    3, 
    24
);

const series = []

  series.push(serie1)
  series.push(serie2)
  series.push(serie3)
  series.push(serie4)
  series.push(serie5)


localStorage.setItem("listaFilmes", JSON.stringify(filmes))

// Exibindo informações das séries
console.log(serie1.showInfoSerie());
console.log(serie2.showInfoSerie());
console.log(serie3.showInfoSerie());
console.log(serie4.showInfoSerie());
console.log(serie5.showInfoSerie());


function Jogo(title,year,classification,genre,synopsis,producer,creator){

    this.title = title

    this.year = year

    this.classification = classification

    this.genre = genre

    this.synopsis = synopsis

    this.producer = producer

    this.creator = creator

    this.showInfoJogo = function() {

        return `título: ${this.title}\nAno: ${this.year}\Classificação: ${this.classification}\nGênero: ${this.genre}\nSinopse: ${this.synopsis}\nProducer: ${this.producer}\nCreator: ${this.creator}`;
}

}

// Criação de 5 jogos
const jogo1 = new Jogo(
    "The Last of Us Part II", 
    2020, 
    18, 
    "Ação, Aventura", 
    "Uma sequência de The Last of Us, explorando temas de vingança e sobrevivência.", 
    "Sony Interactive Entertainment", 
    "Naughty Dog"
);

const jogo2 = new Jogo(
    "God of War", 
    2018, 
    18, 
    "Ação, Aventura", 
    "Kratos, o Deus da Guerra, e seu filho Atreus embarcam em uma jornada épica pela mitologia nórdica.", 
    "Sony Interactive Entertainment", 
    "Santa Monica Studio"
);

const jogo3 = new Jogo(
    "Hades", 
    2020, 
    12, 
    "Ação, Roguelike", 
    "Zagreus, filho de Hades, tenta escapar do submundo e descobre segredos sobre sua família.", 
    "Supergiant Games", 
    "Supergiant Games"
);

const jogo4 = new Jogo(
    "Minecraft", 
    2011, 
    7, 
    "Sandbox, Aventura", 
    "Um jogo onde você pode construir, explorar e sobreviver em um mundo gerado aleatoriamente.", 
    "Mojang Studios", 
    "Markus Persson"
);

const jogo5 = new Jogo(
    "The Witcher 3: Wild Hunt", 
    2015, 
    18, 
    "RPG, Aventura", 
    "Geralt de Rivia, um caçador de monstros, busca por sua filha adotiva em um mundo aberto cheio de perigos.", 
    "CD Projekt", 
    "CD Projekt Red"
);

const jogos = []

jogos.push(jogo1)
jogos.push(jogo2)
jogos.push(jogo3)
jogos.push(jogo4)
jogos.push(jogo5)

localStorage.setItem("listaJogos", JSON.stringify(jogos))

console.log(localStorage.getItem("listaJogos"));

console.log(jogo1.showInfoJogo());
console.log(jogo2.showInfoJogo());
console.log(jogo3.showInfoJogo());
console.log(jogo4.showInfoJogo());
console.log(jogo5.showInfoJogo());















