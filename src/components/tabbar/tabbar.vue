/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-30 14:34
 */
<template>
	<div :class='klass'>
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="center2" v-show='twoCenter'>
			<slot name="center2"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
// import{
	
// } from 'components';
export default{
	name:'tabbar',
	components:{
		
	},
	props: {
		twoCenter:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			cssArray:[prefix+'tabbar']
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
		&tabbar{
			min-height:0.6rem;
			background-color: #fff;
			@extend .flex-between;
			div{
				width: 100%;
				@extend .flex-y;
			}
		}
	}
</style>