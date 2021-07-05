---
sidebar_position: 2
---

# 配置

本指南主要介绍了如何配置 OnChat 客户端应用程序。

## 反向代理配置

1. 进入 OnChat 客户端应用程序根目录，打开 `proxy.config.json` 配置文件。
1. 假设你的 OnChat 服务端应用程序端口为 `9501` ，修改两处 `target` 选项值为 `http://localhost:9501`，示例：

  ```json title="proxy.config.json"
  {
    "/onchat": {
      "target": "http://localhost:9501",
      "secure": "false",
      "logLevel": "debug",
      "changeOrigin": true,
      "pathRewrite": {
        "^/onchat": ""
      }
    },
    "/ws": {
      "target": "http://localhost:9501",
      "secure": "false",
      "ws": true,
      "logLevel": "debug",
      "changeOrigin": true,
      "pathRewrite": {
        "^/ws": ""
      }
    }
  }
  ```

## 修改开发服务器端口

1. 进入 OnChat 客户端应用程序根目录，打开 `package.json` 文件。
1. 默认端口为 `4200`，假设你要将端口修改为 `6300`，请修改如下内容：

```diff title="package.json"
  {
    ...
    "scripts": {
      ...
-     "start": "ng serve --port=4200",
+     "start": "ng serve --port=6300",
      ...
    },
    ...
  }
```
