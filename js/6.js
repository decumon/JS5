let data = [
    { 1: 11, 2: 12, 3: 13 },
    { 1: 21, 2: 22, 3: 23 },
    { 1: 24, 2: 25, 3: 26 }
  ];

  let keysArr = [];
  let valuesArr = [];
  
  data.forEach(obj => {
    keysArr.push(Object.keys(obj));
    valuesArr.push(Object.values(obj));
  });

  let sum = data.reduce((sum, obj) => {
    return sum + Object.values(obj).reduce((innerSum, value) => innerSum + value, 0);
  }, 0);
  
  console.log("Ключи:", keysArr);
  console.log("Значения:", valuesArr);
  console.log("Сумма элементов:", sum);