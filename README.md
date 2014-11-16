# Documentação dos meus estudos com Javascript (pt-br)
---


##Manipulação de erros com Javascript

O Objeto Error possui duas propriedades e um método (função):

  Propriedades:
    - Name
    - Message
  Metódo:
    - toString();

  A propriedade name pode retornar os seguintes valores:
    - ReferenceError
    - EvalError
    - RangeError
    - SintaxeError
    - TypeError

  Já a propriedade message retorna uma string com a mensagem do error.

    Exemplo: `ReferenceError: x is not defined`
              [• 1 •]         [• 2 •]

    [• 1 •] = Ao nome do error (propriedade Error.name)
    [• 2 •] = Ao a mensagem do error (propriedade Error.message)

  O metódo toString() retorna um string com a propriedade Error.name e Error.message.

---

Existe outra maneira de declarar o throw, veja:

 Primeira maneira:

 if () {
   throw 'string com a mensagem de erro personalizada'
 }

 ---

 Segundo maneira:

 if () {
 throw new Error('string com a mensagem de erro personalizada');
 }

 ---
Quando declaramos da segunda maneira é necessário colocar a propriedade message do objeto error no alert do bloco catch(e), assim:

 `alert(e.message);`
---

Também podemos alterar suas propriedades-padrão, veja:

 if () {
   throw {
   name: 'Nome do erro',
   message: 'Corpo da mensagem de erro'
   }
 }

## Objetos

Existem 3 categorias de objetos no Javascript:

  - Objetos nativos
  - Objetos da hospedagem
  - Objetos personalizados (criado por você)

### Objetos nativos do JS

  - Array
  - Boolean
  - Date
  - Error
  - EvalError
  - Function
  - Math
  - Number
  - Object
  - RangeError
  - ReferenceError
  - RegExp
  - String
  - SintaxError
  - TypeError
  - URIError

#### Arrays

Conjuto de dados indexados sequencialmente a partir do zero.

Você pode construir um Array a partir do objeto construtor new Array().

Sintaxe:

  ` var carro = new Array() `

Nesse exemplo indicamos que a variavel carro possui um array vazio.

Podemos também adicionar valores nesse array que ficaria assim:

  ` var carro = new Array("Marca", "GM", "Modelo", "Celta", "Ano", 2005); `

A contagem dos indices de um array desse tipo começa em 0, ou seja:

  - marca[0]
  - gm[1]
  - modelo[2]
  - celta[3]
  - ano[4]

Obs: O array descrito a cima é denominado um array indexado, caracterizado por sua contagem de indíces.

##### Propriedades do objeto Array()

O objeto `Array()` possui 3 propriedades nativas, são elas:

  - constructor
  - prototype
  - length

##### Métodos do objeto Array()

O objeto `Array()` possui  alguns métodos nativos, veja:

  - concat()
    - Adiciona elementos no final de um array existente

  `
  var arr = [1, 2, 3, 4];
  var x = arr.concat('5' , '6');
  console.log(x);
  res: [1, 2, 3, 4, 5, 6];
  `
  - every()
    - responsável por percorrer cada elemento de um array e retornar um callback.

  `
  var arr = ["joao", "maria", "cesar"];

  function callback (elem, ind, obj) {

   return (typeof elem == 'string')

  }

  var x = arr.every(callback);

  console.log(x);

  document.write('retorna um boolean ' + x);

  res: a função callback vai percorrer o array através do metódo every() e verificar se no array em questão existe algum elemento c
  do tipo string.

  res final: retorna um boolean true ou false.
  `
  - filter()
  - forEach()
  - indexOf()
  - lastIndexOf()
  - join()
  - map()
  - pop()
  - push()
  - reduce()
  - reduceRight()
  - reverse()
  - shift()
  - slice()
  - some()
  - sort()
  - splice()
  - toLocaleString()
  - toString()
  - unShift()


## eval(), isFinite(), isNaN(), Number(), parseFloat(), parseInt()

Qual é a diferença entre essas funções ?

`eval(arg)`

executa a string passada como argumento contendo um codigo js, exemplo:

  var teste = eval('x=1; y=2; var soma = x+y; console.log(soma)');

`isFinite(string)`

converte a string passada, em número, caso não consiga fazer a conversão retorna NaN.

`isNaN(string)`

(is Not a number)

verifica se a string passada como argumento é um número caso sim, retorna false, caso contrário retorna true.

`Number(string)`

converte a string passada como argumento em um número, caso não consiga fazer a conversão retorna NaN.

`parseFloat(arg, opcional)`

converte a string passada como argumento em um número de base10, caso não consiga fazer a conversão retorna NaN.

`parseInt(arg, opcional)`

converte a string passada como argumento em um número inteiro, caso não consiga fazer a conversão retorna NaN.


## propriedades de uma função

  - arguments
  - arguments.length
  - arguments.calle
  - length
  - constructor
  - prototype

##### Arguments

retorna um array com indice dos argumentos passados na função:

 function exemple (x, y, z) {

    console.log(arguments[0]); // 10
    console.log(arguments[1]); // 20
    console.log(arguments[2]); // 30

    return (x * y) / z;
 };

 var exec = exemple(10, 20, 30);

 console.log(exec);

##### Arguments Length

Faz a contagem do total de argumentos passados em determinada função

 function exemple (x, y, z) {
    console.log(arguments.length); // 3
    return (x * y) / z;
 };

 se você passar mais de 3 argumentos na hora de chamar a função ele vai fazer a contagem total dos argumentos passados, veja:

 exemple(10, 20, 30, 40, 50, 60);

 note que eu passei mais que 3 argumentos mas mesmo assim ele vai me retornar 6 argumentos.

