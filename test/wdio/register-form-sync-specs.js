describe('Check register form synchronous', function() {

    it('click submit button', function(done) {

	jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000000;

        var formUrl = "http://url.to.form/form";
        var clickForm = function(howmany, i, callback) {

	    var prefix = Math.random().toString();
	    var title = 'some title ' + prefix;
            browser
            .url(formUrl)
            .pause(100)
            .setValue('#field_i452qz', title)
	    .pause(100)
            .setValue('#field_ozg0m', 'some@email.com')
	    .pause(100)
            //.selectByIndex('#field_yxwvpq', 2)
            .click('input[type="submit"]')
            // wait for visibility
            //.waitForVisibile('#frm_message', 5000);
	    .pause(3000)
            .call(callback);
        };

	var howmany = 3;
	if (howmany > 0) {
            var loop = function(howmany, i, clickForm, loopDone) {
                clickForm(howmany, i, function() {
		    if(++i < howmany) {
			setTimeout(function() {
			    loop(howmany, i, clickForm, loopDone);
			}, 0);
	            } else {
			browser.call(done);
	            }
	        });
	    };
	    loop(howmany, 0, clickForm, function(){});
	} else {
	    borwser.call(done);
	}
    }, 10000000);
});
