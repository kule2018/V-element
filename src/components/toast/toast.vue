/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-08-06 11:59
 */
<template>
	<div :class='klass'>
		<transition name='toast-fade'>
			<div class="toast-wrapper" v-show='open'>
				<x-icon v-if="msg_tip=='操作成功'">&#xe67a;</x-icon>
				<x-icon v-else>&#xe6f9;</x-icon>
				<span>{{msg_tip}}</span>
			</div>
		</transition>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
import XIcon from '../icon/icon.vue';
export default{
	name:'toast',
	components:{
		XIcon,
	},
	props: {
		msg_tip:{
			type:String,
			default:'操作成功'
		},
		open:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			cssArray:[prefix+'toast']
		}
	},
	computed:{
		klass(){
			return this.cssArray;
		}
	},
	methods:{
		
	},
	mounted(){
	},
	watch:{
		open(value){
			if(value){
				setTimeout(()=>{
					this.$emit('x-close')
				},1000)
			}
		}
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	@import '~assets/scss/base.scss';
	.#{$prefix}{
		&toast{
			position: fixed;
			z-index:20;
			.toast-wrapper{
				@extend .xy-center;
				@extend .flex-center;
				flex-direction: column;
				width: 30%;
				height: 1rem;
				font-size: 14px;
				background:rgba(0,0,0,0.8);
		        color:#fff;
		        padding: 0.2rem;
		        border-radius:0.03rem;
		        box-shadow: 0 0.01rem 0.04rem rgba(0,0,0,0.2);
			}
		}
	}
	.toast-fade-enter-active,.toast-fade-leave-active{
		transition:transform .3s;
	}
	.toast-fade-enter,.toast-fade-leave-active{
		opacity:0;
	}
</style>