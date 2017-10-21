/** * @Authors 冯银超 (yinchaofeng@sohu-inc.com) * @Date 2017-08-06 09:01 */
<template>
    <transition name='confirm-fade'>
        <div :class='klass' @click='eventHandle'>
            <x-mask event-tag='cancle'></x-mask>
            <div class="wrapper">
                <div class="content">{{str_content}}</div>
                <div class="cancle-confirm">
                    <span class="cancle" event-tag='cancle'>{{str_cancle}}</span>
                    <span class="confirm" event-tag='confirm'>{{str_confirm}}</span>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { prefix } from 'utils/const.js';
import XMask from '../mask/mask.vue';
// import{

// } from 'components';
export default {
    name: 'confirm',
    components: {
        XMask,
    },
    props: {
        str_confirm: {
            type: String,
            default: '确认'
        },
        str_content: {
            type: String,
            default: '确认删除？'
        },
        str_cancle: {
            type: String,
            default: '取消'
        },
        open: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            cssArray: [prefix + 'confirm']
        }
    },
    computed: {
        klass() {
            return this.cssArray;
        }
    },
    methods: {
        eventHandle(e) {
            let type = e.target.getAttribute('event-tag');
            switch (type) {
                case 'cancle':
                    console.log('cancel');
                    this.$emit('x-cancel');
                    break;
                case 'confirm':
                    console.log('confirm');
                    this.$emit('x-confirm');
                    break;
            }
        }
    },
    mounted() {

    }
}

</script>
<style lang='scss'>
@import '~assets/scss/variable.scss';
@import '~assets/scss/base.scss';
.#{$prefix} {
    &confirm {
        position: fixed;
        z-index: 40;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .wrapper {
            z-index: 200;
            display: flex;
            flex-direction: column;
            font-size: 14px;
            border-radius: 0.04rem;
            @extend .xy-center;
            width: 80%;
            height: 1rem;
            background: #fff;
            .content {
                height: 0.6rem;
                line-height: 0.6rem;
                border-bottom: 1px solid #f3f4f5;
            }
            .cancle-confirm {
                height: 0.4rem;
                line-height: 0.4rem;
                font-size: 0;
                span {
                    width: 50%;
                    display: inline-block;
                    font-size: 12px;
                    &:first-child {
                        border-right: 1px solid #f3f4f5;
                    }
                }
            }
        }
    }
}

.confirm-fade-enter-active,
.confirm-fade-leave-active {
    transition: transform .3s, opacity .3s;
}

.confirm-fade-enter {
    opacity: 0;
    transform: scale(1.3);
}

.confirm-fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

</style>
