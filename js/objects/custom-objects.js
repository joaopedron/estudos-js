function Cilindro (r,h) {
  this.raioBase = r;
  this.altura = h;

  this.areaBase = function calcAreaBase () {
    aBase = Math.PI * Math.pow(this.raioBase, 2);
    return aBase;
  };
  this.areaLateral = function calcAreaLateral () {
    aLateral = 2 * Math.PI * this.raioBase * this.altura;
    return aLateral;
  };
  this.areaTotal = function calcularAreaTotal () {
    return 2 * aBase + aLateral;
  };
  this.volume = function calcularVolume () {
    volume = Math.PI * Math.pow(this.raioBase,2) * this.altura;
    return volume;
  }
};

obj = new Cilindro(3, 10);

console.log('Raio da base: '    + obj.raioBase + "\n" 
          + 'Altura da base: '  + obj.altura + "\n" 
          + 'Area da base: '    + obj.areaBase() + "\n"
          + 'Area lateral: '    + obj.areaLateral() + "\n"
          + 'Area total: '      + obj.areaTotal() + "\n"
          + 'Volumne: '         + obj.volume() 
          );