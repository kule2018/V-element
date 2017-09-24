<template>
	<div>
		<x-header>
			<div slot="title">x-line</div>
		</x-header>
		<x-body>
			<x-line>
				<x-icon slot="left">&#xe60a;</x-icon>
				<div slot="center">
					<p class="ov-elp">
					私密文章私密文章私密文章私密文章
					私密文章私密文章私密文章私密文章
					</p>
				</div>
				<span slot="right">
					4
				</span>
			</x-line>
			<x-line>
				<x-icon slot="left">&#xe60b;</x-icon>
				<p slot="center">
					收藏文章
				</p>
				<span slot="right">
					14
				</span>
			</x-line>
			<x-line>
				<x-icon slot="left">&#xe607;</x-icon>
				<p slot="center" class='ov-elp2'>
					喜欢文章喜欢文章喜欢文章喜欢文章喜欢文章喜欢文章喜欢文章喜欢文章喜欢文章喜欢文章喜欢文章喜欢文章
				</p>
				<x-icon slot="right">&#xe612;</x-icon>
			</x-line>
			<x-line>
				<img src="../assets/imgs/b.jpg" alt="" slot="left">
				<div slot="center">
					<p class="name">Vue达人</p>
					<p class="p">2017.7.8</p>
				</div>
				<x-icon slot="right">&#xe612;</x-icon>
			</x-line>

			<x-line :left='false' :start='true' class='fixHeight'>
				<div slot="center">
					<div class="wrap">
						<div class='ov-elp2'>五分钟了解谷歌全栈工程师开发的NB插件</div>
						<p>
							<span>12人喜欢</span>
							<span>豆沙</span>
							<span>3天前</span>
						</p>
					</div>
				</div>
				<img src="../assets/imgs/b.jpg" alt="" slot="right" class="rectangle">
			</x-line>
		</x-body>
	</div>
</template>

<script>
import {
	XLayout,
	XHeader,
	XBody,
	XLine,
	XIcon,
} from 'components'
export default{
	components:{
		XLayout,
		XHeader,
		XBody,
		XLine,
		XIcon,
	},
	data:function() {
		return{
			isShow:false,
		}
	},
	methods:{

	}
}
</script>
<style lang='scss'>
	.x-body{
		.x-line{
			i{
				font-size: 0.18rem;
			}
			p{
				width: 2.75rem;
				font-size: 0.16rem;
			}
			img{
				width: 0.4rem;
				height: 0.4rem;
				border-radius: 50%;
				&.rectangle{
					border-radius: 0;
				}
			}
			&.fixHeight{
				height: 1rem;
				.wrap{
					margin-top: 0.26rem;
					div{
						font-size: 0.16rem;
					}
					span{
						font-size: 0.14rem;
						color:#ccc;
					}
				}
			}
		}
	}
</style>