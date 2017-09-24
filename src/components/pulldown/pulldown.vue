/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-23 20:27
 */
<template>
	<div :class='klass'>
		<div class="wrapper" v-show='showAnimate'>
			<div class="spinner"> 
				<div class="cube"></div>
				<div class="cube"></div> 
			</div>
			<div class="tip">下拉刷新</div>
		</div>
		<slot></slot>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
// import{
	
// } from 'components';
export default{
	name:'pulldown',
	components:{
		
	},
	props: {
		yMax:{
			type:Number,
			default:0.6
		},
		loading:{
			type:Boolean,
			default:true
		}
	},
	data(){
		return{
			cssArray:[prefix+'pulldown'],
			showAnimate:false,
			htmlFontSize:100,
			maxWaiting:4,//以秒为单位
			showRate:0,
			y0:0,
			yCur:0,
			wrapElm:null,
			spinnerElm:null,
			tipElm:null,
			targetElm:null,
		}
	},
	computed:{
		klass(){
			return this.cssArray;
		}
	},
	mounted(){
		this.htmlFontSize=parseFloat(document.documentElement.style.fontSize)||this.htmlFontSize;
		// console.log(this.$slots)
		this.targetElm=this.$slots.default[0].elm;
		this.tipElm=document.querySelector('.wrapper .tip');
		this.spinnerElm=document.querySelector('.wrapper .spinner');
		this.wrapElm=document.querySelector('.wrapper');
		this.targetElm.addEventListener('touchstart',this.touchstart)
		this.targetElm.addEventListener('touchmove',this.touchmove)
		this.targetElm.addEventListener('touchend',this.touchend)
	},
	methods:{
		touchstart(e){
			this.y0=e.changedTouches[0].clientY;
		},
		touchmove(e){
			this.showAnimate=true;
			this.yCur=e.changedTouches[0].clientY;
			let y_rate=(this.yCur-this.y0)/(this.yMax*this.htmlFontSize);
			if (y_rate<0)
				return;
			if(y_rate>1)
				this.showRate=1;
			else
				this.showRate=y_rate;
			if(this.showRate>0.8)
				this.tipElm.innerHTML='松开刷新';
			console.log(this.showRate)
			this.wrapElm.style.cssText='transform:scale('+this.showRate+')';
			this.targetElm.style.cssText='transform:translateY('+this.showRate*(this.yMax*this.htmlFontSize)+'px)';
		},
		touchend(){
			if(this.showRate<1){
				setTimeout(()=>{
					this.reset();
				},0)
			}
			if (this.showRate==1) {
				this.tipElm.innerHTML='正在刷新';
				this.spinnerElm.className+=' on';//注意留个空格
				this.$emit('x-getData');

			}
		},
		reset(){
			this.showAnimate=false;
			this.tipElm.innerHTML='下拉刷新';
			this.spinnerElm.className='spinner'
			this.showRate=0;
			this.targetElm.style.cssText='transform:translateY(0)';
		}
	},
	watch:{
		loading(value){
			!value&&this.reset();
		}
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&pulldown{
			position:relative;
			width:100%;
			.wrapper{
				position:absolute;
				z-index:1;
				left:50%;
				margin-left: -0.5rem;
				// border:1px solid green;
				width:1rem;
				// height:0.5rem;
				transition:transform;
				.spinner{
					width:0.2rem;
					height:0.3rem;
					margin:0 auto;
					display:flex;
					flex-direction:column;
					justify-content:center;
					align-items:center;
					// border: 1px solid #000;
					&.on{
						animation:spinnermove 1.3s infinite;
						.cube{
							&:first-child{
					    		animation:cubemove1 1.3s infinite;
						    }
						    &:last-child{
						    	animation:cubemove2 1.3s infinite;
						    }
						}
					}
					.cube{
						&:first-child{
							margin-bottom: 0.04rem;
						}
					    background: #ed3010;
					    // border: 1px solid #000;
					    width: 0.1rem;
					    height: 0.1rem;
					    border-radius: 50%;
					    // background-color: #ccc;
					}
				}
				.tip{
					margin-top:0.06rem;
					font-size:0.12rem;
				}
			}
			>div:last-child{
				position:relative;
				z-index:100;
				// height:4rem;
				font-size: 14px;
				background-color: #ccc;
				transition:transform 0.3s;
			}
		}
	}

	@keyframes spinnermove {
	    0% {
	        transform: rotate(0deg);
	    }
	    80% {
	        transform: rotate(0deg); 
	    }
	    100% {
	        transform: rotate(180deg); 
	    } 
	}

	@keyframes cubemove1 {
	    0% {
            transform: scale(1); 
        }
	    20% {
            transform: scale(0); 
        }
	    40% {
            transform: scale(1); 
        }
	    100% {
            transform: scale(1); 
        } 
    }

    @keyframes cubemove2 {
	    40% {
	        transform: scale(1); 
	    }
	    60% {
	        transform: scale(0); 
	    }
	    80% {
	        transform: scale(1); 
	    }
	    100% {
	        transform: scale(1); 
	    } 
	}
</style>