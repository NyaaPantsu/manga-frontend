<template>    
  <div>
    <div>
      <app-header/>
    </div>
    <div>
      {{ groups }}
    </div>
    <div>
      <Table/>
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
        groups: [],
        limit: 25,
        offset: 0,
        page: 1,
        count: 0
      }
    },
    async mounted () {
      var id = this.$route.params.id
      await this.$axios.$get('/groups_scanlation?query=Name:' + decodeURI(id) + ' &limit=' + this.limit + '&offset=' + this.offset).then((response) => {
        this.groups = response['response']
        var count = (response.count / this.limit)
        this.count = Number(count.toFixed(0))
      })
      await this.$axios.$get('/series_chapters?order=' + this.order + '&sortby=' + this.sortby + '&limit=' + this.limit).then((response) => {
        this.chapters = response['response']
        var count = (response.count / this.limit)
        this.count = Number(count.toFixed(0))
      })
    }
  }
</script>
