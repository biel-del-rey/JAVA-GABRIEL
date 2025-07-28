let nome = prompt(`Digite o seu nome: `);

let nota1 = Number(prompt(`Digite a primeira nota:`))
let nota2 = Number(prompt(`Digite a segunda nota`))
let nota3 = Number(prompt(`Digite a terceira nota:`))

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 8){
    console.log(`o aluno, ${nome}, foi APROVADO com a média ${media.toFixed(2)} !`);
} else if (media >= 4) {
    console.log(`o aluno, ${nome}, está de RECUPERAÇÃO com  média ${media.toFixed(2)} !`);
}else {
    console.log(`o aluno, ${nome}, foi REPROVADO com a média ${media.toFixed(2)} !`);
}

let lado = Number(prompt(`Digite o lado do quadrado em Metros:`))

let area_quadrado = lado ** 2;

console.log(`A área do quadrado é: ${area_quadrado.toFixed(2)} metros.`);

let numero1 = Number(prompt(`Digite um número: `))
let numero2 = Number(prompt(`Digite mais um número: `))

if (numero1 > numero2) {
    console.log(`O numero 1 ${numero1} é maior que o numero 2 ${numero2}`);
} else if (numero2 > numero1) {
    comsole.log(`O numero 2 ${numero2} é maior que o numero 1 ${numero1}`)
} else {
    comsole.log(`Os dois números são iguais`)
}

