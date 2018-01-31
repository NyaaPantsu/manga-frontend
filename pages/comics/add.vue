<template>
  <div>
    <div>
      <app-header/>
    </div>
    <div>
      <comics/>
    </div>
  </div>
</template>

<script>
  import AppHeader from '~/components/header'
  import Comics from '~/components/comics-add'
  export default {
    name: 'comics-add',
    components: {
      AppHeader,
      Comics
    },
    data: () => {
      return {
        success: false
      }
    }
  }
</script>
