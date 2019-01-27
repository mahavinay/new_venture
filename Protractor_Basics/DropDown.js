describe('Elements',function() {
	
	function Calc(x,y,z){
		console.log("Calculator function called")
		element(by.model("first")).sendKeys(x);
		element(by.model("second")).sendKeys(y);
		element.all(by.tagName("option")).each(function(item)
				{
					item.getAttribute("value").then(function(value)
					{
						if(value==z)
							{
							item.click()
							}
						//console.log("Value:",value);
					})
				})					
				
			
		element(by.id("gobutton")).click();
					
	}
	
	it('Locators',function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		Calc(5,5,"DIVISION");
		Calc(8,6,"MODULO");
		Calc(4,4,"SUBTRACTION");
		Calc(7,2,"MULTIPLICATION");
		Calc(100,100,"ADDITION");
		//count the rows
		element.all(by.repeater("result in memory")).count().then(function(text){
			console.log("count:",text);
		})
		
		//retrieve the values
		element.all(by.repeater("result in memory")).each(function(item)
				{
					item.element(by.css("td:nth-child(3)")).getText().then(function(text)
					{
						console.log("Value:",text);
					})
				})
	
		
		})
	
})	

	
	