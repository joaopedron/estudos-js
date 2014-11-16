
var people = function my_name (n, l) {
  
  var name = n;
  var lastName = l;
  // Retornando um objeto
  return {
    name: n,
    lastName: l
  }
};


var res = people('João Pedro', 'Nascimento');

console.log(res['name'] + "\n" + res['lastName']);
