# nvm

在我们的日常开发中经常会遇到这种情况：手上有好几个项目，每个项目的需求不同，进而不同项目必须依赖不同版的 NodeJS 运行环境。如果没有一个合适的工具，这个问题将非常棘手。

nvm 应运而生，nvm 是 Mac 下的 node 管理工具，如果需要管理 Windows 下的 node，官方推荐使用 nvmw 或 nvm-windows。不过，nvm-windows 并不是 nvm 的简单移植，他们也没有任何关系。但下面介绍的所有命令，都可以在 nvm-windows 中运行。

## 安装

使用 X-Code 的命令行工具

```sh
xcode-select --install
```

安装 nvm

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

```

注意这个版本年数字 v0.33.0 会随着项目开发而变化。随时通过[官方最新安装命令](https://github.com/nvm-sh/nvm#install-script)来检查最新安装版本

## 安装中遇到的问题

<strong>报错</strong>：curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused，由于外网的原因，连接不了服务器

<strong>解决办法：</strong>

1.通过 [ipaddress](https://www.ipaddress.com/)查询 raw.githubusercontent.com 的 IP 地址

2.找到项目 hosts 文件，前往文件夹 /etc/

3.打开 hosts 文件，在尾部追加 199.232.68.133 raw.githubusercontent.com （IP 地址替换查到的 IP）

[具体参考](https://blog.csdn.net/weixin_41676880/article/details/105605476)

:::tip
改好 hosts 之后，执行安装 nvm 的命令，如果还连接失败，尝试更换 raw.githubusercontent.com 的其他 IP 地址或终止安装进程再次执行安装命令，多次尝试。
:::

## nvm 的使用

```sh
nvm off                     //禁用node.js版本管理(不卸载任何东西)
nvm on                      //启用node.js版本管理
nvm install <version>       //安装node.js的命名 version是版本号 例如：nvm install 8.12.0
nvm uninstall <version>     //卸载node.js是的命令，卸载指定版本的nodejs，当安装失败时卸载使用
nvm list                    //显示所有安装的node.js版本
nvm list available          //显示可以安装的所有node.js的版本
nvm use <version>           //切换到使用指定的nodejs版本,default未最新版本
nvm current                 //查看当前node版本
```
这样我们就可以在不同的项目中使用不同的node，安装nvm过程如有问题可咨询安装成功的同事或上网百度