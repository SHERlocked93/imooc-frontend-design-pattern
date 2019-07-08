// 这是一个装饰器工厂——有助于将用户参数传给装饰器声明
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() { }
}

// f(): evaluated
// g(): evaluated
// g(): called
// f(): called
