# h5 面试题

## HTML 语义化就是让页面内容结构化，它有如下优点

1、易于用户阅读，样式丢失的时候能让页面呈现清晰的结构。
2、有利于 SEO，搜索引擎根据标签来确定上下文和各个关键字的权重。
3、方便其他设备解析，如盲人阅读器根据语义渲染网页
4、有利于开发和维护，语义化更具可读性，代码更好维护，与 CSS3 关系更和谐
```js
<header>代表头部
<nav>代表超链接区域
<main>定义文档主要内容
<article>可以表示文章、博客等内容
<aside>通常表示侧边栏或嵌入内容
<footer>代表尾部
```
## meta viewport
用于移动端使用，解决在电脑上的问题

# css 相关

## css 两种盒模型

1. 标准盒模型，

- 元素的宽度=width+padding +margin

2. IE6 混杂盒模型
   元素的宽度等于里面的宽度

## rem 和 em 的区别

rem 是根据根元素确定的，em 是根据父级元素确定的

## 选择器

1. id 选择器
2. 通配符选择器
3. 类选择器
4. 元素选择器
5. 伪类选择器
6. 后代选择器
7. 属性选择器

## css 选择器权重

！important> 行内样式> id >类选择器> 元素选择器和伪类选择器 > 默认属性

## css3 新特性

1. transition:过渡
2. transform：旋转
3. animation: 动画
4. gradient：渐变
5. shadow：阴影
6. border-radius:圆角

## 行内元素和块级元素

- 行内元素：不换行：inline 常见标签有 span i img video a audio
- 块级元素：元素独占一行 block 标签 h1-h6 p div ul

## 水平居中

1. 早期的垂直居中：基于绝对定位

- 定宽 ，设置左右坐标（left：0，right：0），将左右 margin 设置为 auto（实际上固定定位是绝对定位的特殊情况）

2. 行盒（行块盒）水平居中

- 直接设置行盒(行块盒)的父元素 text-algin:center

3. 块盒水平居中
   定宽 设置左右 margin 为 auto
4. 基于 flex：设置父元素 display：flex algin-content:center

## 垂直居中

1.  单行文本垂直居中：line-height=height
2.  绝对定位的垂直居中
    定高 上下 top bottom 为 0 将上下 margin 为 0
3.  flex：设置父级 display：flex algin-items：center

## 基于 flex 垂直水平居中

父级：display：flex；margin：0
子元素 maigin：auto；

```js
  <style>
    .a{
        width:200px;
        height:200px;
        display:flex;
        margin:0;
        background:green;
    }
    .main{
        margin:auto;
        background:red;
        width:60px;
        height:60px;
    }
   </style>
</head>
<body>
   <div class="a">
    <div class="main">
    wqer6
    </div>
   </div>
</body>
```

- flex 方式
  父级元素设置 display:flex algin-item:center

## BFC

什么是 BFC？

> BFC 格式化上下文，他是一个独立的渲染区域，让处于 BFC 内部的元素和外部的元素相互隔离，内外元素不会相互影响

如何产生 BFC

1. 根元素，html 标签就触发了一个 bfc
2. 浮动元素
3. overflow：值不为 visible，即为 auto scrool，hidden；
4. display 为 inline-block,flex,table-cell,grid 等
5. 定位元素 position 为 absolute fixed
6. contain 为 layout，conten，paint 的元素

## 清除浮动

1. 父级加伪类::after{
   content:'';
   display:block;
   clear:both;
   }
2. 触发 bfc：最常见的是 overflow：hidden
3. 父级末尾加一个没有内容的 div ：clear：both

## less 和 sass

声明变量符不一样 1. less 是@ scss \$
scss 使用：混合 mixin @include 声明变量 mix（颜色比例） 数组（）each for 等

## 多行元素的文本省略号

overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical

# JavaScript
## 使用规范
1、不要在同一行声明多个变量
2、请使用===/！==来比较true/false或者数值
3、使用对象字面量替代new Array这种形式
4、不要使用全局变量
5、Switch语句必须带有default分支
6、函数不应该有时候有返回值，有时候没有返回值
7、For循环必须使用大括号
8、IF语句必须使用大括号
9、for-in循环中的变量 应该使用var关键字明确限定作用域，从而避免作用域污染

## 基本数据类型值
Undefined，Null，Boolean，String，Object，新增Symbol
## 数组操作
1. map遍历数组，返回回调返回值组成新的数组
2. forEach：无法break
3. filter:guolv
4. some：有一项则返回true，则整体为true
5. join通过指定的连接生成字符串
6. push pop末尾插入 改变原数组
7. shift unshift 头部插入
8. sort 数组反转改变原数组，
9. concat 连接数组，不影响原数组，浅拷贝
## 内置对象
Object是JavaScript中所有对象的父对象
数据封装对象：Object、Array、Boolean、Number和String
其他对象：Function、Arguments、Math、Date、RegExp、Error
# 网络
## Cookie 与 Session
### Cookie
1. 如果我们用js变量存储数据，那么关闭页面的时候，数据就消失了。
2. 保持登录状态是怎么做到呢？
按照正常的http协议是做不到的，因为http协议，上下文无关协议
3. 所以说前端页面要有一个持久化数据的东西，一但登录成功，我们就记录这个信息，所以就是Cookie
Cookie是有限制的，
Cookie是存在浏览器上的
Cookie可以长期存贮
Cookie即使保存在浏览器上也是存在不同的域名里
例：
1. 初始状态：没有登录，
2. 访问百度登录，输入姓名密码、
3. 如果用户密码正确，百度后端会想这个域名下，设置一个Cookie，写入用户的基本信息*加密的
4. 以后每一次访问百度，浏览器都会自动带上这些Cookie
5. 服务器后端看到了ID的cookie 就可以解析这个加密id，来获取到这个用户本身的ID
6. 如果能获取本身的iD证明用户已经登录过了
缺点： 如果有个坏人，复制了我浏览器的cookie，他就可以在他的电脑登录我的账号了
### Session
登录信息存在服务器，信息难以被复制
缺点：如果用户量非常大，上亿用户，服务器端消耗资源，
因为后端可能不止一台服务器，用户的登录信息，一般只存在一台服务器上。因为用户的登录操作，在那台机器上执行的，就一般存在在那台机器上