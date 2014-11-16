function calcular (x, y, z) {
  
  console.log(arguments[0]); // 15
  console.log(arguments[1]); // 3
  console.log(arguments[2]); // 5

  return (x * y)/z;

};

var res = calcular(15, 3, 5);

console.log(res);