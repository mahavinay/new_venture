exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
		        'browserName': 'chrome',
		        'browserAttachTimeout': '10000',
		        'chromeOptions': {
		            'args': ['disable-infobars']
		        }
		    },
	
  specs: ['HotelBooking.js'],
  
  onPrepare : function()
  {
	  browser.driver.manage().window().maximize();
  }
  /*capabilities: {
	  'browserName': 'internet explorer'
	}*/
};