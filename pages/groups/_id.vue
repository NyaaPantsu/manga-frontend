<template>    
  <div>
    <div>
      <app-header/>
    </div>
    <div>
      {{ this.groups['Name'] }}
      {{ this.groups.Description }}
      {{ groups }}
      <span v-for="url in groups.GroupsScanlationUrls"> {{ url }}</span>
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
      await this.$axios.$get('/groups_scanlation/' + id).then((response) => {
        this.groups = response['response']
      })
      await this.$axios.$get('/series_chapters?query=').then((response) => {
        this.chapters = response['response']
        var count = (response.count / this.limit)
        this.count = Number(count.toFixed(0))
      })
    }
  }
</script>
