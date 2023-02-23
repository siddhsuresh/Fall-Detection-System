const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const auth = require('./router/auth')
const AuthMiddleware = require('./blitz-server')
const io = new Server(server);

app.use(express.json());

app.set('view engine', 'ejs');

app.use(async (req, res, next) => {
    await AuthMiddleware(req, res, next)
})

app.get('/', (req, res) => {
    const cookie = req.headers.cookie.split(';').reduce((acc, c) => {
        const [key, v] = c.trim().split('=').map(decodeURIComponent)
        try {
            return Object.assign(acc, { [key]: JSON.parse(v) })
        } catch (e) {
            return Object.assign(acc, { [key]: v })
        }
    }, {})
    const csrfToken = cookie['web-cookie-prefix_sAntiCsrfToken']
    res.render('./index', { user: JSON.stringify(res.blitzCtx.session.$publicData), csrfToken });
});

app.use('/api/auth', auth)

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});