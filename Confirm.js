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

		// 为了使confirm的扩展性更强，自定义元素采用对象的方式传入，所有的字段都可以根据需求重新定义
		// confirmDom.text结构及默认值如下：
		confirmDom.text = {
			title: "提示",
			type: "warning", // 可选success、info、warning、error
			msg: "确定要删除吗？",
			btnyes: {
				text: "确定",
				icon: "fa-check",
				color: "warning",
				visible: true
			},
			btnno: {
				text: "取消",
				icon: "fa-times",
				color: "info",
				visible: true
			}
		}
		// 用传入的值覆盖默认值
		if (text.title) {
			confirmDom.text.title = text.title
		}
		if (text.type) {
			confirmDom.text.type = text.type
		}
		if (text.msg) {
			confirmDom.text.msg = text.msg
		}
		Object.assign(confirmDom.text.btnyes, text.btnyes)
		Object.assign(confirmDom.text.btnno, text.btnno)
		// 根据用户选择返回resolve或reject
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
