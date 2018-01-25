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
          @click.stop="miniVariant = !miniVariant"
        >
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
        <v-text-field
         solo
         prepend-icon="search"
         v-model="search"
         placeholder="Type keyword...">
      </v-text-field>
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
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'book', title: 'Comics', to: '/comics' },
          { icon: 'autorenew', title: 'Random', to: '/comics/random' },
          { icon: 'group', title: 'Groups', to: '/groups' },
          { icon: 'forum', title: 'Forums', to: '/forums' },
          { icon: 'forum', title: 'Add Series', to: '/comics/add' },
          { icon: 'forum', title: 'Add Chapter', to: '/comics/add' },
          { icon: 'forum', title: 'Add Groups', to: '/groups/add' }
        ],
        user: false,
        user_menu: [
          { title: 'Settings', to: '/user/settings' },
          { title: 'Follows', to: '/user/follows' },
          { title: 'Import', to: '/user/follows/import' },
          { title: 'Logout', to: '/user/logout' }
        ],
        miniVariant: false,
        title: 'manga.sh'
      }
    },
    watch: {
      search: function () {
      }
    }
  }
</script>
