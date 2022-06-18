function Mamifero(nombre){
  this.nombre = nombre;
this.descendencia=[]
}
Mamifero.prototype.miMamifero=function(){
return(this.nombre)
}
Mamifero.prototype.saludar=function(){
  return(`Hola, mi nombre es ${this.nombre}`)
}
Mamifero.prototype.nuevoHijo=function(){
  let hijo=new Mamifero(`${this.nombre} Jr`);
  this.descendencia.push(hijo);
  return hijo
}

function Gato(){
  
}