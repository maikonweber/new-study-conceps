const autoIncrementer = (function() {
    let value = 0;

    return {
        incre() {
            value++
        }, 
        get value() {
            return value
        }
    };
}());


