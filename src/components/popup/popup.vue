/** * @Authors 冯银超 (yinchaofeng@sohu-inc.com) * @Date 2017-07-23 13:58 */
<template>
    <transition name='fade-in'>
        <div :class='klass'>
            <x-mask></x-mask>
            <transition name='slowup'>
                <div :class="klass+'-column'" v-show='isShow'>
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
import { prefix } from 'utils/const.js';
import XMask from '../mask/mask.vue';
import XFlexbox from '../flexbox/flexbox.vue';
// import{

// } from 'components';
export default {
    name: 'popup',
    components: {
        XMask,
        XFlexbox,
    },
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            cssArray: [prefix + 'popup'],
        }
    },
    mounted() {

    },
    computed: {
        klass() {
            return this.cssArray;
        }
    },
    methods: {
        close() {
            this.$emit('x-close');
        }
    }
}

</script>
<style lang='scss'>
@import '~assets/scss/variable.scss';
.#{$prefix} {
    &popup {
        width: 3.75rem;
        height: 6.67rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20; // display:none;
        &-column {
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 200;
            display: flex;
            flex-direction: column;
            justify-content: center; // transform:translateY(0);
            align-items: center;
            width: 100%;
            height: 1.5rem;
            background-color: #fff;
            >span {
                position: relative;
                width: 100%;
                font-size: $body-font-size+(-0.06);
                height: 1.5rem; // min-height:3rem;
                line-height: 0.5rem;
                &:not(:last-child):after {
                    content: '';
                    position: absolute;
                    height: 0.01rem;
                    width: 100%;
                    background-color: #ccc;
                    left: 0;
                    bottom: 0;
                }
            }
        }
    }
}

.fade-in-enter-active,
.fade-in-leave-active {
    transition: opacity 0.3s cubic-bezier(1, .08, .98, .2);
}

.fade-in-enter,
.fade-in-leave-active {
    opacity: 0; // transform: translateY(100%);
}

.slowup-enter-active,
.slowup-leave-active {
    transition: transform 0.3s cubic-bezier(1, .08, .98, .2)
}

.slowup-enter,
.slowup-leave-active {
    transform: translateY(100%);
}

</style>
