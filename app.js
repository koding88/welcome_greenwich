const http = require('http');
const fs = require('fs');
const port = process.env.port || 3001;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    if (req.url === '/') {
        fs.readFile("home.html", (err, data) => {
            if (err) {
                console.error(err)
            } else {
                res.writeHead(200);
                res.write(data);
                res.end();
            }
        })
    }
    else if (req.url === '/hanoi') {
        fs.readFile("hanoi.html", (err, data) => {
            if (err) {
                console.error(err)
            } else {
                res.writeHead(200);
                res.write(data);
                res.end();
            }
        })
    }
    else if (req.url === '/hcm') {
        fs.readFile("hcm.html", (err, data) => {
            if (err) {
                console.error(err)
            } else {
                res.writeHead(200);
                res.write(data);
                res.end();
            }
        })
    }
    else if (req.url === '/cantho') {
        fs.readFile("cantho.html", (err, data) => {
            if (err) {
                console.error(err)
            } else {
                res.writeHead(200);
                res.write(data);
                res.end();
            }
        })
    }
    else {
        fs.readFile("notfound.html", (err, data) => {
            if (err) {
                console.error(err)
            } else {
                res.writeHead(200);
                res.write(data);
                res.end();
            }
        })
    }
})
server.listen(port, () => {
    console.log("Server is running at http://localhost:" + port)
})