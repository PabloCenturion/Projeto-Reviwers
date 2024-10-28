//funçao construtora para criação de itens

function Characters(name, actorName, imgActor){

    this.name = name
    this.actorName = actorName
    this.imgActor = imgActor

}

// Criando os personagens para cada filme
const castMovie1 = [
    new Characters("Dom Cobb", "Leonardo DiCaprio", "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_FMjpg_UX1000_.jpg"),
    new Characters("Fischer", "Cillian Murphy", "https://cdn.britannica.com/10/215010-050-A44F9280/Irish-actor-Cillian-Murphy-2017.jpg"),
    new Characters("Ariadne", "Elliot Page", "https://cdn.britannica.com/41/249341-050-E5F7039C/Actor-Elliot-Page-2022.jpg"),
    new Characters("Eames", "Tom Hardy","https://s2-quem.glbimg.com/cmCoyWGZY90ELNt78lz1rt7CLaw=/0x0:5012x3341/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2024/U/3/dIRp9hT1AJOJYOhbiM3w/gettyimages-2157159540.jpg" ),
    new Characters("Mal Cobb", "Marion Cotillard", "https://www.parismatch.com/lmnr/r/960,640,FFFFFF,forcex,center-middle/img/var/pm/public/styles/paysage/public/media/image/2024/02/23/21/2024-02-23t195328z_43811382_up1ek2n1j92dz_rtrmadp_3_awards-cesar.jpg?VersionId=P1xgpk.pFI_Qi7QyexL4rC8EAxBkEhQ3" )
];

