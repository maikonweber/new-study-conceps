/*
    Singleton : JS have Limitation and have some method to do.
    a static variable is IEF or class
 */

let instance = null


class SingletonClass{
    constructor() {
        this.value = Math.random(100);
    }

    printValue() {
        console.log(this.value);
    }

    static getInstance() {
        if(!instance) {
            instance = new SingletonClass();
        }
    return instance
    }


}


module.exports = SingletonClass