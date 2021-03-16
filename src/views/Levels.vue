<template>
    <div>
        <div>
            <p class="level-name">100 LEVEL</p>
            <div class="semester">
                <p class="semester-title">First Semester</p>
                <ul>
                    <li v-for="(course, index) in courses[0].first" :key="index">
                        {{ course }}
                        <router-link :to="'/courses/' + course"/>
                    </li>
                </ul>
            </div>
            <div class="semester">
                <p class="semester-title">Second Semester</p>
                <ul>
                    <li>MATH102</li>
                    <li>MATH104</li>
                    <li>MATH106</li>
                    <li>PHYS122</li>
                    <li>PHYS124</li>
                    <li>STAT102</li>
                </ul>
            </div>
        </div>
        <div>
            <p class="level-name">200 LEVEL</p>
            <div class="semester">
                <p>First Semester</p>
            </div>
            <div class="semester">
                <p>Second Semester</p>
            </div>
        </div>
        <div>
            <p class="level-name">300 LEVEL</p>
            <div class="semester">
                <p>First Semester</p>
            </div>
            <div class="semester">
                <p>Second Semester</p>
            </div>
        </div>
        <div>
            <p class="level-name">400 LEVEL</p>
            <div class="semester">
                <p>First Semester</p>
            </div>
            <div class="semester">
                <p>Second Semester</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data: () => ({
    courses: [
      { first: ['COSC101', 'MATH101', 'MATH103', 'MATH105', 'PHYS111', 'PHYS131'], second: ['MATH102', 'MATH104', 'MATH106', 'PHYS122', 'PHYS124'] }]
  })
}
</script>

<style scoped>
    .level-name {
        margin-left: 1rem;
        padding: 0.2em;
        font-size: 1.35rem;
        font-weight: bold;
        text-align: left;
        background-color: rgb(44, 243, 44, 0.8);
    }

    .semester {
        margin-left: 10%;
        width: 80%;
        background-color: rgba(243, 243, 243, 0.815);
    }

    .semester-title {
        font-weight: 600;
        background-color: rgb(44, 243, 44, 0.8)
    }
</style>
