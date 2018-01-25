<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-title>
        <h5>Login</h5>
      </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Username"
          v-model="username"
          required
          ></v-text-field>
        <v-text-field
          name="Password"
          label="Enter your password"
          hint="At least 8 characters"
          v-model="password"
          min="8"
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          counter
          ></v-text-field>
          <v-btn @click="submit">
            submit
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-flex>
    
</template>
<script>
export default {
  data: function () {
    return {
      username: '',
      password: '',
      e1: true,
      alert: false
    }
  },
  methods: {
    submit: function (e) {
      this.$axios.$post('/auth/login', JSON.stringify({username: this.username, password: this.password}))
        .then((response) => {
          var data = response['response'][0]
          this.$store.commit('username', data.username)
          this.$store.commit('token', data.token)
          this.$store.commit('user', true)
          this.alert = true
          this.$router.push('/')
        })
    }
  }
}
</script>
