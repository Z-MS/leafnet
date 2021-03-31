<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-icon v-if="!atHome" @click="$router.push('/')">mdi-arrow-left</v-icon>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <span class="mr-2" v-show="atHome">LEAFNET</span>
        <span class="mr-2" v-show="!atHome">{{ showCode }}</span>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    show: true
  }),
  computed: {
    atHome () {
      return this.$route.path === '/'
    },
    showCode () {
      console.log(this.$route)
      return this.$route.params.name
    }
  }
};
</script>

<style scoped>
a {
  color: white;
}
</style>
