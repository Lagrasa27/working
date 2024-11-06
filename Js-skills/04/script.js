let myGuide = name =>  "hi " + name;


console.log(myGuide( 'jorge'))


let frijol = (beans,seads,callback) => {
    callback(beans+seads)
}

let mike = (sum) => {
    console.log(sum)
}

frijol(10,20, mike)

