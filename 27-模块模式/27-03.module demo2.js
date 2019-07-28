var myModule = (function() {
    var privateProp = ''
    var printProp = function() {
        console.log(privateProp)
    }
    
    function setProp(prop) {
        privateProp = prop
        printProp()
    }
    
    return {
        print: printProp,
        set: setProp
    }
})()


myModule.set('new prop')          // 输出：new prop
myModule.setProp()                // Uncaught TypeError: myModule.setProp is not a function
myModule.privateProp              // undefined

