# 记录开发issues

+ 安装sass-loader时出现其依赖node-sass安装失败，解决方法是重新显示安装node-sass:npm i node-sass --save-dev

+ 使用alias时两种引用方式：

```javascript
    //'components': resolve('src/components'),
    //'assets':resolve('src/assets')
    //第一种不加'~'符号
    import {
        XLayout
    } from 'components'
    //第二种加'~'符号，加与不加要看位置，直接跟import时要加'~'
    @import '~assets/scss/variable.scss';
```

+ components文件夹下的组件想复用该文件夹下组件时不能用alias中的配置，用相对路径就好。这个问题在于resolve('src/xxx')是怎么处理路径的？

+ export default xxx 时，引入时可以import XXX from '...';但export const xx或export {} 时，引入时必须加括号：import {...} from '...'

+ flex-wrap属性控制flex容器是单行或者多行，当只有一个子元素且该子元素宽度超过容器，该属性是没办法控制该行换行的，它控制的是如果有多个子元素，这几个子元素宽度和大于父元素时子元素是否换行

+ 自定义组件上不能监听原生事件,但可以监听自定义事件.

+ 原则上不在组件内部定义时操作slot的样式，slot元素的样式在其使用时由父组件定义

+ 引入swiper.js时报错，原因webpack2中不允许混用import和module.exports,将module.exports改为exports即可

+ JS push方法返回的是添加元素后新数组的长度，并不是新数组

+ 给transition写动画时，动画样式的位置不能嵌套在其父元素中，而要与父元素平级，否则动画无效；此外transition包裹的必须是一个子元素，不能多个

+ SASS的两个样式复用语法：@extend继承独立样式和@mixin(定义函数)、@include(使用函数)
