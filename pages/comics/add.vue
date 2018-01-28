<template>
  <div>
    <div>
      <app-header/>
    </div>
    <div>
      <comics :proptags="this.tags" :propartists="this.artists" :propauthors="this.authors"/>
    </div>
  </div>
</template>
<script>
import AppHeader from '~/components/header'
import Comics from '~/components/comics-add'
export default {
  name: 'comics-add',
  components: {
    AppHeader,
    Comics
  },
  data: function () {
    return {
      success: false,
      tags: [],
      artists: [],
      authors: []
    }
  },
  async mounted () {
    const tags = await this.$axios.$get('/tags')
    const authors = await this.$axios.$get('/tags?query=NameSpace:author')
    const artists = await this.$axios.$get('/tags?query=NameSpace:artist')
    console.log(tags)
    this.tags = tags['response'].map(function (item) { return item.Name })
    this.artists = artists['response'].map(function (item) { return item.Name })
    this.authors = authors['response'].map(function (item) { return item.Name })
  }

}
</script>
