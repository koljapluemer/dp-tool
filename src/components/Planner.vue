<template>

<span v-for="lesson in lessons">{{lesson.Anchor}}</span>

<TrainingCalendar />

</template>

<script setup>
import { ref, watch, computed, onMounted } from "vue";

// import ukeLessons
import data from "@/LessonData/uke.json";
const lessons = ref(data.ukeLessons);

import TrainingCalendar from "@/components/TrainingCalendar.vue";
</script>