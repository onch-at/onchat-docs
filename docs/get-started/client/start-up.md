---
sidebar_position: 3
---

# 启动

本指南主要介绍了如何启动 OnChat 客户端应用程序。

## 运行开发服务器

1. 确保 OnChat 服务端应用程序成功运行并处于运行状态。
1. 打开终端/控制台窗口并导航至 OnChat 客户端应用程序根目录，输入如下命令：

  ```bash
  npm run start
  ```

1. 打开你的 Web 浏览器，并访问 `https://127.0.0.1:4200` 。
  :::note
  上述 URL 中的 `4200` 为 OnChat 客户端应用程序的端口，教程中 OnChat 客户端应用程序端口将以 `4200` 为例。
  :::
  如果页面显示正常、浏览器 `console` 内无报错，则代表你的安装和环境搭建成功了！

## 构建

打开终端/控制台窗口并导航至 OnChat 客户端应用程序根目录，输入如下命令：

```bash
npm run build
```

构建完成后，默认会在项目根目录下生成一个 `www` 目录，你可以将这个目录作为你的站点并部署到你的服务器。

## 部署

将站点部署至 HTTP 服务器之后，除了需要为站点配置 SSL 安全证书之外，还需要添加如下配置：

:::tip
假设你的 OnChat 服务端应用程序的端口为 `9501` 、服务端应用程序所在服务器 IP 为 `127.0.0.1` 。
:::

:::note
以下配置仅适用于 Nginx，教程中 HTTP 服务器将以 Nginx 为例。
:::

```nginx
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

server {
  # ...

  # 使用 try_files 指向 index.html
  location / {
    try_files $uri $uri/ /index.html;
  }

  # HTTP 反向代理
  location /onchat/ {
    proxy_pass http://127.0.0.1:9501/;
    proxy_http_version 1.1;
    proxy_set_header Connection "";
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Real-PORT $remote_port;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header Scheme $scheme;
    proxy_set_header Server-Protocol $server_protocol;
    proxy_set_header Server-Name $server_name;
    proxy_set_header Server-Addr $server_addr;
    proxy_set_header Server-Port $server_port;
  }

  # WebSocket 反向代理
  location /ws/ {
    proxy_pass http://127.0.0.1:9501/;
    proxy_http_version 1.1;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Real-PORT $remote_port;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_set_header Scheme $scheme;
    proxy_set_header Server-Protocol $server_protocol;
    proxy_set_header Server-Name $server_name;
    proxy_set_header Server-Addr $server_addr;
    proxy_set_header Server-Port $server_port;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
  }
}
```
