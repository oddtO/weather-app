// babel.config.js

module.exports = (api) => {
  api.cache.forever();
  // @babel\/[^"]*
  return {
    plugins: [],
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          targets: "defaults",
        },
      ],
    ],
  };
};
