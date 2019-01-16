/**
 * 
 */

function car()
{
	this.firstInput =element(by.model("first"));
	this.secondInput =element(by.model("second"));
	this.goButton=element(by.id("gobutton"));
	this.result=element(by.css("h2[class='ng-binding']"));
	this.color='Royal Blue';
	this.engine='turbo';
	this.brand='VW';
	
	this.getURL = function()
	{
		browser.get('http://juliemr.github.io/protractor-demo/');
		
	};

};

module.exports = new car();
/*a.getModel();
console.log(a.brand);*/