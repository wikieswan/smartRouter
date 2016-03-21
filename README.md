# smartRouter
webview  智能路由器

# api

	smartRouter.nav(opt)
	smartRouter.goto(-1)
	smartRouter.getParam(routerId)
	smartRouter.getAllParam()
	smartRouter.onlyPostParam(opt)
	smaetRouter.onlyGetParam(msgId)

## smartRouter.nav(opt)

作用：打开某个路由
参数：
	
	opt : 
	{
		routerId: 'someId',
		view: 'viewport'
		html: '<div>hello</div>',
		script: 'path/xxx.js',
		param: {
			name : 'jack'
		},
		overwrite: false
	}

routerId 路由信息的唯一标示

## smartRouter.goto(-1)

## smartRouter.getParam(routerId)

## smartRouter.getAllParam()

## smartRouter.onlyPostParam(opt)

## smaetRouter.onlyGetParam(msgId)