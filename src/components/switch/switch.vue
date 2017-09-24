/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-29 20:42
 */
<template>
  <div :class="klass">
    <input 
      :disabled="disabled" 
      :checked="value"
      type="checkbox"
      @change="changeHandler"
      />
    <button type="button"></button>
  </div>
</template>

<script>
import { prefix } from 'utils/const.js';
import { input } from 'utils/mixins.js'
export default {
  mixins: [input],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    // disabled:{
    //   type:String,
    //   default:''
    // }
  },
  computed: {
    klass () {
      return this.cssArray;
    }
  },
  data () {
    return {
      cssArray: [prefix + 'switch']
    }
  },
  methods: {
    changeHandler (e) {
      let isChecked = e.target.checked;
      this.$emit('x-change', isChecked)
    }
  }
}
</script>

<style lang="scss">
  @import '~assets/scss/variable.scss';
  @import '~assets/scss/mixins.scss';
  .#{$prefix}{
    &switch{
      position:relative;
      @include disabled;
      width: 0.5rem;
      height: 0.34rem;
      button{
        height:100%;
        border-radius:0.3rem;
        background-color:gray;
        width:100%;
        position: relative;
        border:0.01rem solid gray;
        &:before{
          content:'';
          height:100%;
          width:60%;
          border-radius:50%;
          background-color:#fff;
          left:0;
          top:0;
          position:absolute;
          transition:left 0.3s;
        }
      }
      input{
        width:100%;
        height:100%;
        z-index:10;
        position:absolute;
        opacity:0;
        &:checked+button{
          background-color:red;
          border-color:red;
        }
        &:checked+button:before{
          left:40%;
        }
        &:disabled+button{
          background-color:darkgray;
          border-color:darkgray;
        }
        &:disabled+button:before{
          background-color: #bfcddc;
        }
      }
    }
  }
</style>
