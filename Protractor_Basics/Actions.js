describe('Action Demo',function() {
	
	it('Open a Jetblue Website',function(){
		browser.get('https://www.upwork.com/');
		//element(by.model("userInputQuery")).sendkeys("river");
		//browser.actions().mouseMove(element(by.model("vm.query")).sendKeys("Testing")).perform();
		/*browser.actions().mouseMove(element(by.css("input[data-qa='ee-input']")).sendKeys("Testing")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();//.then(function(){
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(5000);
		
		})
		//expect(element.all(by.css("div[ng-repeat='el in vm.elems track by $index']")).count()).toEqual(10);*/
		expect(element.all(by.css("div[data-qa=category]")).count()).toEqual(8);
		element.all(by.css('a[tracking-sublocation="category_tiles"]')).get(0).click().then(function(text){
			//console.log(text);
			browser.sleep(10000);
		})
	})
	
	
	
	
	
})