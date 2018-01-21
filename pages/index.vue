<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <ul>
        <li v-for="chapter in chapters">
          {{ chapter.Id }}
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'ChaptersAll',
    data: () => {
      return {
        chapters: [],
        limit: 25,
        offset: 0
      }
    },

    async mounted () {
      const chapters = await this.$axios.$get('/series_chapters?limit=' + this.limit + '&offset=' + this.offset)
      this.chapters = chapters
      console.log(chapters)
    }
  }
</script>
