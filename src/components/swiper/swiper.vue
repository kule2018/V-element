/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-30 16:10
 */
<template>
	<div :class='klass'>
		<div class="swiper-wrapper">
	        <slot></slot>
	    </div>
	    <div v-if="pagination" class="swiper-pagination"></div>
	    <div v-if="prev" class="swiper-button-prev"></div>
	    <div v-if="next" class="swiper-button-next"></div>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
import './swiper-3.4.2.min.css'
import './swiper-3.4.2.min.js'
// import{
	
// } from 'components';
export default{
	name:'swiper',
	components:{
		
	},
	props: {
		active:{
			type:Number,
			default:0
		},
	    options: {
	      type: Object
	    },
	    pagination: {
	      type: Boolean,
	      default: false
	    },
	    prev: {
	      type: Boolean,
	      default: false
	    },
	    next: {
	      type: Boolean,
	      default: false
	    }
	},
	data(){
		return{
			cssArray:[prefix+'swiper']
		}
	},
	mounted () {
	    let options = Object.assign({
	      initialSlide: 0,
	      onSlideChangeStart: (swiper) => {
	        this.$emit('x-change', swiper.activeIndex)
	      }
	    }, this.options)
	    if (this.pagination) {
	      options.pagination = '.swiper-pagination'
	    }
	    if (this.prev) {
	      options.prevButton = '.swiper-button-prev'
	    }
	    if (this.next) {
	      options.nextButton = '.swiper-button-next'
	    }
	    this.swiper = new Swiper(this.$el, options)
	},
	computed:{
		klass(){
			this.cssArray.push('swiper-container');
			return this.cssArray;
		}
	},
	methods:{
		
	},
	watch:{
		active(){
			this.swiper.slideTo(this.active)
		}
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&swiper{
			&.swiper-container{
				height: 3rem;
				width: 3.75rem;
			}
		}
	}
</style>