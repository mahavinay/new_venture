describe('Elements',function() {
	var obj= require("./jsObjectDemo.js");
	var using= require('jasmine-data-provider');
	var d= require("./data.js");
	
	beforeEach(function() {
		obj.getURL();
	  });

	using(d.datadrive, function(data, description){
		it('Locators',function(){
		obj.getURL();
		
			obj.firstInput.sendKeys(data.firstInput);
			obj.secondInput.sendKeys(data.secondInput);
			obj.goButton.click();
			expect((obj.result).getText()).toBe(data.result);
				obj.result.getText().then(function(text){
				console.log(text);
				})	
	
		
		})
	});
	
		afterEach(function() {
		    console.log("Test Completed");
		  });
	
})	
	
	
	