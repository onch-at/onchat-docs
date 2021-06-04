---
sidebar_position: 1
---

# 安装

本指南主要介绍了如何安装 OnChat 后端应用程序。

## 先决条件

想要运行 OnChat，你需要具备以下条件：

### 软件与环境

- [PHP](https://www.php.net/) 版本 >=7.1.0（使用 `php -v` 查看版本）。PHP 是一种流行的通用脚本语言，特别适合于 Web 开发。
- [Composer](https://getcomposer.org/) 版本 >= 2.0.0（使用 `composer -V` 查看版本）。Composer 是 PHP 的依赖管理器。
- [Swoole](https://www.swoole.com/) 版本 >=4.5.0（使用 `php --ri swoole` 查看版本）。Swoole 是一个 PHP 的协程框架，提供了基于协程的并发库。
- [PhpRedis](https://github.com/phpredis/phpredis) 版本 当前版（使用 `php --ri redis` 查看版本）。PhpRedis 是一个 PHP 扩展，提供了用于与 Redis 进行通信的 API。
- [Imagick](https://github.com/Imagick/imagick) 版本 当前版（使用 `php --ri imagick` 查看版本）。Imagick 是一个 PHP 扩展，可以使用 ImageMagick 库创建和修改图像。
- [MySQL](https://www.mysql.com/) 版本 >=5.7.0（使用 `mysql -V` 查看版本）。MySQL 是一个开源的关系数据库管理系统。
- [Redis](https://redis.io/) 版本 >=5.0.0（使用 `redis-cli -v` 查看版本）。Redis 是一个开源的内存数据结构存储，用作数据库，缓存和消息代理。
- [FFmpeg](https://www.ffmpeg.org/) 版本 当前版（使用 `ffmpeg -version` 查看版本）。FFmpeg 是一个用于处理多媒体内容的库和工具的集合。
- [Supervisor](http://supervisord.org/) 版本 当前版（使用 `supervisorctl version` 查看版本）。Supervisor 是一个进程控制系统。

:::info
对于 Swoole，需要开启 `SWOOLE_HOOK_NATIVE_CURL`（使用 `php --ri swoole | grep curl-native` 查看是否开启）。若未开启，你需要重新编译 Swoole，编译时需开启 `--enable-swoole-curl` 选项，详见[官方文档 »](https://wiki.swoole.com/#/runtime?id=swoole_hook_native_curl)。
:::

:::tip
对于 Supervisor，这是一个可替换软件。你可以使用其他进程管理软件替代，例如 [Monit](https://mmonit.com/monit/)。
:::

### 服务

- SMTP 邮件推送，一种电子邮件群发服务。
- [阿里云对象存储服务（OSS）](https://www.aliyun.com/product/oss)，一种海量、安全、低成本、高可靠的云存储服务。（可选）

:::info
对于 `阿里云对象存储服务（OSS）`，这是一项可选服务。<br />
OnChat 虽然支持文件本地存储功能，但推荐使用第三方对象存储服务（不限于阿里云）。
这些第三方服务一般会提供媒体数据处理，链接签名、防盗等功能，而 OnChat 内置的文件本地存储只提供基本的文件存储功能。
:::

:::tip
对于存储服务，OnChat 采用了多驱动设计，并内置了 `本地存储` 、`阿里云对象存储服务（OSS）` 驱动。<br />
如果你需要使用其他的第三方存储服务，你需要自行实现存储驱动，详见[高级指南 »](./advanced)。
:::

## 安装 OnChat

1. 您可以使用 GIT 工具克隆 OnChat 后端仓库到本地，请打开终端/控制台窗口，输入如下命令：

  ```bash
  git clone https://github.com/HyperLife1119/OnChat
  ```

1. 导航至 OnChat 后端应用程序项目根目录下，输入如下命令以安装项目所需依赖项：

  ```bash
  composer install
  ```
