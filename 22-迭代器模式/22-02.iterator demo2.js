var forEach = function(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb.call(arr[i], arr[i], i, arr)
    }
}

forEach(['hello', 'world', '!'], function(currValue, idx, arr) {
    console.log('当前值 ' + currValue + '，索引为 ' + idx)
})

// 输出： 当前值 hello，索引为 0
// 输出： 当前值 world，索引为 1
// 输出： 当前值 !，索引为 2
