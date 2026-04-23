/*declarando variáveis

let variavel = 10 //Declarando com let, aqui nós temos uma variável que pode alterar o valor
const variavelConstante = 20 //Ao declarar via const, o valor nunca mais muda, e se tentar, vai dar console.error();

variavel += 5;

console.log(variavel + variavelConstante);

exercicio - Calcular valor de uma viagem - 1: Preço do combustivel, 2 Gasto por KM, 3 Distancia em KM
*/
const combustivel = 6.20
const gastoKM = 10
let distancia = 120

console.log(combustivel / gastoKM * distancia);


/* exercicio feito no curso

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
*/