var obj={}
function setPropsOnObj(obj, num){
 obj.p=5
 obj["plataforma"]=5
 obj["proximo"]=((num)=> num+1)
 obj["la"]={clave:{secreta:{es:404}}}
}
function setPropsOnArr(array){
array["hola"]=function(){return ("Hola!")}
array["river"]="plate"
array.unshift(5)
array["doble"]=((num)=> num*2)

}
function setPropsOnFunc(functionObject){
    beforeEach()
    functionObject.year = 2022
    functionObject.mitad = ((num)=> num/2)
    functionObject.prototype = {helloWorld : function helloWorld() {
        return 'Hello World'
    }}

}
// function Object(array){
//    function mitad(num){num/2}
// }