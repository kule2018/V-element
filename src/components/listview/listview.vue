/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-08-06 15:58
 */
<template>
	<div :class='klass'>
		<x-pulldown @x-getData='getData' :loading='loading'>
			<slot></slot>
		</x-pulldown>		
		<div class="bottom" v-show='loadmore'>
			<x-spinner></x-spinner>
		</div>
		<div class="end" v-show='end'>没有更多了</div>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
import XSpinner from '../spinner/spinner.vue';
import XPulldown from '../pulldown/pulldown.vue';
export default{
	name:'listview',
	components:{
		XSpinner,
		XPulldown,
	},
	props: {
		loading:{
			type:Boolean,
			default:true
		},
		loadmore:{
			type:Boolean,
			default:false
		},
		end:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			cssArray:[prefix+'listview']
		}
	},
	computed:{
		klass(){
			return this.cssArray;
		}
	},
	methods:{
		getData(){
			this.$emit('x-getData');
		}
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&listview{
			margin-bottom: 0.5rem;
			.bottom{
				position: fixed;
				bottom: 0;
				left:0;
				right:0;
				z-index:100;
			}
		}
	}
</style>