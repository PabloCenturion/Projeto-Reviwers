/*var idade = 21;
var matriz = [1,2,3,4,5];
var nome = "Pablo";
var sobrenome = "Centurion";
console.log(nome);
console.log("Meu nome é " + nome, "e, minha idade é "+idade,".");
console.log(matriz[2]);
for(var i=0;i<=4;i++){
    console.log(matriz[i]);
}
console.log((nome),(sobrenome));
console.log(`Meu nome é ${nome} ${sobrenome}`);
var nasc = 2003;
var ano = 2024;
var idade1 = ano-nasc;
console.log(idade1);

var x = 8;
var y = 4;
var z = 2;
var aux=0;

aux = (x + y) * z;
console.log(aux - x % y);

function soma(a,b){
    return a+b;
}

console.log(soma(3,4));
var array = [1,2,3,4,5,6];
console.log(`O terceiro número é ${array[2]}`)

const caixinha = document.getElementById("Séries");
const verificado = caixinha.checked; //Para funcionar, é necessário baixar a expansão DOM.//

const caixinha1 = document.getElementById("musica");
const verificado1 = caixinha1.checked;

var cpf = [1,2,3,4,5,6,7,8,9]; //representa os digitos do CPF.
var alocar = []; //Recebe os valores do CPF multiplicados pela sequência correta.
var somatoria = 0; //Variável utilizada para somar os valores do vetor ALOCAR para a primeira variável.
var somatoria2 = 0 //Variável utilizada para somar os valores do vetor ALOCAR para a segunda variável.
var mult = 10; //Variável que inicia a sequência das multiplicações.
var aux=0;
var aux1=0;

for(var a=0;a<9;a++){
    alocar[a] = cpf[a]*mult;
    mult--;
    somatoria += alocar[a];
}//Tem a função de tranfesrir o calor do CPF ja multiplicado para um Vetor diferente.

mult=11; //É atribuído um novo valor para a ssequência de multiplicação.

for(var a=0;a<9;a++){
    alocar[a] = cpf[a]*mult;
    mult--;
}//Tem a função de tranfesrir o valor do CPF ja multiplicado para um Vetor diferente.

for(var a=0;a<9;a++){
    somatoria2 += alocar[a];
}

console.log(`Reslutado da primeira somatoria ${somatoria}`);
console.log(`Resultado da segunda somatoria ${somatoria2}`);
aux = (somatoria*10)%11;

if(aux===10){
    aux=0;
}

somatoria2 = somatoria2 + aux*2;
console.log(`Resultado da segunda somatoria com o primeiro digito ${somatoria2}`);



console.log(`Este é o primeiro digito verificador: ${(somatoria*10)%11}`);
console.log(`Este é o segundo digito verificador: ${(somatoria2*10)%11}`);*/

/*function bhaskara(a,b,c){
    var raiz1, raiz2, delta;
    delta = (b*b) - (4*a*c);
    if(delta<=0){
        console.log("Delta é negativo!");
        return ;
    }
    raiz1 = (-b + Math.sqrt(delta)) / (2*a);
    raiz2 = (-b - Math.sqrt(delta)) / (2*a);
    console.log(`A raiz 1: ${raiz1}, a raiz2 ${raiz2}, o Delta: ${delta}`);
    return raiz1,raiz2;

}
    console.log(Math.floor(Math.random()*100));
    var resultado = bhaskara (2,-16,-18);


    const funçao = (a,b)=>{
        console.log(a*b);
        console.log(Math.sqrt(a*b))
    }
    //funçao(6,6);


    function raiz(funçao,c){
        console.log(`Este eh o resultado: ${funçao[i]}`);
        console.log(c*c);
    }
    console.log(raiz(funçao(6,6),10));


*/
   
function entrarSemLogin(){


    localStorage.setItem("estaLogado", "false");


}




