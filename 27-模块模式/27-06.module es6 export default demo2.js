// 3.js
export default function() {  // 写法一
    console.log('foo')
}

function foo() {              // 写法二
    console.log('foo')
}

export default foo

function foo(x, y) {          // 写法三
    console.log('foo')
}

export { add as default }

export default 42             // 写法四
