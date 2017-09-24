<template>
	<div>
		<x-header>
			<div slot="title">x-switch</div>
		</x-header>
		<x-body>
			<x-line :left='false'>
				<span slot="center">
					测试switch(disabled)
				</span>
				<x-switch slot="right" :disabled='disabled'>switch</x-switch>
			</x-line>
			<x-line :left='false'>
				<span slot="center">
					测试switch ({{checked}})
				</span>
				<x-switch slot="right" @x-change='handleSwitch' :value='checked'>switch</x-switch>
			</x-line>
		</x-body>
	</div>
</template>

<script>
import {
	XLayout,
	XHeader,
	XBody,
	XSwitch,
	XLine,
} from 'components'
export default{
	components:{
		XLayout,
		XHeader,
		XBody,
		XSwitch,
		XLine,
	},
	data:function() {
		return{
			checked:false,
			disabled:true
		}
	},
	methods:{
		handleSwitch(v){
			this.checked=!this.checked;
			console.log(v)
		}
	}
}
</script>
<style>

</style>