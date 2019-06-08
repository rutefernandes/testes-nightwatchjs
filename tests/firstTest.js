module.exports = {
	'Primeiro caso de teste'(browser){
		browser
			.url('https://foodstock.tk/#/usuario/login')
			.waitForElementPresent('body', 1000)
			.assert.title('Foodstock')
			.waitForElementPresent('input[name="email2"]',5000)
			.setValue('input[name="email2"]', "laranjinha@lara.com")
			.waitForElementPresent('input[name="password"]', 5000)
			.setValue('input[name="password"]', "1234567890")
			.click('#login > div.container > div > div.main-login.main-center > form > div:nth-child(3) > button')
			.waitForElementPresent('.alert', 5000)
			.assert.containsText(".alert", "ocorreu algum problema com o seu login. Verifique os seus dados");
	},

	'Segundo caso'(browser){
		browser
			.url('https://foodstock.tk/#/usuario/login')
			.waitForElementPresent('body', 1000)
			.assert.title('Foodstock')
			.waitForElementPresent('input[name="email2"]',5000)
			.setValue('input[name="email2"]', "laranjinha@lara.com")
			.waitForElementPresent('input[name="password"]', 5000)
			.setValue('input[name="password"]', "12345678910")
			.click('#login > div.container > div > div.main-login.main-center > form > div:nth-child(3) > button')
			.waitForElementPresent('body', 1000)
			.waitForElementPresent('.legend')
			.assert.containsText(".legend", "Publique seus produtos e encontre clientes de forma simples e prática");
	}
}