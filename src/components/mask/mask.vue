/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-23 14:02
 */
<template>
	<div :class='klass' @click='close'>
		
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
// import{
	
// } from 'components';
export default{
	name:'mask',
	components:{
		
	},
	props: {

	},
	data(){
		return{
			cssArray:[prefix+'mask']
		}
	},
	computed:{
		klass(){
			return this.cssArray;
		}
	},
	methods:{
		close(){
			this.$emit('x-click');
		}
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&mask{
			position:fixed;
			// z-index: 1000;
			top:0;
			left:0;
			width:3.75rem;
			height:6.67rem;
			background-color: #000;
			opacity:0.35;
		}
	}
</style>