describe('Protractor Alert Steps',function() {
	
	it('Open a Angular js website alerts',function(){
		
		browser.waitForAngularEnabled(false);
		browser.get('https://qaclickacademy.com/practice.php');
		element(by.id("confirmbtn")).click();
						
		browser.switchTo().alert().accept().then(function()
		{
		browser.sleep(6000);		
		})
					
	});
	
	
	
	
	
});