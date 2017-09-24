<template>
	<div>
		<x-header>
			<div slot="title">x-tabbar</div>
		</x-header>
		<x-body>
			<x-swiper @x-change='handleClick' :active='index'>
				<div class="swiper-slide">主页</div>
				<div class="swiper-slide">音乐</div>
				<div class="swiper-slide">我的</div>
			</x-swiper>
		</x-body>
		<x-footer>
			<x-tabbar>
				<div slot="left" @click='handleClick(0)' :class='index==0?"on":""'>
					<x-icon>&#xe600;</x-icon>
					<span>主页</span>
				</div>
				<div slot="center" @click='handleClick(1)' :class='index==1?"on":""'>
					<x-icon>&#xe672;</x-icon>
					<span>音乐</span>
				</div>
				<div slot="right" @click='handleClick(2)' :class='index==2?"on":""'>
					<x-icon>&#xe618;</x-icon>
					<span>我的</span>
				</div>
			</x-tabbar>
		</x-footer>
	</div>
</template>

<script>
import {
	XLayout,
	XHeader,
	XBody,
	XFooter,
	XTabbar,
	XIcon,
	XSwiper,
} from 'components'
export default{
	components:{
		XLayout,
		XHeader,
		XBody,
		XTabbar,
		XFooter,
		XIcon,
		XSwiper,
	},
	data:function() {
		return{
			index:0,
		}
	},
	methods:{
		handleClick(num){
			this.index=num;
		}
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&footer{
			i{
				font-size: 0.2rem;
			}
			span{
				font-size: 0.1rem;
			}
			.on{
				color:red;
			}
		}
		&swiper{
			&.swiper-container{
				height: 5.67rem;
				width: 100%;
			}
		}
	}
</style>