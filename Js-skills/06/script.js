




 function printName (name,callback){
    callback('hello ' + name)
 }

 printName('jorge', function (ken){
     console.log(ken)
 });

let printNombre = name1 => {
    console.log (name1 + ' ken');
}
printNombre('jorge');

let printHi = (name2) =>  "hi " + name2;
console.log(printHi('ken'));


let mike = function (name3, lastname) {
    console.log(`'hello' ${name3} 'I hope you are doing well' ${lastname}'`);
}
mike('ken', 'marcus');


let firstArray = ['a', 'b', 'c', 'd','e','f'];
console.log(firstArray [2]);

const anotherArray = [
    [1,2,3,4,5,6,7,8,9,10],
    [11,12,13,14,15,16,17,18,19,20],
    [21,22,23,24,25,26,27,28,29,30]
]

 console.log(anotherArray [0][3]);
 console.log(anotherArray [1][3]);
 console.log(anotherArray [2][4]);