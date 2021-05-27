---
sidebar_position: 1
---

# 安装

本指南介绍了如何安装 OnChat 后端应用程序。

## 先决条件

- [PHP](https://www.php.net/) 版本 >=7.1.0（您可使用 `php -v` 查看版本）。PHP是一种流行的通用脚本语言，特别适合于Web开发。
- [Swoole](https://www.swoole.com/) 版本 >=4.4.8（您可使用 `php --ri swoole` 查看版本）。Swoole是一个PHP的协程框架，提供了基于协程的并发库。
- [PhpRedis](https://github.com/phpredis/phpredis) 版本 当前版（您可使用 `php --ri redis` 查看版本）。PhpRedis是一个PHP扩展，提供了用于与Redis进行通信的API。
- [Imagick](https://github.com/Imagick/imagick) 版本 当前版（您可使用 `php --ri imagick` 查看版本）。Imagick是一个PHP扩展，可以使用ImageMagick库创建和修改图像。
- [MySQL](https://www.mysql.com/) 版本 >=5.7.0（您可使用 `mysql -V` 查看版本）。MySQL是一个开放源码的关系数据库管理系统。
- [Redis](https://redis.io/) 版本 >=5.0.0（您可使用 `redis-cli -v` 查看版本）。Redis是一个开源的内存数据结构存储，用作数据库，缓存和消息代理。
- [FFmpeg](https://www.ffmpeg.org/) 版本 当前版（您可使用 `ffmpeg -version` 查看版本）。FFmpeg是一个用于处理多媒体内容的库和工具的集合。

## 安装 OnChat

您可以使用GIT工具克隆OnChat后端仓库到本地，请打开终端/控制台窗口，输入如下命令：

```bash
git clone https://github.com/HyperLife1119/OnChat
```

## 创建数据库

如果你还未拥有MySQL数据库，请登入MySQL，并在MySQL命令窗口下输入如下命令：

```sql
CREATE DATABASE IF NOT EXISTS onchat DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;
```

:::caution
如果你没有权限创建数据库或已经拥有一个数据库，请确保你的数据库字符集为 `utf8mb4`。
:::

:::info
上述命令中，`onchat` 为数据库名称，允许自行更改替换，教程中数据库名称将以 `onchat` 为例。
:::
