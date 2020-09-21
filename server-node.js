const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;
const url = require('url');
const fs = require('fs');
const server = http.createServer((req, res) => {
    let path = url.parse(req.url).pathname;


    if(path === '/') {

        fs.readFile(__dirname + '/index.html', (err, data) => {

            if (err) console.log(err);
            res.statusCode = 200; //
            res.setHeader('Content-type', 'text/html; charset=utf-8"');
            res.end(data);
        });
    }else if ( path === '/public/dist/bundle.js' ) {

            fs.readFile( __dirname + '/public/dist/bundle.js', (err, data) => {
                if (err) console.log(err);
                res.statusCode = 200;
                res.end(data);
            } );
    }else {

        fs.readFile(__dirname + '/error.html', (err, data) => {
            if (err) console.log(err);
            res.statusCode = 404;
            res.setHeader('Content-type', 'text/html; charset=utf-8"');
            res.end(data);
        });
    }
});


/**
 * Démarrage du serveur et écoute des connexions sur le port 3000
 */
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
    console.log(`Press CTRL + C to stop\n`)
})