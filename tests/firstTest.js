module.exports = {
	'Primeiro caso de teste'(browser){
		browser
			.url('https://news.ycombinator.com/')
			.waitForElementVisible('.hnname')
			.assert.containsText(".hnname", "Hacker News");
	}
}