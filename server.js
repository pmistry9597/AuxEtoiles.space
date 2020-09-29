const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: false });
const handle = app.getRequestHandler();

/*const httpsOptions = {
  key: fs.readFileSync('./certificates/localhost.key'),
  cert: fs.readFileSync('./certificates/localhost.crt')
};*/

const port = 9080;

app.prepare().then(() => {
  createServer( (req, res) => {
    const parsedUrl = parse(req.url, true);

    handle(req, res, parsedUrl);
    
  }).listen(port, err => {
    if (err) throw err;

    console.log('> Ready on https://localhost:' + port);
  });
});
