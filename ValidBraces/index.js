function validBraces(braces) {
    let stack = [];
    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
            stack.push(braces[i])
        } else if (braces[i] === ")" && stack[stack.length - 1] === "(") {
            stack.pop()
        } else if (braces[i] === "}" && stack[stack.length - 1] === "{") {
            stack.pop()
        } else if (braces[i] === "]" && stack[stack.length - 1] === "[") {
            stack.pop()
        } else {
            return false
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = validBraces;