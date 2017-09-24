<template>
	<div>
		<x-header>
			<div slot="title">x-popover</div>
		</x-header>
		<x-body>
			<div @click='showOrHidePopup'>PopOver</div>
		</x-body>
		<x-popover :isShow='isShow' @x-close='showOrHidePopup'>
			<div @click='handlePop'>
				<x-icon>&#xe854;</x-icon>
				<span>搜一搜</span>
			</div>
			<div @click='handlePop'>
				<x-icon>&#xe67e;</x-icon>
				<span>找朋友</span>
			</div>
			<div @click='handlePop'>
				<x-icon>&#xe623;</x-icon>
				<span>收付款</span>
			</div>
		</x-popover>
	</div>
</template>

<script>
import {
	XLayout,
	XHeader,
	XBody,
	XFooter,
	XPopover,
	XIcon
} from 'components'
export default{
	components:{
		XLayout,
		XHeader,
		XBody,
		XPopover,
		XFooter,
		XIcon
	},
	data:function() {
		return{
			isShow:false,
		}
	},
	methods:{
		showOrHidePopup(){
			this.isShow=!this.isShow;
		},
		handlePop(type){
			switch(type){
				case 'delete':
					alert('deleted');
					break;
				case 'comment':
					alert('comment');
					break;
				case 'cancle':
					alert('cancle');
					break;
				default:
					break;
			}
			this.showOrHidePopup();
		}
	}
}
</script>