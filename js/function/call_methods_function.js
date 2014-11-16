function apartamentoDescricao (local, quartos, garagem) {
 
 this.local = local,
 this.quartos = quartos,
 this.garagem = garagem

};

function apartamentoVenda (local, quantidade, vendidos) {

  this.local = local,
  this.quantidade = quantidade,
  this.vendidos = vendidos

};

zonaSulDescricao = new apartamentoDescricao('Zona Sul', 4, 'Sim');
zonaSulVenda     = new apartamentoVenda('Zona Sul', 12, 7);

console.log(
zonaSulDescricao.local + '\n' 
+ zonaSulDescricao.quartos + '\n' 
+ zonaSulDescricao.garagem + '\n' 
+ zonaSulVenda.local + '\n' 
+ zonaSulVenda.quantidade + '\n' 
+ zonaSulVenda.vendidos
);

// Agora a mesma função mesclando os argumentos com o metodo call(this, args);

function apartamentoDescricao (local, quartos, garagem) {
 
 this.local = local,
 this.quartos = quartos,
 this.garagem = garagem

};

function apartamentoVenda (local, quartos, garagem, quantidade, vendidos) {

  this.local = local,
  this.quantidade = quantidade,
  this.vendidos = vendidos,

  apartamentoDescricao.call(this, local, quartos, garagem);

};

zonaSul = new apartamentoVenda('Zona Sul', 4, 'Sim', 12, 7);

window.onload = function () {

  console.log(
  zonaSul.local + '\n' 
  + zonaSul.quartos + '\n' 
  + zonaSul.garagem + '\n' 
  + zonaSul.local + '\n' 
  + zonaSul.quantidade + '\n' 
  + zonaSul.vendidos
  );

};

