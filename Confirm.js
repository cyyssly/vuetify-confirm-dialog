import Vue from "vue"
import Confirm from "./Confirm.vue"

let ConfirmConstructor = Vue.extend(Confirm)

let theConfirm = function (text) {
	return new Promise((resolve, reject) => {
		// promise封装，ok执行resolve，no执行rejectlet
		let confirmDom = new ConfirmConstructor({
			el: document.createElement("div")
		})
		document.body.appendChild(confirmDom.$el) // new一个对象，然后插入body里面

		confirmDom.text = text // 为了使confirm的扩展性更强，这个采用对象的方式传入，所有的字段都可以根据需求自定义
		confirmDom.ok = function () {
			resolve(true)
			confirmDom.isShow = false
		}
		confirmDom.close = function () {
			reject(new Error(false))
			confirmDom.isShow = false
		}
	})
}

export default theConfirm

// 暴露出去，别忘记挂载到vue的原型上
//   => 在main.js里面先引入 import theConfirm from './components/confirm/confirm.js'
//   => 再挂载 Vue.prototype.$confirm = theConfirm;
// 在需要的地方直接用以下方法调用即可：
//   this.$confirm({
//     type: '提示',
//     msg: '确定要删除吗？',
//     btn: {
//       ok: '确定',
//       no: '取消'
//   }
//   }).then(() => {
//     console.log('ok')
//   })
//   .catch(() => {
//     console.log('no')
//   })
