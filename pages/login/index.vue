<template>
<v-layout>
  <app-header />
  <login-form/>

</v-layout>
  
</template>
<script>
import AppHeader from '~/components/header'
import LoginForm from '~/components/login'
export default {
  name: 'login',
  components: {
    AppHeader,
    LoginForm
  }
}
</script>