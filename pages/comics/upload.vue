<template>
  <div>
    <div>
      <app-header/>
    </div>
    <div>
      <Upload :languages="this.languages" :groups="this.groups" :series="this.series" />
    </div>
  </div>
</template>

<script>
  import AppHeader from '~/components/header'
  import Upload from '~/components/upload'
  export default {
    name: 'upload',
    components: {
      AppHeader,
      Upload
    },
    data: () => {
      return {
        series: [],
        languages: [],
        groups: []
      }
    },
    async mounted () {
      const languages = await this.$axios.$get('/languages')
      this.languages = languages['response'].map(function (item) {
        return item.Name
      })
    }
  }
</script>
