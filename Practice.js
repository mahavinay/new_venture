describe('demo project',function() {
	
	function selectItem(productName){
		element.all(by.tagName("app-card")).each(function(item){
			item.element(by.css("h4 a")).getText().then(function(text){
				if (text==productName)
					{
					item.element(by.css("button[class='btn btn-info']")).click();
					//browser.sleep(5000);
					}
			})
		})
	}
	it('Open a New browser',function(){
		browser.get('https://qaclickacademy.github.io/protocommerce/');
		element(by.name("name")).sendKeys("Lishan");
		element(by.css("input[name='email']")).sendKeys("lishan22@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password");
		element(by.css("input[id='exampleCheck1']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female"));
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.buttonText('Submit')).click().then(function(){
			element(by.css("div[class*='success']")).getText().then(function(text){
				console.log(text);
			})
			
		})
		
		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("L");
		element(by.css("[class='alert alert-danger']")).getText().then(function(text){
			console.log(text);
		})
		
		//No Error message
		element(by.css("input[name='email']")).clear();
		element(by.css("input[name='email']")).sendKeys("df");
		expect(element.all(by.css("input[name='email']")).count()).toEqual(1);/*.then(function(text){
			console.log("count:",text);
		})*/
		
		//Shopping Cart
		element(by.linkText("Shop")).click();
		selectItem("iphone X");
		selectItem("Nokia Edge");
		
		//Checkout
		element(by.partialLinkText("Checkout")).getText().then(function(text){
			var resText=text.split("(");
			expect(resText[1].trim().charAt(0)).toBe("2");
			
		})
		
		element(by.css("li[class='nav-item active']")).click();
		
		//element.all(by.tagName("tr")).each(function(){
			
		
			element.all(element(by.css("td:nth-child(3)"))).each(function(){
				
			
				element(by.tagName("strong")).getText().then(function(amt){
			//console.log(item);
			
				//var totalAmount=0;
				//var amount=amt.trim();
				console.log(amt);
				
			})
				//totalAmount=totalAmount+Number((amt.substring(2,amt.length)));
			//	console.log(totalAmount);	
		})
		//console.log(totalAmount);
		
		//})
		
		
		
	
		
	})
	
	
	
	
	
})