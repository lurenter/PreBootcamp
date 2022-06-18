
function crearCalculadora() {
    let objeto = {
        sumar:function(num){this.array.push(num)},
        restar:function(num){this.array.push(num*-1)},
        reset:function(){this.array=[]},
        array: [],
        valor: function () { 
            if (objeto.array.length == 0) {
                return 0
            }             
            else {
                sum = 0
                for (let i = 0; i < objeto.array.length; i++) {
                    sum = objeto.array[i] + sum;
                }
                return sum
            }
        },
    };
    return objeto;
}