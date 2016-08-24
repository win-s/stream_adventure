var through = require("through2"),
    split = require("split");

var isUppercase = false;
process.stdin
    .pipe(split())
    .pipe( through( function(buffer,endcoding,next){
        this.push( ( isUppercase ? buffer.toString().toUpperCase() : buffer.toString().toLowerCase() ) + '\n');
        isUppercase = !isUppercase;
        next();
    }))
    .pipe(process.stdout);
