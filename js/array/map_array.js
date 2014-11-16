var arr = ['Laranja', 'Limão', 'Pera', 'Morango', 'Goiaba', 'Pessêgo', 'Limão']; 

function mapeando (elem, ind, obj) {

  return (elem = elem + ' Fruta')
}

var x = arr.map(mapeando);

console.log(x);

// Essa função vai mapear o array e executar uma função callback que no nosso caso estamos adicionando a cada elemento do array a palavra (string) ' Fruta'