<script setup>
import { ref, watch, computed, onMounted } from "vue";
import { useCoreStore } from "@/stores/core";
const store = useCoreStore();

// STATE "CAROUSEL" / OUTER PRACTICE LOOP

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

// INTRO QUESTION LOGIC

const introQuestions = [
  "What do you remember from your last session?",
  "Visualize success in this topic. What do you see?",
  "What motivates you to get better at this?",
];

const randomIntroQuestion = computed(() => {
  return introQuestions[Math.floor(Math.random() * introQuestions.length)];
});

const introAnswer = ref("");

const saveAnswer = () => {
  store.questionsAnswers.push({
    currentlyPracticedTopic: store.currentlyPracticedTopic,
    question: randomIntroQuestion.value,
    answer: introAnswer.value,
    timestamp: Date.now(),
  });
};

// PRE PRACTICE LOGIC 

const currentTopic = ref("Drawing");
const randomLesson = ref({});

// import drawing.json
import data from "@/lessons/drawing.json";
const drawingLessons = data.lessons;
console.log("Drawing lessons", drawingLessons);

const getRandomLesson = () => {
 randomLesson.value = drawingLessons[Math.floor(Math.random() * drawingLessons.length)];
};
getRandomLesson();

</script>

<template>
  <!-- {{ currentState }} -->

  <div class="card bg-base-300 shadow-xl p-4" v-if="currentState === 'welcome'">
    <div class="card-body">
      <h2 class="text-2xl font-bold text-center">
        Welcome to your
        <span class="bg-yellow-400 p-1 text-black">
          {{ store.currentlyPracticedTopic }}
        </span>
        practice session!
      </h2>
      <p>First, a little question...</p>
      <p class="">
        {{ randomIntroQuestion }}
      </p>
      <textarea
        name=""
        id=""
        cols="5"
        rows="10"
        v-model="introAnswer"
        placeholder="Your message to yourself..."
        class="textarea textarea-bordered my-2"
      ></textarea>

      <button
        @click="
          saveAnswer();
          goToNextState();
        "
        class="btn btn-primary"
      >
        Save Answer and Start Session
      </button>
    </div>
  </div>

  <div
    class="card bg-base-300 shadow-xl p-4"
    v-if="currentState === 'pre-practice'"
  >
    <div class="card-body">
      <h2 class="text-2xl font-bold text-center">Next Up:</h2>
      <p>
      {{ randomLesson.content }}
      </p>


    </div>
  </div>
</template>
