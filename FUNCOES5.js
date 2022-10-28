var num1 = parseInt(prompt("Insira o primeiro numero"))
var num2 = parseInt(prompt("Insira o segundo numero"))
var continuar = "s"
var resultados = []
var index = 0


function Somar(num1, num2) {
     var adicao = num1 + num2
     return adicao
}

function Subtrair(num1, num2) {
     var subtrair = num1 - num2
     return subtrair
}

function Multiplicar(num1, num2) {
     var multi = num1 * num2
     return multi
}

function Dividir(num1, num2) {
     var dividir = num1 / 2
     return dividir
}

function ExibirHistorico() {
     console.log(resultados)
}

while (continuar == "s") {
     var operacao = prompt("Insira a operação desejada 1 = somar; 2 = subtrair; 3 = multiplicar; 4 = dividir")
     if (operacao == "1") {
          resultados[index] = Somar(num1, num2)
          console.log(Somar(num1, num2))
          index++
     } else if (operacao == "2") {
          resultados[index] = Subtrair(num1, num2)
          index++
          console.log(Subtrair(num1, num2))
     } else if (operacao == "3") {
          resultados[index] = Multiplicar(num1, num2)
          index++
          console.log(Multiplicar(num1, num2))
     } else {
          (operacao == "4")
          resultados[index] = Dividir(num1, num2)
          index++
          console.log(Dividir(num1, num2))
     }
     continuar = prompt("Deseja continuar fazendo a operação?")
}

ExibirHistorico();
