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
## 实现一个三角形
宽高为0 border设置宽颜色实线，留一个边设置有颜色，其他为transparent
```js
// 下三角
 <style>
      .san{
          border-top:10px solid black;
          border-left:10px solid transparent;
          border-right:10px solid transparent;
          border-bottom:10px solid transparent;
          width:0;
          height:0;
      }
    </style>
</head>
<body>
    <div class="san">
    </div>
</body>
```
## css 两种盒模型

1. 标准盒模型，

- 元素的宽度=width+padding 没有margin和border

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

## h5
- HTML5并不是一项技术，而是一个标准。音乐标签，canvas svg

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
## 布局
- 
## BFC

什么是 BFC？

> BFC 格式化上下文，他是一个独立的渲染区域，让处于 BFC 内部的元素和外部的元素相互隔离，内外元素不会相互影响

如何产生 BFC

1. 根元素，html 标签就触发了一个 bfc
2. 浮动元素
3. overflow：值不为 visible，即为 auto scrool，hidden；
4. display 为 inline-block,flex,table-cell,grid 等
5. 定位元素 position 为 absolute fixed
6. contain 为 layout，content，paint 的元素

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
Undefined，Null，Boolean，String，新增Symbol 和 Object，
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
## HTTP缓存机制
1. 重用已获取的资源能够有效的提升网站与应用的性能。Web 缓存能够减少延迟与网络阻塞， 进而减少显示某个资源所用的时间。借助 HTTP 缓存，Web 站点变得更具有响应性
2. http缓存步骤，
   1. 浏览器发起请求（携带Cache-Control），会先去本地缓存看看是否有缓存并且命中，假如有就直接返回缓存资源，反之就转向代理服务器
   2. 代理服务器去查找相关的缓存设置，如s-maxage以及该资源是否有缓存，同样的会去检查是否命中资源加入有则会返回至本地存储，反之到达源服务器；
   3. 到达源服务器后，源服务器会返回资源新文件，然后一步步返回。
### Cache-Contol
> 常见缓存请求指令         说明                   常见缓存响应命令            说明
> no-cache         强制向服务器再次验证             public          可以向任意方提供响应的缓存
> no-store         不缓存请求或者响应的任何内容      private         仅向指定的用户返回响应
> max-age=(秒)     响应最大的Age值                  no-cache        缓存前必须先确定其有效
> max-stale=(秒)   接受以过期的响应                 no-store       不缓存请求或响应的任何内容
> min-fresh=（秒）  期望在指定的时间内响应仍有效     max-age=(秒)       响应最大的age值
>                                                 s-maxage=(秒)     公共缓存服务器响应最大的Age值
>                                                 must-revalidate   可缓存但必须再向源服务器进行确认
### Cache-Control 缓存特性
### 强缓存 & 协商缓存 
在进行最后一个实战模拟之前，要先说下这两个十分重要的概念：强缓存以及 协商缓存。 
强缓存 
简单粗暴来讲，就是**客户端知道资源过期时间后，由客户端来决定要不要缓存。**那么怎么知道资源的过期时间呢？由谁来决定它们的过期时间呢？就是 由我们上文提到的 Expires 以及 Cache-Control: max-age。 
协商缓存 
跟强缓存相反，是由服务器来决定客户端要不要使用缓存。在有 ETag 以及 Last-Modified 响应首部字段的情况下，客户端会向服务器发起资源的缓存校 验，然后服务器会告知客户端是使用缓存(304)还是返回一个全新的资源，表面 上看都是会发起一个请求，但是响应的时候则是不是一个完整的响应则看是否需要缓存。 
还记得 Cache-Control 的指令 no-cache 和 no-store 吗？这时候应该就清楚了 两者的区别了。no-cache 就是直接跳过强缓存进入协商缓存。而 no-store 则是不缓存，效果等同于 Chrome 浏览器的 Disable Cache，仔细观察，你会发 现请求首部字段是不会携带关于缓存的任何首部字段。 
总结 
这下总算知道为什么有时候 Chrome 浏览器会展示 disk cache/memory cache 了吧，它跟 304 Not Modified 同样都是被缓存的意思，这是方式不一样。由 此可见，合理的使用缓存是多么的重要，它可以使我们减少无所谓的请求、避 免资源文件的重复传输、减少对源服务器的资源占用等等好处，但也不能滥 
## get与post区别
1. 本质上，get和post请求都能拉取数据
2. HTTP协议实际是基于RFC规范的，实际上get post 请求的语法是相同的，但是在RFC规范中 给get和post请求规定了语义，规定get只能获取信息，post只能发送信息
3. get数据在url可见，post数据不会显示在url中
4. get对数据长度有限制，不能超过 2048个字符，post无限制
5. get可以收藏为标签，post不能
6. get编码类型为application/x-www-for-url post为二进制数据使用多重编码
7. get历史参数会保留在浏览器历史中，post参数不会保留在历史参数中
8. get只允许ASCLL字符，post没有限制，也允许二进制数据
9. 与post相比，get的安全性较差，因为所发送的数据时URL的一部分。发送密码等不要用get 
10. get请求只会建立一次tcp连接，post请求会建立两次tcp连接
## HTTP协议状态码
1. 200 表示请求成功
2. 301 永久移动
3. 302 临时重定向
4. 303 临时重定向并且必须为get请求
5. 401 协议格式出现问题
6. 403 服务器端拒绝了请求
7. 404 未找到资源
8. 500 服务器端程序出错
9. 503 服务器繁忙
10. 304 浏览器多次访问一个资源时，上一个请求还没有过期 还在缓存，为了减少请求就会返回304
## jsonp跨域

