let sum = function(array) {
    let counter = 0
    for (let i=0; i < array.length; i++) {
        counter += array[i]
    }
    return counter
}
console.log(sum[1, 2, 3, 4, 5])