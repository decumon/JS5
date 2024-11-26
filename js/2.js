function foo(ch){
    if (ch.every(index=>(index%2==0))) return "Все числа четные"
    else return "Есть нечетные числа"
}

chisla=new Array()

for (let i=0; i<2; i++){
    chisla[i]=Math.floor(Math.random()*100%30-15)
    console.log(chisla[i])
}

console.log("-----------")
console.log(foo(chisla))
