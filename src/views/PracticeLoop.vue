<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from "vue";

import { useCoreStore } from "@/stores/core";
const store = useCoreStore();

// topic of session plus timestamp
// TODO: not hardcode this
const unitUUID = store.currentlyPracticedTopic + "_" + Date.now();
const unit = ref({
  id: unitUUID,
  topic: store.currentlyPracticedTopic,
  timestamp: Date.now(),
  data: [],
});

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
  unit.value.data.push({
    question: randomIntroQuestion.value,
    answer: introAnswer.value,
    timestamp: Date.now(),
  });
  randomIntroQuestion.value = "";
};

// PRE PRACTICE LOGIC

const randomLesson = ref({});

import data from "@/data/lessons.json";

const lessons = data[store.currentlyPracticedTopic];

const getRandomLesson = () => {
  randomLesson.value = lessons[Math.floor(Math.random() * lessons.length)];
};

import Markdown from "vue3-markdown-it";

const sessionGoal = ref("");
const sessionChallenges = ref("");

const preSessionCleanUp = () => {
  sessionGoal.value = "";
  sessionChallenges.value = "";
  getRandomLesson();
};

const seconds = ref(0);
let intervalId;

const scheduledMinutes = ref(10);

const savePrePracticeValues = () => {
  unit.value.data.push(
    {
      question: "What is your goal for this session?",
      answer: sessionGoal.value,
      timestamp: Date.now(),
    },
    {
      question: "What will likely challenge you the most?",
      answer: sessionChallenges.value,
      timestamp: Date.now(),
    },
    {
      question: "How long do you want to practice?",
      answer: scheduledMinutes.value,
      timestamp: Date.now(),
    }
  );

  // this timer logic is for practice, we start it when moving from the previous UI to the practice UI
  // this shows that this structure is a bit messy, but that "simply" moving anything into components is not so simple, either

  intervalId = setInterval(() => {
    seconds.value++;
  }, 1000);
};

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

// DURING PRACTICE LOGIC

const formattedTime = computed(() => {
  const minutes = Math.floor(seconds.value / 60);
  const remainingSeconds = seconds.value % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
});

const savePracticeValues = () => {
  unit.value.data.push({
    question: "Actual Practice Time",
    answer: seconds.value,
    timestamp: Date.now(),
  });

  clearInterval(intervalId);
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

const postQuestionData = ref({});
const sessionComment = ref("");

// for save function, loop dict and save each in questionAnswers
const savePostQuestionData = () => {
  for (const [key, value] of Object.entries(postQuestionData.value)) {
    unit.value.data.push({
      question: key,
      answer: value,
      timestamp: Date.now(),
    });
  }
  // save session comment
  unit.value.data.push({
    question: "Session Comment",
    answer: sessionComment.value,
    timestamp: Date.now(),
  });
  sessionComment.value = "";
  postQuestionData.value = {};

  // run save and the cleanup
  store.units.push(unit.value);
  preSessionCleanUp();
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
      <div class="chat-start">
        <div class="chat-bubble">
          <div class="text-xl mb-2">
            {{ randomLesson.title }}
          </div>
          <Markdown :source="randomLesson.content" />
        </div>
      </div>
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
      <div class="chat-start">
        <div class="chat-bubble">
          <div class="text-xl mb-2">
            {{ randomLesson.title }}
          </div>
          <Markdown :source="randomLesson.content" />
        </div>
      </div>
      <div class="my-2 border-t py-2 border-dashed">
        <div class="mt-4">
          <div class="flex gap-2 items-center">
            <span>I want to practice for </span>
            <input
              type="number"
              class="input input-sm"
              v-model="scheduledMinutes"
            />
            <span class="flex-grow"> minutes</span>
          </div>
        </div>
        <div class="mt-4">
          <span class="pt-4">My goal for this session is...</span>
          <textarea
            name=""
            id=""
            class="textarea textarea-bordered w-full mb-2"
            v-model="sessionGoal"
          ></textarea>
        </div>
        <div class="mt-4">
          <span class="">The biggest challenge will probably be...</span>
          <textarea
            name=""
            id=""
            class="textarea textarea-bordered w-full"
            v-model="sessionChallenges"
          ></textarea>
        </div>
      </div>
      <div class="">
        <button
          class="btn btn-primary"
          @click="
            seconds = 0;
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
      <div class="chat-start">
        <div class="chat-bubble">
          <div class="text-xl mb-2">
            {{ randomLesson.title }}
          </div>
          <Markdown :source="randomLesson.content" />
        </div>
      </div>
      <h3 class="text-xl mt-3">
        Your practice timer. Remember to take breaks.
      </h3>
      <small
        >(you scheduled {{ scheduledMinutes }} minutes for this unit)</small
      >
      <p class="text-3xl my-5">
        {{ formattedTime }}
      </p>

      <div class="">
        <button
          class="btn btn-primary"
          @click="
            savePracticeValues();
            goToNextState();
          "
        >
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
       <div class="chat-start">
        <div class="chat-bubble">
          <div class="text-xl mb-2">
            {{ randomLesson.title }}
          </div>
          <Markdown :source="randomLesson.content" />
        </div>
      </div>
      <p>You practiced for {{ formattedTime }}m.</p>

      <div class="mt-4">
        <p class="my-1">
          Your goal was: <em>{{ sessionGoal }}</em>
        </p>
        <p class="my-1">
          You predicted challenges were: <em>{{ sessionChallenges }}</em>
        </p>
        <div class="mt-5">
          <label>
            Evaluate your session. What was hard, what was surprising, what was
            interesting?
          </label>
          <textarea
            name=""
            id=""
            class="textarea textarea-bordered w-full mt-2"
            v-model="sessionComment"
          ></textarea>
        </div>
      </div>

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
        <button
          class="btn btn-primary"
          @click="
            savePostQuestionData();
            goToNextState();
          "
        >
          Go To Next
        </button>
      </div>
    </div>
  </div>
</template>
