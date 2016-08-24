var port = process.argv[2],
    express = require('express'),
    through = require('through2'),
    app = express();

app.get("/", (req,res)=>{
    // console.log(req);
    req.pipe( through(function( buf,encoding,next ){
        // console.log(buf.toString());
        this.push( buf.toString().toUpperCase() );
        next();
    }, done=>{ done(); }) ).pipe(res);

});

app.listen( Number( port || 3000 ) );
