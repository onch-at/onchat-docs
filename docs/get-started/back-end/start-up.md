---
sidebar_position: 3
---

# 启动

本指南主要介绍了如何启动 OnChat 后端应用程序。

## 命令

在终端/控制台窗口运行 `php think` 以查看所有命令，你也可以使用：

```bash
php think onchat start|restart|reload|stop|init
```

### 基本用法

```bash
php think onchat [<动作>]
```

### 命令参数

| 动作 | 示例 | 描述 |
| - | - | - |
|         | `php think onchat`         | 启动 OnChat 应用程序 |
| start   | `php think onchat start`   | 启动 OnChat 应用程序 |
| restart | `php think onchat restart` | 重启 OnChat 应用程序 |
| reload  | `php think onchat reload`  | 热重载 OnChat 应用程序 |
| stop    | `php think onchat stop`    | 停止 OnChat 应用程序 |
| init    | `php think onchat init`    | 初始化 OnChat 应用程序 |

## 运行

- 在 OnChat 项目根目录下打开终端/控制台窗口。
- 如果是首次运行，你需要先执行 `php think onchat init` 命令以初始化 OnChat。
- 执行 `php think onchat start` 命令， 启动 OnChat 应用程序。
- 打开当前系统的 Web 浏览器，并访问 `http://127.0.0.1:9501` 。
  :::tip
  上述 URL 中的 `9501` 为 OnChat 后端应用程序的端口，教程中 OnChat 后端应用程序端口将以 `9501` 为例。
  :::
- 如果你的安装和环境搭建成功了，就会在浏览器中看到如下内容：

  ```txt
  Running
  Successfully!
  ```
