
<template>
  <div>
    <pdf
      v-for="i in numPages"
      :key="i"
      :src="src"
      :page="i"
      style="height: 100%;"
    ></pdf>
  </div>
</template>

<script>

import pdf from 'vue-pdf'

// TRY IFRAMES AGAIN. use the build as the iframe src

export default {
  components: {
    pdf
  },
  data: () => ({
    doc: null,
    src: null,
    numPages: undefined
  }),
  props: {
    file: { type: String, required: true }
  },
  created () {
    this.src = pdf.createLoadingTask(this.file)
  },
  mounted () {
    this.src.promise.then(pdf => {
      this.numPages = pdf.numPages;
    });
  }
}
</script>

<style scoped>
  div {
    overflow-y: auto;
    overflow-scrolling: touch;
  }
</style>
