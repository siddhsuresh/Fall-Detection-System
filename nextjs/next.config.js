// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = withBlitz(config)
