function fibs(num) {
    let arr = [0, 1]
    for(let i = 2; i < num; i++) {
        current = arr[i - 1] + arr[i - 2]
        arr.push(current)
        
    }
    return arr
}

function fibsRec(num) {
    if(num === 1) return [0]
    if(num === 2) return fibsRec(num-1).concat([1]) 
    const arr = fibsRec(num - 1)
    return arr.concat([arr[arr.length-1] + arr[arr.length-2]])
}

console.log(fibsRec(8));