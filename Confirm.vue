<template>
  <!-- 标准html版本，不依赖组件库
  <div class="confirm" v-if="isShow">
    <div class="con_box">
      <div class="context">
        <h6>{{text.title}}</h6>
        <p>{{text.msg}}</p>
        <div class="btn">
          <span @click="close()" v-if="text.btn.no">{{text.btn.no}}</span>
          <span @click="ok()" v-if="text.btn.ok">{{text.btn.ok}}</span>
        </div>
      </div>
    </div>
  </div>-->
  <v-layout row justify-center>
    <v-dialog v-model="isShow" persistent max-width="300">
      <v-card>
        <v-card-title class="warning lighten-2 subheading">
          <v-icon id="homeicon" class="fas fa-exclamation-circle">&nbsp;&nbsp;{{text.title}}</v-icon>
        </v-card-title>
        <v-card-text class="subheading text-md-center mt-3">{{text.msg}}</v-card-text>
        <v-card-actions>
          <v-layout row justify-space-around>
            <v-btn v-if="text.btn.ok" flat color="error" class="mb-2" @click="ok()">
              <i class="fa fa-check"></i>&nbsp;&nbsp;{{text.btn.ok}}
            </v-btn>
            <v-btn v-if="text.btn.no" flat color="primary" class="mb-2" @click="close()">
              <i class="fa fa-times"></i>&nbsp;&nbsp;{{text.btn.no}}
            </v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      isShow: true,
      text: {
        title: '提示',
        msg: '确定要删除吗？',
        btn: {
          ok: '确定',
          no: '取消'
        }
      }
    }
  },
  methods: {
    close () {
      console.log('关闭')
    },
    ok () {
      console.log('确定')
    }
  }
}
</script>
<style scoped>
/* .confirm {
	background-color: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
}
.con_box {
	width: 75%;
	height: 22%;
	background-color: white;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	border-radius: 5px;
}
.context {
	padding: 10px;
}
.context h6 {
	font-size: 24px;
	padding: 15px;
}
.context p {
	font-size: 20px;
	padding: 35px 15px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.btn {
	padding: 15px;
	text-align: right;
}
.btn span {
	padding: 10px 35px;
	color: white;
	border-radius: 5px;
}
.btn span:nth-child(1) {
	background-color: #f1f1f1;
	color: rgb(106, 223, 223);
}
.btn span:nth-child(2) {
	background-color: rgb(106, 223, 223);
} */
</style>
