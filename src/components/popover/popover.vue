/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-23 13:58
 */
<template>
	<div :class='klass'>
		<transition name='fade-in'>
			<x-mask v-if='isShow' @x-click='close'></x-mask>
		</transition>
		<transition name='slow-left'>
			<div :class="klass+'-column'" v-if='isShow'>
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
import XMask from '../mask/mask.vue';
export default{
	name:'popover',
	components:{
		XMask,
	},
	props: {
		isShow:{
			type:Boolean,
			default:false
		},
		top:{
			type:Number,
			default:0
		},
		right:{
			type:Number,
			default:0
		},
	},
	data(){
		return{
			cssArray:[prefix+'popover'],
		}
	},
    watch: {
      isShow(){
      	if(this.isShow){
      		// requestAnimationFrame(() => {
	            this.$el.style.display = 'block'
	        // })
      	}
        else{
	        setTimeout(() => {
		        requestAnimationFrame(() => {
		            this.$el.style.display = 'none'
		        })
		    }, 300)
        }
      }
    },
	computed:{
		klass(){
			return this.cssArray;
		}
	},
	methods:{
		close(){
			this.$emit('x-close');
		}
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&popover{
			width:3.75rem;
			height:6.67rem;
			position: fixed;
			top:0;
			left:0;
			z-index:20;
			display:none;
			&-column{
				position:fixed;
				z-index:1;
				top:1.1rem;
				right:0.2rem;
				display:flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				width:40%;
				height:2.1rem;
				border-radius:0.1rem;
				background-color: #fff;
				>div{
					position: relative;
					width:100%;
					font-size:$body-font-size;
					height:0.7rem;
					min-height:0.7rem;
					line-height:0.7rem;
					i{
						width:0.2rem;
						height:100%;
						margin-right:0.1rem;
						line-height:0.7rem;
						font-size: $body-font-size;
					}
					&:not(:last-child):after{
						content:'';
						position:absolute;
						height:0.01rem;
						width:100%;
						background-color: #ccc;
						left:0;
						bottom:0;
					}
					&:first-child:before{
						content:'';
						position:absolute;
						height:0;
						width:0;
						border-left: 0.1rem solid transparent;
    					border-right: 0.1rem solid transparent;
    					border-bottom: 0.1rem solid #fff;
						left:0.2rem;
						top:-0.09rem;
					}
				}
			}
		}
	}
	.fade-in-enter-active,.fade-in-leave-active{
		transition: opacity 0.3s;
	}
	.fade-in-enter,.fade-in-leave-active{
		opacity:0
	}
	.slow-left-enter-active,.slow-left-leave-active{
		transition: transform 0.3s;
	}
	.slow-left-enter,.slow-left-leave-active{
		transform:translateX(100%);
	}
</style>