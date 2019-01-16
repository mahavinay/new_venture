describe('Child Window Handling',function() {
	
	it('Open a Possee Website',function(){
		browser.get('https://www.posse.com/');
		element.all(by.css('span[class="location"]')).get(0).click().then(function(){
			browser.sleep(5000);
			browser.getTitle().then(function(title){
				console.log(title+=":  Title of the page before switch");
			})
		
		})
		
		element(by.css('a[ng-href*="Kinokuniya Bookstore"]')).click().then(function(){
			browser.sleep(10000);
			browser.getAllWindowHandles().then(function(handles){
			browser.switchTo().window(handles[1]);
			browser.getTitle().then(function(title){
				console.log(title+=":  Title of the page after switch");
			})
			
			browser.switchTo().window(handles[0]);
			browser.getTitle().then(function(title){
				console.log(title+=":  Title of the page back to parent");
			})
		})
	
		})
		
	})
	
})