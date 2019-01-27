describe('Protractor Frame Steps',function() {
	
	it('Open a practice website to handle frames',function(){
		
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();
		browser.get('https://qaclickacademy.com');
		//browser.sleep(20000);
		//browser.switchTo().frame("sumome-jquery-iframe");
		//element(by.css("div[class='sumome-react-wysiwyg-move-handle']")).click();
		element(by.css('a[href="practice.php"]')).click();
		browser.sleep(5000);
		browser.switchTo().frame("courses-iframe");
		browser.sleep(5000);
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			console.log(text);
		})
			
	})
	
	
	
	
	
})