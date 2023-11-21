<script setup>
import { ref, watch, computed, onMounted } from "vue";

const states = ["welcome", "pre-practice", "during-practice", "post-practice"];

const currentState = ref(states[0]);

const goToNextState = () => {
  const currentStateIndex = states.indexOf(currentState.value);
  if (currentStateIndex < states.length - 1) {
    currentState.value = states[currentStateIndex + 1];
  } else {
    currentState.value = states[1];
  }
};

const introQuestions = [
  "What do you remember from your last session?",
  "What do you hope to gain today?",
  "Visualize success in this topic. What do you see?",
  "Write down some motivation for future you:",
];
</script>

<template>
  <!-- {{ currentState }} -->

  <div class="card bg-base-100 p-2" v-if="currentState === 'welcome'">
    <h1 class="text-2xl font-bold">Welcome to your practice session!</h1>
    <h2 class="text-xl">
      {{ introQuestions[Math.floor(Math.random() * introQuestions.length)] }}
    </h2>
    <textarea name="" id="" cols="30" rows="10" class="textarea textarea-bordered my-2"></textarea>

    <button @click="goToNextState" class="btn btn-primary">
      Save Answer and Start Session
    </button>
    <div class="card-body"></div>
  </div>

  <button @click="goToNextState">Next</button>
</template>
