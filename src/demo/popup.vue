<template>
	<div>
		<x-header>
			<div slot="title">x-popup</div>
		</x-header>
		<x-body>
			<div @click='showOrHidePopup'>PopUp</div>
		</x-body>
		<x-popup :isShow='isShow' @x-close='showOrHidePopup'>
			<span @click="handlePop('delete')">删除</span>
			<span @click="handlePop('comment')">评论</span>
			<span @click="handlePop('cancle')">取消</span>
		</x-popup>
	</div>
</template>

<script>
import {
	XLayout,
	XHeader,
	XBody,
	XFooter,
	XPopup
} from 'components'
export default{
	components:{
		XLayout,
		XHeader,
		XBody,
		XPopup,
		XFooter,
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
					console.log('deleted');
					break;
				case 'comment':
					console.log('comment');
					break;
				case 'cancle':
					console.log('cancle');
					break;
				default:
					break;
			}
			this.showOrHidePopup();
		}
	}
}
</script>