##### Arguments Calle

obs: fiquei confuso sobre o funcionamento dessa propriedade calle do objeto function

##### Length

A propriedade length é diferente de arguments.length pois ela retorna o numero esperado de argumentos e não pode ser acessada fora do corpo da função.

exemplo:

`function teste (x, y, z) {

  console.log(teste.length); // 3 argumentos esperados

};`

mesmo se eu passar teste(x, y, z, k, r, t); ele só vai me retornar os 3 argumentos esperados pela função.

##### Constructor

A propriedade constructor faz referencia à função que cria determinado objeto, no exemplo a seguir retornamos a função por meio de um alert.

`function cilindro (r, h) {

  this.raio   = r;
  this.altura = h;

};

newCilindro = new cilindro(5, 10);

window.onload = function () {
  alert(newCilindro.constructor);
};`

##### Prototype

A propriedade prototype permite adicionar novas propriedades e funções a um obj já existente, exemplo:

`function cilindro (r, h) {
  this.raio = r;
  this.altura = h;
};

cilindro.prototype.cor = 'null';

cilindro.cor = 'azul';

window.onload = function () {
  alert(cilindro.cor);
};`


## Métodos(funções) de uma função

  - call()
  - apply()
  - toString()

##### Call

O metódo call(this, args) é destinado a mesclar dois ou mais métodos(funções) em um só objeto, isso só é possível chamando um método dentro de outro método.

##### Apply()

Esse metódo é muito semelhante ao call() mas com ele nos temos que passar os argumentos da forma de um array ou com a propriedade arguments

##### toString()

Esse metódo exibe uma string contendo o codigo de uma funcao


## Métodos(funções) para strings

  - charAt(ind)
  - charCodeAt(ind)
  - concat(string1, string2, string3)
  - fromCharCode(unicode1, unicode2, unicode3)
  - indexOf(string_a_procurar, inicio)
  - lastIndexOf(string_a_procurar, inicio)
  - localeCompare(string2)
  - match(expressão regular)
  - replace(string | expreg, nova_string | funcao)
  - search(expreg)
  - slice(inicio, fim)
  - split(inicio, fim)
  - substr(inicio, comprimento)
  - substring(indiceA, indiceB)
  - toLocaleLowerCase(string)
  - toLocaleUpperCase(string)


##### charAt(indice)

O metódo charAt retorna a string do indice passado ou seja, tenho a string nascimento quero o indice 2 usando 
esse metódo ficaria assim:

`var nome = 'nascimento'; 
 
 console.log(nome.charAt(3));

 // O resultado será a string 'C'
` 
##### charCodeAt(indice)

O metódo charCodeAt retorna a codificação unicode da string que ocupa a posição do indice passado como argumento, ou seja:

`var nome = 'nascimento'; 
 console.log(nome.charCodeAt(3));

 // O resultado será a string 'C' -> 99

##### concat(string1, string2, string3)

Esse metódo serve para concatenar duas ou mais strings sem destruir as strings iniciais, ela cria uma nova string com o resultado da junção, veja um exemplo:

var name = 'João Pedro ';
var lastName = 'Nascimento';

var fullName = name.concat(lastName);

console.log(fullName); // Resultado: João Pedro Nascimento =D

##### fromCharCode(unicode1, unicode2, unicode3)

Esse metódo tem a função inversa do metódo charCodeAt(), tendo conhecimento do codigo unicode, voce passa ele como argumento desse metodo que ele vai resultar na string (texto) correspondente.

  var deCode = String.fromCharCode(106, 112);

  console.log(deCode); // Resultado: jp =D

##### indexOf(string_a_procurar, inicio)

##### lastindexOf(string_a_procurar, inicio)
  - localeCompare(string2)
  - match(expressão regular)
  - replace(string | expreg, nova_string | funcao)
  - search(expreg)
  - slice(inicio, fim)
  - split(inicio, fim)
  - substr(inicio, comprimento)
  - substring(indiceA, indiceB)
  - toLocaleLowerCase(string)
  - toLocaleUpperCase(string)

## Objeto Math

  
  - Math.E
  - Math.LN10
  - Math.LN2
  - Math.LOG10E
  - Math.LOG2E
  - Math.PI
  - Math.SQRT1_2
  - Math.SQRT2

### Métodos do objeto Math
  - Math.PI()
  - Math.abs()
  - Math.max(x, y, z)
  - Math.min(x, y, z)
  - Math.round(x) (gera numero inteiro fazendo o arredondamento considerando 0,5)
  - Math.floor(x) (transforma em numero inteiro o decimal e arredonda para baixo)
  - Math.ceil(x) (transforma em numero inteiro o decimal e arredonda para cima)
  - Math.pow(x) (potenciação do numero elevado a x passado como parâmetro)
  - Math.sqr(x) (square root, raiz quadrada do numero em questão)
  - Math.random() (gera um numero randonico de 0 - 1 => 000.1 - 0.999)
  - Math.exp(x) eleva a pontencia x o numero de euler (E) => 2.718281..
  - Math.log(x) 
  - Math.sin(x)
  - Math.cos(x)
  - Math.tan(x)
  - Math.acos(x)
  - Math.asin(x)
  - Math.atan(x)
  - Math.atan2(x, y)

### Métodos do objeto Number

  - 



















































































































































































































































































































































































