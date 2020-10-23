module.exports = function check(str, bracketsConfig) {
    let brackets = Object.fromEntries(bracketsConfig)
    let stack = []

    for (let item of str) {
        let isSame = item === brackets[item]
        if(isSame) {
            if(stack.includes(brackets[item] + 'c')) {
                if (stack.pop() !== item + 'c') {
                    return false;
                }
            } else stack.push(brackets[item] + 'c')
        } else if (brackets[item]) {
            stack.push(brackets[item])
        } else if (stack.pop() !== item) {
            return false;
        }
    }
    return stack.length === 0
}
