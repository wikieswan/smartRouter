var html = '<label>name:</label><input id="name" type="input"><br><button onclick="next()">next step</button>'
var opt = {
	templateId: 'step1',
	view: 'viewport',
	html: html,
	script: '/example/js/app/step1.js'
}

smartRouter.nav(opt)