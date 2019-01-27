describe('Hotel Booking',function() 
{
	
	var obj = require("./jsObjectHotelBooking.js");
	var using= require('jasmine-data-provider');
	var dt = require("./dataHotelBooking.js");
	var EC = protractor.ExpectedConditions;
	using(dt.datadriven, function(data, description)
	{
		it('Open Trivago Website',function()
		{
			browser.waitForAngularEnabled(false);
			obj.getURL();
			//browser.wait(EC.visibilityOf(obj.ziedealButton), 15000);
			browser.actions().mouseMove(obj.enterCity).sendKeys(data.city).perform().then(function()
			{
				browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
				browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
				{
					var EC = protractor.ExpectedConditions;
					browser.wait(EC.visibilityOf(obj.ziedealButton), 12000);
				})
					
					
				//Checkin
				browser.actions().mouseMove(obj.checkinDate).perform().then(function()
				{
					browser.wait(EC.visibilityOf(obj.ziedealButton), 12000);
					(obj.month).getText().then(function(existingmonth)
					{
					//console.log(data.month);
					//console.log("obj function called",obj.getMonth(text));
					
					//expect(text).toContain(data.month);
					//console.log(text);
						obj.checkinDate.click();
					if (obj.getMonth(existingmonth)===obj.getMonth(data.month))
					{
					obj.checkinDate.click();
					console.log("Given month is same");
						
					}
					
					})
					
				})

			})		
		
			
			//Checkout
			browser.actions().mouseMove(obj.checkoutDate).perform().then(function()
			{
				browser.wait(EC.visibilityOf(obj.ziedealButton), 10000);
				(obj.month).getText().then(function(text)
				{
					console.log("checkout month",text);
					expect(text).toContain(data.month);
				})
				browser.wait(EC.visibilityOf(obj.ziedealButton), 12000);
				(obj.checkoutDate).click();
				})
				
				//Persons
			browser.wait(EC.visibilityOf(obj.ziedealButton), 12000);
			(obj.noOfPersons).click().then(function()
			{
				//select room
				browser.wait(EC.visibilityOf(obj.ziedealButton), 10000);
				//(obj.roomsAvailable).count().then(function(items)
				//{
				//console.log("no.of rooms",items);
				browser.wait(EC.visibilityOf(obj.ziedealButton), 10000);
				obj.allziedealButton.first().click();
				browser.sleep(5000);
				//})
							
			})
				
			

		
			
		})
			
	})
		
})













