<template>
<div>
  <div>
    <AppHeader/>
</div>
<div>
    <v-alert color="info" icon="info" value="true">
      Please note many features are still WIP.
      Manga from batoto hasn't been imported yet
      Uploading, adding series, searching, logging in and signing up work
    </v-alert>
    <Table :chapters="this.chapters"/>
    <div class="text-xs-center">
      <v-pagination :length="count" v-model="page" :total-visible="10"></v-pagination>
    </div>
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
      page: 1,
      id: null,
      query: [],
      count: 0
    }
  },
  components: {
    AppHeader,
    Table,
    Popular
  },
  async mounted () {
    await this.$axios.$get('/series_chapters?order=' + this.order + '&sortby=' + this.sortby + '&limit=' + this.limit).then((response) => {
      this.chapters = response['response']
      this.count = (response.count / this.limit)
      this.count.toFixed(0)
    })
  },
  watch: {
    page: function (val) {
      var offset = (this.limit * this.page) - 1
      this.$axios.$get('/series_chapters?order=' + this.order + '&sortby=' + this.sortby + '&limit=' + this.limit + '&offset=' + offset).then((response) => {
        this.chapters = response['response']
        this.count = (response.count / this.limit)
        this.count.toFixed(0)
      })
    }
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
