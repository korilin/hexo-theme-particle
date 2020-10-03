# hexo-theme-particle

介绍：hexo 主题 particle，定制自己的两个博客

目前有 full 和 night 两个主题样式

### 演示地址

full 样式： korilin 的中文技术博客：https://cn.korilin.com

night 样式：korillin 的英文技术博客：https://en.korilin.com

### 配置文件说明

``` yml

language: 站点语言

# 主题使用的图标为 ionicons 的图标， 图标官网地址为：https://ionicons.com/

# 导航栏链接
menu:
    链接文字(可中文可英文):
        icon: ionicons图标名称
        src: 链接地址(可站点内相对/绝对链接，或站点外绝对链接)
    categories:
        icon: layers
        src: /categories
    标签:
        icon: pricetags
        src: /tags
    英文博客:
        icon: link
        src: https://en.korilin.com

# 个人卡片链接
link:
    链接文字:
        type: 图标类型(ionicons的图标或者自定义图标image)
        icon: ionicons图标名称或图标图片地址
        src: 链接地址
    Github:
        type: ionicons
        icon: logo-github
        src: https://github.com/korilin
    Twitter:
        type: image
        icon: /icon/twitter.png
        src: https://twitter.com/korilin_dev

# 主页图片
home_img: /home_bg.jpg

# 页面尾部，建站时间
footer:
    since: 2018

# Gitalk 评论系统
gitalk:
  enable: true # true
  clientID:  # 在 Github 申请的客户端ID
  clientSecret:  # 客户端密钥
  repo: # 存放的仓库
  owner:  # 所有者的 GitHub ID
  admin:  # 管理者的 GitHub ID / 和上面一样就好了

# 主题样式，有 full 和 night 两种样式，不填或者填错默认为 full
theme: full


