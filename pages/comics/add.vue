<template>
  <v-form v-model="valid" ref="form" >
    <v-text-field
      label="Name"
      v-model="name"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-select
      label="Item"
      v-model="select"
      required
    ></v-select>
    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>
<script>
export default {
  name: 'AddSeries',
  data: function () {
    return {
      success: false
    }
  },
  methods: {
    submit: function (e) {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$store.state.token
    }
  }
}
</script>
