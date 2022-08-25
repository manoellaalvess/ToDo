// Função nominal com parâmetro obrigatório.
// null é um tipo de valor inválido.

// Uma função sem return é uma subrotina.
// function escreve(nome, sobrenome){
//     const a = sobrenome;
//     if (a === null) {
//         console.log("a é nulo");
//         console.log("Valor de a", a, "\n");
//         console.log("Valor de sobrenome", sobrenome);
//     }

//     console.log(`${nome} ${sobrenome}`);
// }

// escreve("Manoella");

// Função nominal que retorna valor
// function soma(a, b){
//     return Number(a) + Number(b);
// }

// const resultado = soma(1, 2);

// console.log(soma(3, 5));

// Expressão de função
// const exibe = function (x) {
//     return `Exibindo parâmetro ${x}`;
// };

// console.log(exibe(" -x- "));
// Onde o JS está sendo executado? Qual o contexto?
// Contexto: navegador. This depende do contexto
// no navegado o this é a window

//mas se vc estiver usando a versão estrita do js o this não sera a window
// function quemEoThis(){
//     console.log(this === window);
// }

// function quemEoEstrito(){
//     //quando queremos usar o js na versão mais polida, o use strict deve ser informado no início.
//     "use strict";
//     console.log("strict");
//     console.log(this === window);
// }

// quemEoThis();
// quemEoEstrito();

// function Exibe2(){
//     this.a = 50;
// }

// const novoObjeto = new Exibe2();
// console.log(novoObjeto.a);

//this. Variável interna do javascript
//this ele tem comportamentos diferentes dependendo de onde ele está sendo usado
// refere-se a um objeto

//objeto global
// let empresa = this; //window

//Quando criamos um objeto, criamos um escopo
// const aluno = {
    // nome: 'Manu',
    // matricula: 123,
    // executar: function(){
        // return this.nome;
    // },
// };

// console.log(aluno.executar());

//estrito - this é undefined
// console.log("Quem é o this no contexto global", empresa);

//this dentro de uma função - também é um objeto global.

// function globalObj(){
    // return this;
// }
// document.write('<h2>Escrevendo no body</h2>');
// document.write(globalObj());

//Arrow function - função de seta, é mais curta, não tem o próprio contexto.
//o this dentro de uma arrow function não existe.
// const novaFuncao = (a, b) => {
//     console.log("Chamando de dentro de uma arrow function");
    //Interploração de variaveis é chamar uma variavel dentro de uma string; Template String
    // console.log(`Exibindo o valor de ${a}`);
    //Concatenação de variáveis
    // console.log("Exibindo o total de caracteres " + b.length);
    //Indentação é um código escrito de forma legível, que respeita hierarquia { dá um espaço, para facilitar a leitura do código. Um código indentado é uma das maneiras de manter um código limpo. }
// };

// const funcao3 = (a) => {
//     console.log(`Exibindo o total de caracteres de ${a.length}`);
// }

// funcao3("Manoella");


// function Pessoa() {
//     this.velocidade = 0;

//     function andar() {
//         console.log("velocidade atual", this.velocidade);
//     }
// }

//Objeto literal
//escopo é a área de atuação. this dentro de pessoa ele enxerga os elementos dentro de pessoa

// const pessoa = {
//     velocidade: 0,
//     nome: 'Manoella Alves',
//     andar: function(){
//         console.log("velocidade atual", this.velocidade);
//     },
//     exibeNome: function(){
//         this.andar();
//         console.log(`Nome: ${this.nome} velocidade: ${this.velocidade}`);
//     },
// };

// spred operation ...

const carros = (primeiro, segundo, ...restante) => {
    console.log(
        `Os carros informador foram: ${primeiro}, ${segundo}. Todos os demais são: ${restante.join(", ")} `);
};

carros(
    "DelRey",
    "Brasilia",
    "Belina",
    "Fusca",
    "Variant",
    "Parati",
    "Monza",
    "Scort",
    "Fiat 147",
    "D-20",
    "Kombi",
    "BMW",
)

let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a , b, 200, 1000, 5000];
console.log("Exibindo o primeiro: ", primeiro);
console.log("Exibindo o resto: ", resto);

const meuArray = [10, 20, 30, 40];
console.log(meuArray, meuArray.join(" - "));

// const [p, s, t, q] = meuArray;
// console.log("Exibindo o quarto elemento", q);

const [q, ...p] = meuArray.reverse();
console.log(p.reverse());