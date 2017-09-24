/**
 * @Authors 冯银超 (yinchaofeng@sohu-inc.com)
 * @Date    2017-07-22 21:53
 */
<template>
	<div :class='klass'>
		<slot></slot>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
// import{
	
// } from 'components';
let flexMap={
	direction:'flex-y',
	justify:'justify-center',
	align:'align-center',
	wrap:'flex-wrap'
};
// flexMap.__proto__=null;
export default{
	name:'',
	props: {
		direction:{
			type:String,
			default:''
		},
		justify:{
			type:String,
			default:''
		},
		align:{
			type:String,
			default:''
		},
		wrap:{
			type:String,
			default:''
		}
	},
	data(){
		return{
			cssArray:[prefix+'flexbox']
		}
	},
	computed:{
		klass(){
			for(var prop in flexMap)
				this[prop]!==flexMap[prop]?this.cssArray.push(this[prop]):this.cssArray.push(flexMap[prop])
			return this.cssArray;
		}
	},
	methods:{
		
	},
	components:{
		
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&flexbox{
			display:flex;
			height:100%;
		}
	}
</style>