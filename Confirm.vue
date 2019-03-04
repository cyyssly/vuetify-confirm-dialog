<template>
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
    ok () {
      console.log('确定')
    },
    close () {
      console.log('关闭')
    }
  }
}
</script>
