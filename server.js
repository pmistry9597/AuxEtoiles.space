const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: false });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./ssl/privkey.pem'),
  cert: fs.readFileSync('./ssl/fullchain.pem')
};

const sport = 8443;

const http = require('http');

const redir_port = 8080;
const redir_srv = http.createServer( (req, res) => {
	res.writeHead(301, { 'Location' : 'https://auxetoiles.space' });
	res.end();
} );
redir_srv.listen(redir_port);

app.prepare().then(() => {
  createServer( httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);

    handle(req, res, parsedUrl);
    
  }).listen(sport, err => {
    if (err) throw err;

    console.log('> Ready on https://localhost:' + sport);
  });
});
