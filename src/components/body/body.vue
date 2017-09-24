/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-23 00:16
 */
<template>
	<div :class='klass'>
		<x-flexbox wrap='flex-wrap' align='align-start' justify='justify-center'>
			<slot></slot>
		</x-flexbox>	
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
import XFlexbox from '../flexbox/flexbox.vue'
export default{
	name:'body',
	components:{
		XFlexbox
	},
	props: {
		// some:String,
	},
	data(){
		return{
			cssArray:[prefix+'body']
		}
	},
	computed:{
		klass(){
			return this.cssArray;
		}
	},
	methods:{
		
	}
}
</script>
<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&body{
			margin-top:$header-height;
			padding:$body-padding;
			background-color: $body-bgc;
			font-size: $body-font-size;
			min-height:6.17rem;
			position: relative;
			z-index: 10;
		}
	}
</style>