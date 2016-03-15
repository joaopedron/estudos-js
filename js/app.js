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
