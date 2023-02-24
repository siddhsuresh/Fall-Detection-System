const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const auth = require('./router/auth')
const AuthMiddleware = require('./blitz-server')
const io = new Server(server);
const db = require('./db')

app.use(express.json());
app.set('view engine', 'ejs');

app.use(async (req, res, next) => {
    await AuthMiddleware(req, res, next)
})

app.use(express.static('public'));

const csrfToken = (req) => {
    const cookie = req.headers.cookie.split(';').reduce((acc, c) => {
        const [key, v] = c.trim().split('=').map(decodeURIComponent)
        try {
            return Object.assign(acc, { [key]: JSON.parse(v) })
        } catch (e) {
            return Object.assign(acc, { [key]: v })
        }
    }, {})
    return cookie['web-cookie-prefix_sAntiCsrfToken']
}

app.get('/', (req, res) => {
    res.render('./index', { user: res.blitzCtx.session.$publicData, csrfToken: csrfToken(req) });
});
 
app.get('/login', (req, res) => {
    const user = res.blitzCtx.session.$publicData
    if (user.userId) {
        res.redirect('/dashboard')
    } else {
        res.render('./login', { user: res.blitzCtx.session.$publicData, csrfToken: csrfToken(req) });
    }
});

app.get('/dashboard', async (req, res) => {
    const user = res.blitzCtx.session.$publicData
    if (!user.userId) {
        res.redirect('/login')
    } else {
        const _user = await db.user.findFirst({
            where: {
                id: user.userId
            }
        })
        console.log(_user)
        res.render('./dashboard', { user: user, cuser: _user, csrfToken: csrfToken(req) });
    }
});

app.use('/api/auth', auth)

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});