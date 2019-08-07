var foo = {
    a: 1
}

for (var key of foo) {
    console.log(key)
}

// 输出： Uncaught TypeError: foo is not iterable
