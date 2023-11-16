function HTMLElements(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "<" && str[i + 1] !== "/") {
            const endIndex = str.indexOf(">", i)
            console.log(endIndex)
            stack.push(str.substring(i + 1, endIndex))
            console.log(stack)
        }
        else if (str[i] === "<" && str[i + 1] === "/") {
            var endIdx = str.indexOf(">", i);
            var tag = str.substring(i + 2, endIdx);
            if (stack.length === 0 || stack[stack.length - 1] !== tag) {
                return stack.length === 0 ? 'true' : stack[stack.length - 1];
            }
            stack.pop();
        }
    }
    return stack.length === 0 ? 'true' : stack[stack.length - 1];
}
console.log(HTMLElements("<div>"));