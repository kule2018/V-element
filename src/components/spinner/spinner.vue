/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-30 16:10
 */
<template>
  <div :class="klass">
    <div :class="prefix + 'spinner-inner'"></div>
    <span>正在加载</span>
  </div>
</template>

<script>
import { prefix } from 'utils/const.js';
export default {
  name:'spinner',
  props: {
    color: {
      type: String
    },
    primaryColor: {
      type: String
    }
  },
  computed: {
    klass(){
      return this.cssArray;
    }
  },
  mounted () {
    if (this.color) {
      this.$el.children[0].style.borderColor = this.color
    }
    if (this.primaryColor) {
      this.$el.children[0].style.borderTopColor = this.primaryColor
    }
  },
  data () {
    return{
      cssArray:[prefix+'spinner'],
      prefix:prefix
    }
  }
}
</script>

<style lang="scss">
  @import '~assets/scss/variable.scss';
  .#{$prefix}{
    &spinner{
      display: inline-block;
      width:100%;
      &-inner{
        height:0.4rem;
        width:0.4rem;
        margin: 0 auto;
        animation: loading 0.6s infinite linear;
        border:0.05rem solid #eee;
        border-top-color: red;
        border-radius:50%;
      }
    }
  }
  @keyframes loading {
    0% {
      transform:rotate(0deg)
    }
    100% {
      transform:rotate(360deg)
    }
  }
</style>
