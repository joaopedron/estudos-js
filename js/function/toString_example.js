function descricao (local, quartos, garagem) {
  
  this.local  = local,
  this.quartos  = quartos,
  this.garagem  = garagem

};

var res = descricao.toString();

console.log(res);