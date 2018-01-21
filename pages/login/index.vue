<template>
  <v-layout column justify-center align-center>
  
  
    <v-form ref="form">
      <v-text-field label="UserName" v-model="username" required></v-text-field>
      <v-text-field label="Password" v-model="password" :type="'password'" required></v-text-field>
  
      <v-btn @click="submit">
        submit
      </v-btn>
    </v-form>
  
  
  </v-layout>
</template>
<script>
export default {
  name: 'login',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit: function (e) {
      console.log(JSON.stringify({username: this.username, password: this.password}))
      this.$axios.$post('/auth/login', JSON.stringify({username: this.username, password: this.password}))
        .then(function (response) {

        })
    }
  }
}
</script>