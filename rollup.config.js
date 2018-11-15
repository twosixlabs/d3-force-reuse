const definition = require("./package.json");

export default {
  input: "index",
  output: {
    extend: true,
    file: `build/${definition.name}.js`,
    format: "umd",
    name: "d3"
  }
};
