describe('Hotel Booking',function() 
{
	
	var obj = require("./jsObjectHotelBooking.js");
	var using= require('jasmine-data-provider');
	var dt = require("./dataHotelBooking.js");
	using(dt.datadriven, function(data, description)
	{
		it('Open Trivago Website',function()
		{
			browser.waitForAngularEnabled(false);
			obj.getURL();
			browser.sleep(10000);
			browser.actions().mouseMove(element(by.tagName('input[name="sQuery"]'))).sendKeys("Utrecht").perform().then(function()
			{
				browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
				browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
				{
					browser.sleep(5000);
				})
					
					element(by.css("button[class*='checkin']")).getText().then(function(text)
					{ //check by commenting
					console.log(text)	
					})
				
				browser.actions().mouseMove(element(by.tagName("tbody")).element(by.css("time[datetime='2019-01-20']"))).perform().then(function()
				{
//				element(by.css("button[class='cal-btn-next']")).click();
//				browser.sleep(5000);
//				element(by.css("button[class='cal-btn-prev']")).click();
					browser.sleep(5000);
					element(by.tagName("tbody")).element(by.css("time[datetime='2019-01-20']")).click();
					element(by.css("th[id='cal-heading-month']")).getText().then(function(text)
					{
					console.log(data.month);
					expect(text).toContain(data.month);
					console.log(text);
					browser.sleep(5000);
					})
				})

			})		
		
			
			//Checkout
			browser.actions().mouseMove(element(by.tagName("tbody")).element(by.css("time[datetime='2019-01-22']"))).perform().then(function()
			{
				//element(by.css("button[class='cal-btn-next']")).click();
				//browser.sleep(5000);
				element(by.css("th[id='cal-heading-month']")).getText().then(function(text)
				{
//					console.log(data.month);
					console.log("checkout",text);
					expect(text).toContain(data.month);
				})
				element(by.tagName("tbody")).element(by.css("time[datetime='2019-01-22']")).click();
				browser.sleep(8000);
			})
				
				//Persons
			element.all(by.tagName("span[class='roomtype-btn__label']")).get(0).click().then(function()
			{
				browser.sleep(5000);
							
			})
				
			//select room
			element.all(by.css("button[data-log-id='3']")).count().then(function(items)
			{
			console.log("no.of rooms",items);
			element(by.css("button[data-log-id='3']")).element(by.css("button[class='btn btn--deal btn--regular icon-bg-icn_arrow_deal fl-trailing']"))
		
			})

		
			
		})
			
	})
		
})












