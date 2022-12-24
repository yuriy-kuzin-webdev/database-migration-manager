const config = require('../configuration/config')
const drivers = require('../drivers')
const middlewares = require('../middlewares')

const run = () => {
    const input = drivers(config.input)
    const outputList = config.outputs.map(output => drivers(output))
    const middlewareList = config.middlewares.map(name => middlewares(name))
}

module.exports = {
    run
}
