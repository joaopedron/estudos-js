var arr = [1, 2, 3, 4, 5];
  
function callback (elem, ind, obj) {

 return (typeof elem == 'number')

}

var x = arr.every(callback);

console.log(x);

document.write('retorna um boolean ' + x);



// Quando passamos o parâmetro thisObjeto a função every cria um this que faz referencia ao obj passado

arr = ['a','b','c'];

var x = arr.every(function richard(elem, ind, arr) {
  console.log(this);
},'ricardo');

