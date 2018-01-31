<template>
  <div>
    <div>
      <app-header/>
    </div>
    <div>
      <Table :chapters="this.chapters" />
      <div class="text-xs-center">
        <v-pagination :length="count" v-model="page" :total-visible="10"></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from '~/components/header'
  import Table from '~/components/table'
  export default {
    components: {
      AppHeader,
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
        query: [],
        count: 0
      }
    },
    async mounted () {
      var id = this.$route.params.id
      await this.$axios.$get('/series_chapters?query=ContributorId.Id:' + id + '&order=' + this.order + '&sortby=' + this.sortby + '&limit=' + this.limit).then((response) => {
        this.chapters = response['response']
        var count = (response.count / this.limit)
        this.count = Number(count.toFixed(0))
      })
    },
    watch: {
      page: function (val) {
        var offset = (this.limit * this.page) - 1
        this.$axios.$get('/series_chapters?order=' + this.order + '&sortby=' + this.sortby + '&limit=' + this.limit + '&offset=' + offset).then((response) => {
          this.chapters = response['response']
          var count = (response.count / this.limit)
          this.count = Number(count.toFixed(0))
        })
      }
    }
  }
</script>
