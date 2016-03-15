Number.prototype.formatMoney = function(c, d, t){

   var n = this;
   var c = isNaN(c = Math.abs(c)) ? 2 : c;
   var d = d == undefined ? "," : d;
   var t = t == undefined ? "." : t;
   var s = n < 0 ? "-" : "";
   var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "";
   var j = (j = i.length) > 3 ? j % 3 : 0;

   return s
          + (j ? i.substr(0, j) + t : "")
          + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t)
          + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

var x = (2000).formatMoney(/*'casas decimais', 'separador virgula', 'separador ponto'*/);

console.log(x);

// R$: 2.000,00 =D
