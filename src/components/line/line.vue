/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-29 21:23
 */
<template>
	<div :class='klass'>
		<div class="left" v-show='left'>
			<slot name='left'></slot>
		</div>
		<div :class="['center',start?'flex-start':'']">
			<slot name="center"></slot>
		</div>
		<div class="right" v-show='right'>
			<slot name="right"></slot>
		</div>		
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
// import{
	
// } from 'components';
export default{
	name:'line',
	components:{
		
	},
	props: {
		left:{
			type:Boolean,
			default:true
		},
		right:{
			type:Boolean,
			default:true
		},
		start:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			cssArray:[prefix+'line']
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
		&line{
			display: flex;
			justify-content: space-between;
			align-items:center;
			min-height: 0.5rem;
			width: 100%;
			background-color: #fff;
			border-bottom: 0.01rem solid lightgray;
			>div{
				display: inline-block;
				display: flex;
				align-items:center;			
				text-align: left;
				&.center{
					width: 100%;
				}
				&.left,&.right{
					min-width: 0.4rem;
					justify-content: center;
				}
				&.flex-start{
					align-self:flex-start;
				}
			}
		}
	}
</style>