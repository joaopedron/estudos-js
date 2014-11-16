
function calcular (x, y, z) {
  
  console.log(arguments.length); // retorna o total de argumentos passados na função = 3
  return (x * y)/z;
};

var res = calcular(15, 3, 5);

console.log(res);