describe('Check register form', function() {                          
                                                                      
    /**                                                               
     * load the base url for each test case.                          
     */                                                               
    beforeEach(function() {
                                                                      
    });

    it('Has submit button', function(done) {

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000000;

        var formUrl = 'http://form.url.com/form';
        //console.log('loading the css page...');
        // load the CSS page from bootstrap
        browser.url(formUrl);
        // pause 1 second to allow the page to load.
        //browser.pause(1000);

        //browser.pause(2000);
        var hasSubmit = browser.isExisting('input[type="submit"]');
        expect(hasSubmit).toBe(true);
        //browser.pause(1000);
        //browser.call(done);
    //}); 

    //it('click submit button', function(done) {

        browser.pause(1000);
        browser.setValue('#field_i452qz', 'some one');
        browser.setValue('#field_ozg0m', 'some@email.com');
        //browser.selectByIndex('#field_yxwvpq', 2);
        browser.pause(1000);
        browser.click('input[type="submit"]');
        browser.pause(2000);
        browser.call(done);
    }); 
}); 
