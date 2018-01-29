<template>
<v-layout>
  <div>
    <app-header/>
  </div>
  <div>
    <reader :items="this.items" :series="this.series" :files="this.files" :images="this.images"/>
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
  data: function () {
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
    await this.$axios.$get('/series_chapters/' + hash).then((data) => {
      this.series = data['response'][0].SeriesId
      this.files = data['response'][0]
      var array = Object.values(this.files.SeriesChaptersFiles)
      for (var index = 0; index < array.length; index++) {
        this.images.push('http://api.manga.sh:8080/' + array[index].Name)
      }
      this.count = data.count
    })
    await this.$axios.$get('/series_chapters?query=SeriesId.Id:' + this.series.Id + ',ChapterLanguage.Name:' + this.files.ChapterLanguage.Name + '&orderby=TimeUploaded').then((response) => {
      this.items = response['response']
    })
  }
}
</script>