let lista = [5, 4, 3, 2, 1, 6, 7, 8, 9, 10]
let maiorValor = function (lista: Array<number>): Array<number> { 
    lista.sort((n1, n2) => n1 - n2); //Ordenar a lista em ordem crescente
    return [lista[lista.length - 1]]; //Retornar o último a volor
}

let menorValor = function (lista: Array<number>): Array<number> {
    lista.sort((n1, n2) => n1 - n2); // Ordenar a lista em ordem crescente
    return [lista[0]]; //Retornar o primeiro valor
}

let valorMedio = function (lista: Array<number>): Array<number> {
    let soma = lista.reduce((soma, n) => soma += n, 0); //Somar todos os valores da lista
    return [soma / lista.length]; //Retonar a o valor médio da lista
}

console.log(maiorValor(lista)); 
console.log(valorMedio(lista));
console.log(menorValor(lista));

