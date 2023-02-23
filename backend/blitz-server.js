const { AuthServerPlugin, PrismaStorage, simpleRolesIsAuthorized } = require("@blitzjs/auth")
const db = require('./db')

const AuthMiddleware = AuthServerPlugin({
    cookiePrefix: "web-cookie-prefix",
    storage: PrismaStorage(db),
    isAuthorized: simpleRolesIsAuthorized,
}).requestMiddlewares[0]

module.exports = AuthMiddleware