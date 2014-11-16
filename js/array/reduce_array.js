var arr = [10, 20, 30, 40, 50, 60]; 

// Reduce(função_callback(valor_inicial, valor_atual, indice, array))
// Se não setar o valor_incial no ultimo parametro ele vai pegar o valor_incial do primeiro elemento do array.
// No exemplo abaixo ele retorna o calculo total dos elementos number do nosso array

function reduce_element (valor_incial, valor_atual, indice, arr) {
  return valor_incial + valor_atual;
}

// Se atribuirmos um valor_inicial a função reduce ele começará a nossa contagem a partir desse valor citado, no nosso caso: 30
var x = arr.reduce(reduce_element, 30);

console.log(x);