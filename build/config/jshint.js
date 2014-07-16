module.exports = {
  options: {
    // pretty console output
    //reporter: require('jshint-stylish'),
    // allow assignment inside conditionals
    boss: true,
    // don't use underscores in identifiers
    // camelcase: true,
    // require curlies even for single-statement blocks
    curly: true,
    // require ===
    eqeqeq: true,
    // allow `== null` for null/undefined check
    eqnull: true,
    // no var statements inside blocks
    funcscope: true,
    // 2-space indentation
    indent: 2,
    // don't require semis in single-line functions
    lastsemic: true,
    // max of 80 chars per line
    maxlen: 80,
    // single quotes
    quotmark: 'single',
    // no trailing spaces
    trailing: true,
    // allow assignment expressions inside ternary ops
    '-W030': true
  },
  build: {
    files: {
      src: ['build/**/*.js']
    },
    options: {
      // allow Node.js globals
      node: true
    }
  },
  gruntfile: {
    files: {
      src: ['Gruntfile.js']
    },
    options: {
      // allow Node.js globals
      node: true,
      // don't allow use of undefined vars
      undef: true
    }
  },
  test: {
    files: {
      src: [
        'test/fixtures/**/*.js',
        'test/tests/**/*.js'
      ]
    },
    options: {
      // allow browser globals
      browser: true,
      // don't allow use of undefined vars
      undef: true,
      // more allowed globals
      globals: {
        Ash: true,
        getFixture: true,
        basepath: true,
        describe: true,
        it: true,
        assert: true,
        expect: true,
        before: true,
        beforeEach: true,
        after: true,
        afterEach: true,
        specify: true,
        sinon: true,
        console: true
      }
    }
  },
  src: {
    files: {
      src: ['src/**/*.js']
    },
    options: {
      // max of 80 chars per line
      maxlen: 80
    }
  },
  // we allow the use of "undefined globals" in /src linting so that
  // _type, _each, .etc will work -- so the check on /dist/Ash.js
  // is to make sure that once it's all wrapped in a closure, we
  // didn't leak any variables or try to use anything that's undefined
  dist: {
    files: {
      src: ['dist/app.js']
    },
    options: {
      // allow browser globals
      browser: true,
      // don't allow use of undefined vars
      undef: true,
      // don't allow unused vars
      unused: 'vars',
      // allow function hoisting
      '-W003': true,
      // use of `this` in strict mode on functions that aren't methods
      '-W040': true,
      // more allowed globals
      globals: {
        Ash: true,
        Symbol: true,
        setImmediate: true
      }
    }
  }
};