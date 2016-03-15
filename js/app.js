/*
    Objetos construtores devem iniciar com a primeira letra em maiuscula
    Não devem utilizar a sintaxe literal
    devem utilizar o operador this para fazer referencia ao Objeto Carros
    atribuir um valor a propriedade tem que ser com o sinal de equal [=]
    valore sempre separados por virgula.

*/

function Carros (marca, modelo, ano, cor, capacidade, portas, totalPessoas) {
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano,
    this.cor = cor,
    this.capacidade = capacidade,
    this.portas = portas,
    this.totalPessoas = totalPessoas
}

var carro1 = new Carros('Volkswagen', 'G5', 2014, 'Branca', 5, 4, 0);
var carro2 = new Carros('Hyundai', 'hb20', 2015, 'Prata', 5, 4, 0);
var carro3 = new Carros('Mitsubishi', 'Pajero', 2012, 'Preta', 7, 4, 0);

/*
    sintaxe literal
*/
var carro = {
    marca: 'Volkswagen',
    modelo: 'Gol g5',
    ano: 2013,
    cor: 'Prata',
    portas: 4,
    capacidade: 5,
    quantidadePessoas: 0
};

carro.adicionarPessoas = function (numeroPessoas) {
    var total = carro.quantidadePessoas + numeroPessoas;
    var vagasRestantes = carro.capacidade - carro.quantidadePessoas;
    var wordOne = vagasRestantes === 1 ? 'pessoa' : 'pessoas';
    var wordTwo = vagasRestantes === 1 ? 'cabe' : 'cabem';

    if (carro.quantidadePessoas === carro.capacidade && total >= carro.capacidade) {
        return "O carro já esta lotado!";
    }

    if (numeroPessoas > carro.capacidade) {
        return "Só " + wordTwo + " mais: " +  vagasRestantes + " " + wordOne + " no carro!";
    }

    carro.quantidadePessoas += numeroPessoas;
    return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
};

carro.removerPessoas = function (numeroPessoas) {
    var totalPessoas = carro.quantidadePessoas - numeroPessoas;
    var wordOne = totalPessoas === 1 ? 'pessoa' : 'pessoas';

    carro.quantidadePessoas -= numeroPessoas;
    return "foi removido " + carro.quantidadePessoas + " " + wordOne + "!";
};
