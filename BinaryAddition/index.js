function arr2bin(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            count += arr[i]
        }
    }
    let binary = count.toString(2)
    return binary
}

arr2bin([15, true])
arr2bin([null])
arr2bin([1,10,100,1000])
arr2bin([1,2,3,4,5])