var arr = ['Laranja', 'Limão', 'Pera', 'Morango', 'Goiaba', 'Pessêgo']; 

var msg = '';

function loop_custom (elem, ind, obj) {
  msg += "arr[" + ind + "] = " + elem + "\n";
}

var loop = arr.forEach(loop_custom);

console.log(msg);