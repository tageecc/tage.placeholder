# tage.placeholder

图片占位服务器，类似http://placehold.it/ ,处理速度更快。

#### demo: http://pic.bigtage.com/300x400?color(204,204,204)&type=png&opacity=0.53

## 功能特性
- 使用简单，相应速度快
- 轻量级，无需安装任何插件，快速搭建
- 格式/颜色/透明度(png)等多种可选配置

## 安装搭建
```
$ npm install
$ nodemon bin/www
```

## 配置选项
#### type 图片格式(暂时支持jpg、png)
#### color 图片颜色，使用让rgb(i,i,i)配置
#### opacity 图片透明图配置(仅在type=png时生效)
