<template>
  <div class="home">
    <!-- <levels/> -->
    <course-list/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Levels from '@/views/Levels.vue'
import CourseList from '@/components/CourseList.vue'

export default {
  name: 'Home',
  components: {
    CourseList
  }
}
</script>
