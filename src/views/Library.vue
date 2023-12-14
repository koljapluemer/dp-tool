<script setup>
import { useCoreStore } from "@/stores/core";
import { ref } from "vue";

const store = useCoreStore();

const topics = ref([]);
</script>

<template>
  What do you want to get good at?

  <!-- if topics not empty, show link list of topics; if empty, prompt for a new topic -->
  <div class="card">
    <input type="text" class="input" />
  </div>
  <div class="card">
    <h2 class="font-bold">Your Topics</h2>
  </div>
</template>

<style scoped></style>
