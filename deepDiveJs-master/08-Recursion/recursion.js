
function factorialIterativo(num, tot=1){
if(num==0){return tot};
for(i=1;i<=num;i++){
    tot=tot*i

}
return tot;
}
function factorial(num, tot=1){
    if(num==0){return tot};
    tot*=num
    num-=1
    return factorial(num,tot);
    }
    // function fib(num,tot=1,sum=0){
    //     if(num%2==0||num==1){
    //     if(num==0){return tot}
    //     else{
    //         sum+=tot
    //         tot=tot+sum
    //          num-=2
    //     }
    //     return fib(num,tot,sum);}
    //     else{
    //     if(num<1){return sum}
    //     else{
    //         sum+=tot
    //         tot=tot+sum
    //          num-=2
    //     }
    // }
    // return fib(num,tot,sum)
    // }
    function fib(n) {
        if (n < 2) {
            return 1;
        }
        return fib(n-1) + fib(n-2)
    }

    function factores(num,tot=[],div=2){
        if(num==1){return tot}
        if(num%div==0){tot.push(div);
        num=num/div}
        else{
            div+=1
            
        }return factores(num,tot,div)

    }