/*
    Could do the static keyword is available for us-in js
    could simute a static variable like this.
*/

let autoIncreennt = (function() {
    let number = 0

    return function () {
        number++
        return number
        }
})()


