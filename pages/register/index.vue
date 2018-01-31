<template>
  <div>
    <div>
      <app-header/>
    </div>
    <div>
      <register/>
    </div>
  </div>
</template>

<script>
  import AppHeader from '~/components/header'
  import Register from '~/components/register'
  export default {
    name: 'rego',
    components: {
      AppHeader,
      Register
    }
  }
</script>
