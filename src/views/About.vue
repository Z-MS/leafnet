<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Hello</p>
    <pdf :fileName="pdfFile" :path="`../lib/pdfjs/web/pdf_viewer-master/index.html`"/>
  </div>
</template>

<script>
import axios from 'axios'
import db from '@/db/db'
import pdf from '@/components/PDFJSViewer'

export default {
	data: () => ({
		someData: null,
		otherData: null
	}),
	components: {
		pdf
	},
	async created () {
		if(!this.otherData) {
				let blob = await db.getItems('Notes')
				let url = URL.createObjectURL(blob[0])
				this.otherData = url
			}
		/*const response = await axios.get('../helloworld.pdf')
		this.someData = response*/
		// console.log(new Blob([response.data], { type: 'application/pdf' }))
	},
	computed: {
		pdfFile() {
			return this.otherData
		}
	}
}
</script>

