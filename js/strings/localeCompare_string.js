function ordemName (stringTwo) {
  var stringOne = document.form.stringOne.value;
  var stringTwo = document.form.stringTwo.value;

  var res = stringOne.localeCompare(stringTwo);

  if (res < 0) {
    document.form.resultado.value = 'A ordem é: ' + stringOne + ', ' + stringTwo;
  }
  else if (res > 0) {
    document.form.resultado.value = 'A ordem é: ' + stringTwo + ', ' + stringOne + ' ';
  }
  else {
    document.form.resultado.value = 'A string ' + stringOne + ' é igual a string ' + stringTwo + ' ';
  }
};