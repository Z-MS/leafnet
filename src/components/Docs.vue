<template>
  <v-container>
    <div v-if="show">
      <v-btn @click="close">CLOSE</v-btn>
      <pdf :file="file"/>
    </div>
    <v-list flat v-else>
      <v-list-item-group>
       <v-list-item v-for="(doc, index) in docs" :key="index" two-line>
          <v-list-item-content>
            <v-list-item-title @click="open(doc.url)">{{ doc.name }}</v-list-item-title>
            <!-- <v-list-item-subtitle>{{ doc }}</v-list-item-subtitle> -->
          </v-list-item-content>
       </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
import pdf from '@/components/PDFJSViewer.vue'
export default {
  components: {
    pdf
  },
  data: () => ({
    show: false,
    file: ''
  }),
  props: {
    docs: { type: Array, required: true }
  },
  methods: {
    open (file) {
      this.file = `../pdf/${file}.pdf`
      this.show = !this.show
    },
    close () {
      this.show = !this.show
      this.file = ''
    }
  }
}
</script>

<style scoped>

</style>
