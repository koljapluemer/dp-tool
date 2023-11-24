<script setup>
import { ref, watch, computed, onMounted } from "vue";
import { useCoreStore } from "@/stores/core";
const store = useCoreStore();

// topic of session plus timestamp
// TODO: not hardcode this
const sessionUUID = "Uke_" + Date.now();

// STATE "CAROUSEL" / OUTER PRACTICE LOOP

const states = [
  "welcome",
  "practice-select",
  "pre-practice",
  "during-practice",
  "post-practice",
];

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
    session: sessionUUID,
  });
  randomIntroQuestion.value = "";
};

// PRE PRACTICE LOGIC

const currentTopic = ref("Drawing");
const randomLesson = ref({});

// import drawing.json
import data from "@/lessons/drawing.json";
const drawingLessons = data.lessons;
console.log("Drawing lessons", drawingLessons);

const getRandomLesson = () => {
  console.log("getRandomLesson");
  randomLesson.value =
    drawingLessons[Math.floor(Math.random() * drawingLessons.length)];
};
getRandomLesson();

import Markdown from "vue3-markdown-it";

const sessionGoal = ref("");
const sessionChallenges = ref("");

const savePrePracticeValues = () => {
  store.questionsAnswers.push(
    {
      currentlyPracticedTopic: store.currentlyPracticedTopic,
      question: "What is your goal for this session?",
      answer: sessionGoal.value,
      timestamp: Date.now(),
      session: sessionUUID,
    },
    {
      currentlyPracticedTopic: store.currentlyPracticedTopic,
      question: "What will likely challenge you the most?",
      answer: sessionChallenges.value,
      timestamp: Date.now(),
      session: sessionUUID,
    }
  );
  sessionGoal.value = "";
  sessionChallenges.value = "";
};

// post practice logic

const likertQuestions = [
  "I reached my goal successfully.",
  "I was able to focus on the task at hand.",
  "The unit was fun.",
  "I feel like I made progress towards the larger goal.",
  "The unit was easy.",
  "The unit was exhausting.",
];

const postQuestionData = ref({})  

// for save function, loop dict and save each in questionAnswers
const savePostQuestionData = () => {
  for (const [key, value] of Object.entries(postQuestionData.value)) {
    store.questionsAnswers.push({
      currentlyPracticedTopic: store.currentlyPracticedTopic,
      question: key,
      answer: value,
      timestamp: Date.now(),
      session: sessionUUID,
    });
  }
  postQuestionData.value = {};
};
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
    v-if="currentState === 'practice-select'"
  >
    <div class="card-body">
      <h2 class="text-2xl font-bold text-center">Next Up:</h2>
      <p class="chat-start">
        <Markdown :source="randomLesson.content" class="chat-bubble" />
      </p>
      <div class="">
        <button class="btn" @click="getRandomLesson()">
          Get something else
        </button>
        <button class="btn btn-primary" @click="goToNextState">
          Go to practice
        </button>
      </div>
    </div>
  </div>

  <div
    class="card bg-base-300 shadow-xl p-4"
    v-if="currentState === 'pre-practice'"
  >
    <div class="card-body">
      <h2 class="text-2xl font-bold text-center">Goal Setting:</h2>
      <p class="chat-start">
        <Markdown :source="randomLesson.content" class="chat-bubble" />
      </p>
      <div class="my-2 border-t py-2 border-dashed">
        <h3>What is your goal for this session?</h3>
        <textarea
          name=""
          id=""
          rows="5"
          class="textarea textarea-bordered w-full mb-2"
          v-model="sessionGoal"
        ></textarea>
        <h3>What will likely challenge you the most?</h3>
        <textarea
          name=""
          id=""
          rows="5"
          class="textarea textarea-bordered w-full"
          v-model="sessionChallenges"
        ></textarea>
      </div>
      <div class="">
        <button
          class="btn btn-primary"
          @click="
            savePrePracticeValues();
            goToNextState();
          "
        >
          Start Practice
        </button>
      </div>
    </div>
  </div>

  <div
    class="card bg-base-300 shadow-xl p-4"
    v-if="currentState === 'during-practice'"
  >
    <div class="card-body">
      <h2 class="text-2xl font-bold text-center">Practicing:</h2>
      <p class="chat-start">
        <Markdown :source="randomLesson.content" class="chat-bubble" />
      </p>

      <div class="">
        <button class="btn btn-primary" @click="goToNextState">
          End Practice
        </button>
      </div>
    </div>
  </div>

  <div
    class="card bg-base-300 shadow-xl p-4"
    v-if="currentState === 'post-practice'"
  >
    <div class="card-body">
      <h2 class="text-2xl font-bold text-center">Evaluation</h2>
      <p class="chat-start">
        <Markdown :source="randomLesson.content" class="chat-bubble" />
      </p>

      <table class="table mt-4">
        <!-- head -->
        <thead>
          <tr>
            <th></th>
            <th class="w-32">Strongly Disagree</th>
            <th class="w-32">Disagree</th>
            <th class="w-32">Neutral</th>
            <th class="w-32">Agree</th>
            <th class="w-32">Strongly Agree</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="question in likertQuestions" :key="question">
            <td>{{ question }}</td>
            <td>
              <input
                type="radio"
                :name="question"
                value="1"
                @click="postQuestionData[question] = 1"
              />
            </td>
            <td>
              <input
                type="radio"
                :name="question"
                value="2"
                @click="postQuestionData[question] = 2"
              />
            </td>
            <td>
              <input
                type="radio"
                :name="question"
                value="3"
                @click="postQuestionData[question] = 3"
              />
            </td>
            <td>
              <input
                type="radio"
                :name="question"
                value="4"
                @click="postQuestionData[question] = 4"
              />
            </td>
            <td>
              <input
                type="radio"
                :name="question"
                value="5"
                @click="postQuestionData[question] = 5"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="">
        <button class="btn btn-primary" @click="savePostQuestionData();goToNextState()">
          Go To Next
        </button>
      </div>
    </div>
  </div>
</template>
