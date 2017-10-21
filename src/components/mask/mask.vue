/** * @Authors 冯银超 (yinchaofeng@sohu-inc.com) * @Date 2017-07-23 14:02 */
<template>
    <div :class='klass'>
    </div>
</template>
<script>
import { prefix } from 'utils/const.js';
// import{

// } from 'components';
export default {
    name: 'mask',
    data() {
        return {
            cssArray: [prefix + 'mask']
        }
    },
    computed: {
        klass() {
            return this.cssArray;
        }
    }
}

</script>
<style lang='scss'>
@import '~assets/scss/variable.scss';
.#{$prefix} {
    &mask {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 3.75rem;
        height: 6.67rem;
        background-color: #000;
        opacity: 0.35;
        transform: scale(1.1);
    }
}

</style>
