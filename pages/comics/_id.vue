<template>
<div>
  <div>
    <app-header />
  </div>
  <div>
    <Comics :series="this.series"/>  
  </div>
  <div>
    <Table :chapters="this.chapters" :count="this.count" :page="this.page"/>
      <div class="text-xs-center">
      <v-pagination :length="count" v-model="page" :total-visible="10"></v-pagination>
    </div>
  </div>
</div>
</template>
<script>
import AppHeader from '~/components/header'
import Comics from '~/components/comics'
import Table from '~/components/table'
export default {
  name: 'comics-id',
  components: {
    AppHeader,
    Comics,
    Table
  },
  data: () => {
    return {
      chapters: [],
      limit: 25,
      offset: 0,
      order: 'desc',
      sortby: 'TimeUploaded',
      page: 1,
      id: null,
      series: [],
      count: 0
    }
  },
  async mounted () {
    var id = this.$route.params.id
    this.id = id
    const series = await this.$axios.$get('/series?query=Id:' + id)
    await this.$axios.$get('/series_chapters?query=SeriesId.Id:' + id + '&limit=' + this.limit + '&offset=' + this.offset).then((response) => {
      var chapters = response['response']
      if (response['count'] === 0) {
        chapters = []
      }
      this.chapters = chapters
      this.count = response['count']
    })

    this.series = series['response'][0]
  },
  watch: {
    page: function (val) {
      var offset = (this.limit * this.page) - 1
      this.$axios.$get('/series_chapters?query=SeriesId.Id:' + this.id + '&order=' + this.order + '&sortby=' + this.sortby + '&limit=' + this.limit + '&offset=' + offset).then((response) => {
        this.chapters = response['response']
        this.count = (response.count / this.limit)
        this.count.toFixed(0)
        console.log(response)
      })
    }
  }
}
</script>