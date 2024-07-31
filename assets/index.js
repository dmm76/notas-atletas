console.log("Estou aqui..");

class CalcularMediaAtletas {
  constructor(ginastas) {
    this.ginastas = ginastas;
  }
  ordenarNotas() {
    this.ginastas.forEach((ginasta) => {
      ginasta.notas = ginasta.notas.sort(function (a, b) {
        return a - b;
      });
      console.log("Notas Ordenadas: " + ginasta.notas);
      return ginasta.notas;
    });

    //   this.ginastas[0].notas = this.ginastas[0].notas.sort((a, b) => a - b);
    // console.log(this.ginastas[0].notas);
    // return this.ginastas[0].notas;
  }
  descartarMaiorMenor() {}
  somarNotas() {}
  mediaDasNotas() {}
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

let calcularmedia = new CalcularMediaAtletas(atletas);

calcularmedia.ordenarNotas();

console.log(CalcularMediaAtletas);
