function goback(){
	smartRouter.goto(-1);
}
function sure(){
	var param = smartRouter.getParam('step2');
	var age = document.getElementById('age').value;
	alert('name:'+param.name+' age:'+age)
}