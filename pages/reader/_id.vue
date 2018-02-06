<template>
  <v-layout>
    <div>
      <app-header/>
    </div>
    <div>
      <reader :items="this.items" :series="this.series" :files="this.files" :images="this.images" />
    </div>
  
  </v-layout>
</template>

<script>
  import AppHeader from '~/components/header'
  import Reader from '~/components/reader'
  export default {
    name: 'reader-id',
    components: {
      AppHeader,
      Reader
    },
    data: () => {
      return {
        items: [],
        images: [],
        offset: 0,
        limit: 1,
        count: 0,
        series: [],
        chapters: [],
        files: [],
        id: 0
      }
    },
    async mounted () {
      var hash = this.$route.params.id
      await this.$axios.$get('/series_chapters/' + hash).then((response) => {
        if (response['response'][0]['SeriesChaptersFiles'].length === 0) {
          this.$store.commit('alerts/add', {
            type: 'error',
            text: 'Error chapter not imported yet'
          })
          this.$router.push('/')
          return
        }
        if (response['success'] !== true) {
          this.$store.commit('alerts/add', {
            type: 'error',
            text: 'Error something went wrong'
          })
          return
        }
        this.series = response['response'][0].SeriesId
        this.files = response['response'][0]
        var array = Object.values(this.files.SeriesChaptersFiles)
        console.log(array)
        for (var index = 0; index < array.length; index++) {
          this.images.push('https://cdn.manga.sh/' + array[index].Name)
        }
        console.log(this.images)
        this.count = response.count
      })
      await this.$axios.$get('/series_chapters?query=SeriesId.Id:' + this.series.Id + ',ChapterLanguage.Name:' + this.files.ChapterLanguage.Name + '&orderby=TimeUploaded&limit').then((response) => {
        this.items = response['response']
      })
    }
  }
</script>