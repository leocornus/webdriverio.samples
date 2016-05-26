describe('Check typography specs for Bootstrap framework', function() {

    /**
     * load the base url for each test case.
     */
    beforeEach(function(done) {

        //console.log('loading the css page...');
        // load the CSS page from bootstrap
        browser.url('http://getbootstrap.com/css/');
        // pause 1 second to allow the page to load.
        //browser.pause(1000);
        browser.call(done);
    });

    /**
     * check the heading size the width.
     */
    it('Bootstrap heading specs', function(done) {

        browser.pause(2000)
        .isExisting('h1').then(function(hasTag) {
            // check what is this?
            //console.log(this);
            // this should be a state object.
            //expect(this['value']).toBe(hasTag);
            //console.log(hasTag);
            expect(hasTag).toBe(true)
            if(hasTag) {
                // do nothing for now.
            }
        })
        .getCssProperty('h1', 'font-size').then(function(fontSize) {
            // this methods will return all h1 element's font-size
            // properties in an Array.
            expect(fontSize).toEqual(jasmine.any(Array));
            //console.log(fontSize);
            for(i=0; i < fontSize.length; i++) {
                var theSize = fontSize[i].value;
                if(i == 0) {
                    expect(theSize).toBe('60px');
                } else {
                    expect(theSize).toBe('36px');
                }
            }
        })
        .call(done);
    });
});
