---
sidebar_position: 3
---

# 启动

本指南主要介绍了如何启动 OnChat 前端应用程序。

## 运行开发服务器

1. 确保后端应用程序已成功运行。
1. 打开终端/控制台窗口，导航至 OnChat 前端应用程序根目录，输入如下命令：

  ```bash
  npm run start
  ```

1. 打开你的 Web 浏览器，并访问 `http://127.0.0.1:4200` 。
  :::note
  上述 URL 中的 `4200` 为 OnChat 前端应用程序的端口，教程中 OnChat 前端应用程序端口将以 `4200` 为例。
  :::
  如果页面显示正常、浏览器 `console` 内无报错，则代表你的安装和环境搭建成功了！

## 构建

打开终端/控制台窗口，导航至 OnChat 前端应用程序根目录，输入如下命令：

```bash
npm run build
```

构建完成后，默认会在项目根目录下生成一个 `www` 目录，你可以将这个目录作为你的站点并部署到你的服务器。

## 部署

将站点部署至 HTTP 服务器之后，除了需要为站点配置 SSL 安全证书之外，还需要添加如下配置：

:::tip
假设你的 OnChat 后端应用程序的端口为 `9501` 、后端应用程序所在服务器 IP 为 `127.0.0.1` 。
:::

:::note
以下配置仅适用于 Nginx。教程中 HTTP 服务器将以 Nginx 为例。
:::

```nginx
# 使用 try_files 指向 index.html
location / {
  try_files $uri $uri/ /index.html;
}

# 反向代理 HTTP
location /onchat/ {
  proxy_pass http://127.0.0.1:9501/;

  proxy_set_header x-forwarded-host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header REMOTE-HOST $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

  proxy_redirect  off;
}

# 反向代理 WebSocket
location /ws/ {
  proxy_pass http://127.0.0.1:9501/;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'Upgrade';
}
```
