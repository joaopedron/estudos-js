
// * isFinite verifica se o argumento passado é um número
// * caso seja um número retorna true
// * caso seja uma string retorna false

var teste = prompt('Entre o seu nome');


if (isFinite(teste)) 
{
  alert('vc inseriu uma numero');
}
else 
{
  alert('vc inseriu um string');
}

// * isNaN verifica se o argumento passado não é um número
// * caso seja um número retorna false
// * caso seja uma string retorna true

var teste = prompt('Entre o seu nome');


if (isNaN(teste)) 
{
  alert('vc inseriu uma numero');
}
else 
{
  alert('vc inseriu um string');
}

