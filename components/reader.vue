<template>
<div>
  <v-layout row>
    <v-flex xs2>
          <nuxt-link :to="{name: 'comics-id', params: {id: id}}">{{ series.Title }}</nuxt-link>
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
    
    <v-flex xs2>
      <div class="text-xs-center">
        <v-menu offset-y>
          <v-btn color="primary" dark slot="activator">Pages</v-btn>
          <v-list>
            <v-list-tile v-for="image, index in pages">
              <v-list-tile-title><nuxt-link :key="$route.fullPath" :to="{ name: 'reader-id',params: { id: hash },  query: { p: index }}">{{ index }}</nuxt-link></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        </div>
    </v-flex>
    <v-flex xs2>
      <div class="text-xs-center">
        <v-btn dark color="primary" @click="follow">
          Follow
        </v-btn>
      </div>
    </v-flex>

  </v-layout>


  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div v-for="image, index in images" v-bind:data="image" v-bind:key="index">
      <img :src="image"
      v-on:click="imgindex(index)"
      :style="{width: '100%', height: 'auto' }">
    </div>
  </div>
</div>
 
</template>
<script>

export default {
  data: () => {
    return {
      index: null
    }
  },
  methods: {
    imgindex: function (value) {
      this.index = value
    },
    follow: function () {

    }
  },
  props: {
    series: {
      type: Array,
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