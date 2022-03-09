function calculate() {
  var height = (document.getElementById("height").value)/100
  var weight = document.getElementById("weight").value

  var imc=weight / height ** 2;
  if(imc<18.5){
    window.alert("Você está abaixo do peso ideal")
  }else if(imc<24.9){
    window.alert("Você está no peso ideal")
  }else if(imc<29.9){
    window.alert("Você está com sobre-peso")
  }else if(imc<39.9){
    window.alert("Você está com obesidade")
  }else if(imc>39.9){
    window.alert("Você está com obesidade mórbida")
  }
}