<template>
<div>
  <div>
    <app-header />
  </div>
  <div>
    <Table :chapters="this.chapters" :count="this.count" :page="this.page"/>
  </div>
</div>
</template>
<script>
import AppHeader from '~/components/header'
import Table from '~/components/table'
export default {
  name: 'search',
  components: {
    AppHeader,
    Table
  },
  data: () => {
    return {
      serieschapterquery: [],
      query: [],
      fields: [],
      p: '',
      q: '',
      language: '',
      order: false,
      tags: [],
      user: [],
      groups: []
    }
  },
  watchQuery: ['p', 'q', 'language', 'order', 'tags', 'user', 'groups'],
  async mounted () {
    var queries = this.$route.query
    if (queries['order'] !== undefined) {
      if (queries['order'] === 'desc') {
        this.fields.push('orderby', queries['order'])
      }
      if (queries['order'] === 'asc') {
        this.fields.push('orderby', queries['order'])
      }
    }
    if (queries['tags'] !== undefined) {
      this.query.push('SeriesTags:Name:' + queries['tags'])
    }
    if (queries['author'] !== undefined) {
      this.query.push('SeriesTags:NameSpace:author,SeriesTags:Name:' + queries['author'])
    }
    if (queries['artist'] !== undefined) {
      this.query.push('SeriesTags:NameSpace:author,SeriesTags:Name:' + queries['artist'])
    }
    if (queries['user'] !== undefined) {
      this.serieschapterquery.push('ContributorId.Username:' + queries['user'])
    }
    if (queries['groups'] !== undefined) {
      this.serieschapterquery.push('SeriesChaptersGroups.GroupName' + queries['groups'])
    }
    console.log(this.query)
    await this.$axios.$get('/series_chapters?query=' + this.serieschapterquery.join()).then((response) => {
      console.log(response)
    })
    await this.$axios.$get('/series?query=' + this.query.join()).then((response) => {
      console.log(response)
    })
  },
  methods: {
    doSearch () {
      console.log('doSearch')
      this.$router.push(`/search/`)
    }
  }
}
</script>
