function next(){
	var name = document.getElementById('name').value;
	console.log(name)
	var html = '<a href="javascript:;" onclick="goback()">goback</a><br><label>age:</label><input id="age" type="input"><br><button onclick="sure()">sure</button>'
	var opt = {
		templateId: 'step2',
		view: 'viewport',
		html: html,
		script: '/example/js/app/step2.js',
		param: {
			name: name
		}
	}

	smartRouter.nav(opt)
}