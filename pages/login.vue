<template>
  <v-layout>
    <v-flex offset-xs4 xs4>
      <v-card class="pa-4">
        <div class="headline">Login</div>
        <v-form v-model="valid">
          <v-text-field
            label="Name"
            v-model="name"
            :rules="nameRules"
            :counter="10"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-checkbox
            label="Remember Me"
            v-model="checkbox"
          ></v-checkbox>
          <div class="text-xs-center">
            <v-btn
              light
              @click="submit"
              :disabled="!valid"
            >
              submit
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'login'
}
</script>

