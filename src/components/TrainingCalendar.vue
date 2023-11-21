<script setup>
import { ref } from "vue";

const attrs = ref([
  {
    key: "today",
    highlight: true,
    dates: new Date(),
  },
]);
</script>

<template>
  <VCalendar :attributes="attrs" />
</template>

<style scoped></style>
