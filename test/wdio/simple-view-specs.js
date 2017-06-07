describe('specs to view a page', function() {

    it('Simply visit a page', function(done) {

        var theUrl = 'http://www.google.com';

        // pause is in ms.
        browser.url(theUrl).pause(1000);
    });

    it('Simply visit a page synchronously!', function(done) {

        var theUrl = 'http://www.google.com';
        var viewPage = function(howmany, i, callback) {

            // pause is in ms.
            browser.url(theUrl).pause(2000);
            browser.call(callback);
        };

        // set how many time you ant to visit this page.
        var howmany = 10;
	if (howmany > 0) {
            var loop = function(howmany, i, viewPage, loopDone) {
                viewPage(howmany, i, function() {
		    if(++i < howmany) {
			setTimeout(function() {
			    loop(howmany, i, viewPage, loopDone);
			}, 0);
	            } else {
			browser.call(done);
	            }
	        });
	    };
	    loop(howmany, 0, viewPage, function(){});
	} else {
	    borwser.call(done);
	}
    });
});
