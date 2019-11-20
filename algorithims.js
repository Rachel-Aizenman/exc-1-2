// EXERCISE 1
const printStars = function (num) {
    let string = ''
    for (i = 0; i < num; i++) {
        string += '*'
        console.log(string)
    }
}

printStars(5)
// EXERCISE 2
const printBackwardsStars = function (num) {
let string = ''
for (i = 0; i < num; i++) {
     string += '*'}
for (i = 0; i < num; i++) {
    console.log(string)
    string = string.slice(0, -1)
    
}
}

printBackwardsStars(5)