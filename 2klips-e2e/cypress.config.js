const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://2klips.com',
    chromeWebSecurity: false,
  },
})
