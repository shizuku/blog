---
title: git全面指南
author: shizuku
tags:
  - git
date: 2020-03-15
location: ChengDu
---

## 基础知识

git 是一种分布式的版本控制系统，由 Linus 大神开发，最初被用来管理 Linux 的代码。git 理论上可以管理任何纯文本的文件，当然也包括各种源代码。git 采用分支和工作流来管理你的文件。

## 安装和使用

Linux 下可以使用系统的包管理器安装 git，或者从[官网](https://git-scm.com/downloads)下载安装。Windows 下可以从[官网](https://git-scm.com/downloads)下载安装。

## 基本操作

### 创建仓库

在 shell 中输入：

```sh
git init
```

可以将当前目录初始化成一个 git 仓库。

### 克隆仓库

使用：

```sh
git clone https://path/to/repo
```

可以克隆链接所指的仓库到当前目录下。链接所指的可以是本地的仓库也可以是远程的仓库。

### 添加文件

使用

```sh
git add <filename>
```

添加一个文件的更改。使用下面几个命令中的一个添加当前目录下所有的更改。

```sh
git add .
git add *
git add --all
```
