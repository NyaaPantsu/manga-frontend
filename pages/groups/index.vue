<template lang="pug">
  v-layout(row)
    v-flex(xs12 sm6 offset-sm3)
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
</template>

<script>
export default {
  name: 'GroupsAll',
  data: () => {
    return {
      groups: [],
      limit: 25,
      offset: 0
    }
  },

  async mounted () {
    const groups = await this.$axios.$get('/groups_scanlation?limit=' + this.limit + '&offset=' + this.offset)
    this.groups = groups
  }
}
</script>
