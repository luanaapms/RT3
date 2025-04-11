import { Somador, Subtrator, Multiplicador, Divisor } from 'modulort3';

const a = 20;
const b = 10;

console.log('Testes:')
console.log(`Soma: ${a} + ${b} = ${new Somador().calcular(a, b)}`);
console.log(`Subtração: ${a} - ${b} = ${new Subtrator().calcular(a, b)}`);
console.log(`Multiplicação: ${a} * ${b} = ${new Multiplicador().calcular(a, b)}`);
console.log(`Divisão: ${a} / ${b} = ${new Divisor().calcular(a, b)}`);
