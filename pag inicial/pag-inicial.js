
const listaFilmes = JSON.parse(localStorage.getItem("filmesLancamentos"));
let currentItem = 0;



function showMovie(movie){



    const movieId = listaFilmes[movie]

    const imgMovie = document.getElementById('img-movie-display');

    imgMovie.src = movieId.cover;

    

}


function changeImgMovie() {

currentItem++;

if(currentItem > listaFilmes.length-1){


    currentItem = 0
}

showMovie(currentItem)
   
}


setInterval(changeImgMovie, 5000)

showMovie(currentItem);

function validatingUserLogged(){

    const localStorageUsersLogged = localStorage.getItem("estaLogado")

    if(localStorageUsersLogged === "false"){


        setTimeout(()=>{

            window.location.href = "/Pgn Login/index.html"

        })


    }else{

        setTimeout(()=>{

            window.location.href = "/Perfil_Usuário/mod lucas/index.html"

        })

    }

}


