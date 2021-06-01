---
sidebar_position: 1
---

# 安装

本指南主要介绍了如何安装 OnChat 前端应用程序。

## 先决条件

想要运行 OnChat，你需要具备以下条件：

### 软件与环境

- [Node.js](https://nodejs.org/) 版本 [当前版、活跃 LTS 版或维护期 LTS版](https://nodejs.org/about/releases)（您可使用 `node -v` 查看版本）。Node.js 是一个基于 Chrome V8 引擎 的 JavaScript 运行时。
- [Nginx](https://nginx.org/) 版本 当前版。Nginx 是一个 HTTP 和反向代理服务器、邮件代理服务器和通用的 TCP/UDP 代理服务器。
- [Mkcert](https://github.com/FiloSottile/mkcert) 版本 当前版。Mkcert 是一个用于制作可信任的本地SSL证书（可选）。

:::info
对于 `Nginx` ，这是一个可替换软件。你可以使用其他Web服务器软件替代，例如 [Apache](https://httpd.apache.org/) 。<br />
对于 `Mkcert` ，这是一个可选软件。仅在本地开发环境下需要使用。
:::

## 安装 OnChat

1. 您可以使用 GIT 工具克隆 OnChat 前端仓库到本地，请打开终端/控制台窗口，输入如下命令：

  ```bash
  git clone https://github.com/HyperLife1119/OnChat-Web
  ```

1. 导航至 OnChat 前端应用程序项目根目录下并打开终端/控制台窗口。
1. 输入如下命令以安装项目所需依赖项：

  ```bash
  npm install
  ```

1. 如果是本地开发环境，输入如下命令以生成可信任的本地SSL证书：

  ```bash
  mkcert localhost
  ```

  成功运行此命令后将会在项目根目录下分别生成 `localhost.pem` 证书文件和 `localhost-key.pem` 密钥文件。
