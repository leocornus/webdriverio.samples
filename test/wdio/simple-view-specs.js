describe('specs to view a page', function() {

    it('Simply visit a page', function(done) {

        var theUrl = 'http://www.google.com';

        // pause is in ms.
        browser.url(theUrl).pause(1000);
    });
});
