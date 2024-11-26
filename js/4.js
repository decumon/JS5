function foo(ch){
    let newAr;
    newAr=ch.reduce((sum=0, num)=>sum+num)/ch.length
    return (newAr.toFixed(1))
}

chisla=new Array()

for (let i=0; i<3; i++){
    chisla[i]=Math.floor(Math.random()*100%30-15)
    console.log(chisla[i])
}

console.log("-----------")
console.log(foo(chisla))
