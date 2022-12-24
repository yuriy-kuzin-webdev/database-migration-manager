const config = require("../configuration/config");
const drivers = require("../drivers");
const middlewares = require("../middlewares");

const run = async () => {
  const input = drivers(config.input);
  const outputList = config.outputs.map((output) => drivers(output));
  const middlewareList = config.middlewares.map((name) => middlewares(name));

  let data = await input.getData()

  middlewareList.forEach(middleware => {
    data = middleware(data)
  })
  
  outputList.forEach(output => output.sendData(data))
};

module.exports = {
  run,
};
