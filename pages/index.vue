<template>
  <v-layout column>

      <v-data-table
      v-bind:headers="headers"
      :items="chapters"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <tr>
        <td>
          <router-link :to="{ name: 'comics-id', params: { id: props.item.SeriesId.Id }}">{{ props.item.SeriesId.Name }}</router-link>
        </td>
        <td>
          
          <router-link :to="{ name: 'reader-id', params: { id: props.item.Hash }}">Read</router-link>
        </td>
        <td>{{ props.item.ChapterLanguage.Code }}</td>
      </tr>
    </template>
  </v-data-table>

  </v-layout>
</template>

<script>
  export default {
    name: 'ChaptersAll',
    data: () => {
      return {
        headers: [
          {
            text: 'Series', value: 'series'
          },
          {
            text: 'chapter', value: 'chapters'
          },
          {
            text: 'Language', value: 'language'
          },
          {
            text: 'Contributor', value: 'contributor'
          }
        ],
        chapters: [],
        limit: 25,
        offset: 0
      }
    },

    async mounted () {
      const chapters = await this.$axios.$get('/series_chapters?limit=' + this.limit + '&offset=' + this.offset)
      this.chapters = chapters
      console.log(chapters)
    }
  }
</script>
