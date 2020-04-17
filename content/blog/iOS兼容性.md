---
date: "2020-04-17"
title: "测试iOS兼容性"
description: "之前的旧文"
tags: ['iOS', '兼容性']
---

# 测试iOS兼容性

1. 打开iOS模拟器
```bash
    open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app
```
2. 将模拟器固定到dash栏，方便下次打开。

![dash栏](../assets/1565256354833-2e34d09c-499f-43f0-8a79-30334b6c83e8.png)

1. 点击状态栏，`hardware -> device` 开启指定版本iOS。打开Xcode点击设置，如下图，安装指定版本iOS。

![xcode](../assets/1565256797224-f7ec7250-0910-4c6b-9650-569101e2c700.png)

1. 在每个大版本iOS系统下，用safari打开页面测试看是否有问题。

***为何需要针对每个iOS版本作兼容测试：[Click here](https://www.safari-is-the-new-ie.com/)！***