
// function changeImgMovie(){

// const listaFilmes = JSON.parse(localStorage.getItem("listaFilmes"));

// console.log(listaFilmes.length)

// for(let i = 0;i<listaFilmes.length;i++){
    
//     const imgMovie = document.getElementById('img-movie-display');

//     imgMovie.src = listaFilmes[i].movieCover

// }


// }

// changeImgMovie()


let i = 0;

function changeImgMovie() {

    const listaFilmes = JSON.parse(localStorage.getItem("filmesLancamentos"));

    console.log(listaFilmes)
    
        const imgMovie = document.getElementById('img-movie-display');
        
        // atualiza a imagem com a capa do filme atual
        imgMovie.src = listaFilmes[i].cover;
        
        // atualizando indice 
        i = (i + 1) % listaFilmes.length; // volta ao inicio se chegar ao fim
   
}

changeImgMovie();
