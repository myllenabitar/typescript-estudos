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
 */

function ajuste(texto: string) :string {
     return texto.trim().toLowerCase();
}

console.log(ajuste('DeFgJj'));


