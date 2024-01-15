<script setup>
import { ref, computed } from "vue";
import Markdown from "vue3-markdown-it";

import { useCoreStore } from "@/stores/core";
const store = useCoreStore();

import { useRouter } from "vue-router";
const $router = useRouter();

// HISTORY

const relevantHistory = computed(() => {
  return store.units.filter((unit) => {
    return unit.topic === store.currentlyPracticedTopic;
  });
});

const currentlyLookedAtHistoryUnitIndex = ref(relevantHistory.value.length - 1);

const goBackInHistory = () => {
  if (currentlyLookedAtHistoryUnitIndex.value > 0) {
    currentlyLookedAtHistoryUnitIndex.value--;
  }
};
const goForwardInHistory = () => {
  if (
    currentlyLookedAtHistoryUnitIndex.value <
    relevantHistory.value.length - 1
  ) {
    currentlyLookedAtHistoryUnitIndex.value++;
  }
};

const unit = computed(() => {
  return relevantHistory.value[currentlyLookedAtHistoryUnitIndex.value];
});
</script>

<template>
  <h1 class="text-3xl">Current Topic: {{ store.currentlyPracticedTopic }}</h1>
  <router-link to="/practice" class="btn btn-primary my-6"
    >Go To Practice</router-link
  >

  <div class="card bg-base-200 w-full max-w-xl" v-if="unit">
    <h2 class="text-2xl mt-5 mb-2">Practice History</h2>
    <div class="card-body">
      <h4 class="uppercase text-sm">{{ unit.topic }}</h4>
      <h3 class="text-xl">{{ unit.title }}</h3>
      <Markdown
        class="text-ellipsis overflow-hidden max-w-sm block text-xs"
        :source="unit.content"
      />
      <ul class="">
        <li v-for="qa in unit.data" :key="qa.question">
          <div class="flex gap-2 flex-between w-full">
            <h4>{{ qa.question }}</h4>
            <p class="text-right">{{ qa.answer }}</p>
          </div>
        </li>
      </ul>
      <div class="card-actions justify-between">
        <button class="btn" @click="goBackInHistory">Back</button>
        <button class="btn" @click="goForwardInHistory">Forward</button>
      </div>
    </div>
  </div>

  <div class="card bg-base-200 w-full max-w-xl">
    <ul class="card-body">
      <h2 class="text-2xl mt-5 mb-2 card-title">Lessons</h2>
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
  </div>
</template>

<style scoped></style>
