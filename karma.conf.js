// Karma configuration
module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    reporters: ["progress", "kjhtml", "coverage"],

    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      jasmine: {},
      clearContext: false,
    },

    jasmineHtmlReporter: {
      suppressAll: true,
    },

    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/angry-task"),
      subdir: ".",
      reporters: [
        { type: "html" },
        { type: "text-summary" },
        { type: "lcovonly" },
      ],
      // check: {
      //   global: {
      //     statements: 80,
      //     branches: 80,
      //     functions: 80,
      //     lines: 80,
      //   },
      // },
    },
    browsers: ["Chrome"],
    restartOnFileChange: true,
  });
};
