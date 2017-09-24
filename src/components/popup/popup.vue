/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-23 13:58
 */
<template>
	<div :class='klass'>
		<transition name='fade-in'>
			<x-mask v-show='isShow' @x-click='close'></x-mask>
		</transition>
		<transition name='slow-up'>
			<div :class="klass+'-column'" v-show='isShow'>
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
import XMask from '../mask/mask.vue';
import XFlexbox from '../flexbox/flexbox.vue';
// import{
	
// } from 'components';
export default{
	name:'popup',
	components:{
		XMask,
		XFlexbox,
	},
	props: {
		isShow:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			cssArray:[prefix+'popup'],
		}
	},
	mounted () {
      if (this.isShow) {
        requestAnimationFrame(() => {
          // this.pushState()
          this.$el.style.display = 'block'
        })
      }
    },
    watch: {
      isShow(){
      	if(this.isShow){
      		requestAnimationFrame(() => {
	            this.$el.style.display = 'block'
	        })
      	}
        else{
	        setTimeout(() => {
		        requestAnimationFrame(() => {
		            this.$el.style.display = 'none'
		        })
		    }, 1000)
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
		&popup{
			width:3.75rem;
			height:6.67rem;
			position: fixed;
			top:0;
			left:0;
			z-index:20;
			display:none;
			&-column{
				position:fixed;
				bottom:0;
				left:0;
				display:flex;
				flex-direction:column;
				justify-content:center;
				// transform:translateY(0);
				align-items:center;
				width:100%;
				height:1.5rem;
				background-color: #fff;
				>span{
					position: relative;
					width:100%;
					font-size:$body-font-size+(-0.06);
					height:1.5rem;
					// min-height:3rem;
					line-height:0.5rem;
					&:not(:last-child):after{
						content:'';
						position:absolute;
						height:0.01rem;
						width:100%;
						background-color: #ccc;
						left:0;
						bottom:0;
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
	.slow-up-enter-active,.slow-up-leave-active{
		transition: transform 0.3s;
	}
	.slow-up-enter,.slow-up-leave-active{
		transform:translateY(100%);
	}
</style>