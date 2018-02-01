<template>
  <div>
    <div>
      <AppHeader/>
    </div>
    <div>
      <v-alert color="info" icon="info" value="true">
        Please note many features are still WIP.
        Chapters are mostly missing their files from batoto 
        if you'd like to help or report bugs please visit
        <a href="https://github.com/NyaaPantsu/manga">backend</a>
        <a href="https://github.com/NyaaPantsu/manga-frontend">frontend</a>
      </v-alert>
      <TableFront :other="this.items" :chapters="this.chapters"/>
      <div class="text-xs-center">
        <v-pagination :length="count" v-model="page" :total-visible="10"></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from '~/components/header'
  import TableFront from '~/components/table-front'
  import Popular from '~/components/popular'
  export default {
    name: 'index',
    data: () => {
      return {
        chapters: [],
        items: [],
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
      TableFront,
      Popular
    },
    async mounted () {
      await this.$axios.$get('/series_chapters?order=' + this.order + '&sortby=' + this.sortby + '&limit=' + this.limit).then((response) => {
        this.chapters = response['response']
        var sort = this.chapters.sort(function (a, b) {
          if (a['SeriesId']['Id'] < b['SeriesId']['Id']) {
            return -1
          } else if (a['SeriesId']['Id'] > b['SeriesId']['Id']) {
            return 1
          }
          return 0
        })
        const unique = [...new Set(this.chapters.map(item => item.SeriesId.Id))]
        var temp = []
        for (let [key, value] of Object.entries(unique)) {
          console.log(key, value)
          var val = sort.filter(function (a) { return a.SeriesId.Id === value })
          temp.push(val)
        }
        this.items = temp
        var count = (response.count / this.limit)
        this.count = Number(count.toFixed(0))
      })
    },
    watch: {
      page: function (val) {
        var offset = (this.limit * this.page) - 1
        this.$axios.$get('/series_chapters?order=' + this.order + '&sortby=' + this.sortby + '&limit=' + this.limit + '&offset=' + offset).then((response) => {
          this.chapters = response['response']
          var sort = this.chapters.sort(function (a, b) {
            if (a['SeriesId']['Id'] < b['SeriesId']['Id']) {
              return -1
            } else if (a['SeriesId']['Id'] > b['SeriesId']['Id']) {
              return 1
            }
            return 0
          })
          const unique = [...new Set(this.chapters.map(item => item.SeriesId.Id))]
          var temp = []
          for (let [key, value] of Object.entries(unique)) {
            console.log(key, value)
            var val = sort.filter(function (a) { return a.SeriesId.Id === value })
            temp.push(val)
          }
          this.items = temp
          var count = (response.count / this.limit)
          this.count = Number(count.toFixed(0))
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
