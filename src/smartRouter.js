(function(){
	var routerStack = [];
	var paramObj = {};
	var onlyParamObj = {};
	function SmartRouter(){

	}
	/**
	根据路由信息打开某个路由
	opt : 
	{
		templateId: 'someId',
		html: '<div>hello</div>',
		script: 'path/xxx.js',
		param: {
			name : 'jack'
		}
	}
	*/
	SmartRouter.prototype.nav = function(opt){
		var templateId = opt.templateId || '',
			view = opt.view || 'body',
			html = opt.html || '',
			script = opt.script || '',
			param = opt.param || {},
			overwrite =  opt.overwrite || false;
		if(templateId===''){
			console.error('templateId must be a string');
		}
		var router  = getRouterByTemplateId(templateId);
		//路由信息不存在
		if(!router){
			routerStack.push({
				templateId: templateId,
				view: view,
				script: script
			});
			paramObj[templateId] = param;
			cacheTemplateHtmlContent(templateId,html);
			document.getElementById(view).innerHTML = html;
			if(script!=''){
				loadScript(script);
			}
			
		}
		else{
			if(overwrite){
				router.view = view;
				router.script = script;
				paramObj[templateId] = param;
				cacheTemplateHtmlContent(templateId,html);
				document.getElementById(view).innerHTML = html;
				if(script!=''){
					loadScript(script);
				}
			}
			else{
				document.getElementById(router.view).innerHTML = document.getElementById(templateId).innerHTML;
				if(script!=''){
					loadScript(script);
				}
			}
			
		}
		setRouterActive(templateId);
	}
	/**
	
	*/
	SmartRouter.prototype.goto = function(index){
		if(index===undefined){
			index = -1;
		}
		var nowIndex ;
		for(var i=0,len=routerStack.length,e;i<len;i++){
			e = routerStack[i];
			if(e.active){
				nowIndex = i;
				break;
			}
		}
		var len = routerStack.length;
		var routerIndex = nowIndex + index;
		if(routerIndex>=0&&routerIndex<len){
			this.nav(routerStack[routerIndex]);
		}
		else{
			console.error('请确认路由的索引')
		}
	}
	/**
	获取指定 templateId 的参数
	*/
	SmartRouter.prototype.getParam = function(templateId){
		if(templateId===''){
			return false;
		}
		return paramObj[templateId];
	}
	/**
	获取所有参数列表
	*/
	SmartRouter.prototype.getAllParam = function(){
		return paramObj;
	}
	/**
	设置参数  
	{
		id: 'xxx', 
		name: 'ss'
	}
	*/
	SmartRouter.prototype.onlyPostParam = function(param){
		var id = param.id || '';
		if(id===''){
			return false;
		}
		onlyParamObj[id] = param
	}
	/**
	获取参数
	*/
	SmartRouter.prototype.onlyGetParam = function(id){
		return onlyParamObj[id];
	}
	/**
	根据 templateId 返回 routerStack 中对应的路由信息,不存在就返回false
	*/
	function getRouterByTemplateId(templateId){
		for(var i=0,len=routerStack.length,e;i<len;i++){
			e = routerStack[i];
			if(e.templateId===templateId){
				return e;
			}
		}
		return false;
	}
	/**
	 设置路由信息的active
	*/
	function setRouterActive(templateId){
		for(var i=0,len=routerStack.length,e;i<len;i++){
			e = routerStack[i];
			e.active = e.templateId===templateId
		}
	}

	/**
	加载script脚本
	*/
	function loadScript(src, callback) {
        var script = document.createElement('script'),
            loaded;
        script.setAttribute('src', src);
        script.onreadystatechange = script.onload = function() {
            script.onreadystatechange = null;
            document.documentElement.removeChild(script);
            script = null;
            if (!loaded) {
                if(typeof callback==='function')
                    callback();
            }
            loaded = true;
        };
        document.documentElement.appendChild(script);
    }
    /**
	缓存路由的html内容
    */
    function cacheTemplateHtmlContent(templateId,html){
    	var div = document.createElement('div');
    	div.style.display = 'none';
    	div.setAttribute('id', templateId);
    	div.innerHTML = html;
    	document.documentElement.appendChild(div);
    }

    window.smartRouter = new SmartRouter();


})();