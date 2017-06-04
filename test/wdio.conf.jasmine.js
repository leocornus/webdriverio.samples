exports.config = {

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    updateJob: false, // will get overwritten

    specs: [
        //'./test/wdio/webdriver_test.jasmine.js',
        './test/wdio/register-form-specs.js'
        //'./test/bootstrap/*.js'
        //'./test/bootstrap/register-form-specs.js'
        //'./test/bootstrap/register-form-async-specs.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    capabilities: [{
        //browserName: 'firefox',
        browserName: 'chrome',
        name: 'gulp-webdriver tests'
    }],
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './',
    baseUrl: 'http://webdriverjs.christian-bromann.com',
    waitforTimeout: 10000,
    framework: 'jasmine', // gets overwritten in gruntfile
    jasmineNodeOpts: {
        expectationResultHandler: function(passed, assertion) {

            if(passed) {
                return;
            }
        }
    },
    reporter: 'dot',
    onPrepare: function() {
        // do something
    },
    before: function() {
        // do something
    },
    after: function() {
        // do something
    },
    onComplete: function() {
        // do something
    }
};
