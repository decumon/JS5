function foo(ch){
    let newAr;
    return (newAr=ch.filter(index=>index%5==0))
}

chisla=new Array()

for (let i=0; i<20; i++){
    chisla[i]=Math.floor(Math.random()*100%30-15)
    console.log(chisla[i])
}

console.log("-----------")
console.log(foo(chisla))
