<template>
<div>
  <div>
    <app-header />
  </div>
  <div>
<form enctype="multipart/form-data">
        <input type="file" @change="onFileChange">
    </form>
  </div>
</div>

</template>
<script>
import AppHeader from '~/components/header'
export default {
  name: 'ImportFollows',
  components: {
    AppHeader
  },
  methods: {
    onFileChange: function (e) {
      var files = e.target.files || e.dataTransfer.files
      console.log(files)
      if (!files.length) {
        return
      }
      this.createInput(files[0])
    },
    createInput: function (file) {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$store.state.token
      var reader = new FileReader()
      reader.onload = (e) => {
        this.fileinput = reader.result
        var header = 'Bearer ' + this.$store.state.token
        this.$axios.$post('/follows/import', reader.result, { headers: { Authorization: header } }).then((response) => {
          console.log(response)
        })
      }
      reader.readAsText(file)
    }
  }
}
</script>