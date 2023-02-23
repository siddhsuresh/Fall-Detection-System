const express = require('express')
const router = express.Router()
const { SecurePassword } = require("@blitzjs/auth")
const db = require('../db')

router.post('/signup', async (req, res) => {
    const ctx = res.blitzCtx.session
    const input = req.body
    const hashedPassword = await SecurePassword.hash((input.password) || "test-password")
    const email = (input.email) || "test" + Math.random() + "@test.com"
    const user = await db.user.create({
        data: { email, hashedPassword, role: "user" },
        select: { id: true, name: true, email: true, role: true },
    })
    await ctx.$create({
        userId: user.id,
        role: user.role,
    })
    res.json(user)
})

router.post('/login', async (req, res) => {
    const ctx = res.blitzCtx.session
    const input = req.body
    const user = await db.user.findFirst({
        where: { email: input.email },
        select: { id: true, name: true, email: true, role: true, hashedPassword: true },
    })
    if (!user) {
        throw new Error("No user found")
    }
    const result = await SecurePassword.verify(user.hashedPassword, input.password)
    if (result === SecurePassword.VALID_NEEDS_REHASH) {
        const improvedHash = await SecurePassword.hash(password)
        await db.user.update({ where: { id: user.id }, data: { hashedPassword: improvedHash } })
    }
    const { hashedPassword, ...rest } = user
    await ctx.$create({
        userId: user.id,
        role: user.role,
    })
    res.json(rest)
})

router.post('/logout', async (req, res) => {
    const ctx = res.blitzCtx.session
    await ctx.$revoke()
    res.json({})
})

module.exports = router