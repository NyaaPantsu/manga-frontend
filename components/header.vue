<template>
    <v-layout>

   <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      disable-route-watcher
    >
      <v-list>
        <div>

        </div>
        <v-list-tile
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          @click.stop="miniVariant = !miniVariant">
          <v-list-tile-action>
            <v-icon v-html="miniVariant ? 'chevron_right' : 'first_page'"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Collapse</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">

      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-btn :ripple="false" flat v-text="title" to="/"></v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-switch v-model="nsfw" label="nsfw" dark></v-switch>
                     <v-select
          v-model="name"
            :loading="loading"
            :append-icon-cb="redirect"
              dark
              cache-items
                            :search-input.sync="search"

          autocomplete
         append-icon="search"
          :items="this.series"
        ></v-select>

          </v-flex>


      </v-toolbar-title>
       
      <v-menu
        v-if="this.$store.state.user"
        offset-y
      >
        <v-btn
          :ripple="false"
          icon
          fab
          primary
          small
          class="mr-3"
          slot="activator"
        >
          <v-icon>person</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="item in user_menu" :key="item.title">
            <v-list-tile-title><nuxt-link :to="item.to">{{ item.title }}</nuxt-link></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu offset-y v-else>
                <v-btn
          :ripple="false"
          primary
          class="mr-3"
          slot="activator"
        >
        Login
        </v-btn>
          <v-list>
          <v-list-tile >
            <v-list-tile-title><nuxt-link to="/login">Login</nuxt-link></v-list-tile-title>
          </v-list-tile>
          <v-list-tile >
            <v-list-tile-title><nuxt-link to="/register">Register</nuxt-link></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>



    </v-toolbar>
    </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        clipped: true,
        drawer: false,
        name: '',
        series: [],
        loading: false,
        search: null,
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'book', title: 'Comics', to: '/comics' },
          { icon: 'autorenew', title: 'Random', to: '/comics/random' },
          { icon: 'group', title: 'Groups', to: '/groups' },
          { icon: 'forum', title: 'Forums', to: '/forums' },
          { icon: 'forum', title: 'Add Series', to: '/comics/add' },
          { icon: 'forum', title: 'Add Chapter', to: '/comics/upload' },
          { icon: 'forum', title: 'Add Groups', to: '/groups/add' }
        ],
        user: false,
        nsfw: false,
        user_menu: [
          { title: 'Settings', to: '/user/settings' },
          { title: 'Follows', to: '/user/follows' },
          { title: 'Import', to: '/user/follows/import' },
          { title: 'Logout', to: '/user/logout' }
        ],
        miniVariant: false,
        title: 'manga.sh',
        extended: false
      }
    },
    watch: {
      search (val) {
        val && this.querySelections(val)
      }
    },
    methods: {
      redirect: function (label) {
        this.$axios.$get('/series?query=Name:' + this.name).then((response) => {
          var seriesid = response['response'][0].Id
          this.$router.push({ name: 'comics-id', params: { id: seriesid } })
        })
      },
      toggleExtension: function (event) {
        this.extended = !this.extended
        this.$store.commit('extended', this.extended)
      },
      toggleNSFW: function (event) {
        this.nfsw = !this.nsfw
        this.$store.commit('nfsw')
      },
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.$axios.$get('/series?query=Name__icontains:' + v).then((response) => {
            this.series = response['response'].map(function (item) { return item.Name })
            this.loading = false
          })
        }, 500)
      }
    }
  }
</script>
