<template>
<div>
  <div>
    <app-header />
  </div>
  <div>
    <login-form/>
  </div>
</div>

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