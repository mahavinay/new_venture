describe('Multiple Locators',function() {
	
	it('Repeater',function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model("first")).sendKeys("20");
		element(by.model('operator')).element(by.css('option:nth-child(2)')).click();
		element(by.model("second")).sendKeys("2");
		element(by.id("gobutton")).click();
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
		console.log(text);
			
		})
		})
	
})	
	
	
	