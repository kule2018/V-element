/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-08-06 09:01
 */
<template>
	<div :class='klass'>
		<transition name='confirm-fade'>
			<x-mask v-show='open'></x-mask>
		</transition>
		<transition name='confirm-scale'>
			<div class="wrapper" v-show='open'>
				<div class="content">{{str_content}}</div>
				<div class="cancle-confirm">
					<span class="cancle" @click='cancel'>{{str_cancle}}</span>
					<span class="confirm" @click='confirm'>{{str_confirm}}</span>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
import XMask from '../mask/mask.vue';
// import{
	
// } from 'components';
export default{
	name:'confirm',
	components:{
		XMask,
	},
	props: {
		str_confirm:{
			type:String,
			default:'确认'
		},
		str_content:{
			type:String,
			default:'确认删除？'
		},
		str_cancle:{
			type:String,
			default:'取消'
		},
		open:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			cssArray:[prefix+'confirm']
		}
	},
	computed:{
		klass(){
			return this.cssArray;
		}
	},
	methods:{
		cancel() {
	      this.$emit('x-cancel')
	    },
	    confirm() {
	      this.$emit('x-confirm')
	    }
	},
	mounted () {
      if (this.open) {
        requestAnimationFrame(() => {
          // this.pushState()
          this.$el.style.display = 'block'
        })
      }
    },
    watch: {
      open(){
      	if(this.open){
      		// requestAnimationFrame(() => {
	            this.$el.style.display = 'block'
	        // })
      	}
        else{
	        setTimeout(() => {
		        requestAnimationFrame(() => {
		            this.$el.style.display = 'none'
		        })
		    }, 600)
        }
      }
    },
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	@import '~assets/scss/base.scss';
	.#{$prefix}{
		&confirm{	
			position: fixed;
			z-index:20;
			top:0;
			left:0;
			width: 100%;
			height: 100%;
			display:none;				
			.wrapper{
				display: flex;
				flex-direction: column;
				font-size: 14px;
				border-radius: 0.04rem;
				@extend .xy-center;
				width: 80%;
				height: 1rem;
				background: #fff;
				.content{
					height: 0.6rem;
					line-height: 0.6rem;
					border-bottom: 1px solid #f3f4f5;
				}
				.cancle-confirm{
					height: 0.4rem;
					line-height: 0.4rem;
					font-size: 0;
					span{
						width: 50%;
						display: inline-block;
						font-size: 12px;
						&:first-child{
							border-right:1px solid #f3f4f5;
						}
					}
				}
			}	
		}
	}
	.confirm-scale-enter-active, .confirm-scale-leave-active {
	    transition: transform .3s,opacity .3s;
	}
	.confirm-scale-enter{
	    opacity:0;
	    transform: scale(1.3);
	}
	  .confirm-scale-leave-active{
	    opacity:0;
	    transform: scale(0.9);
	  }
	  .confirm-fade-enter-active, .confirm-fade-leave-active {
	    transition: opacity .3s;
	  }
	  .confirm-fade-enter, .confirm-fade-leave-active {
	    opacity: 0;
	  }
</style>