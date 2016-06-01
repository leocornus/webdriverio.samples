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
    it('Bootstrap h1 font: size 36px, weight 500, color #333333', 
       function(done) {

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
                expect(fontSize[i].property).toBe('font-size');
                var theSize = fontSize[i].value;
                if(i == 0) {
                    expect(theSize).toBe('60px');
                } else {
                    expect(theSize).toBe('36px');
                }
            }
        })
        .getCssProperty('h1', 'font-weight').then(function(fontWeight) {
            expect(fontWeight).toEqual(jasmine.any(Array));
            //console.log(fontWeight);
            for(i = 0; i < fontWeight.length; i ++) {
                expect(fontWeight[i].property).toBe('font-weight');
                expect(fontWeight[i].value).toBe(500);
            }
        })
        .getCssProperty('h1', 'color').then(function(colors) {
            expect(colors).toEqual(jasmine.any(Array));
            //console.log(colors);
            for(i = 0; i < colors.length; i ++) {
                //console.log(colors[i]);
                expect(colors[i].property).toBe('color');
                var theColor = colors[i].parsed.hex;
                if(i == 0) {
                    expect(theColor).toBe('#ffffff');
                } else {
                    expect(theColor).toBe('#333333');
                }
            }
        })
        .call(done);
    });
});

