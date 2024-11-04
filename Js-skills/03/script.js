function name (callback) {
    console.log(callback);
}

function first (mario) {
    mario('nice day');
}

first(name);


function adding (a, b, callback1) {
    callback1(a, b);
}

function fraction( sum) {
    console.log(sum);
}

adding( 2, 3, fraction)

function makeItWorth (anything){
    console.log(anything)
}

function printName(name,callback){
   callback('hello ' + name)
}

printName('jorge',makeItWorth)

