<template>
	<div>
		<x-header>
			<div slot="title">x-swiper</div>
		</x-header>
		<x-body class='nopadding'>
			<x-swiper :options='options' :pagination='true' @x-change='handleSlide'>
				<!--必须加swiper-slide类-->
				<img class="swiper-slide" src="../assets/imgs/b.jpg"alt="">
				<img class="swiper-slide" src="../assets/imgs/b.jpg"alt="">
				<img class="swiper-slide" src="../assets/imgs/b.jpg"alt="">				
			</x-swiper>
		</x-body>
	</div>
</template>

<script>
import {
	XLayout,
	XHeader,
	XBody,
	XSwiper,
	XLine,
} from 'components'
export default{
	components:{
		XLayout,
		XHeader,
		XBody,
		XSwiper,
		XLine,
	},
	data:function() {
		return{
	        options: {
		        // autoplay: 2500
		    }
		}
	},
	methods:{
		handleSlide(value){
			console.log(value)
		}
	}
}
</script>
<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&body{
			&.nopadding{
				padding: 0 !important;
			}
			img{
				width: 3.75rem;
				height: 3rem;
			}
		}
	}
</style>