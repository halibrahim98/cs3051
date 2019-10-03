//isEven predicate + filter

let isEven = function(n) {
    if(n%2) {
        return true
    }
    else {
        return false
    }
}
let i = 0
let even = []
let forEach = function(array, pred) {
    if (pred(array[i]) != true && i < array.length) {
        array.splice(i, 1)
        forEach(array[i+1])
    }

}

let lol = [1, 2, 3, 4, 5]
forEach(lol, isEven())
let printarr = function(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
printarr(lol)

//Countdown

let timer = function(num) {
    setTimeout(function() {
        if (num >= 0) {
            console.log(num)
            timer(num-1)
        }
    }, 1000)
}
timer(10)
