/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-23 10:46
 */
<template>
	<div :class='klass'>
		<router-link :to='to'>
			<slot></slot>
		</router-link>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
// import{
	
// } from 'components';
export default{
	name:'link',
	components:{
		
	},
	props: {
		to:{
			type:String,
			default:'/'
		},
		active:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			cssArray:[prefix+'link']
		}
	},
	computed:{
		klass(){
			this.active&&this.cssArray.push('x-link-active');
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
		&link{
			width:$link-width;
			line-height:$link-height;
			border:0.01rem solid #ccc;
			border-radius:0.1rem;
			color:$link-font-color;
			&-active{
				background-color:rgba(0,0,0,0.03);
			}
		}
	}
</style>