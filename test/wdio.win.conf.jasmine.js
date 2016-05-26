exports.config = {

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    updateJob: false, // will get overwritten

    specs: [
        './test/wdio/webdriver_test.jasmine.js',
        './test/bootstrap/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],

    capabilities: [{
        browserName: 'firefox',
        name: 'Firefox'
    },
    {
        browserName: 'internet explorer',
        name: 'Iternet Explorer 11'
    }],
    // Options: verbose, silent, command, data, result
    // default level is silent
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './',

    baseUrl: 'http://webdriverjs.christian-bromann.com',

    waitforTimeout: 12345,
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
