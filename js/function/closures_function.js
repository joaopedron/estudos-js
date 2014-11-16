window.onload = function () {
  
  var botao = document.getElementsByTagName('button');

  function auxiliar (e) {

    return function () {
      alert('você clicou no botao ' + e);
    };

  };
  // Termina a função externa e começa o loop com o indice dos botões clicados.
  // fora do escopo da função auxiliar

  for (var i = 0; i < botao.length; i++) {
    botao[i].onclick = auxiliar(i);
    alert('você clicou no botao ' + i);
  };

};

