var carro = {
    marca: 'Volkswagen',
    modelo: 'Gol g5',
    ano: 2013,
    cor: 'Prata',
    portas: 4,
    capacidade: 5,
    quantidadePessoas: 0
};

carro.mudarCor = function (color) {
    carro.cor = color;
};

carro.adicionarPessoas = function (numeroPessoas) {
    var total = carro.quantidadePessoas + numeroPessoas;

    carro.quantidadePessoas += numeroPessoas;
    return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
};

carro.obterCor = function () {
    return 'A cor do carro é: ' + carro.cor;
};


carro.adicionarPessoas(2);
carro.adicionarPessoas(1);

carro.mudarCor('preto');

console.log(carro.obterCor());

console.log(carro.adicionarPessoas(2));
