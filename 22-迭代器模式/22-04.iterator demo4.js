var bar = {
    a: 1,
    [Symbol.iterator]: function() {
        var valArr = [
            { value: 'hello', done: false },
            { value: 'world', done: false },
            { value: '!', done: false },
            { value: undefined, done: true }
        ]
        return {
            next: function() {
                return valArr.shift()
            }
        }
    }
}

for (var key of bar) {
    console.log(key)
}

// 输出： hello
// 输出： world
// 输出： !
