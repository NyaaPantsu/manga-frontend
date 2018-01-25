<template>
<form enctype="multipart/form-data">
        <input type="file" @change="onFileChange">
    </form>
</template>
<script>
export default {
  name: 'ImportFollows',
  methods: {
    onFileChange: function (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createInput(files[0])
    },
    createInput: function (file) {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$store.state.token
      var reader = new FileReader()
      var vm = this
      reader.onload = (e) => {
        vm.fileinput = reader.result
      }
      console.log(this.$store.state.token)
      var header = 'Bearer ' + this.$store.state.token
      console.log(header)
      this.$axios.$post('/follows/import', JSON.stringify(reader.readAsText(file)), { headers: { Authorization: header } })
    }
  }
}
</script>