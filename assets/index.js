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
      console.log("Ginasta: " + ginasta.nome + ", Notas: " + ginasta.notas);
    });
    console.log("*---------------------------------------------*");
  }

  //2 - Descartar a primeira nota(menor) e a ultima nota(maior)
  descartarMaiorMenor() {
    this.ginastas.forEach(function (ginasta) {
      ginasta.notas = ginasta.notas.sort(function (a, b) {
        return a - b;
      });

      ginasta.notas = ginasta.notas.slice(1, -1);
      console.log(
        "Ginasta: " + ginasta.nome + ", Notas com descarte: " + ginasta.notas
      );
    });
    console.log("*---------------------------------------------*");
  }

  // 3 - Fazer a soma das notas
  somarNotas() {
    this.ginastas.forEach(function (ginasta) {
      ginasta.somarNotas = ginasta.notas.reduce(function (total, nota) {
        return total + nota;
      }, 0);
      // console.log("Notas somadas: " + ginasta.somarNotas);
    });
    // console.log("*-----------*");
  }

  // 4 - Fazer a media das notas
  mediaDasNotas() {
    this.ginastas.forEach(function (ginasta) {
      ginasta.mediaNotas = ginasta.somarNotas / ginasta.notas.length;
      console.log(
        "Ginasta: " + ginasta.nome + ", Média: " + ginasta.mediaNotas
      );
    });
    console.log("*---------------------------------------------*");
  }

  vencedor() {
    let maior = 0;
    let vencedor = "";
    this.ginastas.forEach(function (ginasta) {
      if (ginasta.mediaNotas > maior) {
        maior = ginasta.mediaNotas;
        vencedor = ginasta.nome;
      }
    });

    console.log("Vencedor : " + vencedor + ", Media: " + maior.toFixed(2));
    console.log("*---------------------------------------------*");
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
calcularMedia.vencedor();

// Exibindo o resultado final
console.log(calcularMedia.ginastas);
