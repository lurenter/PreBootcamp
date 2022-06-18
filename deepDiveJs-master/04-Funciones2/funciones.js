 function concatenar () {
    var str=""
    for(i=0;i<arguments.length;i++){
      str=str.concat(arguments[i])}
    return str
    }

    function invocarFunciones(){
var resultado=""
        for(i=0; i<arguments.length;i++){
     resultado=resultado.concat(arguments[i]())}
     return resultado
    }
 
    function creadorDeIncrementos(num){
        var resultado=0      
return function(num2){
    resultado=resultado+num+num2;
    return resultado
}
    }
    var resultado=0 
    function invocacionUnica(num){
    if (resultado===0){
    resultado=resultado+num
    return resultado}
    else{return resultado}}
    