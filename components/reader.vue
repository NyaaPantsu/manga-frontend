<template>
  <div>
    <v-layout row>
      <v-flex xs2>
        <nuxt-link :to="{name: 'comics-id', params: {id: this.series.Id}}">{{ series.Name }}</nuxt-link>
      </v-flex>
      <v-flex xs2>
        <div class="text-xs-center">
          <v-menu offset-y>
            <v-btn color="primary" dark slot="activator">Chapters</v-btn>
            <v-list>
              <v-list-tile v-for="item, index in items">
                <v-list-tile-title>
                  <nuxt-link :to="{ name: 'reader-id', params: {id: item.Hash}}">V. {{ item.VolumeNumber }} C. {{ item.ChapterNumberVolume }} </nuxt-link>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </v-flex>
    </v-layout>
    <v-layout column>
     <viewer :options="options" :images="images"
            @inited="inited"
            class="viewer" ref="viewer"
    >
     <template scope="scope">
        <img @click="show" v-for="src in scope.images" :src="src" :key="src" :style="{width: '100%', height: 'auto' }">
        {{scope.options}}
      </template>
    </viewer>
    </v-layout>

  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        options: { 'inline': false, 'button': true, 'navbar': false, 'title': false, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': false, 'scalable': false, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
      }
    },
    methods: {
      inited (viewer) {
        this.$viewer = viewer
      },
      show () {
        this.$viewer.show()
      },
      follow: function () {
        var header = 'Bearer ' + this.$store.state.token
        this.$axios.$get('/follow/' + this.series.Id, {
          headers: {
            Authorization: header
          }
        })
        console.log(this.items)
      }
    },
    props: {
      series: {
        type: Object,
        required: true
      },
      files: {
        type: Object,
        required: true
      },
      images: {
        type: Array,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>