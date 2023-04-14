const prototype = {
    gretting : "hello",
    sayHello : function () {
        console.log(this.gretting + 'World!');
    },
    clone: function() {
    return Object.create(this);
    }
};


const newObj = prototype.clone();

newObj.gretting = "hola"
newObj.sayHello();