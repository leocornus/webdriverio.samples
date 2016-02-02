var gulp = require('gulp');
// jamine runner.
var jasmine = require('gulp-jasmine');

gulp.task('hello', function() {
  // place code for your default task here
  console.log('Hello Gulp World!');
});

// testing the webdriverio and selenium standalone
var webdirverSingle = require('gulp-webdriver');

// using jasmine as the test framework.
gulp.task('test:webdriver:jasmine', ['selenium'], function() {
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

var selenium = require('selenium-standalone');
gulp.task('selenium', function (done) {
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
