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
      msg: '确定要删除吗？',
      btn: {
        ok: '确定',
        no: '取消'
      }
    }).then(() => {
      console.log('yes')
    }).catch(() => {
      console.log('no')
    })
#### 4. 默认样式如下图所示：
![image]https://github.com/cyyssly/vuetify-confirm-dialog/blob/master/confirm.JPG
当然，你也可以在Confirm.vue中随意修改样式
