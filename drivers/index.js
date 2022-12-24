module.exports = (configuration) => require(`./${configuration.driver}`)(configuration)
