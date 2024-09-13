//são fabricas pra criar objects

// criamos uma classe com nome Carro e dentro um constructor, que é tudo que essa classe vai construir/criar
//sempre primeira letra maiuscula

// Definindo a classe Carro
class Carro {
  constructor(valor1, valor2, valor3) {
    this.marca = valor1;
    this.modelo = valor2;
    this.ano = valor3;
  }
  buzina() {
    return this.modelo + " Biiiiii";
  }
}

// Criando instâncias da classe Carro
const uno = new Carro("Fiat", "Uno", 2001);
const bmw = new Carro("Bmw", "X1", 2022);

// Exibindo as instâncias e o resultado do método buzina
console.log(bmw); // Mostra o objeto bmw com marca, modelo e ano
console.log(uno.buzina()); // Mostra "Uno Biiiiii"

// Alterando a propriedade ano do objeto uno
uno.ano = 2024;
console.log(uno); // Mostra o objeto uno com ano alterado para 2024
