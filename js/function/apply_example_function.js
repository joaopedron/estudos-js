function apartamentoDescricao (local, quartos, garagem) {

  this.local   = local,
  this.quartos = quartos,
  this.garagem = garagem

};

function apartamentoVenda (local, quartos, garagem, quantidade, vendidos) {

  this.local = local,
  this.quantidade = quantidade,
  this.vendidos = vendidos,

  apartamentoDescricao.apply(this, [local, quartos, garagem]);
  // apartamentoDescricao.apply(this, arguments);
  // apartamentoDescricao.apply(this, new Array('local', 'quartos', 'garagem') );

};

var zonaSul = new apartamentoVenda('Zona Sul', 4, 'Sim', 2, 5);

// Output do resultado obtido
console.log(
  zonaSul.local + '\n'
  +zonaSul.quartos + '\n'
  +zonaSul.garagem + '\n'
  +zonaSul.quantidade + '\n'
  +zonaSul.vendidos + '\n'
);