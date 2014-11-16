
var people = function my_name (n, l) {
  
  var name = n;
  var lastName = l;
  // Retornando um array
  return [name, lastName];
};


var res = people('João Pedro', 'Nascimento');

console.log(res[0] + "\n" + res[1]);
