console.log("Estou aqui..");

class CalcularMediaAtletas {
  constructor(ginastas) {
    this.ginastas = ginastas;
  }

  //1- Ordenar as Notas dos Ginastar
  ordenarNotas() {
    this.ginastas.forEach(function (ginasta) {
      ginasta.notas = ginasta.notas.sort(function (a, b) {
        return a - b;
      });
      console.log("Notas Ordenadas: " + ginasta.notas);
    });
    // this.ginastas[0].notas = this.ginastas[0].notas.sort((a, b) => a - b);
    // console.log(this.ginastas[0].notas);
    // console.log("Notas Ordenadas: " + this.ginastas[0].notas);
    // return this.ginastas[0].notas;
  }

  //2 - Descartar a primeira nota(menor) e a ultima nota(maior)
  descartarMaiorMenor() {
    this.ginastas.forEach(function (ginasta) {
      ginasta.notas = ginasta.notas.sort(function (a, b) {
        return a - b;
      });
      ginasta.notas = ginasta.notas.slice(1, -1);
      console.log("Notas Ordenadas com descarte: " + ginasta.notas);
    });
    // this.ginastas[0].notas = this.ginastas[0].notas.sort((a, b) => a - b);
    // this.ginastas[0].notas = this.ginastas[0].notas.slice(1, -1);
    // console.log("Notas Ordenadas com descarte: " + this.ginastas[0].notas);
    // return this.ginastas[0].notas;
  }

  // 3 - Fazer a soma das notas
  somarNotas() {
    this.ginastas.forEach(function (ginasta) {
      ginasta.somarNotas = ginasta.notas.reduce(function (total, nota) {
        return total + nota;
      }, 0);
      console.log("Notas somadas: " + ginasta.somarNotas);
    });
    console.log("*-----------*");
  }

  // 4 - Fazer a media das notas
  mediaDasNotas() {
    this.ginastas.forEach(function (ginasta) {
      ginasta.mediaNotas = ginasta.somarNotas / ginasta.notas.length;
      console.log("Media das Notas: " + ginasta.mediaNotas);
    });
    console.log("*-----------*");
  }
}

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];

let calcularMedia = new CalcularMediaAtletas(atletas);

// Chamando os métodos na ordem correta
calcularMedia.ordenarNotas();
calcularMedia.descartarMaiorMenor();
calcularMedia.somarNotas();
calcularMedia.mediaDasNotas();

// Exibindo o resultado final
console.log(calcularMedia.ginastas);
