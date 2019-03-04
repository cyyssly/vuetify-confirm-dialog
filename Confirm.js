import Vue from "vue"
import Confirm from "./Confirm.vue"

let ConfirmConstructor = Vue.extend(Confirm)

let theConfirm = function (text) {
	return new Promise((resolve, reject) => {
		// promise封装，ok执行resolve，no执行reject
		let confirmDom = new ConfirmConstructor({
			el: document.createElement("div")
		})
		document.body.appendChild(confirmDom.$el) // new一个对象，然后插入body里面

		confirmDom.text = text // 为了使confirm的扩展性更强，采用对象的方式传入，所有的字段都可以根据需求自定义
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
