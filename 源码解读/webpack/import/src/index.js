import {a} from './a.js';


import('./b').then(function(value) {
    console.log(value);
    value.b();
}) 

a();

console.log('index.js')