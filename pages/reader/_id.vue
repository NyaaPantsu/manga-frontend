<template>
<v-layout>
  <div>
    <app-header/>
  </div>
  <div>
    <reader :items="this.items" :series="this.series" :images="this.images"/>
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
      hash: ' ',
      series: [],
      pages: [],
      chapters: [],
      id: 0
    }
  },
  async mounted () {
    var hash = this.$route.params.id
    this.hash = hash

    const data = await this.$axios.$get('/series_chapters/' + hash)
    this.series = data['response'][0]
    var array = Object.values(this.series.SeriesChaptersFiles)
    this.pages = array
    for (var index = 0; index < array.length; index++) {
      this.images.push('https://cdn.manga.sh/' + array[index].Name)
    }
    this.count = data.count
    this.id = this.series['SeriesId'].Id
    const chapters = await this.$axios.$get('/series_chapters?query=SeriesId.Id:' + this.id + ',ChapterLanguage.Name:' + this.series.ChapterLanguage.Name + '&orderby=TimeUploaded')
    this.items = chapters['response']
  }
}
</script>