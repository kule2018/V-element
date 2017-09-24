<template>
	<div>
		<x-header :showMenu='true' :showMenuList='showMenuList' @x-close-menu='closeMenuList'>
			<div slot="title">V-Element</div>
			<div slot="menu">
				<div @click='handleMenuItem("share")'>
					<x-icon>&#xe67e;</x-icon>
					<span>分享</span>
				</div>
				<div @click='handleMenuItem("query")'>
					<x-icon>&#xe623;</x-icon>
					<span>查询</span>
				</div>
				<div @click='handleMenuItem("search")'>
					<x-icon>&#xe854;</x-icon>
					<span>搜索</span>
				</div>
			</div>
		</x-header>
		<x-body>
			<x-link to='/popup'>x-popup</x-link>
			<x-link to='/popover'>x-popover</x-link>
			<x-link to='/pulldown'>x-pulldown</x-link>
			<x-link to='/switch'>x-switch</x-link>
			<x-link to='/line'>x-line</x-link>
			<x-link to='/tabbar'>x-tabbar</x-link>
			<x-link to='/swiper'>x-swiper</x-link>
			<x-link to="/confirm">x-confirm</x-link>
			<x-link to="/spinner">x-spinner</x-link>
			<x-link to="/toast">x-toast</x-link>
			<x-link to="/listview">x-listview</x-link>
		</x-body>
	</div>
</template>

<script>
import { prefix } from 'utils/const.js';
import {
	XLayout,
	XHeader,
	XBody,
	XLink,
	XIcon,
	XConfirm,
	XToast,
	XSpinner,
	XListview,
} from 'components'
export default{
	components:{
		XLayout,
		XHeader,
		XBody,
		XLink,
		XIcon,
		XConfirm,
		XToast,
		XSpinner,
		XListview,
	},
	data(){
		return{
			showMenuList:false,
		}
	},
	methods:{
		handleMenuItem(value){
			console.log(value);
			this.showMenuList=!this.showMenuList;
		},
		closeMenuList(){
			this.showMenuList=!this.showMenuList
		}
	}
}
</script>

<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&body{
			.#{$prefix}{
				&link{
					margin:0.05rem;
				}
			}
		}
	}
</style>