# hexo-theme-particle

介绍：hexo 主题 particle，诞生原因是因为建多了两个博客，所以自己开发了这个主题来作为 3 个博客的主题

目前有 full、night 和 maiden 两个主题样式

### 重要！

个人博客不再使用Hexo了，已经迁移至VuePress

博客地址：<https://korilin.com/>

### 演示地址（可访问）

**full 主题演示地址**

korilin 中文技术博客：<https://cn.korilin.com>

**night 主题演示地址**

korilin 英文技术博客：<https://en.korilin.com>

**maiden 主题演示地址**

こおり 日语记录博客：<https://jp.korilin.com>

### 主题安装

进入主题目录后，克隆此仓库

```cmd
cd theme
git clone https://github.com/korilin/hexo-theme-particle.git particle
```

### 关闭 Hexo 自带 highlight

到博客根目录下的`_config.yml`，将 highlight 下的 enable 设置为 false，如下：

```yml
# _config.yml
highlight:
  enable: false
  line_number: true
  auto_detect: false
  tab_replace: ""
  wrap: true
  hljs: false
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ""
```

修改完请清除缓存

```shell
$ hexo cl
$ hexo g
```

### 配置文件说明

``` yaml

language: 站点语言

# 站点图标 && 侧边信息卡片头像
head_img: /images/avatar.png

# 开启主页顶部信息块
head_block_enable: true
```

如果使用图片来作为背景，请使用 background-image 属性，不要使用 background 属性。

并且记得不要忘记加上双引号，否则可能会出现错误

``` yaml
# 主页顶部背景样式
# 正确示例如下：
# 图片背景： home_background: "background-image:url('../home.jpg')"
# 颜色背景： home_background: "background:black"
home_background: "background-image:url('../home.jpg')"
```

**导航栏配置**

主题引入了 Vue.js 和 Ant Design Vue

为了减少主题体积和方便性，主题使用的图标为 Ant Design Vue 的图标

图标地址为：https://www.antdv.com/components/icon-cn/

使用前需要确定该图标是否有 theme 属性，如果没有请让对应 icon 下的 theme 为空

``` yaml
# 导航栏链接
menu:
  链接文本:
    icon:
      name: Antd 图标名字
      theme: Antd 图标的样式，目前支持官方的 outlined | filled 这两种样式
    scr: 链接地址，可站内相对/绝对链接，也可站外链接
  home:
    icon:
      name: home
      theme: filled
    src: /
  categories:
    icon:
      name: book
      theme: filled
    src: /categories
  tags:
    icon:
      name: tags
      theme: filled
    src: /tags
  英文博客:
    icon:
      name: compass
      theme: filled
    src: https://en.korilin.com
```

**文章旁边的信息卡片**

图标链接可通过 type 指定图标类型（Antd 图标或者自定义图片）

指定为 Antd 图标主题将会读取 name 和 theme 属性创建 Antd 图标

使用自定义图片将会读取 src 属性创建 118*18 的图片图标。

``` yaml
# 文章侧边信息卡片
card:
  # 是否开启
  enable: true
  # 作者名称下面的简介，必须为列表，每一项作为单独一行。
  description: ["正しさなんてもの", "人のモノサシによって変わる"]
  # 图标链接
  icon_links:
    github:
      icon:
        type: antd-icon # 图标类型 antd-icon | img
        name: github # Antd 图标名字
        theme: filled # 图标样式 outlined | filled
        src: # 图片地址  antd-icon 类型可不填
      link: https://github.com/arukione
    twitter:
      icon:
        type: antd-icon
        name: twitter
        theme: # twitter 这个图标没有 theme 这一属性
      link: https://twitter.com/korilin_dev
    netease:
      icon:
        type: img # 自定义图片
        src: /images/icon/netease.png # 图片地址
      link: https://music.163.com/#/user/home?id=333601794
  # 友链
  friend_links:
    英文技术博客: https://en.korilin.com
    日语记录博客: https://en.korilin.com
```

