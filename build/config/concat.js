module.exports = {
  dist: {
    src: [
      'src/framework.js',
      'src/event.js',
      'src/model.js',
      'src/view.js'
    ],
    dest: 'dist/framework.js'
  },
  test: {
    src: [
      'test/shims/**/*.js',
      'test/fixtures/**/*.js',
      'test/tests/**/*.js'
    ],
    dest: 'test/test.js'
  }
};
