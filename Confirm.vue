<template>
  <v-layout row justify-center>
    <v-dialog v-model="isShow" persistent max-width="300">
      <v-card>
        <v-card-title class="lighten-2 subheading" :class="text.type">
          <v-icon id="homeicon" class="fas fa-exclamation-circle">&nbsp;&nbsp;{{text.title}}</v-icon>
        </v-card-title>
        <v-card-text class="subheading text-md-center mt-3">{{text.msg}}</v-card-text>
        <v-card-actions>
          <v-layout row justify-space-around>
            <v-btn
              v-if="text.btnyes.visible"
              flat
              :color="text.btnyes.color"
              class="mb-2"
              @click="ok()"
            >
              <v-icon small>{{text.btnyes.icon}}</v-icon>
              &nbsp;&nbsp;{{text.btnyes.text}}
            </v-btn>
            <v-btn
              v-if="text.btnno.visible"
              flat
              :color="text.btnno.color"
              class="mb-2"
              @click="close()"
            >
              <v-icon small>{{text.btnno.icon}}</v-icon>
              &nbsp;&nbsp;{{text.btnno.text}}
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
      text: { btnyes: { visible: true }, btnno: { visible: true } }
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
