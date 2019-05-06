/**
 * 模块: ES6 相关知识点
 * 作者: SHERlocked93
 * 功能: 类的基本用法
 */

class Foo {
    constructor() {
        this.kind = 'foo'
    }
    
    static staticMethod() {
        console.log('静态方法')
    }
    
    doThis() {
        console.log(`实例方法 kind:${ this.kind }`)
    }
}

class Bar extends Foo {
    constructor() {
        super()
        this.type = 'bar'
    }
    
    doThat() {
        console.log(`实例方法 type:${ this.type } kind:${ this.kind }`)
    }
}

const bar = new Bar()
bar.doThat()   // 实例方法 type:bar kind:foo
