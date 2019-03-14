# vuetify-confirm-dialog

## a confirm dialog base on vuetify 一个基于vuetify的confirm组件

vuetify是一个基于Material Design的VUE组件库，整体架构高大上，但具体细节仍有待完善。比如众多组件库都会自带的confirm组件，vuetify就是没有。于是自己动手搭了一个。用户的选择结果会以promise对象的方式返回，以方便进行链式操作。

### 一、前置 dependencies：vue、vuetify

### 二、使用方法：
#### 1. 复制Confirm.vue、Confirm.js到项目目录下，个人建议在src/components/下建一个ConfirmDialog子目录，以下代码以此为例。
#### 2. 在main.js中添加引用：
    import ConfirmDialog from './components/ConfirmDialog/Confirm.js'
    Vue.prototype.$confirm = ConfirmDialog
#### 3. 调用：
    this.$confirm({
      title: '提示',
      type: 'warning', // success, info, warning or error
      msg: '确定要删除吗？',
      btnyes: {
		text: '确定',
		icon: 'fa-check',
		color: 'warning', 
		visible: true
	  },
	  btnno: {
		text: '取消',
		icon: 'fa-times',
		color: 'info',
		visible: true
	  }
    }).then(() => {
      console.log('yes')
    }).catch(() => {
      console.log('no')
    })
您不必每次调用都提供全部选项，上例为默认值，您只需提供与默认值不同的选项即可，例如：

  this.$confirm({ type: success, btnyes: { color: 'success' }, btnno: { visible: false } })

#### 4. 默认样式如下图所示：
![image](https://github.com/cyyssly/vuetify-confirm-dialog/blob/master/confirm.JPG)

这里用到了font awesome的图标，需要在入口index.html中添加引用才能正确显示。如果不喜欢这个样式，你也可以在Confirm.vue中自行修改。
