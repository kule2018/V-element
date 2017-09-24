import Vue from 'vue'
import Router from 'vue-router'
import Index from 'demo/index'
import Popup from 'demo/popup'
import Popover from 'demo/popover'
import Pulldown from 'demo/pulldown'
import Switch from 'demo/switch'
import Line from 'demo/line'
import Tabbar from 'demo/tabbar'
import Swiper from 'demo/swiper'
import Confirm from 'demo/confirm'
import Toast from 'demo/toast'
import Spinner from 'demo/spinner'
import Listview from 'demo/listview'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		component: Index
	}, {
		path: '/popup',
		component: Popup
	}, {
		path: '/popover',
		component: Popover
	}, {
		path: '/pulldown',
		component: Pulldown
	}, {
		path: '/switch',
		component: Switch
	}, {
		path: '/line',
		component: Line
	}, {
		path: '/tabbar',
		component: Tabbar
	}, {
		path: '/swiper',
		component: Swiper
	}, {
		path: '/confirm',
		component: Confirm
	}, {
		path: '/toast',
		component: Toast
	}, {
		path: '/spinner',
		component: Spinner
	}, {
		path: '/listview',
		component: Listview
	}]
})