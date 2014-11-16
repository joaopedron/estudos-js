
function produtos (nome, valor, quantidade) {
  this.nome = nome,
  this.valor = valor,
  this.quantidade = quantidade
};

var ref_total,
    ref_saldo;

function checkOut (nome, valor, quantidade, saldo, total) {
  // Definindo as variáveis com referencia ao obj em questão (checkOut)
  this.total = total;
  this.saldo = saldo;
  // Mesclando a primeira função com a função de checkOut
  // Através do metódo call(this, args)
  produtos.call(this, nome, valor, quantidade);
  // Função para calcular o total da compra
  function calcular_total (v, q) {
    this.valor_produto = v;
    this.quantidade_produto = q;
    return (v * q);
  };
  // Referencia a função com uma váriavel global para escapar de uma closure
  ref_total = calcular_total;
  // Função para calular o saldo atual
  function calcular_saldo (t, s) {
    this.total_produto = t;
    this.saldo_atual = s;
    return (s - t);
  };
  // Referencia a função com uma váriavel global para escapar de uma closure
  ref_saldo = calcular_saldo;

}; 

// Cria um array produto com os valores a seram passados no parâmetro do obj checkOut
var produto = {
  'name': 'Macbook Air',
  'price': 4700,
  'qtd': 1,
  'saldo': 5000
}

// Instacia o novo obj checkOut com os parâmetros definidos na variável produto
var comprar = new checkOut(
  produto['name'],
  produto['price'], 
  produto['qtd'], 
  produto['saldo']
);

// Instancia a função calcular_total passando como parâmetro os valores do obj comprar 
var valor_total = ref_total(comprar.valor, comprar.quantidade);
// Instancia a função calcular_saldo passando como parâmetro os valores do obj comprar 
var saldo_atual = ref_saldo(valor_total, comprar.saldo);


// Output do resultado obtido
console.log(
'Nome do produto: '  
+comprar.nome + '\n'
+'Valor do produto R$: '
+comprar.valor + '\n'
+'quantidade do produto: '
+comprar.quantidade + '\n'
+'Saldo antigo R$: '
+comprar.saldo + '\n'
+'O seu saldo atual é de R$: '
+saldo_atual + '\n'
+'O total de sua compra é: R$: '
+valor_total
);
