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
        offset: 0,
        page: 0,
        limit: 25,
        count: 0,
        chapters: []
      }
    },
    async mounted () {
      var header = 'Bearer ' + this.$cookie.get('token')
      await this.$axios.$get('/follows', {
        headers: {
          Authorization: header
        }
      }).then((response) => {
        console.log(response)
        this.chapters = response['response']
        var count = (response.count / this.limit)
        this.count = Number(count.toFixed(0))
      })
    },
    watch: {
      page: function (val) {
        var header = 'Bearer ' + this.$store.state.token
        var offset = (this.limit * this.page) - 1
        this.$axios.$get('/follows?limit=' + this.limit + '&offset=' + offset, {
          headers: {
            Authorization: header
          }
        }).then((response) => {
          this.chapters = response['response']
          var count = (response.count / this.limit)
          this.count = Number(count.toFixed(0))
        })
      }
    }
  }
</script>
