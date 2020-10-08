# hexo-theme-particle

介绍：hexo 主题 particle，诞生原因是因为建多了两个博客，所以自己开发了这个主题来作为 3 个博客的主题

目前有 full、night 和 maiden 两个主题样式

### 演示地址

[korilin](https://korilin.com)

或

[arukione](https://arukione.cn)

### 主题安装

进入主题目录后，克隆此仓库

```cmd
cd theme
git clone https://github.com/korilin/hexo-theme-particle.git particle
```

### 配置文件说明

``` yml

language: 站点语言

# 站点图标 && 侧边信息卡片头像
head_img: /images/avatar.png

# 主页头部背景样式
# 如果使用图片来作为背景，请使用 background-image 属性，不要使用 background 属性。并且记得不要忘记加上双引号，否则可能会出现错误
# 正确示例如下：
# 图片背景： home_background: "background-image:url('../home.jpg')"
# 颜色背景： home_background: "background:black"
home_background: "background-image:url('../home.jpg')"

# 主题使用的图标为 Ant Design Vue 的图标
# 图标地址为：https://www.antdv.com/components/icon-cn/
# 使用前需要确定该图标是否有 theme 属性，如果没有请让对应 icon 下的 theme 为空

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

# 文章侧边信息卡片
card:
  # 是否开启
  enable: true
  # 作者名称下面的简介，必须为列表，每一项作为单独一行。
  description: ["正しさなんてもの", "人のモノサシによって変わる"]
  # 图标链接
  # 图标链接可通过 type 指定图标类型（Antd 图标或者自定义图片），指定为 Antd 图标主题将会读取 name 和 theme 属性创建 Antd 图标， 使用自定义图片将会读取 src 属性创建118*18的图片图标。
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

# 页面尾部，建站时间
footer:
  since: 2018
  # 服务器自定义域名备案底部字段
  ICP:
    enable: true
    code: 粤ICP备xxxxxx号

# Gitalk 评论系统
gitalk:
  enable: true # true
  clientID:  # 在 Github 申请的客户端ID
  clientSecret:  # 客户端密钥
  repo: # 存放的仓库
  owner:  # 所有者的 GitHub ID
  admin:  # 管理者的 GitHub ID / 和上面一样就好了

# 主题样式，有 full、night 和 maiden 三种样式，不填或者填错默认为 full
style: full # full | night | maiden
```
