const jsonServer = require('json-server')
const path = require('path');
const http = require('http');


const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});


server.use(router);

// запуск сервера
const PORT = 8888;

const httpServer = http.createServer(server);

httpServer.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
});