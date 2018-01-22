<template>
<div>
  <v-layout row>
    <v-flex xs2>
      <v-card dark color="secondary">
        <v-card-text class="px-0">Series</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs2>
  
      <div class="text-xs-center">
        <v-menu offset-y>
          <v-btn color="primary" dark slot="activator">Chapters</v-btn>
          <v-list>
            <v-list-tile v-for="item in items" :key="item.title" @click="">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
            <v-list-tile v-for="item in items" :key="item.title" @click="">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        </div>
    </v-flex>
    <v-flex xs2>
      <div class="text-xs-center">
        <v-card>
          <v-card-text>
            <div>
              <v-btn color="primary">Primary</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </div>

    </v-flex>

  </v-layout>


  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div v-for="image, index in images" v-if="index < limit">
      <img :src="image"
      v-on:click="imgindex(index)"
      :style="{width: '100%', height: 'auto' }">
    </div>
  </div>
</div>
 
</template>
<script>

export default {
  name: 'Reader',
  data: function () {
    return {
      items: [],
      images: [],
      offset: 0,
      limit: 1,
      index: null
    }
  },
  methods: {
    imgindex: function (value) {
      this.index = value
    }
  },

  async mounted () {
    var limit = 1
    if (typeof this.$route.query.limit !== 'undefined' && this.$route.query.limit) {
      limit = this.$route.query.limit
    }
    this.limit = limit
    var offset = 0
    if (typeof this.$route.query.p !== 'undefined' && this.$route.query.p) {
      offset = this.$route.query.p
    }
    this.offset = offset

    var page = this.$route.params.id
    const files = await this.$axios.$get('/series_chapters/' + page + '?limit=' + this.limit + '&p=' + this.offset)
    var array = Object.values(files.SeriesChaptersFiles)
    for (var index = 0; index < array.length; index++) {
      this.images.push('http://api.manga.sh:8080/' + array[index].Name)
    }
  }
}
</script>