**站点 footer 配置：**

考虑到博客部署在服务器并使用自己域名的情况，按国家规定需要在网站下边添加备案消息

如没有需要显示备案消息的可以关闭

``` yaml
# 页面尾部，建站时间
footer:
  since: 2018
  # 服务器自定义域名备案底部字段
  ICP:
    enable: true
    code: 粤ICP备xxxxxx号
```

本主题引入的是 Gitalk 评论系统，默认开启，之前可以使用，但是现在我自己的博客用不了了，我还没去找原因 ...

``` yaml
# Gitalk 评论系统
gitalk:
  enable: true # true
  clientID:  # 在 Github 申请的客户端ID
  clientSecret:  # 客户端密钥
  repo: # 存放的仓库
  owner:  # 所有者的 GitHub ID
  admin:  # 管理者的 GitHub ID / 和上面一样就好了
```

**主题样式**

本主题有多种配色可以选择

目前有 full、night 和 maiden 三种样式，不填或者填错默认为 full

``` yaml
style: full # full | night | maiden
```

### 配色修改文件

本主题采用 stylus 来编写样式，并且将配色分离出来，三种主题的配置对应 3 种配色，如有需要可以直接在主题的 css 目录中对应的配色文件修改配色

主题的`source/css`目录下对应的 xxx-color.styl

- full 主题配色文件：full-color.styl
- ngiht 主题配色文件：night-color.styl
- maiden 主题配色文件：maiden-color.styl

本主题会根据主题配置文件的`style`配置项的值，在`source/layout/layout.ejs`中引入对应的样式文件`xxx-theme.styl`。

主题的样式文件有很多，但最终都会被引入一个 theme 文件，其中`particle.styl`文件会引入除了配色文件外的所有样式文件，而`xxx-theme.styl`文件会引入`particle.styl`文件和对应的`xxx-color.styl`配色文件，从而达到切换样式的效果。

修改的 ejs 代码如下：

``` ejs
<% if(theme.style == "night"){ %>
  <link rel="stylesheet" href="/css/night-theme.css">
<% }else if(theme.style == "maiden"){ %>
  <link rel="stylesheet" href="/css/maiden-theme.css">
<% }else{ %>
  <link rel="stylesheet" href="/css/full-theme.css">
<% } %>
```

因此，如果想保留主题提供的配色，引入新的配色，可以在 css 目录下，新建一个`new-theme.styl`（文件名可自己定）和`new-color.styl`（文件名可自己定）文件，然后在`new-theme.styl`文件里添加以下内容来引入`particle.styl`和`new-theme.styl`文件

```stylus
@import './new-color'
@import './particle'
```

接着你需要在`source/layout/layout.ejs`里，添加类似下面的判断语句来引入新主题

它如同 JavaScript 语法，但相关的语法就会 `<% %>`包裹起来

```ejs
<% if(theme.style == "new"){ %>
  <link rel="stylesheet" href="/css/new-theme.css">
<% } %>
```

你需要在`<head> ... </head>`中引入样式文件的配置文件判断语句部分进行修改，在添加 full 主题的`else`语句前，再添加一个`else if`判断语句来引入新主题，修改完的`laoyout.ejs`应和下面类似

```ejs
<% if(theme.style == "night"){ %>
  <link rel="stylesheet" href="/css/night-theme.css">
<% }else if(theme.style == "maiden"){ %>
  <link rel="stylesheet" href="/css/maiden-theme.css">
<% }else if(theme.style == "new"){ %>
  <link rel="stylesheet" href="/css/new-theme.css">
<% }else{ %>
  <link rel="stylesheet" href="/css/full-theme.css">
<% } %>
```

修改后，在主题的配置文件中`/themes/particle/_config.yml`中修改`style`配置项就可以切换新样式了

```yaml
style: new
```

### 写在最后

本项目采用 MIT 开源许可证，欢迎大家贡献，你可以随意打开一个 issue 来进行提问，有任何改进想法都可以进行 fork，等待您的 Pull Request。
