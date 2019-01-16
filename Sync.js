describe('Synchronization Steps',function() {
	
	it('Open PluralSight browser',function(){
		browser.waitForAngularEnabled(false);
		browser.get('https://www.pluralsight.com');
		browser.driver.manage().window().maximize();
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(element(by.css('div[class="_1QMEkp0zgBS93G6kHWmAHJ"]')),20000));
		element(by.css('div[class="_1QMEkp0zgBS93G6kHWmAHJ"]')).getText().then(function(text){
			console.log(text);
		})
		
	
	
	
	
	})

})
