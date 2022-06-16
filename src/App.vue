<template>
  <div id="app">
    <router-view/>
    <TabBar/>
  </div>
</template>

<script>
import TabBar from '@/components/Tabbar'
export default {
  name: 'app',
  components: {
    TabBar
  }
}
</script>

<style>

</style>
