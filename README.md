# vuetify-confirm-dialog

## 一个基于 vuetify 的 confirm 组件
## a confirm dialog base on vuetify

vuetify 是一个基于 Material Design 的 VUE 组件库，整体架构高大上，但具体细节仍有待完善。比如众多组件库都会自带的 confirm 组件，vuetify 就是没有。于是自己动手搭了一个。用户的选择结果会以 promise 对象的方式返回，以方便进行链式操作。

### 一、前置 / dependencies：vue、vuetify

### 二、使用方法 / Instructions: 

#### 1. 复制 Confirm.vue、Confirm.js 到项目目录下，个人建议在 src/components/ 下建一个 ConfirmDialog 子目录，以下代码以此为例。  
#### 1. Copy Confirm.vue, Confirm.js to the project directory, personally recommend creating a 'ConfirmDialog' subdirectory under src/components/. The following code uses this as an example.

#### 2. 在 main.js 中添加引用 / Add a reference in 'main.js': 
    import ConfirmDialog from './components/ConfirmDialog/Confirm.js'
    Vue.prototype.$confirm = ConfirmDialog
    
#### 3. 调用 / Use：  
```js
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
```
或者使用同步方式调用：  
Or use synchronous mode to call:  
```js
try {
    await this.$confirm({
        type: 'warning',
        msg: 'warning msg'
    })
} catch (err) {
    return false
}
other codes after confirmed...
```
您不必每次调用都提供全部选项，上文第一个调用示例为默认值，您只需提供与默认值不同的选项即可，例如定制一个没有“取消”按钮的确认框：
You don't have to provide all the options for each call. The first call example above is the default. You only need to provide an option different from the default value, such as customizing a confirmation box without the "Cancel" button: 

  this.$confirm({ type: success, msg: '操作成功！', btnyes: { color: 'success' }, btnno: { visible: false } })

#### 4. 默认样式如下图所示 / The default style is shown below: 
![image](https://github.com/cyyssly/vuetify-confirm-dialog/blob/master/confirm.JPG)

这里用到了 font awesome 的图标，需要添加引用才能正确显示。如果不喜欢这个样式，你也可以在 Confirm.vue 中自行修改。
Here we use the font awesome icon, you need to add a reference to display correctly. If you don't like this style, you can also modify it by yourself in 'Confirm.vue'.
