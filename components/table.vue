<template>
<div column>
    <v-layout row>
    <v-flex xs12 md9>
      <v-layout row>
        <v-toolbar dark color="blue-grey darken-3" class="pa-0">
          <v-toolbar-title class="white--text">Latest Updates</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>apps</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>list</v-icon>
          </v-btn>
        </v-toolbar>
      </v-layout>

      <v-layout class="pa-1">
        <v-flex style="flex: 0 0 50px">
        </v-flex>
        <v-flex xs8 sm6 class="px-2" id="title">
          Title
        </v-flex>
        <v-flex xs4 hidden-xs-only>
          Group
        </v-flex>
        <v-flex xs4 sm2 id="title">
          Language
        </v-flex>
        <v-flex xs4 sm2 id="title">
          Date
        </v-flex>
      </v-layout>

      <v-layout row class="px-2">
        <v-flex style="flex: 0 0 50px"></v-flex>
        <v-flex xs12>
          <v-divider ></v-divider>
        </v-flex>
      </v-layout>
      <v-layout row class="px-2" v-for="(item, index) in chapters"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.id">
        <v-flex style="flex: 0 0 50px;">
          <img :src="cdn + item.SeriesId.CoverImage" style="max-width: 50px; max-height: 50px;"/>
        </v-flex>
        <v-flex xs12>
          <v-layout class="pa-1">
            <v-flex xs12>
              <img style="float: left; padding: 3px;" src="/information.png"/> <router-link :to="{ name: 'comics-id', params: { id: item.SeriesId.Id }}">{{ item.SeriesId.Name }}</router-link>
            </v-flex>
          </v-layout>
          <v-divider ></v-divider>
          <v-layout class="pa-1">
            <v-flex xs8 sm6>
              <img style="float: left; padding: 3px 4px;" src="/book_open.png" /> <router-link :to="{ name: 'reader-id', params: { id: item.Hash }}">Vol.{{ item.VolumeNumber }} Ch. {{ item.ChapterNumberAbsolute }}</router-link>
            </v-flex>
            <v-flex xs4 hidden-xs-only>
              {{ item.ContributorId.Username }}
            </v-flex>
            <v-flex xs4 sm2>
              <flag :iso="item.ChapterLanguage.Code" />
            </v-flex>
            <v-flex xs4 sm2>
              <timeago :since="item.TimeUploaded | timestamp"></timeago>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>
    </v-flex>
 
  </v-layout>
    <div class="text-xs-center">
      <v-pagination :length="count" v-model="this.page" :total-visible="10"></v-pagination>
    </div>
</div>

</template>

<script>
  export default {
    data: () => {
      return {
        cdn: 'https://cdn.manga.sh/covers/',
        headers: [
          {
            text: 'Series', value: 'series'
          },
          {
            text: 'chapter', value: 'chapters'
          },
          {
            text: 'Language', value: 'language'
          },
          {
            text: 'Contributor', value: 'contributor'
          }
        ]
      }
    },
    props: {
      chapters: {
        type: Array,
        required: true
      },
      count: {
        type: Number,
        required: true
      },
      page: {
        type: Number
      }
    },
    filters: {
      timestamp: function (date) {
        return Date.parse(date)
      }
    }
  }
</script>
