<template>
	<div>
		<x-header>
			<div slot="title">x-toast</div>
		</x-header>
		<x-body>
			<x-line :left='false'>
				<div slot='center'>toast(success)</div>
				<x-switch slot='right' @x-change='handle' :value='isShow'></x-switch>
			</x-line>
			<x-line :left='false'>
				<div slot='center'>toast(fail)</div>
				<x-switch slot='right' @x-change='handle2' :value='isShow2'></x-switch>
			</x-line>
		</x-body>
		<x-toast :open='isShow' @x-close='handle'></x-toast>
		<x-toast :open='isShow2' @x-close='handle2' msg_tip='操作失败'></x-toast>
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
	XToast,
	XLine,
	XSwitch,
} from 'components'
export default{
	components:{
		XLayout,
		XHeader,
		XBody,
		XPopover,
		XFooter,
		XIcon,
		XToast,
		XLine,
		XSwitch,
	},
	data:function() {
		return{
			isShow:false,
			isShow2:false
		}
	},
	methods:{
		handle(){
			this.isShow=!this.isShow;
		},
		handle2(){
			this.isShow2=!this.isShow2;
		}
	}
}
</script>