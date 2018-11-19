const definition = require("./package.json");

export default [
  {
    input: "index",
    external: Object.keys(definition.dependencies || {}).filter(key => /^d3-/.test(key)),
    output: {
      indent: false,
      extend: true,
      file: `build/${definition.name}.js`,
      format: "umd",
      name: "d3",
      banner: `// Copyright ${(new Date).getFullYear()} Two Six Labs, LLC. v${definition.version} ${definition.name} ${definition.homepage}`,
      globals: Object.assign({}, ...Object.keys(definition.dependencies || {}).filter(key => /^d3-/.test(key)).map(key => ({[key]: "d3"})))
    },
    plugins: []
  }
];