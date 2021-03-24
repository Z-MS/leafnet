<template>
  <v-container>
    <div v-if="show">
      <v-btn @click="close">CLOSE</v-btn>
      <v-list v-if="hasChapters">
        <v-list-item-group>
          <v-list-item v-for="(chapter, index) in chapters">
            <v-list-item-content>
              <v-list-item-title @click="open(chapter)">{{ chapter }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <pdf :fileName="file" :path="path" v-if="showPDF"/>
      <image-viewer :dir="dir" :images="file" v-else/>
      <!-- SHOW A LIST IF FILES IS GREATER THAN ONE -->
    </div>
    <v-list flat v-else>
      <v-list-item-group>
       <v-list-item v-for="(doc, index) in docs" :key="index" two-line>
          <v-list-item-content>
            <v-list-item-title @click="handleFile(doc)">{{ doc.name }}</v-list-item-title>
            <!-- <v-list-item-subtitle>{{ doc }}</v-list-item-subtitle> -->
          </v-list-item-content>
       </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
import pdf from '@/components/PDFJSViewer.vue'
import ImageViewer from '@/components/ImageViewer.vue'
export default {
  components: {
    pdf, ImageViewer
  },
  data: () => ({
    show: false,
    file: null,
    path: '../lib/pdfjs/web/pdf_viewer-master/index.html',
    showPDF: false
  }),
  props: {
    docs: { type: Array, required: true },
    dir: { type: String, required: true }
  },
  methods: {
    open(file) {
      if(file.type == 'pdf' && file.files.length > 1) {      
        this.file = file.files  
      } else {
          if(file.files) {
            this.file = `../../../../pdf/${file.files[0]}.pdf`
            this.togglePDF()
          } else {
            this.file = file.images
          }
      }
      // this.show = !this.show
    },
    handleFile (file) {
      this.open(file)
      this.show = !this.show
    },
    close () {
      this.show = !this.show
      this.file = null
      this.showPDF = false
    },
    togglePDF () {
      this.showPDF = !this.showPDF
    }
  },
  computed: {
    chapters () {
      return this.file;
    },
    hasChapters() {
      if(this.file.files) {
        return this.file.files.length > 1
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>

</style>
