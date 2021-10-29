"use strict";
var lista = [5, 4, 3, 2, 1, 6, 7, 8, 9, 10];
var maiorValor = function (lista) {
    lista.sort(function (n1, n2) { return n1 - n2; }); //Ordenar a lista em ordem crescente
    return [lista[lista.length - 1]]; //Retornar o último a volor
};
var menorValor = function (lista) {
    lista.sort(function (n1, n2) { return n1 - n2; }); // Ordenar a lista em ordem crescente
    return [lista[0]]; //Retornar o primeiro valor
};
var valorMedio = function (lista) {
    var soma = lista.reduce(function (soma, n) { return soma += n; }, 0); //Somar todos os valores da lista
    return [soma / lista.length]; //Retonar a o valor médio da lista
};
console.log(maiorValor(lista));
console.log(valorMedio(lista));
console.log(menorValor(lista));
