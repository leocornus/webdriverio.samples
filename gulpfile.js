var gulp = require('gulp-help')(require('gulp'));
// jamine runner.
var jasmine = require('gulp-jasmine');

// the default task.
gulp.task('default', ['help']);

gulp.task('hello', 'Hello Gulp World!', function() {
  // place code for your default task here
  console.log('Hello Gulp World!');
});

// testing the webdriverio and selenium standalone
var webdirverSingle = require('gulp-webdriver');

// using jasmine as the test framework.
gulp.task('test:webdriver:jasmine', 
          'Execute all test cases',
          ['selenium'], function() {
    return gulp.src('test/wdio.conf.jasmine.js').
    pipe(webdirverSingle({
        //logLevel: 'verbose',
        //logLevel: 'command',
        logLevel: 'silent',
        waitforTimeout: 12345,
        // only for testing purposes
        cucumberOpts: {
            require: 'nothing'
        },
        reporter: 'spec'
    })).once('end', function() {
        // shutdown the selenium standalone server
        selenium.child.kill();
    });
});

/**
 * create separate task for testing on windows.
 * Windows environment need some special steps...
 */
gulp.task('wintest:webdriver:jasmine', 
          'Execute all test cases on Windows',
          ['selenium-skip-install'], function() {

    return gulp.src('test/wdio.win.conf.jasmine.js').

    pipe(webdirverSingle({
        // we could overwrite the options set in the config file.
        // or add new options here.
        cucumberOpts: {
            require: 'nothing'
        },
        reporter: 'spec'
    })).once('end', function() {
        // shutdown the selenium standalone server
        selenium.child.kill();
    });
});

var selenium = require('selenium-standalone');

gulp.task('selenium', 'Install and start selenium server', 
          function (done) {
    selenium.install({
        logger: function (message) { 
            console.log(message);
        }
    }, function (err) {
        if (err) return done(err);

        selenium.start({
           spawnOptions: {
               stdio: 'inherit'
           }
        }, function (err, child) {
          if (err) return done(err);

          selenium.child = child;
          done();
        });
    });
});

/**
 * the task to start selenium directly.
 * in some internal network behind firewall, it is hard to automatically
 * donwload selenium and its drivers. 
 * User need manually download everything and put to the proper folder.
 * This task will load selenium once the manual steps are done.
 */
gulp.task('selenium-skip-install', 'Start selenium server',
          function (done) {
    selenium.start({
       spawnOptions: {
           // set stdio to inherit to show details logging message from
           // selenium server.
           //stdio: 'inherit'
       }
    }, function (err, child) {
      if (err) return done(err);

      selenium.child = child;
      done();
    });
});
