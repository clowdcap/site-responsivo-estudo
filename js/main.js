var menu = document.querySelector('.menu-bar');

menu.addEventListener('click', function(){
    var conteudo = document.querySelector('.menu');

    if(conteudo.classList.contains('sumir')){
        conteudo.classList.remove('sumir');
        conteudo.classList.add('mostrar');
    } else {
        conteudo.classList.remove('mostrar');
        conteudo.classList.add('sumir');
    }
});


document.querySelectorAll('.describe h3').addEventListener('click', function(){
    document.querySelector('.describe p').classList.add('aparecer');
});



/* AJAX REQUEST 2

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify({
        title:'Jose Marinho',
        body: 'Meu Conteúdo',
        userId: 10
    }),
    headers:{
        'Content-Type': 'aplication/json; charset=UTF-8'
    }
})
.then(response => response.json())
.then(json=>console.log(json));

*/

/* AJAX REQUEST


var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

request.onload = function(){
    if(this.status >= 200 && this.status < 400){
        //request feito com sucesso
        var data = JSON.parse(this.response);
        console.log(data);
    } else {
        // erro
    }
};

request.onerror = function(){

}

request.send();

*/

/* 

var span = document.querySelector('.conteudo span');

span.addEventListener('click', function(){
    var conteudo = document.querySelector('.conteudo p');

    if(conteudo.classList.contains('mostrar')){
        //alert('Esconda  o contecuo');
        span.innerHTML = 'Ver mais'
        conteudo.classList.remove('mostrar');
    } else {
        span.innerHTML = 'Ocultar'
        conteudo.classList.add('mostrar');
        //alert('mostre o conteudo');
    }
});


*/

/*

document.querySelector('.conteudo span').addEventListener('click', function(){
    document.querySelector('.conteudo p').classList.add('mostrar');
});

*/

/* Movimento 


var box = document.querySelectorAll('.box')[0];
    box.addEventListener('click', function(){
        box.classList.add('animEsquerda');
    }, 1000);

*/

/* CARRINHO DE COMPRAS

const items = [
    {
        id: 0,
        nome: 'Camiseta',
        img: 'assets/produto-sem-imagem.gif',
        quantidade: 0

    },

    {
        id: 1,
        nome: 'Short',
        img: 'assets/produto-sem-imagem.gif',
        quantidade: 0

    },

    {
        id: 2,
        nome: 'Sapato',
        img: 'assets/produto-sem-imagem.gif',
        quantidade: 0

    }
];

inicializar = () => {
    var container_produtos = document.getElementById('produtos');
    items.map((val)=>{
        container_produtos.innerHTML += `
        <div class="produto-single">
            <img src="`+val.img+`" alt="">
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao Carrinho</a>
        </div> <!--produto-single-->
        `;
    });
}


inicializar();


atualizar = () => {
    var container_carrinho = document.getElementById('carrinho');
    container_carrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
            container_carrinho.innerHTML += `
            
            <div class="carrinho-items">    
                <p>Produto: `+val.nome+` <br> Quantidade: `+val.quantidade+`</p>
                <hr>
            </div><!--carrinho-items-->
        `;
        };
        
    });
}

var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizar();
        return false;
    });
};

*/

/*CRIANDO FUNCAO - OBJETOS
function Pessoa(){
    this.nome = 'Jose';
    this.idade = 25;
    this.print_nome = function(){
        alert(this.nome);
    }
}

var pessoa_1 = new Pessoa();
var pessoa_2 = new Pessoa();
pessoa_1.nome = 'Amazon';
pessoa_2.nome = 'Google';


function Animal(nome, peso, cor, raca, dono){
    if(nome == undefined){
        nome = 'Nome do animal não definido';
    }
    if(peso == undefined){
        peso = 'Peso não definido';
    }
    if(cor == undefined){
        cor = 'Cor não definido';
    }
    if(raca == undefined){
        raca = 'Raça não definida'
    }
    if(dono == undefined) {
        dono = 'Dono não definido'
    }
    this.nome = nome;
    this.peso = peso;
    this.cor = cor;
    this.raca = raca;
    this.dono = dono;
}

var animal_1 = new Animal('Gato','5kg','Cinza', 'Vira-Lata');
var animal_2 = new Animal()

function Computador(marca, modelo, ram, cpu, dono){
    if(marca == undefined){
        nome = 'Marca do computador não definido';
    }
    if(modelo == undefined){
        peso = 'Modelo não definido';
    }
    if(ram == undefined){
        cor = 'Memória RAM não definida';
    }
    if(cpu == undefined){
        cpu = 'CPU não definida'
    }
    if(dono == undefined) {
        dono = 'Dono não definido'
    }
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.cpu = cpu;
    this.dono = dono;
}

var computador_1 = new Computador('Positivo','P1','16gb','i7-9875H',pessoa_2.nome);


function Casa(tamanho, altura, cor, material, dono){
    if(tamanho == undefined){
        tamanho = 'Tamanho da casa não definido';
    }
    if(altura == undefined){
        altura = 'Altura da casa não definido';
    }
    if(cor == undefined){
        cor = 'Cor não definido';
    }
    if(material == undefined){
        material = 'Material não especificado'
    }
    if(dono == undefined) {
        dono = 'Dono não definido'
    }
    this.tamanho = tamanho;
    this.altura = altura;
    this.cor = cor;
    this.material = material;//['concreto', 'ferro', 'aco', 'vidro', 'tijolo'];
    this.dono = dono;
}

let casa = {};
var casa_1 = new Casa('180 m2', '7 metros', 'amarelo',['massa corrida','madeira','janelas'], pessoa_1.nome);
var casa_2 = new Casa('250 m2', '5.60 metros', 'branca',['massa de concreto','aço','vidros'], pessoa_2.nome);


console.log(casa_1.material);
*/

