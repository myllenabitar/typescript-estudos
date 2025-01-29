//let produto = "Livro";
//let preco =  200;

/*const carro = {
    marca: 'Audi',
    portas: 5
};

const barato: boolean | string = preco < 400 ? true : "produto caro"; 

function somar (a: number, b: number) {
    return a + b
}


somar (4, 10);
//somar('2', 4); // erro 


const nintendo = {
    nome:'Nintendo', 
    preco: '2000',  
}

function transformarPreco (produto: {nome: string; preco: string;}) {
    produto.preco = 'R$' + produto.preco; 
    return produto;
}

const ProdutoNovo = transformarPreco(nintendo);

document.body.innerText = JSON.stringify(ProdutoNovo);


function ajuste(texto: string) :string {
     return texto.trim().toLowerCase();
}

console.log(ajuste('DeFgJj'));


const input = document.querySelector('input');

const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}


function calcularGanho(value: number) {
    const p = document.querySelector("p");
    if(p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
    
}
function totalMudou(){
    if (input) {
        
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
    
}

if(input){
    input.addEventListener('keyup', totalMudou);
}

let soma: number = 0;
let pi: number = 'oi';

let nome: string = 3.14;
let saudacao: string = `Olá, ${nome}!`;
let  total: number | string = 0; 

total = "iwiefi"

function isNumber (value: string | number){
    if (typeof value === 'number'){
        return true;
    } else {
        return false;
    }

}

console.log(isNumber(200));

//EXERCICIOS
// 1 - Crie uma função chamada toNumber OK
// 2 - A função pode receber number | string OK
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")


function toNumber(value: string | number){
    if(typeof value === 'number'){
        return value;
    }
    if(typeof value === 'string'){
        return Number(value);
    } else {
        throw "value deve ser um número ou uma string";
    }
}
    console.logo(toNumber(200));


function preencherDados(dados:{
    nome: string;
    preço:number;
    teclado: boolean;
}){
    document.body.innerHTML += `
    <div>
        <h2>${dados.nome}</h2>
        <p>${dados.preço}</p>
        <p>Inclui teclaodo${dados.teclado ? 'sim' : 'não'}</p>
    </div>
    `;
}

preencherDados({
    nome:"Computador",
    preço: 2000,
    teclado: true, 
});

preencherDados({
    nome:"Notebook",
    preço: 2500,
    teclado: false, 
});

*/