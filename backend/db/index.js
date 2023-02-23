const { PrismaClient } = require("@prisma/client")
const { enhancePrisma } = require("blitz")

const EnhancedPrisma = enhancePrisma(PrismaClient)

const db = new EnhancedPrisma()
module.exports = db