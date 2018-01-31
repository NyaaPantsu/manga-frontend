<template>
  
</template>

<script>
  export default {
    async mounted () {
      var id = Math.floor(Math.random() * 22000) + 44735
      this.$router.push('/comics/' + id)
    }
  }
</script>