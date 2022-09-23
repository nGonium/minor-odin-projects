// (int: range of numbers from 0, int: number of elements) => array of random numbers (unsorted)
function generateRandomArray(range, size) {
    let arr = []
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * range))
    }
    return arr
}

function mergesort(arr) {
    if (arr.length < 2) return arr
    const mid = Math.ceil(arr.length / 2)
    let left = mergesort(arr.slice(0, mid))
    let right = mergesort(arr.slice(mid))
    // Use named arrow function to help with debugging
    const merge = (left, right) => {
        let merged = []
        while(!(left.length === 0 || right.length === 0)) {
            merged.push(
                left[0] < right[0] ? 
                left.shift() : right.shift()
            )
        } 
        return merged.concat(left).concat(right)
    }
    return merge(left, right)

}

let arr = generateRandomArray(99, 8)
console.log(
    'from: ', arr, 
    '\nto: ', mergesort(arr));