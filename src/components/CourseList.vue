<template>
  <v-container>
    <v-list flat>
      <v-list-item-group>
       <v-list-item v-for="(course, index) in courses" :key="index" two-line>
            <v-list-item-content>
         <router-link :to="`/course/${course.code}`">
              <v-list-item-title>{{ course.code }}</v-list-item-title>
              <v-list-item-subtitle>{{ course.name }}</v-list-item-subtitle>
         </router-link>
            </v-list-item-content>
       </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
import courses from '@/assets/courses'
export default {
  name: 'HelloWorld',
  mounted () {
    this.load()
  },
  data: () => ({
    courses: []
  }),
  methods: {
    log (course) {
      console.log(course)
    },
    load () {
      this.courses = courses
      /* fs.readFile('@/assets/courses.json', (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        this.courses = data
      }) */
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
