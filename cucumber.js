module.exports = {
  default: {
    require: ['support/**/*.js', 'step-definitions/**/*.js'],
    format: ['progress-bar', 'html:cucumber-report/index.html'],
    paths: ['features/**/*.feature'],
    timeout: 90000,
  },
};
