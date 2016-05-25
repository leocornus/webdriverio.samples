describe('gulp-webdriver test simple specs', function () {

    it('should have right options', function() {

        console.log(browser.options);

        expect(browser.options.waitforTimeout).toBe(12345);
        expect(browser.options.coloredLogs).toBe(true);
        expect(browser.options.updateJob).toBe(false);
	// default log level is silent.
        //expect(browser.options.logLevel).toBe('silent');
        expect(browser.options.cucumberOpts.require[0]).
            toBe('nothing');

        return browser;
    });

    it('checks if title contains the search query', function() {

	// option the url.
        browser.url('/');

	// verify the page title.
        browser.getTitle(function(err,title) {
            expect(title).toBe('WebdriverJS Testpage');
        });

	// return to remain the chain.
        return browser;
    });

    it('check the title again, using call(done)', function(done) {
	
	// option the url.
        browser.url('/');

	// verify the page title.
        browser.getTitle(function(err,title) {
            expect(title).toBe('WebdriverJS Testpage');
        });

	// call done to finish.
        browser.call(done);
    });
});
