<template>
  <div>
  
    <div column>
      <v-layout row>
        <v-flex>
          <v-layout row>
            <v-toolbar dark color="blue-grey darken-3" class="pa-0">
              <v-toolbar-title class="white--text">Latest Updates</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click="changeView">
                <v-icon>apps</v-icon>
              </v-btn>
              <v-btn icon @click="changeView">
                <v-icon>list</v-icon>
              </v-btn>
            </v-toolbar>
          </v-layout>
          <div v-if="table">
  
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
                <v-divider></v-divider>
              </v-flex>
            </v-layout>
            <v-layout row class="px-2" v-for="(chapter, index) in other" v-bind:item="item" v-bind:index="index">
              <v-flex style="flex: 0 0 50px;">
                <img :src="cdn + chapter[0].SeriesId.CoverImage" style="max-width: 50px; max-height: 50px;" />
              </v-flex>
              <v-flex xs12>
                <v-layout class="pa-1">
                  <v-flex xs12>
                    <img style="float: left; padding: 3px;" src="/information.png" />
                    <router-link :to="{ name: 'comics-id', params: { id: chapter[0].SeriesId.Id }}">{{ chapter[0].SeriesId.Name }}</router-link>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout class="pa-1" v-for="(item, index) in chapter">
                  <v-flex xs8 sm6>
                    <img style="float: left; padding: 3px 4px;" src="/book_open.png" />
                    <router-link :to="{ name: 'reader-id', params: { id: item.Hash }}">Vol.{{ item.VolumeNumber }} Ch. {{ item.ChapterNumberAbsolute }} {{ item.ChapterNumberVolume }}</router-link>
                  </v-flex>
                  <v-flex xs2 hidden-xs-only v-for="groups in item.SeriesChaptersGroups">
                    {{ groups.GroupName }}
                  </v-flex>
                  <v-flex xs4 sm2 hidden-xs-only>
                    <flag :iso="item.ChapterLanguage.Code" />
                  </v-flex>
                  <v-flex xs4 sm2>
                    <timeago :since="item.TimeUploaded | timestamp"></timeago>
                  </v-flex>
                </v-layout>
                <v-divider></v-divider>
              </v-flex>
              <v-divider></v-divider>
            </v-layout>
          </div>
          <div v-else>
            <v-layout row wrap>
              <v-flex xs3 v-for="(item, index) in chapters">
                <v-card>
                  <v-card-media>
                    <img :src="cdn + item.SeriesId.CoverImage" style="max-width: 250px; max-height: 300px;" />
                  </v-card-media>
                  <v-card-title>
                    <div>
                      <span><router-link :to="{ name: 'comics-id', params: { id: item.SeriesId.Id }}">{{ item.SeriesId.Name }}</router-link></span>
                      <span><timeago :since="item.TimeUploaded | timestamp"></timeago></span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>fa fa-book</v-icon>
                    </v-btn>
                    <router-link :to="{ name: 'reader-id', params: { id: item.Hash }}">Vol.{{ item.VolumeNumber }} Ch. {{ item.ChapterNumberAbsolute }}{{ item.ChapterNumberVolume }}</router-link>
                    <v-btn icon>
                      <flag :iso="item.ChapterLanguage.Code" />
                    </v-btn>
  
                  </v-card-actions>
                </v-card>
              </v-flex>
  
            </v-layout>
  
          </div>
        </v-flex>
  
      </v-layout>
  
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
            text: 'Series',
            value: 'series'
          },
          {
            text: 'chapter',
            value: 'chapters'
          },
          {
            text: 'Language',
            value: 'language'
          },
          {
            text: 'Contributor',
            value: 'contributor'
          }
        ],
        table: true
      }
    },
    props: {
      chapters: {
        type: Array,
        required: true
      },
      other: {
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
    methods: {
      changeView: function () {
        this.table = !this.table
      }
    },
    filters: {
      timestamp: function (date) {
        return Date.parse(date)
      }
    }
  }
</script>
