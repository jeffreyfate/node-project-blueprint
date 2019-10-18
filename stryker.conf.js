module.exports = function(config) {
  config.set({
    mutate: [
      'src/**/**.js',
      '!src/index.js',
    ],
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress", "dashboard"],
    testRunner: "command",
    transpilers: [],
    coverageAnalysis: "off",
  });
};