/* INSTANCIANDO

function Pessoa(){
    this.nome = 'Jose';
}

var pessoa = new Pessoa();
var pessoa2 = new Pessoa()

pessoa.nome = 'Matheus';

alert(pessoa2.nome);

*/

/* OBJETOS

var pessoas = [{
    'nome':'Jose', 
    'idade': 25, 
    'profissao':'Estudante'
},
{
    'nome':'Luiz', 
    'idade': 22, 
    'profissao':'Atendente'
},
{
    'nome':'Matheus', 
    'idade': 28, 
    'profissao':'Motorista'
},
{
    'nome':'Jessica', 
    'idade': 29, 
    'profissao':'Diretora'
}
];


var noticias = [{
    'titulo': 'Mars 2020', 
    'autor': pessoas[0].nome, 
    'noticia':'lorem lorem lorem lorem lorem'
},
{
    'titulo': 'Melhor atendimento', 
    'autor': pessoas[1].nome, 
    'noticia':'lorem lorem lorem lorem lorem'
},
{
    'titulo': 'Desconto em viagens', 
    'autor': pessoas[2].nome, 
    'noticia':'lorem lorem lorem lorem lorem'
},
{
    'titulo': 'Escolas EAD', 
    'autor': pessoas[3].nome, 
    'noticia':'lorem lorem lorem lorem lorem'
}
];


console.log(noticias[3].autor);

*/

/* CALCULADORA - TENTATIVA 2


var numero1 = prompt('Digite um valor:');
var sinal = prompt('Digite o sinal da operação:');

while (sinal != '+' && sinal != '-' && sinal != '*' && sinal != '/' ) {
    alert('Sinal invalido, tente novamente');
    var sinal = prompt('Digite o sinal da operação:');
}

var numero2 = prompt('DIgite outro valor:');


numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

var resultado = 0;

if(sinal == '+'){
    resultado = numero1 + numero2;
} else if(sinal == '-') {
    resultado = numero1 - numero2;
} else if(sinal == '*') {
    resultado = numero1 * numero2;
} else if (sinal == '/' || sinal == 'x') {
    resultado = numero1 / numero2;
}

alert('O resultado é: '+ resultado);

console.log('Resultado: ' + resultado);
console.log('Acabou');


*/

/* CALCULADORA - TENTATIVA 1

var numero1 = prompt("Digite um valor:");
var sinal = prompt("Digite o sinal da operação:");

while (sinal != "+" && sinal != "-" && sinal != "*" && sinal != "/" ) {
    alert("Sinal invalido, tente novamente");
    var sinal = prompt("Digite o sinal da operação:");
}

var numero2 = prompt("DIgite outro valor:");


if(sinal == "+"){
    var soma = numero1 + numero2;
    console.log(soma);
} else if(sinal == "-") {
    var subtrair = numero1 - numero2;
    console.log(subtrair);
} else if(sinal == "/") {
    var multiplicar = numero1 * numero2;
    console.log(multiplicar);
} else if (sinal == "*" || sinal == "x") {
    var dividir = numero1 / numero2;
    console.log(dividir);
}

console.log("Acabou");



*/

/* CALCULO DE IDADE

var nome_usuario = prompt("Qual é seu nome?");
var ano_nascimento = prompt("Que ano você nasceu?");
var ano_atual = 2021;



while(ano_nascimento >= ano_atual) {
    alert('Informe seu ano de nascumento correto');
    ano_nascimento = prompt("Que ano você nasceu?");
}

while(nome_usuario.length <= 3) {
    alert("Seu nome de usuario esta muito pequeno");
    nome_usuario = prompt("Qual é seu nome ? (min 4 digitos)");
}



function calculo_idade(){
    return ano_atual - ano_nascimento;   
}



console.log("Sua idade é: "+calculo_idade());

if (calculo_idade() < 10) {
    alert("Vc tem menos que 10 anos");
}

if (nome_usuario.length >=4) {
    console.log(nome_usuario + ", seu nome tem "+ nome_usuario.length + " letras");
}
*/

/* ANOTACOES GERAIS
var nome = prompt("Qual é seu nome ?");
var idade = prompt("Qual é a sua idade ?");
var cidade = prompt("Qual é a sua cidade ?");

console.log("O nome é "+ nome);
console.log("A idade é "+ idade);
console.log("A cidade é "+ cidade)



console.log(ano_nascimento.length);
*/
