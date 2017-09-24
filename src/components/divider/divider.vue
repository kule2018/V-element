/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-08-06 09:38
 */
<template>
	<div :class='klass'>
		
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
// import{
	
// } from 'components';
export default{
	name:'divider',
	components:{
		
	},
	props: {
		// some:String,
	},
	data(){
		return{
			cssArray:[prefix+'divider']
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
		&divider{
			height: 1px;
			width: 100%;
			color: #ccc;
		}
	}
</style>