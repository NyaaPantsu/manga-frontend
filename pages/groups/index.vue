<template lang="pug">
  div
    div
      app-header
    div
      v-layout(row)
        v-flex(xs12 sm8 offset-sm2)
          v-card
            v-list(three-line)
              template(v-for="group in groups")
                // v-subheader ...
                // v-divider ...
                v-list-tile(avatar :key="group.Name")
                  v-list-tile-avatar
                    //img(:src="group.Avatar")
                    img(src="http://via.placeholder.com/16x16")
                  v-list-tile-content
                    v-list-tile-title(v-text="group.Name")
                    v-list-tile-sub-title(v-html="group.Description")
      div(text-xs-center)
        v-pagination(:length="this.count" v-model="page" :total-visible="10")
</template>
<script>
import AppHeader from '~/components/header'
export default {
  name: 'GroupsAll',
  components: {
    AppHeader
  },
  data: () => {
    return {
      groups: [],
      limit: 25,
      offset: 0,
      page: 1,
      count: 0
    }
  },
  async mounted () {
    await this.$axios.$get('/groups_scanlation?limit=' + this.limit + '&offset=' + this.offset).then((response) => {
      this.groups = response['response']
      this.count = (response['count'] / this.limit)
      this.count.toFixed(0)
    })
  },
  watch: {
    page: function (val) {
      var offset = (this.limit * this.page) - 1
      this.$axios.$get('/groups_scanlation?limit=' + this.limit + '&offset=' + offset).then((response) => {
        this.groups = response['response']
        this.count = (response['count'] / this.limit)
        this.count.toFixed(0)
      })
    }
  }
}
</script>
