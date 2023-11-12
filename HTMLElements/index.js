function HTMLElements(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "<" && str[i+1] !== "/") {
            const endIndex = str.indexOf(">", i)
            console.log(endIndex)
            stack.push(str.substring(i+1, endIndex))
            console.log(stack)
        }
    }
}

console.log(HTMLElements("<div>"));