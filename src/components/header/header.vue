/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-22 23:28
 */
<template>
	<div :class='klass' >
		<x-icon type="back" v-if='showBack' @x-click='handleClick'>&#xe612;</x-icon>	
		<slot name='title' class='title'></slot>
		<div class="menu" >
			<x-icon type="menu" v-if='showMenu' @x-click='handleClick'>&#xe617;</x-icon>
			<div class="menu-list" v-show='showMenu&&showMenuList'>
				<!-- <x-mask></x-mask> -->
				<slot name='menu' ></slot>
			</div>
			
		</div>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
// import XMask from '../mask/mask.vue';
import XIcon from '../icon/icon.vue'
// import {XFlexbox} from '../index.js'; //拿不到？
export default{
	name:'header',
	props: {
		showBack:{
			type:Boolean,
			default:true
		},
		showMenu:{
			type:Boolean,
			default:false
		},
		fixed:{
			type:Boolean,
			default:true
		},
		showMenuList:{
			type:Boolean,
			default:false
		},
	},
	data(){
		return{
			cssArray:[prefix+'header'],
		}
	},
	computed:{
		klass(){
			return this.cssArray;
		}
	},
	methods:{
		handleClick(type){
			switch(type){
				case 'back':
					history.back();
					break;
				case 'menu':
					this.$emit('x-close-menu');
					break;
			}
		},
		
	},
	components:{
		XIcon,
		// XMask
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&header{
			height:$header-height;
			background-color: $header-bgc;
			font-size:$header-font-size;
			font-weight:600;
			position: fixed;
			top:0;
			left:0;
			z-index:30;
			width:100%;
			height:$header-height;
			line-height:$header-height;
			display: flex;
			justify-content: space-between;
			i,.menu{
				width:$header-height;	
				font-size: $header-font-size;
			}
			.title{
				width: 100%;
				text-align: center;
			}
			.menu{
				.menu-list{
					position: fixed;
					right:0.1rem;
					height: 1.2rem;
					width: 1rem;
					background-color: #fff;
					border:0.01rem solid #ccc;
					border-radius: 0.1rem;;
					font-size: 0;
					>div{
						>div{
							height: 0.4rem;
							text-align: center;
							i{
								font-size: $body-font-size+(-0.06);
								width: 0.2rem;
								height: 0.4rem;
								line-height: 0.4rem;
								margin-right: 0.06rem;
							}
							span{
								display: inline-block;
								height: 0.4rem;
								line-height: 0.4rem;
								font-size: $body-font-size+(-0.06);
							}
							&:not(:last-child){
								border-bottom: 0.01rem solid #ccc;
							}
							&:first-child:before,&:first-child:after{
								content:'';
								position:absolute;
								height:0;
								width:0;
								border-left: 0.1rem solid transparent;
		    					border-right: 0.1rem solid transparent;
		    					border-bottom: 0.1rem solid #ccc;
								right:0.2rem;
								top:-0.1rem;
							}
							&:first-child:after{
								border-bottom: 0.1rem solid #fff;
								top:-0.08rem;
							}
						}
					}
				}
			}
		}
	}
</style>