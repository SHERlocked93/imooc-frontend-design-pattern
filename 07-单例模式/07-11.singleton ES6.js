/**
 * 模块: 单例模式
 * 作者: SHERlocked93
 * 功能: ES6 方式
 */

/* Person 类 */
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

/* 单例模式的赋能方法 */
function Singleton(FuncClass) {
    let _instance
    return new Proxy(FuncClass, {
        construct(target, args) {
            return _instance || (_instance = Reflect.construct(FuncClass, args)) // 使用 new FuncClass(...args) 也可以
        }
    })
}

const PersonInstance = Singleton(Person)

const person1 = new PersonInstance('张小帅', 25)
const person2 = new PersonInstance('李小美', 23)

console.log(person1 === person2)	// true
