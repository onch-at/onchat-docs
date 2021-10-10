---
sidebar_position: 2
---

# 配置

本指南主要介绍了如何配置 OnChat 服务端应用程序。

## 生成 `RS256` 公私钥

打开终端/控制台窗口并导航至 OnChat 服务端应用程序根目录，输入如下命令以生成 `RS256` 公私钥：

```bash
openssl genrsa -out private-key.pem
openssl rsa -in private-key.pem -pubout -out public-key.pem
```

命令执行完成后，将在应用程序根目录下生成两个密钥文件，它们分别是 `private-key.pem` 与 `public-key.pem` 。

OnChat 将使用上面生成的 `RS256` 公私钥进行访问令牌（JWT）的颁发。

## 环境变量配置

OnChat 默认将**部分**主要的配置项抽离至到环境变量文件中配置，完整的配置请前往项目根目录下的 `config` 目录下查看。请根据实际情况修改对应的环境变量值。

### 前置步骤

导航至 OnChat 服务端应用程序项目根目录下，将 `example.env` 环境变量文件重命名为 `.env` 。

:::note
如果你需要将 OnChat 部署到多个环境，可为环境变量文件名添加后缀，例如：`.env.prod` 。
之后在执行 OnChat 命令的时候，允许指定环境变量文件名后缀，详见[启动指南 »](./start-up)。
:::

### 环境变量介绍

| 分类 | 环境变量 | 数据类型 | 描述 |
| - | - | - | - |
|          | `APP_DEBUG`               | `Boolean` | 应用程序调试模式 |
| APP      | `DEFAULT_TIMEZONE`        | `String`  | 应用程序所属时区，[详见 »](https://www.php.net/manual/zh/timezones.php) |
| LANG     | `DEFAULT_LANG`            | `String`  | 应用程序语言，[详见 »](https://www.kancloud.cn/manual/thinkphp6_0/1037637) |
| SERVER   | `HOST`                    | `String`  | OnChat 服务器地址 |
| SERVER   | `PORT`                    | `Integer` | OnChat 端口 |
| DATABASE | `HOSTNAME`                | `String`  | 数据库服务器地址 |
| DATABASE | `DATABASE`                | `String`  | 数据库名称 |
| DATABASE | `USERNAME`                | `String`  | 数据库用户名 |
| DATABASE | `PASSWORD`                | `String`  | 数据库密码 |
| DATABASE | `HOSTPORT`                | `Integer` | 数据库端口 |
| REDIS    | `HOST`                    | `String`  | Redis 服务器地址 |
| REDIS    | `PORT`                    | `Integer` | Redis 端口 |
| REDIS    | `PASSWORD`                | `String`  | Redis 密码 |
| REDIS    | `DATABASE`                | `Integer` | Redis 数据库号（dbindex） |
| STORAGE  | `DRIVER`                  | `String`  | 默认文件储存驱动 |
| OSS      | `ACCESS_KEY_ID`           | `String`  | OSS 账户 Access Key Id |
| OSS      | `ACCESS_KEY_SECRET`       | `String`  | OSS 账户 Access Key Secret |
| OSS      | `ENDPOINT`                | `String`  | OSS 地域节点（可填写已绑定的域名） |
| OSS      | `BUCKET`                  | `String`  | OSS Bucket 名称 |
| OSS      | `IMG_STYLENAME_THUMBNAIL` | `String`  | OSS 缩略图 图片样式名 |
| SMTP     | `HOST`                    | `String`  | SMTP 服务器地址 |
| SMTP     | `PORT`                    | `Integer` | SMTP 端口 |
| SMTP     | `SECURE`                  | `Boolean` | SMTP 安全连接 |
| SMTP     | `USERNAME`                | `String`  | SMTP 用户名 |
| SMTP     | `PASSWORD`                | `String`  | SMTP 密码 |

### 环境变量文件示例

```env
APP_DEBUG = true

[APP]
DEFAULT_TIMEZONE = Asia/Shanghai

[LANG]
DEFAULT_LANG = zh-cn

[SERVER]
HOST = 127.0.0.1
PORT = 9501

[DATABASE]
HOSTNAME = 127.0.0.1
DATABASE = DatabaseName
USERNAME = DatabaseUsername
PASSWORD = DatabasePassword
HOSTPORT = 3306

[REDIS]
HOST = RedisHost
PORT = 6379
PASSWORD = RedisPassword
DATABASE = RedisDatabase

[STORAGE]
DRIVER = oss

[OSS]
ACCESS_KEY_ID = OSSAccessKeyId
ACCESS_KEY_SECRET = OSSAccessKeySecret
ENDPOINT = https://oss-cn-shanghai.aliyuncs.com
BUCKET = OSSBucket
IMG_STYLENAME_THUMBNAIL = thumbnail

[SMTP]
HOST = SMTPHost
PORT = SMTPPort
SECURE = true
USERNAME = STMPUsername
PASSWORD = SMTPPassword
```

## 数据库配置

如果你没有权限创建数据库或已经拥有一个数据库，请确保你的数据库字符集为 `utf8mb4`。

## 阿里云对象存储服务（OSS）配置

阿里云对象存储服务（OSS）是一项可选服务。

### 前置步骤

访问[阿里云对象存储服务管理控制台](https://oss.console.aliyun.com/) 。

### 创建 Bucket

1. 进入 [Buckit 列表](https://oss.console.aliyun.com/bucket) 页面，并创建一个供 OnChat 使用的 Buckit。
1. 创建完成后，在 Buckit 列表中找到并点击刚刚创建的 Buckit，进入 Buckit 管理页面。

:::tip
创建 Buckit 时，`存储类型` 推荐选择 `标准存储` ， `读写权限` 请选择 `私有` ，其他选项根据实际需要填写。
:::

### 添加缩略图样式

1. 进入 Buckit 数据处理页面并切换到 `图片处理` 管理页。
1. 新建一个图片样式，根据实际需求自定义缩略图样式。你还可以切换到高级编辑模式，使用以下代码快速创建一个基本的缩略图样式：

  ```txt
  image/quality,q_20/format,webp
  ```
