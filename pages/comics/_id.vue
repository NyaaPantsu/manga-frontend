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
      page: 0,
      id: null,
      series: [],
      count: 0
    }
  },
  async mounted () {
    var id = this.$route.params.id
    const series = await this.$axios.$get('/series?query=Id:' + id)
    const response = await this.$axios.$get('/series_chapters?query=SeriesId.Id:' + id + '&limit=' + this.limit + '&offset=' + this.offset)
    var chapters = response['response']
    if (response['count'] === 0) {
      chapters = []
    }
    this.chapters = chapters
    this.series = series['response'][0]
    console.log(this.series.CoverImage)
  }
}
</script>