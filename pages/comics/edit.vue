<template>
  
</template>

<script>
  export default {
    name: 'EditSeries',
    data: () => {
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
