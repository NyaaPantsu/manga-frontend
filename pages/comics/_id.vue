<template>
    
</template>
<script>
export default {
  name: 'ComicsOne',
  async mounted () {
    const chapters = await this.$axios.$get('/series_chapters?limit=' + this.limit + '&offset=' + this.offset)
    this.chapters = chapters
    console.log(chapters)
  }
}
</script>
