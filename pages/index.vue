<template>
<div>
  <div>
    <AppHeader/>
</div>
<div>
    <Table :chapters="this.chapters" :count="this.count" :page="this.offset"/>
</div>
</div>


  
</template>
<script>
import AppHeader from '~/components/header'
import Table from '~/components/table'
import Popular from '~/components/popular'
export default {
  name: 'index',
  data: () => {
    return {
      chapters: [],
      limit: 25,
      offset: 0,
      order: 'desc',
      sortby: 'TimeUploaded',
      page: 0,
      id: null,
      count: 0
    }
  },
  components: {
    AppHeader,
    Table,
    Popular
  },
  async mounted () {
    const chapters = await this.$axios.$get('/series_chapters?order=' + this.order + '&sortby=' + this.sortby + '&limit=' + this.limit + '&offset=' + this.offset)
    this.chapters = chapters['response']
    this.count = (chapters.count / this.limit)
    this.page = this.offset
  },
  methods: {
    search: function (event) {
      const chapters = this.$axios.$get('/series_chapters?order=' + this.order + '&sortby=' + this.sortby + '&limit=' + this.limit + '&offset=' + this.offset)
      this.chapters = chapters.response
      this.count = chapters.count
    }
  }
}
</script>
