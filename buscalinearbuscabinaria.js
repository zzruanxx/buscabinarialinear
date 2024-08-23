//buscalinear - ideal para listas pequenas e desordenadas, percorre todos os elementos um a um

function buscalinear(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
}

let arr = [10, 20, 30, 40, 50]
let x = 30;
let resultado = buscalinear(arr, x);

if (resultado !=== -1) {
    console.log('Elemento encontrado no indice ${resultado}');
} else }
  console.log('Elemento nao encontrado');
  }


//buscabinaria - ideal para listas grandes, requer que a lista seja previamente ordenada, divide a lista ao meio em cada passo para encontrar o elemento desejado.

function buscabinaria(arr, x) {
    let esquerda = 0;
    let direita = arr.length - 1;
}

while (esquerda <= direita) {
    let meio = Math.floor ((esquerda + direita) / 2 );
    
    if (arr[meio] === x) {
        return meio;
    }
    
    if (arr[meio] < x) {
        esquerda = meio + 1;
}

else {
    direita = meio - 1;
    }
}

return -1;
}

let arrordenado = [10, 20, 30, 40, 50];
let x = 40;
let resultado = buscabinaria(arrordenado, x);
if (resultado !== -1) {
    console.log('Elemento encontrado no indice ${resultado}');
} else {
    console.log('Elemento nao encontrado');
}