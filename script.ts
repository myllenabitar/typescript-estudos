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

// EXERCICIOS
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function arredondarPracima(value: string | number): string | number {
    if (typeof value ==='number'){
        return Math.ceil(value);
    } else {
        return Math.ceil(Number(value)).toString();
    }
}
arredondarPracima(3.14);



// EXERCICIOS
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

async function puxaDados(url:string) {
    const response = await fetch(`https://api.origamid.dev/json/cursos.json`);
    const dadosJson = await response.json();
}
    
// EXERCICIOS
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData


<style>
  body {
    font-size: 1.25rem;
    font-family: sans-serif;
    margin: 2rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    min-width: 50vw;
    max-width: 100%;
  }
</style>

<form action="" id="form">
  <label for="nome">Nome</label>
  <input type="text" id="nome" name="nome" />
  <label for="email">Email</label>
  <input type="email" id="email" name="email" />
  <label for="cpf">CPF</label>
  <input type="text" id="cpf" name="cpf" />
</form>


// EXERCICIOS
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
*/