# nodeLesson
node

## 学习 heroku 的线上部署(https://www.heroku.com/ )
1.注册heroku 账号

2.下载Heroku 命令行工具 Toolbelt 推荐使用homebrew 一键安装
	打开命令行，输入 heroku login。输入账号与密码

3.编写应用 准备部署 
4.添加Procfile文件 里面一句代码就可以了
```js
web:node app.js
```
主要作用是通知heroku 通过Procfile 启动我们的程序

修改app.js里面的端口号
```js
app.listen(process.env.PROT|| 3000)
```
heroku 使用主动策略，主动提供一个环境变量process.env.PROT来供我们监听

5.部署到 herku

 1、`heroku create`
 2、`git push heroku master`

6.运行应用

  `heroku ps` 可以检查部署成功

7.查看

	`heroku open` 会在浏览器显示你运行的应用

其他

本地运行 代码

	`heroku local web`

推送本地修改

	`git add .`
	`git commit -m "修改描述" `
	`git push heroku master`

查看logs

	`heroku logs --tail`


更多介绍可以访问（https://devcenter.heroku.com/articles/getting-started-with-nodejs）