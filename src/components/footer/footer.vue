/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-22 19:08
 */
<template>
	<div :class="klass">
		<slot></slot>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
export default{
	name:'footer',
	props: {
		// some:String,
	},
	data(){
		return{
			cssArray:[prefix+'footer']
		}
	},
	computed:{
		klass(){
			return this.cssArray;
		}
	},
	methods:{
		
	},
	components:{
		
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&footer{
			position:fixed;
			width: 100%;
			bottom:0;
			left:0;
		}
	}
</style>