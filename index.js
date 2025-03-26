import http from 'node:http';
import fs from 'node:fs';
import url from 'node:url';

const server = http.createServer((req, res) => {
    const getUrl = url.parse(req.url, true);
    const pathName = getUrl.pathname;

    if (pathName === '/') {
        fs.readFile('index.html', (err, data) => {
            if(err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                return res.end('Error Loading File');
            };
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end(data)
        });
    } else if (pathName === '/about') {
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                return res.end('Error Loading File');
            };
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end(data);
        });
    } else if (pathName === "/contact-me") {
        fs.readFile('./contact-me.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                return res.end('Error Loading File');
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end(data);
        });
    } else {
        fs.readFile('404.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                return res.end('Error Loading File')
            };
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end(data);
        });
    };
});

server.listen(8080);
