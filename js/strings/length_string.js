function sLength () {

  var s = document.form.texto.value;

  if (s != '') 
  {
    document.form.comprimento.value = s.length;
  }
  else 
  {
    document.form.texto.value = 'Entre uma string';
  }

};