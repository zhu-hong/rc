# Roll-Call(点名)

## 缘起

QQ群名单点名太麻烦了,写个点名网页吧

## 基本功能与设计思路

人点名有四种状态

1. 还没被点
2. 到位
3. 请假
4. 无故缺席

所以每个人是一个对象,有一个状态属性 ,有一个改变对象状态的方法

根据对象的状态分组

## 体验优化

+ 后悔功能
  + 当处于被点完名的状态,可以恢复准备点名状态
  + 防止手抖点错无法撤销

+ 记忆功能
  + 由于是静态网页,没有后台,每次关闭网页名单都会重置
    + 利用HTML5的LocalStorage
  + 每次改变一个人的状态就往LocalStorage写入当前列表的状态
    + 利用CompositionAPI的CoutomRef
+ 搜索功能
  + 人较多时不好找
    + 在GitHub上找到一个名字转拼音的包[tiny-pinyin - npm (npmjs.com)](https://www.npmjs.com/package/tiny-pinyin)
    + 可以实现本名或者拼音缩写查找
+ 重新开始功能
  + 点完名后一键重开
  + 由于名单较长重开后还要自动返回顶部
+ 存图功能
  + 生成名单图片便于分享[dom-to-image-more - npm (npmjs.com)](https://www.npmjs.com/package/dom-to-image-more)

## 技术选型

+ [`Vue.js (vuejs.org)`](https://v3.cn.vuejs.org/)(体验一下Composition API 和 script setup 语法糖)
+ [`Home | Vite (vitejs.dev)`](https://vitejs.dev/) (快,简单,爽)
+ [`Windi CSS`](https://windicss.cn/) (原子类CSS框架,小项目没必要上UI组件库)