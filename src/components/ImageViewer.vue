<template>
	<div>
		<img v-for="image in images" :src="`../${dir}/${image}.jpg`" class="images">
	</div>
</template>

<script>
// accept the directory and numPages as a prop
// Be able to move between images, Next and prev
export default {
	props: {
		dir: { type: String, required: true },
		images: { type: Number, required: true }
	}
}
</script>

<style scoped>
.images {
  height: 100%;
  width: 100%;
}
</style>