const castMovie2 = [
    new Characters("Cooper Abbott", "Josh Hartnett", "https://www.hollywoodreporter.com/wp-content/uploads/2024/07/Josh-Hartnett-getty-H-2024.jpg?w=1296"),
    new Characters("Lady Raven", "Saleka", "https://people.com/thmb/5F60y62XMaIpR9Ks1en2rf7Jx-E=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/Saleka-Shyamalan-attends-the-Trap-world-premiere-080724-3b7177f6f5fb436dacf00129e28f6232.jpg"),
    new Characters("Riley Abbott", "Ariel Donoghue", "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1841962_v9_aa.jpg"),
    new Characters("Rachel Abbott", "Alison Pill", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Alison_Pill_2019.jpg/640px-Alison_Pill_2019.jpg"),
    new Characters("Vendor", "Jonathan Langdon", "https://www.shutterstock.com/editorial/image-editorial/M1TcQf39N3D4A9z8ODg5MDc=/jonathan-langdon-440nw-14600098hg.jpg")
];

const castMovie3 = [
    new Characters("Kim Ki-taek", "Song Kang-ho"),
    new Characters("Park Dong-ik", "Lee Sun-kyun"),
    new Characters("Kim Ki-woo", "Choi Woo-shik"),
    new Characters("Kim Ki-jung", "Park So-dam"),
    new Characters("Chung-sook", "Jang Hye-jin")
];

const castMovie4 = [
    new Characters("Arthur Fleck", "Joaquin Phoenix", "https://cdn.britannica.com/63/215263-050-6C78005B/American-actor-Joaquin-Phoenix-2020.jpg"),
    new Characters("Lee Quinzel", "Lady Gaga", "https://br.web.img2.acsta.net/pictures/18/09/12/19/42/5521101.jpg"),
    new Characters("Sophie Dummond", "Zazie Beetz", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMAsXjCgQayIy_TnZ5ovo--rYMSWTzGy5OVQ&s"),
    new Characters("Harvey Dent", "Harry Lawtey", "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRZk_RAictRVIjq5RRzdRuC7kpeMBQjvotlbGPabAMwb6zSXzW5dAybONQaLzUEnnIqGWLHJh2_jI_fKEI"),
    new Characters("Gary Puddles", "Leigh Gill", "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQgd0oDSUIFu5MwuGklobML-_nmsfGoY3vc1-SEPBgD-IpV3YaU1QtsxXt_GxzXbjDl8z6Ax3QQeyo5nag")
];

const castMovie5 = [
    new Characters("Cooper", "Matthew McConaughey"),
    new Characters("Brand", "Anne Hathaway"),
    new Characters("Murph", "Jessica Chastain"),
    new Characters("Dr. Mann", "Matt Damon"),
    new Characters("Professor Brand", "Michael Caine")
];

const castMovie6 = [

    new Characters("Elisabeth Sparkle", "Demi Moore", "https://m.media-amazon.com/images/M/MV5BMTc2Mjc1MDE4MV5BMl5BanBnXkFtZTcwNzAyNDczNA@@._V1_.jpg"),
    new Characters("Sue", "Margaret Qualley", "https://m.media-amazon.com/images/M/MV5BOTE1YWZlMzgtYTMxOS00YWEwLWIzZTItYjI4ODM0ODZmODdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"),
    new Characters ("Harvey", "Dennis Quaid", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Dennis_Quaid_by_Gage_Skidmore.jpg/640px-Dennis_Quaid_by_Gage_Skidmore.jpg"),
    new Characters("Troy", "Oscar Lesage", "https://medias.unifrance.org/medias/59/235/256827/format_page/oscar-lesage.jpg"),
    new Characters("The Stylist", "Tiffany Hofstetter", "https://resizing.flixster.com/Z3vVx0rhSKFgGA6i8iwsHghw2SM=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/296733_v9_bb.jpg")


]

let castsMovie = [castMovie1, castMovie2, castMovie3, castMovie4, castMovie5, castMovie6];

localStorage.setItem("listCastsMovie", JSON.stringify(castsMovie));

const castSerie1 = [
    new Characters("Walter White", "Bryan Cranston", "https://upload.wikimedia.org/wikipedia/en/6/65/Walter_White_Bryan_Cranston.jpg"),
    new Characters("Jesse Pinkman", "Aaron Paul", "https://upload.wikimedia.org/wikipedia/en/d/dc/Jesse_Pinkman2.jpg"),
    new Characters("Skyler White", "Anna Gunn", "https://upload.wikimedia.org/wikipedia/en/4/4b/Skyler_White_Aaron_Paul.jpg"),
    new Characters("Hank Schrader", "Dean Norris", "https://upload.wikimedia.org/wikipedia/en/a/a2/Hank_Schrader.jpg"),
    new Characters("Saul Goodman", "Bob Odenkirk", "https://upload.wikimedia.org/wikipedia/en/c/cd/Saul_Goodman_Better_Call_Saul.jpg")
];

// Elenco de Game of Thrones (serie2)
const castSerie2 = [
    new Characters("Daenerys Targaryen", "Emilia Clarke", "https://upload.wikimedia.org/wikipedia/en/d/d8/Daenerys_Targaryen.jpg"),
    new Characters("Jon Snow", "Kit Harington", "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png"),
    new Characters("Tyrion Lannister", "Peter Dinklage", "https://upload.wikimedia.org/wikipedia/en/5/5e/Tyrion_Lannister-Peter_Dinklage.jpg"),
    new Characters("Cersei Lannister", "Lena Headey", "https://upload.wikimedia.org/wikipedia/en/9/94/Cersei_Lannister-Lena_Headey.jpg"),
    new Characters("Arya Stark", "Maisie Williams", "https://upload.wikimedia.org/wikipedia/en/d/d5/Arya_Stark-Maisie_Williams.jpg")
];

// Elenco de Stranger Things (serie3)
const castSerie3 = [
    new Characters("Eleven", "Millie Bobby Brown", "https://upload.wikimedia.org/wikipedia/en/5/5a/Eleven_stranger_things.jpg"),
    new Characters("Mike Wheeler", "Finn Wolfhard", "https://upload.wikimedia.org/wikipedia/en/4/45/Mike_Wheeler_stranger_things.jpg"),
    new Characters("Jim Hopper", "David Harbour", "https://upload.wikimedia.org/wikipedia/en/e/e4/Jim_Hopper.jpg"),
    new Characters("Dustin Henderson", "Gaten Matarazzo", "https://upload.wikimedia.org/wikipedia/en/3/34/Dustin_Henderson.jpg"),
    new Characters("Lucas Sinclair", "Caleb McLaughlin", "https://upload.wikimedia.org/wikipedia/en/1/1e/Lucas_Sinclair.jpg")
];

// Elenco de The Crown (serie4)
const castSerie4 = [
    new Characters("Queen Elizabeth II", "Olivia Colman", "https://upload.wikimedia.org/wikipedia/en/e/e4/Queen_Elizabeth_II_The_Crown_Season_3.jpg"),
    new Characters("Prince Philip", "Tobias Menzies", "https://upload.wikimedia.org/wikipedia/en/c/cc/Prince_Philip_The_Crown.jpg"),
    new Characters("Princess Margaret", "Helena Bonham Carter", "https://upload.wikimedia.org/wikipedia/en/4/4b/Princess_Margaret_The_Crown.jpg"),
    new Characters("Prince Charles", "Josh O'Connor", "https://upload.wikimedia.org/wikipedia/en/0/0f/Prince_Charles_The_Crown.jpg"),
    new Characters("Winston Churchill", "John Lithgow", "https://upload.wikimedia.org/wikipedia/en/7/76/Winston_Churchill_The_Crown.jpg")
];

// Elenco de The Mandalorian (serie5)
const castSerie5 = [
    new Characters("Din Djarin (The Mandalorian)", "Pedro Pascal", "https://upload.wikimedia.org/wikipedia/en/3/3e/Din_Djarin_Mandalorian.png"),
    new Characters("Grogu", "Various Puppeteers", "https://upload.wikimedia.org/wikipedia/en/d/d4/Grogu_aka_Baby_Yoda.png"),
    new Characters("Cara Dune", "Gina Carano", "https://upload.wikimedia.org/wikipedia/en/e/ed/Cara_Dune.jpg"),
    new Characters("Greef Karga", "Carl Weathers", "https://upload.wikimedia.org/wikipedia/en/7/74/Greef_Karga.jpg"),
    new Characters("Moff Gideon", "Giancarlo Esposito", "https://upload.wikimedia.org/wikipedia/en/1/12/Moff_Gideon.jpg")
];

const castSerie6 = [
    new Characters("Seong Gi-hun", "Lee Jung-jae", "https://upload.wikimedia.org/wikipedia/commons/3/3a/Lee_Jung-jae_%28cropped%29.jpg"),
    new Characters("Cho Sang-woo", "Park Hae-soo", "https://upload.wikimedia.org/wikipedia/commons/7/75/Park_Hae-soo.jpg"),
    new Characters("Kang Sae-byeok", "Jung Ho-yeon", "https://upload.wikimedia.org/wikipedia/commons/7/78/HoYeon_Jung_in_2021.jpg"),
    new Characters("Oh Il-nam", "O Yeong-su", "https://upload.wikimedia.org/wikipedia/commons/f/fd/O_Yeong-su.jpg"),
    new Characters("Hwang Jun-ho", "Wi Ha-joon", "https://upload.wikimedia.org/wikipedia/commons/f/f1/Wi_Ha-joon_in_2019.jpg")
];

let castSeries = [castSerie1, castSerie2, castSerie3, castSerie4, castSerie5, castSerie6]

localStorage.setItem("listCastsSeries", JSON.stringify(castSeries));


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
    castMovie1, "https://www.youtube.com/watch?app=desktop&v=LifqWf0BAOA"

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
    castMovie2, "https://youtu.be/mps1HbpECIA?si=aNyE_RrWYQk8mFCs"
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
    castMovie3, "https://youtu.be/m4jfE-TxC24?si=OfWDoB9JTpmVFOmp"
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
    castMovie4, "https://youtu.be/TcMBFSGVi1c?si=XOfaIHrvEogeon97"
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
    castMovie5, "https://youtu.be/2LqzF5WauAw?si=K7H_3Y-ChNNYZWKS"
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
    castMovie6, "https://www.youtube.com/watch?v=LNlrGhBpYjc"

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


  function Serie(title, year, classification, genre, synopsis, director, producer, seasons, episodes, streaming, serieCover, threeImgs, cast, trailer) {
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
    this.serieCover = serieCover;
    this.threeImgs = threeImgs;
    this.cast = cast;
    this.trailer = trailer;

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
    "Netflix", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AUQ1ap545wJq1Op_9GPLFAV15boesLoyZA&s",
    ["https://media.gq.com/photos/5a6a060d024ef90ae3f55e2d/16:9/w_2560%2Cc_limit/gq-breaking-bad.jpg",
    "https://external-preview.redd.it/hLhgFjb3doFXeH6gdKJZ01PHRg1polOxQq0hvJ1Q9W8.png?auto=webp&s=9d7c45492e5df7823895a70fc8201baeb5ed90e2",
     "https://www.telltalesonline.com/wp-content/uploads/2023/07/breaking-bad-scene.jpg"],
     castSerie1, 
     "https://www.youtube.com/watch?v=HhesaQXLuRY"
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
    "HBO",
    "https://upload.wikimedia.org/wikipedia/pt/e/e0/Game_of_Thrones_Season_8.png",
    ["https://pyxis.nymag.com/v1/imgs/0b2/8e5/2934f18b278dd114df28bd2adc3bf6ba1f-game-of-thrones-battles.jpg",
    "https://www.hollywoodreporter.com/wp-content/uploads/2015/12/got-iconic-images-18_2.jpg?w=1440&h=810&crop=1",
    "https://images.bauerhosting.com/legacy/empire-images/features/5cde8a00133d503e3a49e503/GOT-MAIN.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",],
    castSerie2, 
    "https://www.youtube.com/watch?v=KPLWWIOCOOQ"
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
    "Netflix", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByzh6pDIAE6ND4pB8oXdZsX4fo4Ep0p2ACA&s", 
    ["https://imgix.ranker.com/list_img_v2/10828/2690828/original/stranger-things-behind-the-scenes?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720",
    "https://live-production.wcms.abc-cdn.net.au/7f3da337043213b6b99498d746f9bb27?impolicy=wcms_crop_resize&cropH=937&cropW=1404&xPos=186&yPos=0&width=862&height=575",
     "https://www.indiewire.com/wp-content/uploads/2022/03/Stranger-Things.png?w=600&h=337&crop=1"],
     castSerie3,
     "https://www.youtube.com/watch?v=mnd7sFt5c3A"
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
    "Netflix",
    "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT6-ilIJZPo41mx2cuziG5zyjn7BWGZZgBKTF7F8eheSGHPGzL8jiYiL9ie1lExbidAdcjqVmXZtCho0A8qMgY4UP5rJEbR6qtvNG5ZP3Ls_1FEqyPQTvTMNnybGFsb202NhmA.jpg?r=844",
    ["https://static01.nyt.com/images/2016/11/04/watching/04crown1/04crown1-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AdOFSpJxcgxCUzU1EL3BV03c5m86THhd3w&s",
    "https://media.architecturaldigest.com/photos/583615f9efb84d105bd02592/master/w_3005,h_2000,c_limit/The-Crown-set-design_01.jpg",],
    castSerie4, 
    "https://www.youtube.com/watch?v=dFZC-_T_irA" 
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
    "Disney+", 
    "https://freshcomics.s3.amazonaws.com/issue_covers/APR221011.jpg",
    ["https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_0/c_fill,f_auto,h_1215,q_auto,w_2160/v1/m/8/4/845483c0f5008bf0ed24fa1c29c67968246599e2/25-best-moments-mandalorian.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjGR_KIjX_fUG8VQhlt1-3kqMIzNQDH1MKg&s",
    "https://www.geekgirlauthority.com/wp-content/uploads/2020/12/e1dec22c-0589-47b4-ba97-9694a32b2b1d-huc2-ff-003367.jpg",],
    castSerie5,"https://www.youtube.com/watch?v=aOC8E8z_ifw"
);

const serie6 = new Serie(
   "Squid Game", 
    2021, 
    18, 
    "Suspense", 
    "Centenas de competidores sem dinheiro aceitam um convite para competir em jogos infantis por um prêmio tentador, mas os riscos são mortais.", 
    "Hwang Dong-hyuk", 
    "Hwang Dong-hyuk", 
    1, 
    9, 
    "Netflix", 
    "https://m.media-amazon.com/images/I/7118ecsxO3L.jpg",
    ["https://thesun.my/binrepository/lyfe-121021-page-2-sg1-netflix_1944204_20211012112926.jpg",
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/squid-game.jpg",
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/06/Squid-Game-tug-of-war-scene.jpg"],
    castSerie6,"https://www.youtube.com/watch?v=oqxAJKy0ii4"
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


function Jogo(title, year, classification, genre, synopsis, producer, creator, platform, gameCover) {

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
