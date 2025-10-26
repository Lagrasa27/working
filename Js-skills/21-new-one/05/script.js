const myCar = (first,second,third) => {
   if (first === 1999) {
       return second + third
   } else if (first === 2999) {
       return second * third
   } else {
       return 'enter a valid operation'
   }
};

let result1 =  myCar (1999, 10, 15);

console.log(result1);

let result2 = myCar ('here', 20, 50);

console.log(result2);