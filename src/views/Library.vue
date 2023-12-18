<script setup>
import { useCoreStore } from "@/stores/core";
import { ref } from "vue";
// router
import { useRouter } from "vue-router";
const $router = useRouter();

const store = useCoreStore();

const newTopic = ref("");

// function to add new topic
const addTopic = () => {
  store.addTopic(newTopic.value);
  newTopic.value = "";
};


const goPracticeTopic = (topic) => {
  store.currentlyPracticedTopic = topic;
  $router.push("/topic");
};
</script>

<template>
  What do you want to get good at?
  <div class="card">
    <div class="card-body">
      <button class="btn" v-for="(lessons, topic) in store.topics" :key="topic" @click="goPracticeTopic(topic)">
        {{ topic }}
      </button>

      <div class="flex gap-2 items-center">
        <label for="newTopic">Add a new topic:</label>
        <input type="text" class="input input-bordered" name="newTopic" v-model="newTopic" />
        <button class="btn" @click="addTopic">Add</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
