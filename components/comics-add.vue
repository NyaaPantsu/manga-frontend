<template>
  <div>

    <loading :show="this.$store.state.show" :label="loading">
    </loading>
    <v-card color="secondary" flat>
      <v-card-text>
        <v-form id="form">
          <v-text-field label="Name" v-model="name" name="name" required></v-text-field>
          <v-text-field label="Description" v-model="description" name="description" required></v-text-field>
          <v-select v-model="tag" label="Tags" :loading="loadingtags" dark :search-input.sync="tagsSearch" chips tags autocomplete
            :items="tags" required></v-select>
          <v-select v-model="author" label="Authors" :loading="loadingauthors" dark :search-input.sync="authorsSearch" chips tags autocomplete
            :items="authors" required>
          </v-select>
          <v-select v-model="artist" label="Artists" :loading="loadingartists" dark :search-input.sync="artistsSearch" chips tags autocomplete
            :items="artists" required></v-select>
          <v-select v-model="aliases" label="Series Aliases" chips tags></v-select>
          <v-select v-model="statuses" label="Status" v-bind:items="this.status" item-value="text" name="status" required></v-select>
          <v-select v-model="typename" label="Type Name" v-bind:items="this.types" item-value="text" name="typename" required>
          </v-select>
          <v-select v-model="typedemonym" label="Type Demonym" v-bind:items="this.demonyms" item-value="text" name="typedemonym" required>
          </v-select>
          <v-checkbox label="Mature" v-model="mature" dark name="mature"></v-checkbox>
          <span>
            <span>
              Cover Image 
            </span>
            <input type="file" name="cover" required/>
          </span>
          <v-btn @click="submit">
            submit
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        name: '',
        description: '',
        tag: [],
        author: [],
        artist: [],
        tagsSearch: null,
        authorsSearch: null,
        artistsSearch: null,
        loadingtags: false,
        loadingauthors: false,
        loadingartists: false,
        tags: [],
        authors: [],
        artists: [],
        aliases: [],
        statuses: '',
        typename: '',
        typedemonym: '',
        mature: 0,
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
    watch: {
      tagsSearch (val) {
        val && this.queryTags(val)
      },
      authorsSearch (val) {
        val && this.queryAuthors(val)
      },
      artistsSearch (val) {
        val && this.queryArtists(val)
      }
    },
    methods: {
      submit: function (event) {
        var formData = new FormData(document.getElementById('form'))
        formData.append('status', this.statuses)
        formData.append('typedemonym', this.typedemonym)
        formData.append('typename', this.typename)
        formData.append('mature', this.mature)
        formData.append('tags', this.tag.join())
        formData.append('artists', this.artist.join())
        formData.append('authors', this.author.join())
        var header = 'Bearer ' + this.$cookie.get('token')
        this.$store.commit('show', true)
        setTimeout(() => {
          this.$axios.$post('/series', formData, {
            headers: {
              Authorization: header
            }
          }).then((response) => {
            this.$store.commit('show', false)
            if (response['response'] === null) {
              this.$store.commit('alerts/add', {
                type: 'error',
                alert: 'Error something went wrong'
              })
              return
            }
            if (response['success'] !== true) {
              this.$store.commit('alerts/add', {
                type: 'error',
                alert: 'Error upload attempt failed'
              })
              return
            }
            this.$store.commit('alerts/add', {
              type: 'success',
              alert: 'You successfully added a chapter!'
            })
          })
        }, 500)
      },
      queryTags (v) {
        this.loadingtags = true
        // Simulated ajax query
        setTimeout(() => {
          this.$axios.$get('/tags?query=Name__icontains:' + v).then((response) => {
            this.tags = response['response'].map(function (item) {
              return item.Name
            })
            this.loadingtags = false
          })
        }, 500)
      },
      queryAuthors (v) {
        this.loadingauthors = true
        // Simulated ajax query
        setTimeout(() => {
          this.$axios.$get('/tags?query=NameSpace:author,Name__icontains:' + v).then((response) => {
            this.authors = response['response'].map(function (item) {
              return item.Name
            })
            this.loadingauthors = false
          })
        }, 500)
      },
      queryArtists (v) {
        this.loadingartists = true
        // Simulated ajax query
        setTimeout(() => {
          this.$axios.$get('/tags?query=NameSpace:artist,Name__icontains:' + v).then((response) => {
            this.artists = response['response'].map(function (item) {
              return item.Name
            })
            this.loadingartists = false
          })
        }, 500)
      }
    }
  }
</script>