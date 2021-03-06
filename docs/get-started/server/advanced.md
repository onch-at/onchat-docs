---
sidebar_position: 4
---

# 高级

本指南主要介绍了 OnChat 服务端应用程序的一些高级用法。

## 自定义存储驱动

如果需要自定义存储驱动，你的驱动类必须实现 `app\contract\StorageDriver` 接口：

```php title="app/contract/StorageDriver.php"
interface StorageDriver
{
  /**
   * 获取根目录
   *
   * @return string
   */
  function getRootPath(): string;

  /**
   * 保存文件
   *
   * @param string $path 路径
   * @param string $file 文件名
   * @param File|string $data
   * @return Result
   */
  function save(string $path, string $file, $data): Result;

  /**
   * 删除文件
   *
   * @param string $filename 文件完整名
   * @return Result
   */
  function delete(string $filename): Result;

  /**
   * 文件是否存在
   *
   * @param string $filename 文件完整名
   * @return Result
   */
  function exist(string $filename): Result;

  /**
   * 清理目录下冗余文件
   *
   * @param string $path 目录
   * @param integer $count 要保留的文件数量
   * @return void
   */
  function clear(string $path, int $count): void;

  /**
   * 获取URL
   *
   * @param string $filename 文件路径
   * @return string
   */
  function getUrl(string $filename): string;

  /**
   * 获取缩略图URL
   *
   * @param string $filename 文件路径
   * @return string
   */
  function getThumbnailUrl(string $filename): string;
}
```

| 方法 | 描述 |
| - | - |
| `getRootPath`     | 用于获取相对于储存目录的根目录 |
| `save`            | 用于保存文件，其中 `data` 参数可以为二进制数据、纯文本数据、本地文件路径和 `\think\File` |
| `delete`          | 用于删除文件 |
| `exist`           | 用于判断文件是否存在 |
| `clear`           | 用于清理目录下冗余文件 |
| `getUrl`          | 用于获取URL |
| `getThumbnailUrl` | 获取缩略图URL |

### 更新配置文件

1. 假设你的自定义驱动类名为 `Custom` ，请修改 `config/storage.php` 配置文件，并添加以下配置：

```diff title="config/storage.php"
  return [
    'default' => env('storage.driver', 'oss'),
    'stores'  => [
      ...

+     'custom' => [
+       'driver' => Custom::class,
+     ],
    ]
  ];
```

1. 然后打开 `.env` 环境变量文件，并修改以下变量：

```diff title=".env"
  [STORAGE]
- DRIVER = local
+ DRIVER = custom
```

:::note
参考 `app/core/storage/driver/Local.php` 与 `app/core/storage/driver/Oss.php` 的实现。
:::
