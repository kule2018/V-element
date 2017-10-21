<template>
    <div>
        <x-header>
            <div slot="title">x-confirm</div>
        </x-header>
        <x-body>
            <x-line :left='false'>
                <div slot='center'>confirm</div>
                <x-switch slot='right' @x-change='handle' :value='isShow'></x-switch>
            </x-line>
        </x-body>
        <x-confirm v-show='isShow' @x-cancel='handle' @x-confirm='handle'></x-confirm>
    </div>
</template>
<script>
import {
    XLayout,
    XHeader,
    XBody,
    XFooter,
    XPopover,
    XIcon,
    XConfirm,
    XLine,
    XSwitch,
} from 'components'
export default {
    components: {
        XLayout,
        XHeader,
        XBody,
        XPopover,
        XFooter,
        XIcon,
        XConfirm,
        XLine,
        XSwitch,
    },
    data: function() {
        return {
            isShow: false,
        }
    },
    methods: {
        handle() {
            console.log('cancle-2')
            this.isShow = !this.isShow;
        }
    }
}

</script>
