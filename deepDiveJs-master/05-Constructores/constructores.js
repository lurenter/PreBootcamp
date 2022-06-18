function CalculadoraNPI() {
    this.number = []

}
CalculadoraNPI.prototype.agregar = function (num) {
    this.number.push(num)
}
CalculadoraNPI.prototype.sumar = function () {
    if(this.number.length<2){throw("La calculadoraNPI necesita por lo menos 2 números")}
    else{
    let sum = this.number[this.number.length - 1] + this.number[this.number.length - 2];
    this.number.splice(this.number.length - 2, 2, sum)}
}

CalculadoraNPI.prototype.restar = function () {
    if(this.number.length<2){throw("La calculadoraNPI necesita por lo menos 2 números")}
    else{
    let res = this.number[this.number.length - 2] - this.number[this.number.length - 1];
    this.number.splice(this.number.length - 2, 2, res)}
}

CalculadoraNPI.prototype.multiplicar = function () {
    if(this.number.length<2){throw("La calculadoraNPI necesita por lo menos 2 números")}
    else{
let res = this.number[this.number.length - 2] * this.number[this.number.length - 1];
    this.number.splice(this.number.length - 2, 2, res)}
}

CalculadoraNPI.prototype.dividir = function () {
    if(this.number.length<2){throw("La calculadoraNPI necesita por lo menos 2 números")}
    else{
let res = this.number[this.number.length - 2] / this.number[this.number.length - 1];
    this.number.splice(this.number.length - 2, 2, res)}
}


CalculadoraNPI.prototype.valor = function () {
  return (this.number[this.number.length - 1])

}
