<template>
  <div>
    <div>
      <AppHeader/>
    </div>
    <div>
      <v-alert color="info" icon="info" value="true">
        Please note many features are still WIP. Chapters are mostly missing their files from batoto if you'd like to help or report bugs please visit
        <a href="https://github.com/NyaaPantsu/manga">backend</a>
        <a href="https://github.com/NyaaPantsu/manga-frontend">frontend</a>
      </v-alert>
      <v-expansion-panel>
        <v-expansion-panel-content dark flat>
          <div slot="header">Refine</div>
          <v-card>
            <v-card-text>
              <v-select v-model="aliases" label="Series Aliases" chips tags></v-select>
              <v-select v-model="statuses" label="Status" v-bind:items="this.status" item-value="text" name="status" required></v-select>
              <v-select v-model="typename" label="Type Name" v-bind:items="this.types" item-value="text" name="typename" required>
              </v-select>
              <v-select v-model="language" label="Language" v-bind:items="this.languages" autocomplete required></v-select>
              <v-select v-model="typedemonym" label="Type Demonym" v-bind:items="this.demonyms" item-value="text" name="typedemonym" required>
              </v-select>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <TableFront :other="this.items" :chapters="this.chapters" />
      <div class="text-xs-center row">
          <v-pagination :length="count"  @input="click" v-model="page" :total-visible="10">
          </v-pagination>
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
    components: {
      AppHeader,
      TableFront,
      Popular
    },
    data: () => {
      return {
        chapters: [],
        items: [],
        count: 0,
        query: '',
        params: null,
        p: 0,
        lang: null,
        order: null,
        limit: 25,
        author: null,
        artist: null,
        page: 0,
        tags: null,
        languages: [],
        status: [
          {
            text: 'Ongoing'
          },
          {
            text: 'Stalled'
          },
          {
            text: 'Discontinued'
          },
          {
            text: 'Complete'
          }
        ],
        types: [
          {
            text: 'Webcomic'
          },
          {
            text: 'Manga'
          },
          {
            text: 'Manhwa'
          }
        ],
        demonyms: [
          {
            text: 'Japanese'
          },
          {
            text: 'Korean'
          },
          {
            text: 'Chinese'
          }
        ]
      }
    },
    key: (to) => to.fullPath,
    watchQuery: ['p', 'lang', 'order', 'tags', 'limit', 'author', 'artist', 'date', 'group'],
    async mounted () {
      const languages = await this.$axios.$get('/languages')
      this.languages = languages['response'].map(function (item) {
        return item.Name
      })
      var query = this.$route.query
      var p = +query.p
      var lang = query.lang
      var order = query.order
      var limit = +query.limit
      var author = query.author
      var artist = query.artist
      var tags = query.tags
      var group = query.group
      var sortby = query.sortby
      var params = []
      var q = []
      if (isNaN(p)) {
        p = 0
      }
      if (isNaN(limit)) {
        limit = 25
      }
      if (order === undefined) {
        order = 'desc'
      }
      if (group !== undefined) {
        let temp = group.split(',')
        q.push('Groups:' + temp.join(',' + 'Groups:'))
      }
      if (author !== undefined) {
        q.push('SeriesTags.NameSpace:Author,SeriesTags.Name:' + author)
      }
      if (author !== undefined) {
        q.push('SeriesTags.NameSpace:Artist,SeriesTags.Name:' + artist)
      }
      if (tags !== undefined) {
        let temp = tags.split(',')
        q.push('SeriesTags.Name:' + temp.join(',' + 'SeriesTags.Name:'))
      }
      if (lang !== undefined) {
        q.push('ChapterLanguage.Name' + lang)
      }
      if (sortby === undefined) {
        sortby = 'TimeUploaded'
      }
      params.push('&offset=' + (p * limit))
      params.push('&sortby=' + sortby)
      params.push('&limit=' + limit)
      params.push('&order=' + order)
      var response = await this.$axios.$get('https://api.manga.sh/api/v1/series_chapters' + '?query=' + q.join(',') + params.join(''))
      var chapters = response['response']
      const unique = [...new Set(chapters.map(item => item.SeriesId.Id))]
      var temp = []
      for (let [key, value] of Object.entries(unique)) {
        console.log(key, value)
        var val = chapters.filter(function (a) {
          return a.SeriesId.Id === value
        })
        temp.push(val)
      }
      var items = temp
      var count = (response.count / limit)
      count = Number(count.toFixed(0))
      this.chapters = chapters
      this.items = items
      this.count = count
      this.query = '?query=' + q.join(',') + params.join('')
      this.params = params
      this.p = p
      this.lang = lang
      this.order = order
      this.limit = limit
      this.author = author
      this.artist = artist
      this.page = p
      this.tags = tags
    },
    methods: {
      click: function (val) {
        console.log(this.$route.fullPath)
        var temp = this.$route.fullPath.replace(/\/\?(p=\d)?/g, '')
        console.log(temp)
        if (temp === '/') {
          this.$router.push('?p=' + val)
        } else {
          this.$router.push('?p=' + val + temp)
        }
      }
    }
  }
</script>
