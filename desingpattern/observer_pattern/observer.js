const http = require('https');

/* 
    This model with HTTPS server;
*/

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain');
    res.end('Your own server here');
});

server.on('erros', err => {
    console.log('Erros:: ', err)
})

server.listen(3000, '127.0.0.1', () => {
    console.log('Server up and Running')
})


/* 
    Your server object wouuld act as the observable.
    - If you where to be considering using this pattern in NodeJs
    please look at the EventEmitter object first, as it is NodeJs own
    implementation of this pattern, and might save you some time
*/


/* 
    
*/


class Observable {
    constructor() {
        this.observers = {}
    }

    on(input, observable) {
        if(!this.observers[input]) this.observers[input] = []
        this.observers[input].push(this.observers)
    }

    triggerInput(input, params) {
        this.observers[input].forEach(e => {
            e.apply(null, params)
        });
    }
}

