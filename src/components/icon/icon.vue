/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-23 09:02
 */
<template>
	<i :class='klass' @click='handleClick'>
		<slot></slot>
	</i>
</template>

<script>
import { prefix } from 'utils/const.js';

export default{
	name:'',
	components:{
		
	},
	props: {
		type:{
			type:String,
			default:''
		}
	},
	data(){
		return{
			cssArray:[prefix+'iconfont']
		}
	},
	computed:{
		klass(){
			return this.cssArray;
		}
	},
	methods:{
		handleClick(){
			this.$emit('x-click',this.type);
		}
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	@font-face {
	  font-family: 'x-iconfont';  /* project id 362055 */
	  src: url('./iconfont/iconfont.eot');
	  src: url('./iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
	  url('./iconfont/iconfont.woff') format('woff'),
	  url('./iconfont/iconfont.ttf') format('truetype'),
	  url('./iconfont/iconfont.svg#iconfont') format('svg');
	}
	.#{$prefix}{
		&iconfont{
			font-family:"x-iconfont" !important;
	      	font-size:0.4rem;
	      	font-style:normal;
	      	-webkit-font-smoothing: antialiased;
	      	-moz-osx-font-smoothing: grayscale;
	      	display: inline-block;
		}
	}
</style>