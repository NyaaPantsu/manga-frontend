<template>
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
        <v-flex xs8 sm6 class="px-2">
          Title
        </v-flex>
        <v-flex xs4 hidden-xs-only>
          Group
        </v-flex>
        <v-flex xs4 sm2>
          Date
        </v-flex>
      </v-layout>

      <v-layout row class="px-2">
        <v-flex style="flex: 0 0 50px"></v-flex>
        <v-flex xs12>
          <v-divider ></v-divider>
        </v-flex>
      </v-layout>
      
      <v-layout row class="px-2">
        <v-flex style="flex: 0 0 50px">
          <img src="/placeholder.jpg" />
        </v-flex>
        <v-flex xs12>
          <v-layout class="pa-1">
            <v-flex xs12>
              <img style="float: left; padding: 3px;" src="/information.png"/> Scattered Courtesan
            </v-flex>
          </v-layout>
          <v-divider ></v-divider>
          <v-layout class="pa-1">
            <v-flex xs8 sm6>
              <img style="float: left; padding: 3px 4px;" src="/book_open.png" /> Vol.1 Ch.2: 2
            </v-flex>
            <v-flex xs4 hidden-xs-only>
              Manga Cosmo0000000000
            </v-flex>
            <v-flex xs4 sm2>
              A day ago
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout class="pa-1">
            <v-flex xs8 sm6>
              <img style="float: left; padding: 3px 4px;" src="/book_open.png" />  Vol.1 Ch.2: 2
            </v-flex>
            <v-flex sm4 hidden-xs-only>
              Manga Cosmo0000000000
            </v-flex>
            <v-flex xs4 sm2>
              A day ago
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>

      <v-layout row class="px-2">
        <v-flex style="flex: 0 0 50px">
          <img src="/placeholder.jpg" />
        </v-flex>
        <v-flex xs12>
          <v-layout class="pa-1">
            <v-flex xs12>
              <img style="float: left; padding: 3px;" src="/information.png"/> Scattered Courtesan
            </v-flex>
          </v-layout>
          <v-divider ></v-divider>
          <v-layout class="pa-1">
            <v-flex xs8 sm6>
              <img style="float: left; padding: 3px 4px;" src="/book_open.png" /> Vol.1 Ch.2: 2
            </v-flex>
            <v-flex xs4 hidden-xs-only>
              Manga Cosmo0000000000
            </v-flex>
            <v-flex xs4 sm2>
              A day ago
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout class="pa-1">
            <v-flex xs8 sm6>
              <img style="float: left; padding: 3px 4px;" src="/book_open.png" />  Vol.1 Ch.2: 2
            </v-flex>
            <v-flex sm4 hidden-xs-only>
              Manga Cosmo0000000000
            </v-flex>
            <v-flex xs4 sm2>
              A day ago
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout class="pa-1">
            <v-flex xs8 sm6>
              <img style="float: left; padding: 3px 4px;" src="/book_open.png" />  Vol.1 Ch.2: 2
            </v-flex>
            <v-flex sm4 hidden-xs-only>
              Manga Cosmo0000000000
            </v-flex>
            <v-flex xs4 sm2>
              A day ago
            </v-flex>
          </v-layout>
          <v-divider></v-divider>


        </v-flex>
      </v-layout>

      <v-layout row class="px-2">
        <v-flex style="flex: 0 0 50px">
          <img src="/placeholder.jpg" />
        </v-flex>
        <v-flex xs12>
          <v-layout class="pa-1">
            <v-flex xs12>
              <img style="float: left; padding: 3px;" src="/information.png"/> Scattered Courtesan
            </v-flex>
          </v-layout>
          <v-divider ></v-divider>
          <v-layout class="pa-1">
            <v-flex xs8 sm6>
              <img style="float: left; padding: 3px 4px;" src="/book_open.png" /> Vol.1 Ch.2: 2
            </v-flex>
            <v-flex xs4 hidden-xs-only>
              Manga Cosmo0000000000
            </v-flex>
            <v-flex xs4 sm2>
              A day ago
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout class="pa-1">
            <v-flex xs8 sm6>
              <img style="float: left; padding: 3px 4px;" src="/book_open.png" />  Vol.1 Ch.2: 2
            </v-flex>
            <v-flex sm4 hidden-xs-only>
              Manga Cosmo0000000000
            </v-flex>
            <v-flex xs4 sm2>
              A day ago
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>

    </v-flex>


    <v-flex hidden-sm-and-down md3 class="pl-3">
        <v-subheader>Popular Series</v-subheader>
        <v-card color="blue-grey darken-3" class="white--text mb-3">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex style="flex: 0 0 50px">
                <img src="/placeholder.jpg" />
              </v-flex>
              <v-flex xs11>
                <div>
                  <div>Ch.722: The Old You</div>
                  <div>Tomo-chan wa Onna no ko!</div>
                  <div>Dec 17</div>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <v-card color="blue-grey darken-3" class="white--text mb-3">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex style="flex: 0 0 50px">
                <img src="/placeholder.jpg" />
              </v-flex>
              <v-flex xs11>
                <div>
                  <div>Ch.722: The Old You</div>
                  <div>Tomo-chan wa Onna no ko!</div>
                  <div>Dec 17</div>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <v-card color="blue-grey darken-3" class="white--text mb-3">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex style="flex: 0 0 50px">
                <img src="/placeholder.jpg" />
              </v-flex>
              <v-flex xs11>
                <div>
                  <div>Ch.722: The Old You</div>
                  <div>Tomo-chan wa Onna no ko!</div>
                  <div>Dec 17</div>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
  export default {
    name: 'ChaptersAll',
    data: () => {
      return {
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
        ],
        chapters: [],
        limit: 25,
        offset: 0
      }
    },

    async mounted () {
      const chapters = await this.$axios.$get('/series_chapters?limit=' + this.limit + '&offset=' + this.offset)
      this.chapters = chapters
      console.log(chapters)
    }
  }
</script>
