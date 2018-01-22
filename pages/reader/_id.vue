<template>
<div>
     <gallery :images="images" :index="index" @close="index = null"></gallery>
       <div v-for="image, index in images" v-if="index < 1">
          <img :src="image"
        v-on:click="imgindex(index)"
        :style="{width: '100%', height: 'auto' }">
      </div>
</div>
 
</template>
<script>

export default {
  name: 'Reader',
  data: function () {
    return {
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
