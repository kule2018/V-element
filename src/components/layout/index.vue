/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-22 18:41
 */
<template>
	<div :class='klass'>
		<slot name='header'></slot>
		<slot name='body'></slot>
		<slot name='footer'></slot>
		<slot></slot>
	</div>
	<!-- <router-view></router-view> -->
</template>

<script>
import { prefix } from 'utils/const.js';
import XFlexbox from '../flexbox/flexbox.vue'

export default{
	name:'layout',
	props: {
		// some:String,
	},
	data(){
		return{
			
		}
	},
	computed:{
		klass(){
			return [prefix+'layout'];
		}
	},
	methods:{
		
	},
	components:{
		XFlexbox
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&layout{
			width:100%;
			// height:667px;
		}
	}
</style>