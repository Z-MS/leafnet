<template>
  <v-container>
    <div v-if="show">
      <v-btn @click="close">CLOSE</v-btn>
      <iframe :src="ytVid" frameborder="0" allowfullscreen></iframe>
    </div>
    <!-- <v-list flat v-else>
      <v-list-item-group>
       <v-list-item v-for="(video, index) in videos" :key="index">
          <v-list-item-content class="d-flex">
            <v-img :src="video.snippet.thumbnails.default.url" max-width="120"></v-img>
            <v-list-item-title @click="open(video.id)" class="align-self-center">{{ video.snippet.title }}</v-list-item-title>
          </v-list-item-content>
       </v-list-item>
      </v-list-item-group>
    </v-list> -->
    <div v-else>
    <ul>
      <li v-for="(video, index) in videos" :key="index" class="d-flex">
        <v-img :src="video.snippet.thumbnails.default.url" max-width="120"></v-img>
        <span @click="open(video.id)" class="pa-2 align-self-center">{{ video.snippet.title }}</span>
      </li>
    </ul>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    show: false,
    ytVid: ''
  }),
  props: {
    videos: { type: Array, required: true }
  },
  methods: {
    open (id) {
      this.ytVid = `https://www.youtube.com/embed/${id}`
      this.show = !this.show
    },
    close () {
      this.show = !this.show
      this.ytVid = ''
    }
  }
}
</script>

<style scoped>
li {
  margin-bottom: 1rem;
  /*border-bottom: 1px solid rgba(128, 128, 128, 0.555);*/
}

span {
  padding-left: 0.5rem;
}
</style>
