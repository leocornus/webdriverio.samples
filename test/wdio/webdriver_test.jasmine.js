describe('gulp-webdriver test simple specs', function () {

    it('should have right options', function(done) {

        //console.log(browser.options);

        expect(browser.options.waitforTimeout).toBe(12345);
        expect(browser.options.coloredLogs).toBe(true);
        expect(browser.options.updateJob).toBe(false);
	// default log level is silent.
        //expect(browser.options.logLevel).toBe('silent');
        expect(browser.options.cucumberOpts.require[0]).
            toBe('nothing');

        browser.call(done);
    });

    /**
     * using the done to make sure the asynchronous operations.
     */
    it('check the title again, using call(done)', function(done) {
	
	// option the url.
        browser.url('/')
	// wait until the page are fully loaded.
        .pause(2000)
	// verify the page title.
        .getTitle().then(function(title) {
            //console.log(title);
            expect(title).toBe('WebdriverJS Testpage');
        })
	// call done to finish.
        .call(done);
    });
});
