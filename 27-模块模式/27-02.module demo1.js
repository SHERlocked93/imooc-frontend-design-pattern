var myModule = (function() {
    var privateProp = ''      	// 私有变量
    var privateMethod = function() { // 私有方法
        console.log(privateProp)
    }
    
    return {
        publicProp: 'foo',              // 公有变量
        publicMethod: function(prop) {  // 共有方法
            privateProp = prop
            privateMethod()
        }
    }
})()


myModule.publicMethod('new prop') // 输出：new prop
myModule.privateProp              // Uncaught TypeError: myModule.privateMethod is not a function
myModule.privateProp              // undefined
