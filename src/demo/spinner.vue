<template>
	<div>
		<x-header>
			<div slot="title">x-spinner</div>
		</x-header>
		<x-body>
			<x-spinner></x-spinner>
		</x-body>
	</div>
</template>

<script>
import {
	XLayout,
	XHeader,
	XBody,
	XFooter,
	XSpinner,
} from 'components'
export default{
	components:{
		XLayout,
		XHeader,
		XBody,
		XFooter,
		XSpinner,
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