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

routerId string 必须，路由信息的唯一标示
view string 必须，主页面上用来展示视图的 div id（注意是 id 标签）
html string 非必须，html 片段，路由视图的具体内容
script string 非必须，路由视图对应的 js 文件
param object 非必须，切换路由传递的参数
overwrite boolean 非必须，如果路由堆栈中已经存在这个路由器，是否需要重写路由信息，默认是 false

这里说下，html 字符串在 js 中维护难的事情。
说到在 js 代码里面写 html 字符串，大家可能觉得有点坑。但是这个项目针对 webview 项目的，所以我们机智的用了 webpack 构建工具，支持 es6 哦！ 

那么有两种方式来维护 es6 的字符串，

1 模板字符串
2 webpack 的 html loader

这里就不详细讲了，具体自己脑补吧。

## smartRouter.goto(index)

作用：在路由堆栈中，从当前路由位置，切换到任意路由位置。

参数：index number 从当前位置切换到某个路由需要步长。

比如说，目前路由堆栈是有3个路由信息，分别是：

	[routerId0,routerId1,routerId2]

现在的路由位置是 	routerId2 。如果需要返回到上一步，那么执行

	smartRouter.goto(-1)

如果现在 routerId1 位置，如果要再前进一步，就执行

	smartRouter.goto(1)

## smartRouter.getParam(routerId)

作用：获取指定路由器传递来的参数

参数：routerId 路由器的唯一标示

## smartRouter.getAllParam()

作用：获取所有路由器传递来的参数

参数：无

## smartRouter.onlyPostParam(opt)

作用：向共享参数服务里面写入参数，视图间共享参数时使用

参数：opt object 传递的参数，必须有 id 属性，并且保证唯一性


	{
		id: 'xxx', 
		other: 'ss'
	}

## smaetRouter.onlyGetParam(msgId)

作用：读取共享参数服务里面的参数，视图间共享参数时使用

参数：msgId 参数

