# hexo-theme-particle

介绍：hexo 主题 particle，定制自己的两个博客

目前有 full 和 night 两个主题样式

### 演示地址

**full 样式：**

korilin 的中文技术博客：https://cn.korilin.com

**night 样式：**

korillin 的英文技术博客：https://en.korilin.com

### 主题安装

进入主题目录后，克隆此仓库

```cmd
cd theme
git clone https://github.com/korilin/hexo-theme-particle.git particle
```

### 配置文件说明

``` yml

language: 站点语言

# 主题使用的图标为 Ant Design Vue 的图标， 图标官网地址为：https://www.antdv.com/components/icon-cn/

# 导航栏链接
menu:
  链接名称:
    icon:
      type: 图表名字
      theme: 图标主题
    src: 链接地址
  about:
    icon:
      type: home
      theme: filled
    src: /about
  archives:
    icon:
      type: home
      theme: filled
    src: /archives
  categories:
    icon:
      type: home
      theme: filled
    src: /categories
  tags:
    icon:
      type: home
      theme: filled
    src: /tags
  英文博客:
    icon:
      type: home
      theme: filled
    src: https:en.korilin.com

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
style: full

```
