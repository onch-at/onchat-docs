---
sidebar_position: 3
---

# 启动

本指南主要介绍了如何启动 OnChat 后端应用程序。

## 命令

在终端/控制台窗口运行 `php think` 以查看所有命令，你也可以使用：

```bash
php think onchat start|init
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
| init    | `php think onchat init`    | 初始化 OnChat 应用程序 |

## 运行

1. 导航至 OnChat 后端应用程序项目根目录下并打开终端/控制台窗口。
1. 如果是首次运行，你需要先执行 `php think onchat init` 命令以初始化 OnChat。
1. 执行 `php think onchat` 命令， 启动 OnChat 应用程序。
1. 打开当前系统的 Web 浏览器，并访问 `http://127.0.0.1:9501` 。
  :::note
  上述 URL 中的 `9501` 为 OnChat 后端应用程序的端口，教程中 OnChat 后端应用程序端口将以 `9501` 为例。
  :::
  如果你的安装和环境搭建成功了，就会在浏览器中看到如下内容：

  ```txt
  Running
  Successfully!
  ```

## 部署

OnChat 需要使用第三方进程管理工具来将普通进程转为守护进程。
:::note
推荐使用 Supervisor 管理 OnChat 进程。教程中第三方进程管理工具将以 Supervisor 为例。
:::

1. 编写 Supervisor 子进程配置文件，示例：

  ```ini
  [program:onchat]
  # 脚本执行命令
  command=php think onchat
  # 脚本目录
  directory=/etc/www/onchat/
  # 自动重启
  autorestart=true
  # 启动后程序需要保持运行以认为启动成功的总秒数
  startsecs=3
  # 启动失败的重试次数
  startretries=3
  # 日志输出路径
  stdout_logfile=/etc/www/onchat/log/output.log
  stderr_logfile=/etc/www/onchat/log/error.log
  # 日志文件最大字节数
  stdout_logfile_maxbytes=2MB
  stderr_logfile_maxbytes=2MB
  # 脚本运行的用户身份
  user=root
  # 程序在启动和关闭顺序中的相对优先级
  priority=999
  ```

1. 打开终端/控制台窗口，输入如下命令以重新加载配置并启动新增配置中的程序：

  ```bash
  supervisorctl update
  ```

1. 输入如下命令查看 Supervisor 所有子进程状态信息：

  ```bash
  supervisorctl status
  ```

  如果你看到如下类似内容，则代表 OnChat 成功以守护进程的姿态运行：

  ```bash
  onchat   RUNNING   pid 123, uptime 0:00:01
  ```

1. 一些常用指令：

  ```bash
  supervisorctl stop onchat      // 停止 OnChat 应用程序
  supervisorctl start onchat     // 启动 OnChat 应用程序
  supervisorctl restart onchat   // 重启 OnChat 应用程序
  ```
