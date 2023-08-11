const fibo= function(n){
    let n1=0;
    let n2=1;

    for(let i =0;i<n;i++)
    {   let print=n1+n2
        console.log(print)
        n1=n2;
        n2=print;

    }
}
fibo(20);