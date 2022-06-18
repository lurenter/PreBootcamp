function duplicar(num) {
    return num * 2

}
function map(arr, fn) {
    var resultado = [];
    arr.forEach(element => resultado.push(fn(element)))
    return resultado
}
function filter(arr, fn) {
    let resultado = []
    for (i = 0; i < arr.length; i++) {
        if (fn(arr[i]) == true) {
            resultado.push(arr[i])
        }
    } return resultado
}
function contains(arr, num) {
    if (Array.isArray(arr) == true) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == num) {
                return true
            }   
        }return false
    } else {
        for (let propiedad in arr) {
            if (arr[propiedad] == num) {
                return true
            } 
        }return false
    }

}
function cuentaPalabras(string){
    let resultado=string.split(" ")
    return(resultado.length)
}
function reduce(arr,num,fn){
var resultado=arr[0]
for(i=1; i<arr.length;i++){
    resultado=fn(resultado,arr[i])
}if(typeof(arr[0])=="number"){
    resultado=fn(resultado,num);
return resultado
}else{return resultado}
}
function cuentaPalabrasReduce(string,string2){
    let resultado=0
    resultado+=cuentaPalabras(string);
    resultado+=cuentaPalabras(string2);
    return resultado
    
}
function suma(arr){
 reduce(arr,0, function(num,num2){
    resultado=0
resultado+=num+num2
return resultado
    })
    return resultado
}
function every(arr,fn){
    for(i=0;i<arr.length;i++){
        if(fn(arr[i])==false){
            return false
        }
    }return true

}

function any(arr,fn){
    for(i=0;i<arr.length;i++){
        if(fn(arr[i])==true){
            return true
        }
    }return false

}
