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
</script>

<template>
  {{ currentState }}

  <button @click="goToNextState">Next</button>
</template>
