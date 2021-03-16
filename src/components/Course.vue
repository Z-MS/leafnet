<template>
  <v-container>
    <v-tabs v-model="tab">
      <v-tab>Videos</v-tab>
      <v-tab>NOTES</v-tab>
      <v-tab>Past Questions</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item><videos :videos="courseComp.videos"/></v-tab-item>
      <v-tab-item><docs :docs="courseComp.notes"/></v-tab-item>
      <v-tab-item><docs :docs="courseComp.pqs"/></v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import axios from 'axios'
import Videos from '@/components/Videos'
import Docs from '@/components/Docs'

export default {
  data: () => ({
    tab: null,
    course: null
  }),
  components: {
    Videos, Docs
  },
  props: {
    code: { required: false, type: String }
  },
  async created () {
    const courseCode = this.$route.params.name.toLowerCase()
    const response = await axios.get(`../${courseCode}.json`)
    const course = response.data
    this.course = course
  },
  computed: {
    courseComp () {
      console.log(this.course)
      if (!this.course) {
        return { notes: [], pqs: [], videos: [] }
      } else {
        return this.course
      }
    }
  }
}
</script>

<style scoped>
li {
  display: flex;
  border-bottom: 1px solid rgba(128, 128, 128, 0.565);
}

span {
  align-self: center;
  padding-left: 0.5rem;
}
</style>
