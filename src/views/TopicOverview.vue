<script setup>
import { ref } from "vue";
import { useCoreStore } from "@/stores/core";
import { useRouter } from "vue-router";

import Markdown from "vue3-markdown-it";

const $router = useRouter();
const store = useCoreStore();
</script>

<template>
  Current Topic: {{ store.currentlyPracticedTopic }}
  <router-link to="/practice" class="btn btn-primary"
    >Go To Practice</router-link
  >

  <ul class="">
    <li
      v-for="lesson in store.topics[store.currentlyPracticedTopic]"
      :key="lesson"
    >
      <h3>
        {{ lesson.title }}
      </h3>
      <Markdown
        class="text-ellipsis overflow-hidden max-w-sm block text-xs"
        :source="lesson.content"
      />
    </li>
  </ul>
</template>

<style scoped></style>
