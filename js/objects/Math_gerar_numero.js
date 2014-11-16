
function gerarNumero (a, b) {
  
  var total = b - a + 1;
  this.a = a;
  this.b = b;
  
  console.log(Math.floor(Math.random() * total + a));
  
};

