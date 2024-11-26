chisla=new Array()
let sum=0

for (let i=0; i<5; i++){
    chisla[i]=Math.floor(Math.random()*100%30-15)
    console.log(chisla[i])
}

console.log("-----------")
let newAr=chisla.filter((index)=>(index>0 && index<10));


for (let i=0; i<newAr.length; i++){
    sum+=newAr[i];
}
console.log(sum)
