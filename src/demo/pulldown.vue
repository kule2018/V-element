<template>
	<div>
		<x-header>
			<div slot="title">x-pulldown</div>
		</x-header>
		<x-body>
			<x-pulldown :yMax='0.6'>
				<div>下拉我试试</div>
			</x-pulldown>
		</x-body>
	</div>
</template>

<script>
import {
	XLayout,
	XHeader,
	XBody,
	XFooter,
	XPulldown
} from 'components'
export default{
	components:{
		XLayout,
		XHeader,
		XBody,
		XFooter,
		XPulldown
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
<style>
	.x-body{
		.content{
			width: 3.75rem;
			height:3rem;
			background-color: green;
		}
	}
</style>