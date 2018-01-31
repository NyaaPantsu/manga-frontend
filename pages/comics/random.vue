<template>
  
</template>

<script>
  export default {
    async mounted () {
      var id = Math.floor(Math.random() * Math.floor(20000))
      this.$router.push('/comics/' + id)
    }
  }
</script>