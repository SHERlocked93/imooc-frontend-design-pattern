class Greeter {
    greeting: string;
    
    constructor(message: string) {
        this.greeting = message;
    }
    
    greet() {
        return "Hello, " + this.greeting;
    }
}

for (let key in new Greeter('Jim')) {
    console.log(key);
}
// 输出： greeting  greet