JSONP跨域
  jsonp的原理就是利用<script>标签没有跨域限制，通过<script>标签src属性，发送带有callback参数的GET请求，服务端将接口返回数据拼凑到callback函数中，返回给浏览器，浏览器解析执行，从而前端拿到callback函数返回的数据。
1）原生JS实现：
 <script>
    var script = document.createElement('script');
    script.type = 'text/javascript';

    // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=handleCallback';
    document.head.appendChild(script);

    // 回调执行函数
    function handleCallback(res) {
        alert(JSON.stringify(res));
    }
 </script>
json只能用get方法
- 哪些资源算跨域请求的资源？
1. 后端的接口数据
2. 其他域的cookie
3. 其他域的缓存
## ajax（关于发送请求）
1. 在浏览器网中
2. 在控制台上location.href=“”，可以发出网络请求但是页面会发生跳转
3. 带src属性的的标签，比如“img的src”，虽然拿不到图片内容 但是可以发送出请（页面无法处理返回结果）求，服务器可以处理 但是返回之后能否被应用还要看浏览器的
4. 带有href属性的标签，（页面无法处理返回结果）
5. 带有action属性的标签，例如form表单。但是form表单发送后会跳转
6. 页面可以用代码控制，页面ajax
```js
<form action="www.baidu.com" method="get">
 <input type="text" name="name">
 <input type="text" name="age">
 <input type="submit" value="提交">
<form/> 
```

```js

var xhr = null;
if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}else{
    xhr = new ActiveXObject("Microsoft.XMLHttp");
}
xhr.open("get","网址",true);//true为异步
xhr.onreadystatechange = function(){
    // readyState===4 表示请求完成，已经接受到数据
    // status===200 网络请求，结果会有一个状态码。来表示这个请求是否正常
    if(xhr.readyState===4&& xhr.status===200){
        var data = JSON.parse(xhr.responseText);
        
    }

}
xhr.send();
console.log('-----');

```



## 3次握手
- 三次握手主要的目的是为了确认两台主机都具备收和发的功能
1. 第一次握手，传递两个信息，一是请求建立连接，二是发送序列号。在实际连接中，请求建立用SYN=1表示，序列号用seq=n表示，其中n为一个数字，第一次握手就是让主机b知道主机a可以发出消息
2. 第二次握手，主机b收到的是seq=249，那么恢复一个250，第二次恢 一是同意建立连接（SYN=1），2是确定收到了刚才的信息（ack=seq+1）,三是发出自己的序列号（seq=x），第二次握手让a知道了b具备收和发的功能
3. 第三次握手，，回复三条信息，一是表示现在开始发送（SYN=0），二是成功收到了b的信息，（ack=刚才的seq+1），三是这张纸条的序号（seq=最开始发出的序号+1），第三次握手让b知道了a能收
## 四次挥手
1.  
2. 
3. 

## 同源策略
- 协议（http/https），域名 端口号一样的网址

## 5层网络模型
## http和https


# Vue面试题
1. ## MVVM原理
- 传统的MVC指的是，用户操作会请求服务器路由，路由会调用对应的控制器来处理，控制器会获取数据并将结果返回给前端，页面重新渲染，
- MVVM：传统的前端会将数据手动渲染到页面上，MVVM模式不需要用户接受到操作dom元素，将数据绑定到viewModel层上，会自动将数据渲染到页面中，视图变化会通知viewModel层更新数据，viewModel就是MVVM模式的桥梁
2. ## 数据响应式原理
1. 核心点 Object.defineProperty,
2. 默认Vue在初始化数据时，会给data的属性使用Object.defineProperty重新定义所有属性，当页面取到对应属性时，会进行依赖（收集当前组件的watcher）如果属性发生变化会通知相应的依赖进行更新操作
3. 原理：
 
