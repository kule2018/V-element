<template>
	<div>
		<x-header>
			<div slot="title">x-listview</div>
		</x-header>
		<x-body>
			<x-listview :loading='loading' :loadmore='loadmore' @x-getData='getData' :end='this.offset>=25'>
			<div>
				<x-line v-for='v in data'>
					<!-- <img :src="v.picUrl" alt="" slot="left"> -->
					<div slot='center'>{{v.title}}</div>
				</x-line>
			</div>
			</x-listview>
		</x-body>
	</div>
</template>

<script>
import {
	XLayout,
	XHeader,
	XBody,
	XFooter,
	XPopover,
	XIcon,
	XConfirm,
	XLine,
	XSwitch,
	XListview,
} from 'components'
export default{
	components:{
		XLayout,
		XHeader,
		XBody,
		XPopover,
		XFooter,
		XIcon,
		XConfirm,
		XLine,
		XSwitch,
		XListview,
	},
	data:function() {
		return{
			isShow:false,
			data:[],
			offset:5,
			loading:true,
			loadmore:false,
		}
	},
	mounted(){
		this.getData();
		window.addEventListener('scroll',this.throttle(this.scrollHandle.bind(this),1000));
	},
	methods:{
		handle(){
			this.isShow=!this.isShow;
		},
		getData(){
			//模拟取数据操作
			this.loading=true;
			
			let _this=this;
			function success(text) {
				_this.offset+=5;
				let data=(JSON.parse(text).newslist);
				console.log(data);	
			    _this.data=data;
			    // debugger;
			    // console.log(_this.data);
			    _this.loading=false;
			    _this.loadmore=false;		
			}
			var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象
			request.onreadystatechange = function () { // 状态发生变化时，函数被回调
			    if (request.readyState === 4) { // 成功完成
			        // 判断响应结果:
			        if (request.status === 200) {
			            // 成功，通过responseText拿到响应的文本:
			            return success(request.responseText);
			        }
			    }
			}
			// 发送请求:
			request.open('GET', 'http://api.tianapi.com/social/?key=ad97b50c8552dbbacead1c7c4663058d&num='+this.offset);
			request.send();				
		},
		throttle(fn,delay){
		 	var timer = null;
		 	return ()=>{
		 		var context = this, args = arguments;
		 		clearTimeout(timer);
		 		timer = setTimeout(function(){
		 			fn.apply(context, args);
		 		}, delay);
		 	};
		},
		scrollHandle(e){
			let scrollTop=document.body.scrollTop,
				docOffsetTop=document.documentElement.offsetHeight,
				docClientTop=document.documentElement.clientHeight;
			console.log(scrollTop,docOffsetTop,docClientTop);
			if(scrollTop+docClientTop>docOffsetTop-350){
				if(this.offset<=20){
					this.loadmore=true;
					this.getData();
				}
			}
		}
	}
}
</script>
<style lang='scss'>
	@import '~assets/scss/variable.scss';
	.#{$prefix}{
		&body{
			
		}
	}
</style>