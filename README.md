## Heroku 部署指南

部署在Heroku上的代码可以存放在3个地方：

1. Heroku自带的github私服
2. github上
3. dropbox上

首先你需要安装 Heroku-CLI 工具，如果你的代码存放在Heroku自带git私服上，则你的代码部署必须依赖这个工具；即使你的代码存放在 github 或者 dropbox 上，也可以用这个工具查看线上日志，本地测试运行等等。还有管理你的apps。

各个平台的安装指南：

https://devcenter.heroku.com/articles/heroku-command-line

### Node.js 项目部署

官方关于Nodejs项目部署的注意事项如下：

https://devcenter.heroku.com/articles/deploying-nodejs

总结几点需要注意的地方：

1. 需要在 package.json 中添加 node 的版本信息: 

```
"engines": {
    "node": "4.1.1"
  },
```

2. 添加名为 `Procfile` 的文件，里面指定启动脚本即可，比如`web: node app.js`
3. 需要在全局变量中添加端口号，通过变量 PORT，在应用所在的dashboard中最后一个setting选项卡里，Config Variables一栏添加（是不是必须这么做有待确认）
4. 可以通过`heroku local web` 命令本地运行app


### 如果存储在github私服上

如果你的代码存储在私服github上，你的部署一定要依赖 Heroku-CLI，具体请参考：

https://devcenter.heroku.com/articles/git

### 如果存储在github上

如果你的代码存储在 github 上，只需要在创建 app 后（通过CLI或者dashboard），在deploy那个标签栏中与你的github账号相连，选择想要部署的repository即可。

记得选择勾选上 automatic deploy 选项，这样一旦有修改即可自动部署。

注意第一次关联之后并不能马上生效，即访问app地址后发现app没有上线，不知道是不是bug。尝试做一些修改，加个空格什么的再次提交代码即可生效。