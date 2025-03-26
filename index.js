import http from 'node:http';
import fs from 'node:fs';


const server = http.createServer((req, res) => {

    const myURL = new URL(req.url, 'http://localhost:8080/')
    const pathName = myURL.pathname;
    let fileName = '.' + pathName + '.html';

    if (pathName === '/') fileName = './index.html';

    fs.readFile(fileName, (err, data) => {
        if (err) {
            fs.readFile('./404.html', (err404, data404) => {
                res.writeHead(404, {'Content-Type': 'text/html'});
                if(err404) {
                    return res.end('Error 404, This localhost page cant be found')
                }
                return res.end(data404);
            })
            return;
        }
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        return res.end(data);
    });

});

server.listen(8080);
