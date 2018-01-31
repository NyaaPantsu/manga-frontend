<template>
  <div>
    <div>
      <app-header/>
    </div>
    <div>
      <groups-add/>
    </div>
  </div>
</template>

<script>
  import AppHeader from '~/components/header'
  import GroupsAdd from '~/components/groups-add'
  export default {
    components: {
      AppHeader,
      GroupsAdd
    }
  }
</script>
