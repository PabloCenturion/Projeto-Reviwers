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

function showAlert(textAlert, typeAlert) {

    const alertsAction = document.getElementById("alertsAction");

    alertsAction.innerHTML = `
        <div class="alert alert-${typeAlert} alert-dismissible fade show" role="alert">
          ${textAlert}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    // Define o tempo para o alerta desaparecer.
    setTimeout(function() {
        alertsAction.innerHTML = '';}, 3500); 
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

    const modalCorpo =  
    
    `<section class="container-modal-rate">

    <div class="brothers-title">
    <h2 class="title-rate">Avaliação de 'Titulo'</h2>
    <div class="button-remove"><i class="bi bi-x-lg x-size" onclick="closeModal('modalRateDiv')"></i></div>
</div>

    <h3 class="subtitle-rate">Dê uma nota de 0 a 10:</h3>

    <div class="rating">
    <input type="radio" name="star" id="star1" value="1">
    <label for="star1"></label>

    <input type="radio" name="star" id="star2" value="2">
    <label for="star2"></label>

    <input type="radio" name="star" id="star3" value="3">
    <label for="star3"></label>

    <input type="radio" name="star" id="star4" value="4">
    <label for="star4"></label>

    <input type="radio" name="star" id="star5" value="5">
    <label for="star5"></label>

    <input type="radio" name="star" id="star6" value="6">
    <label for="star6"></label>

    <input type="radio" name="star" id="star7" value="7">
    <label for="star7"></label>

    <input type="radio" name="star" id="star8" value="8">
    <label for="star8"></label>

    <input type="radio" name="star" id="star9" value="9">
    <label for="star9"></label>

    <input type="radio" name="star" id="star10" value="10">
    <label for="star10"></label>

</div>

          <div id="star-count"></div>

    
    <a type="button" onclick="openComentModal()"><span>clique aqui e detalhe sua avaliação</span></a>

    <div class="container-button">

    <button type="button" class="btn button-color-register">Registrar</button>

</div>

</section>`
    
    const divModalRate = document.getElementById("modalRateDiv")

    divModalRate.innerHTML = modalCorpo

}

function openComentModal(){

    document.getElementById("modalRateDiv").style.display = "none";

    const comentModalCorpo = 
    
    ` <section class="container-modal-coment">

        <div class="brothers-title">
            <h2 class="title-rate">Avaliação de 'Titulo'</h2>
            <div class="button-remove"><i class="bi bi-x-lg x-size" onclick="closeModal('modalComentDiv')"></i></div>
        </div>
            <h3 class="subtitle-rate">Dê uma nota de 0 a 10:</h3>

            <div class="rating">
                <input type="radio" name="star" id="star1" value="1">
                <label for="star1"></label>
            
                <input type="radio" name="star" id="star2" value="2">
                <label for="star2"></label>
            
                <input type="radio" name="star" id="star3" value="3">
                <label for="star3"></label>
            
                <input type="radio" name="star" id="star4" value="4">
                <label for="star4"></label>
                
                <input type="radio" name="star" id="star5" value="5">
                <label for="star5"></label>
    
                 
                <input type="radio" name="star" id="star6" value="6">
                <label for="star6"></label>
    
                 
                <input type="radio" name="star" id="star7" value="7">
                <label for="star7"></label>
    
                 
                <input type="radio" name="star" id="star8" value="8">
                <label for="star8"></label>
    
                 
                <input type="radio" name="star" id="star9" value="9">
                <label for="star9"></label>
    
                 
                <input type="radio" name="star" id="star10" value="10">
                <label for="star10"></label>
              </div>
    
              <div id="star-count"></div>
        
        <label for="review-coment" class="form-label"></label>
        <textarea class="form-control" id="review-coment" rows="5" placeholder="Digite aqui sua Crítica"></textarea>

        <div class="container-button">

            <button type="button" class="btn btn-outline-primary button-color-register">Registrar</button>
    
        </div>
        

    </section>
` 

    const modalComentDiv = document.getElementById("modalComentDiv")

    modalComentDiv.innerHTML = comentModalCorpo


}

//rascUNHO

function registerComment(){

    let inputComent = document.getElementById("review-coment").value;

}



function openModalCast(){

    const modalCastDiv = document.getElementById("modalCastDiv");

    const modalCastSintax = `<section class="container-modal-cast">
        <div class="brothers-title"><p class="title-modal-cast">Personagens/Elenco</p>
            <div class="button-remove"><i class="bi bi-x-lg x-size" onclick="closeModal('modalCastDiv')"></i></div>
        </div>
        
        <div class="display-cast">

        <div class="struct-character">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="struct-character">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="struct-character">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="struct-character">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="struct-character">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="struct-character">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="struct-character">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="struct-character">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="struct-character">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="struct-character">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>


        <div class="struct-character">
            <img src="./ImgsPagConteudoSelecionado/exemploImg.avif" alt="" width="80px" height="80px">
            <p class="name-celebrity">lorem 1<br>Phasellus gravida </p>
            <button type="button"><i class="bi bi-star star-cast-size"></i></button>
        </div>

        <div class="struct-character">
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
function createComent() {

    let usuarios = JSON.parse(localStorage.getItem("usuarios")); //transformando para objeto para podermos manipular
    console.log(usuarios);

    for (let i = 0; i < usuarios.length; i++) {
        let userName = usuarios[i].userName; 

        // Cria o corpo do comentário
        const comentBody = `
            <div class="coment-struct">
                <article class="header-coment">
                    <img src="./ImgsPagConteudoSelecionado/iconAvatar.png" alt="foto de perfil do usuario">
                    <p id="userName">${userName}</p>
                    <p id="userRate">9.0★</p>
                </article>
                <article class="coment-content">
                    <p id="comentContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida libero ac egestas malesuada. Enean a ipsum a purus consequat dapibus in in magna.</p>
                </article>
                <article class="coment-interaction">
                    <button type="button"><i class="bi bi-chat-left-dots coment-size"></i></button>
                    <button type="button"><i class="bi bi-hand-thumbs-up coment-size"></i></button>
                    <button type="button"><i class="bi bi-hand-thumbs-down coment-size"></i></button>
                </article>
            </div>
        `;

       
    }
}

validandoUsuario()


function validandoUsuario(){

    const miniNonUserDiv = document.getElementById("miniNonUserDiv")

    const miniDivBody = `
    
    <div class="mini-container-nonuser">
        <div class="display-text">
            <p>Entre para avaliar, curtir,<br> adicionar a listas e muito mais</p>
        </div>
        <div class="buttons-brothers">
            <a class="button-in"  href="/Pgn Login/index.html">entrar</a>
            <a class="button-in" href="/Cadastro/index.html">cadastrar</a>
        </div>

    </div>`

    if(localStorage.getItem("estaLogado")==="true"){

        document.getElementById("review-part-body").style.display = "block"

    }else{

        document.getElementById("review-part-body").style.visibility = "hidden";
            miniNonUserDiv.innerHTML = miniDivBody

        }

    }
    



      
      

///////////////////////////////LOCAL STORAGE E JSON/////////////////////////////

//funçao construtora para criação de itens

function Characters(name, actorName, imgActor){

    this.name = name
    this.actorName = actorName
    this.imgActor = imgActor

}

// Criando os personagens para cada filme
const cast1 = [
    new Characters("Dom Cobb", "Leonardo DiCaprio", "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_FMjpg_UX1000_.jpg"),
    new Characters("Fischer", "Cillian Murphy", "https://cdn.britannica.com/10/215010-050-A44F9280/Irish-actor-Cillian-Murphy-2017.jpg"),
    new Characters("Ariadne", "Elliot Page", "https://cdn.britannica.com/41/249341-050-E5F7039C/Actor-Elliot-Page-2022.jpg"),
    new Characters("Eames", "Tom Hardy","https://s2-quem.glbimg.com/cmCoyWGZY90ELNt78lz1rt7CLaw=/0x0:5012x3341/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2024/U/3/dIRp9hT1AJOJYOhbiM3w/gettyimages-2157159540.jpg" ),
    new Characters("Mal Cobb", "Marion Cotillard", "https://www.parismatch.com/lmnr/r/960,640,FFFFFF,forcex,center-middle/img/var/pm/public/styles/paysage/public/media/image/2024/02/23/21/2024-02-23t195328z_43811382_up1ek2n1j92dz_rtrmadp_3_awards-cesar.jpg?VersionId=P1xgpk.pFI_Qi7QyexL4rC8EAxBkEhQ3" )
];

const cast2 = [
    new Characters("Cooper Abbott", "Josh Hartnett", "https://www.hollywoodreporter.com/wp-content/uploads/2024/07/Josh-Hartnett-getty-H-2024.jpg?w=1296"),
    new Characters("Lady Raven", "Saleka", "https://people.com/thmb/5F60y62XMaIpR9Ks1en2rf7Jx-E=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/Saleka-Shyamalan-attends-the-Trap-world-premiere-080724-3b7177f6f5fb436dacf00129e28f6232.jpg"),
    new Characters("Riley Abbott", "Ariel Donoghue", "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1841962_v9_aa.jpg"),
    new Characters("Rachel Abbott", "Alison Pill", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Alison_Pill_2019.jpg/640px-Alison_Pill_2019.jpg"),
    new Characters("Vendor", "Jonathan Langdon", "https://www.shutterstock.com/editorial/image-editorial/M1TcQf39N3D4A9z8ODg5MDc=/jonathan-langdon-440nw-14600098hg.jpg")
];

const cast3 = [
    new Characters("Kim Ki-taek", "Song Kang-ho"),
    new Characters("Park Dong-ik", "Lee Sun-kyun"),
    new Characters("Kim Ki-woo", "Choi Woo-shik"),
    new Characters("Kim Ki-jung", "Park So-dam"),
    new Characters("Chung-sook", "Jang Hye-jin")
];

const cast4 = [
    new Characters("Arthur Fleck", "Joaquin Phoenix", "https://cdn.britannica.com/63/215263-050-6C78005B/American-actor-Joaquin-Phoenix-2020.jpg"),
    new Characters("Lee Quinzel", "Lady Gaga", "https://br.web.img2.acsta.net/pictures/18/09/12/19/42/5521101.jpg"),
    new Characters("Sophie Dummond", "Zazie Beetz", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMAsXjCgQayIy_TnZ5ovo--rYMSWTzGy5OVQ&s"),
    new Characters("Harvey Dent", "Harry Lawtey", "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRZk_RAictRVIjq5RRzdRuC7kpeMBQjvotlbGPabAMwb6zSXzW5dAybONQaLzUEnnIqGWLHJh2_jI_fKEI"),
    new Characters("Gary Puddles", "Leigh Gill", "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQgd0oDSUIFu5MwuGklobML-_nmsfGoY3vc1-SEPBgD-IpV3YaU1QtsxXt_GxzXbjDl8z6Ax3QQeyo5nag")
];

const cast5 = [
    new Characters("Cooper", "Matthew McConaughey"),
    new Characters("Brand", "Anne Hathaway"),
    new Characters("Murph", "Jessica Chastain"),
    new Characters("Dr. Mann", "Matt Damon"),
    new Characters("Professor Brand", "Michael Caine")
];

const cast6 = [

    new Characters("Elisabeth Sparkle", "Demi Moore", "https://m.media-amazon.com/images/M/MV5BMTc2Mjc1MDE4MV5BMl5BanBnXkFtZTcwNzAyNDczNA@@._V1_.jpg"),
    new Characters("Sue", "Margaret Qualley", "https://m.media-amazon.com/images/M/MV5BOTE1YWZlMzgtYTMxOS00YWEwLWIzZTItYjI4ODM0ODZmODdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"),
    new Characters ("Harvey", "Dennis Quaid", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Dennis_Quaid_by_Gage_Skidmore.jpg/640px-Dennis_Quaid_by_Gage_Skidmore.jpg"),
    new Characters("Troy", "Oscar Lesage", "https://medias.unifrance.org/medias/59/235/256827/format_page/oscar-lesage.jpg"),
    new Characters("The Stylist", "Tiffany Hofstetter", "https://resizing.flixster.com/Z3vVx0rhSKFgGA6i8iwsHghw2SM=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/296733_v9_bb.jpg")


]

let casts = [cast1, cast2, cast3, cast4, cast5];

localStorage.setItem("listCasts", JSON.stringify(casts))

function Filme(title,year,classification,time,genre, synopsis, streaming, director, producer, movieCover, threeImgs, cast, trailer){

    this.title = title

    this.year = year

    this.classification = classification

    this.time = time

    this.genre = genre

    this.synopsis = synopsis

    this.streaming = streaming

    this.director = director

    this.producer = producer

    this.movieCover = movieCover

    this.threeImgs = threeImgs

    this.cast = cast

    this.trailer = trailer


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
    "Emma Thomas",
    "https://a.ltrbxd.com/resized/sm/upload/sv/95/s9/4j/inception-0-1000-0-1500-crop.jpg?v=30d7224316",
    ["https://m.media-amazon.com/images/M/MV5BMTQ1ZmIzOTAtNDcwZi00NDVkLWE4NWItYWNhZGY1MmVlZGU0XkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg", "https://nextbestpicture-com.b-cdn.net/wp-content/uploads/2024/04/Inception.jpg", "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/11/1982331528-ecee5869820ff75ac4563dc6bfbf7083.jpg"],
    cast1, "https://www.youtube.com/watch?app=desktop&v=LifqWf0BAOA"

  );
  
  const filme2 = new Filme(
    "Trap", 
    2024, 
    14, 
    105, 
    "Horror, Mistério", 
    "Um homem e sua filha adolescente percebem que estão no centro de um evento sombrio e sinistro enquanto assistem a um show.", 
    "Prime Video, HBO Max", 
    "Night Shyamalan", 
    "Blinding Edge Pictures", 
    "https://a.ltrbxd.com/resized/film-poster/9/3/1/1/6/4/931164-trap-0-1000-0-1500-crop.jpg?v=23298a998e",
    ["https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/07/trap-josh-hartnett-ariel-donoghue-2.jpg","https://static1.srcdn.com/wordpress/wp-content/uploads/2024/08/screenrant-sandbox-2024-08-02t003223-554.jpg", "https://planetadiariobr.com.br/wp-content/uploads/2024/07/revelacao-inesperada-no-trailer-de-trap-surpreende-fas-confira.webp"],
    cast2, "https://youtu.be/mps1HbpECIA?si=aNyE_RrWYQk8mFCs"
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
    "Kwak Sin-ae", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHddg8wzW-auuwLxHR2IpH5QP1vqhBMjsMw&s"
    ["https://jacobin.com.br/wp-content/uploads/2021/02/b2c155b6-de08-495d-a027-78add6cbf06b-1.jpeg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhV3Qtulu5TKUjK5BdnnmWmxxNhlMLSghZPg&s", "https://cinemacao.com/wp-content/uploads/2019/10/parasita-3-1200x630.jpg"],
    cast3, "https://youtu.be/m4jfE-TxC24?si=OfWDoB9JTpmVFOmp"
  );
  
  const filme4 = new Filme(
    "Joker: Folie à Deux", 
    2024, 
    16, 
    138, 
    "Musical, Suspense", 
    "Lutando contra sua dupla identidade, o comediante fracassado Arthur Fleck conhece o amor de sua vida, Arlequina, enquanto está preso no Hospital Estadual de Arkham.", 
    "Cinema", 
    "Todd Phillips", 
    "Emma Tillinger Koskoff",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaw6QTsDE3d6-qOL5xMa4-JDdBNTa3uspCrg&s",
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2B-P00mjghuH0jPXNfTnY-wMU4nlqFuFDQ&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-J2MHk9JmW3zVU0Yjxpz84U0yK8JGwhWcGg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_x_KYfwc7uRGwJROQtDA428GjJjv4tOHScw&s"],
    cast4, "https://youtu.be/TcMBFSGVi1c?si=XOfaIHrvEogeon97"
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
    "Emma Thomas",
    "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png", 
    ["https://images.squarespace-cdn.com/content/v1/6058f3b0dbb27b03bbd36be9/1616442358480-QB4FPW98SIE28C82E87X/interstellar_ron_burnett_critical_approaches", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TNR0tbTiYpNHEDjMQGOYk8xRkWwpjXwSJw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXTYn0SMbQzjnxJ65276KWX2IHgbtAoKA7g&s"],
    cast5, "https://youtu.be/2LqzF5WauAw?si=K7H_3Y-ChNNYZWKS"
  );

  const filme6 = new Filme(
    "The Substance", 
    2024, 
    18, 
    140, 
    "Ficção Científica, Horror", 
    "Elisabeth Sparkle, famosa por um show de aeróbica, enfrenta um golpe devastador em seu aniversário de 50 anos quando seu chefe a demite. Em meio à sua angústia, um laboratório lhe oferece uma substância que promete transformá-la em uma versão melhorada de si mesma.", 
    "Cinema", 
    "Coralie Fargeat", 
    "Eric Fellner",
    "https://a.ltrbxd.com/resized/film-poster/8/3/8/1/4/0/838140-the-substance-0-1000-0-1500-crop.jpg?v=ab9e1072f8",
    ["https://s2-g1.glbimg.com/Ua--26GaagBh4Wfm5LhyvY7ltjw=/0x138:1920x937/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/q/6/0nAPFOQ3AASSOaJVodew/videoframe-32231.png", "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/2391/b4347a5e92d14907acd2ae33e38058d2.jpg", "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/margaret-qualley-em-a-substancia.png?w=1200&h=1200&crop=1"],
    cast6, "https://www.youtube.com/watch?v=LNlrGhBpYjc"

  );



  const filmes = []

  filmes.push(filme1)
  filmes.push(filme2)
  filmes.push(filme3)
  filmes.push(filme4)
  filmes.push(filme5)
  filmes.push(filme6)


localStorage.setItem("listaFilmes", JSON.stringify(filmes))

  
  console.log(filme1.showInfoMovie());
  console.log(filme2.showInfoMovie());
  console.log(filme3.showInfoMovie());
  console.log(filme4.showInfoMovie());
  console.log(filme5.showInfoMovie());


  function Serie(title, year, classification, genre, synopsis, director, producer, seasons, episodes, streaming) {
    this.title = title;
    this.year = year;
    this.classification = classification;
    this.genre = genre;
    this.synopsis = synopsis;
    this.director = director;
    this.producer = producer;
    this.seasons = seasons;
    this.episodes = episodes;
    this.streaming = streaming;

    this.showInfoSerie = function() {
        return `Título: ${this.title}\nAno: ${this.year}\nClassificação: ${this.classification}\nGênero: ${this.genre}\nSinopse: ${this.synopsis}\nStreaming: ${this.streaming}\nDiretor: ${this.director}\nProdutora: ${this.producer}\nTemporadas: ${this.seasons}\nEpisódios: ${this.episodes}`;
    };
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
    62, 
    "Netflix"
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
    73, 
    "HBO"
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
    34, 
    "Netflix"
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
    50, 
    "Netflix"
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
    24, 
    "Disney+"
);

const series = [];
series.push(serie1);
series.push(serie2);
series.push(serie3);
series.push(serie4);
series.push(serie5);

localStorage.setItem("listaSeries", JSON.stringify(series));

console.log(serie1.showInfoSerie());
console.log(serie2.showInfoSerie());
console.log(serie3.showInfoSerie());
console.log(serie4.showInfoSerie());
console.log(serie5.showInfoSerie());


function Jogo(title, year, classification, genre, synopsis, producer, creator, platform) {

    this.title = title;
    this.year = year;
    this.classification = classification;
    this.genre = genre;
    this.synopsis = synopsis;
    this.producer = producer;
    this.creator = creator;
    this.platform = platform;

    this.showInfoJogo = function() {
        return `Título: ${this.title}\nAno: ${this.year}\nClassificação: ${this.classification}\nGênero: ${this.genre}\nSinopse: ${this.synopsis}\nProdutor: ${this.producer}\nCriador: ${this.creator}\nPlataformas: ${this.platform}`;
    };
}

const jogo1 = new Jogo(
    "The Last of Us Part II", 
    2020, 
    18, 
    "Ação, Aventura", 
    "Uma sequência de The Last of Us, explorando temas de vingança e sobrevivência.", 
    "Sony Interactive Entertainment", 
    "Naughty Dog", 
    "PlayStation"
);

const jogo2 = new Jogo(
    "God of War", 
    2018, 
    18, 
    "Ação, Aventura", 
    "Kratos, o Deus da Guerra, e seu filho Atreus embarcam em uma jornada épica pela mitologia nórdica.", 
    "Sony Interactive Entertainment", 
    "Santa Monica Studio", 
    "PlayStation, PC"
);

const jogo3 = new Jogo(
    "Hades", 
    2020, 
    12, 
    "Ação, Roguelike", 
    "Zagreus, filho de Hades, tenta escapar do submundo e descobre segredos sobre sua família.", 
    "Supergiant Games", 
    "Supergiant Games", 
    "PC, Nintendo Switch, PlayStation, Xbox"
);

const jogo4 = new Jogo(
    "Minecraft", 
    2011, 
    7, 
    "Sandbox, Aventura", 
    "Um jogo onde você pode construir, explorar e sobreviver em um mundo gerado aleatoriamente.", 
    "Mojang Studios", 
    "Markus Persson", 
    "PC, Console, Celular"
);

const jogo5 = new Jogo(
    "The Witcher 3: Wild Hunt", 
    2015, 
    18, 
    "RPG, Aventura", 
    "Geralt de Rivia, um caçador de monstros, busca por sua filha adotiva em um mundo aberto cheio de perigos.", 
    "CD Projekt", 
    "CD Projekt Red", 
    "PC, PlayStation, Xbox, Nintendo Switch"
);

const jogos = [];

jogos.push(jogo1);
jogos.push(jogo2);
jogos.push(jogo3);
jogos.push(jogo4);
jogos.push(jogo5);

localStorage.setItem("listaJogos", JSON.stringify(jogos));

console.log(localStorage.getItem("listaJogos"));

console.log(jogo1.showInfoJogo());
console.log(jogo2.showInfoJogo());
console.log(jogo3.showInfoJogo());
console.log(jogo4.showInfoJogo());
console.log(jogo5.showInfoJogo());


function modificandoFilmeDados(){

    const titleMovie = document.getElementById("title-movie")

    const infosMovie = document.getElementById("infos-movie")

    const genreMovie = document.getElementById("genre-movie")

    const sinopseMovie = document.getElementById("sinopse-movie")

    const directorMovie = document.getElementById("director-movie")

    const producerMovie = document.getElementById("producer-movie")

    const streamingsMovies = document.getElementById("streamings")

    const coverMovie = document.getElementById("cover-movie")

    const scenesImgs = document.getElementsByClassName("scenes-img")

    const nameActor = document.getElementsByClassName("name-celebrity")

    const imgsCast = document.getElementsByClassName("character-img")

    const trailer = document.getElementById("trailer-movie")


    ////////////////////////////////////////////////////////////////////////////////////////////

    titleMovie.innerText = filmes[0].title

    infosMovie.innerText = `${filmes[0].year} | ${filmes[0].time}m | ${filmes[0].classification}`

    genreMovie.innerText = `Genero: ${filmes[0].genre}`

    sinopseMovie.innerText = filmes[0].synopsis

    directorMovie.innerText = `Diretor: ${filmes[0].director}`

    producerMovie.innerText = `Produtora: ${filmes[0].producer}`

    streamingsMovies.innerHTML = `Aonde Assistir: <strong>${filmes[0].streaming}</strong>`

    coverMovie.src = filmes[0].movieCover

    for(let i = 0; i < 3; i++){
     scenesImgs[i].src = filmes[0].threeImgs[i];
}

    for(let i = 0; i < 5; i++){

        nameActor[i].innerHTML = `${filmes[0].cast[i].name}<br>${filmes[0].cast[i].actorName}`

}

    for(let i=0; i<filmes[0].cast.length;i++){

        imgsCast[i].src = filmes[0].cast[i].imgActor

    }

    trailer.href = filmes[0].trailer

}

modificandoFilmeDados()

