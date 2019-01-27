describe('Elements',function() {
	
	function Add(x,y){
		element(by.model("first")).sendKeys(x);
		element(by.model("second")).sendKeys(y);
		element(by.id("gobutton")).click();
				
	}
	
	it('Locators',function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		Add(5,5);
		Add(8,6);
		Add(4,4);
		Add(7,2);
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
		}		
		)
		
		
		})
	
})	
	
	
	