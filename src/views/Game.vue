<script setup>
import { ref, watch, computed, onMounted } from "vue";

const topics = ref({
  Ukulele: [
    {
      URL: "/watch?v=yBSHVqtEnC8&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=1&pp=iAQB",
      Anchor: "DAY 1 - 30 Day Uke Course - SETTING UP",
    },
    {
      URL: "/watch?v=9QXr8yuutTE&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=2&pp=iAQB",
      Anchor:
        "DAY 2 - 30 Day Uke Course - FINGERPICKING Adele Someone Like You",
    },
    {
      URL: "/watch?v=MGLDb7OBPFk&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=3&pp=iAQB",
      Anchor:
        "DAY 3 - 30 Day Uke Course - FINGERPICKING Can't Help Falling In Love",
    },
    {
      URL: "/watch?v=TDzC9dplNmQ&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=4&pp=iAQB",
      Anchor:
        "DAY 4 - 30 Day Uke Course - FINGERPICKING Hallelujah Leonard Cohen",
    },
    {
      URL: "/watch?v=3vvBuhBNUWQ&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=5&pp=iAQB",
      Anchor: "DAY 5 - 30 Day Uke Course - DIFFICULT CHORD SWITCHES MADE EASY",
    },
    {
      URL: "/watch?v=DNMBTl9VCZE&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=6&pp=iAQB",
      Anchor: "DAY 6 - 30 Day Uke Course - READING MUSIC Quarter Notes, Rests",
    },
    {
      URL: "/watch?v=aPr7Row0Sj8&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=7&pp=iAQB",
      Anchor: "DAY 7 - 30 Day Uke Course - READING MUSIC Eighth Notes",
    },
    {
      URL: "/watch?v=829jI79Ofuk&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=8&pp=iAQB",
      Anchor: "DAY 8 - 30 Day Uke Course - SCALES C Major Scale",
    },
    {
      URL: "/watch?v=Tfb7NdsJYVE&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=9&pp=iAQB",
      Anchor: "DAY 9 - 30 Day Uke Course - SCALES G Major Scale",
    },
    {
      URL: "/watch?v=Zcd-FONjkeg&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=10&pp=iAQB",
      Anchor: "DAY 10! 30 Day Uke Course - SCALES D Major Scale",
    },
    {
      URL: "/watch?v=9qQO-y1eFAw&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=11&pp=iAQB",
      Anchor: "DAY 11 - 30 Day Uke Course - STUDYING FOR YOUR TEST",
    },
    {
      URL: "/watch?v=khvdHeWdKe8&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=12&pp=iAQB",
      Anchor: "DAY 12 - 30 Day Uke Course - TEST",
    },
    {
      URL: "/watch?v=jctPeMxpRxY&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=13&pp=iAQB",
      Anchor: "DAY 13 - 30 Day Uke Course - TEST ANSWERS",
    },
    {
      URL: "/watch?v=n9V-u5CfKu4&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=14&pp=iAQB",
      Anchor: "DAY 14 - 30 Day Uke Course - NEW CHORDS",
    },
    {
      URL: "/watch?v=8NA-AiWI1q8&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=15&pp=iAQB",
      Anchor:
        "DAY 15 - 30 Day Uke Course - RAGGAE STRUM AND LEFT HAND MUTING!!",
    },
    {
      URL: "/watch?v=q-HTQt2A56A&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=16&pp=iAQB",
      Anchor: "DAY 16 - BOB MARLEY Three Little Birds - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=-CF5svv0tJo&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=17&pp=iAQB",
      Anchor: "DAY 17 - 12 BAR BLUES - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=tsilj1X-wFM&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=18&pp=iAQB",
      Anchor: "DAY 18 - BLUES + STRUMMING - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=_9LeWRo4Hyw&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=19&pp=iAQB",
      Anchor: "Day 19 - MELODY - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=NsHMkf2Qvkw&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=20&pp=iAQB",
      Anchor: "Day 20 - CHORD MELODY - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=br3E6peXoQE&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=21&pp=iAQB",
      Anchor: "Day 21 - GREENSLEEVES CHORD MELODY - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=sW_av6kqYB4&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=22&pp=iAQB",
      Anchor: "DAY 22 - STAND BY ME CHORD MELODY - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=91Go1ZIiGuU&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=23&pp=iAQB",
      Anchor: "Day 23 - STAND BY ME INTERMEDIATE STRUMMING - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=RC696OAAHZ0&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=24&pp=iAQB",
      Anchor: "DAY 24 - STAND BY ME Complete Chord Melody - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=vX8EMmqmDJE&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=25&pp=iAQB",
      Anchor: "Day 25 - FINGER PATTERNS - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=EIZSZTrpkzk&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=26&pp=iAQB",
      Anchor: "Day 26 - LA VIE EN ROSE CHORD-MELODY 1 - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=YubXv7T9KkA&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=27&pp=iAQB",
      Anchor: "DAY 27 - LA VIE EN ROSE CHORD MELODY Part 2 - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=C602P6kP7E4&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=28&pp=iAQB",
      Anchor: "Day 28 - PLAYING BEYOND THE 4TH FRET - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=DYBrSgNQMi4&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=29&pp=iAQB",
      Anchor: "Day 29 - CHORD PROGRESSIONS - 30 Day Uke Course",
    },
    {
      URL: "/watch?v=btYPJwwFi_c&list=PLJFa3EaocfZnNCDW157HHk5NxE0OKUUZ8&index=30&pp=iAQB",
      Anchor: "Day 30 - I CAN SEE CLEARLY NOW - 30 Day Uke Course",
    },
  ],
  Arabic: [
    {
      URL: "",
      Anchor: "Learn Letters",
    },
  ],
});

const currentTopic = ref("Ukulele");
const randomLesson = ref(0);

const getRandomLesson = () => {
  // make sure to filter topic list to only include lessons from current topic's list
  const lessonsOfCurrentTopic = topics.value[currentTopic.value];
  // pick lesson:
  const randomIndex = Math.floor(Math.random() * lessonsOfCurrentTopic.length);
  randomLesson.value = lessonsOfCurrentTopic[randomIndex];
};
getRandomLesson();

const likertQuestions = [
  "I reached my goal successfully.",
  "I was able to focus on the task at hand.",
  "The unit was fun.",
  "I feel like I made progress towards the larger goal.",
  "The unit was easy.",
  "The unit was exhausting.",
];
</script>

<template>
  <!-- dropdown with all lesson topics -->
  <div class="flex flex-col justify-center items-center">
    <label for="topic" class="font-bold text-2xl">Choose a topic:</label>
    <select
      v-model="currentTopic"
      name="topic"
      id="topic"
      class="w-64 h-10 mt-2"
      @change="getRandomLesson()"
    >
      <option v-for="(lessons, topic) in topics" :key="topic" :value="topic">
        {{ topic }}
      </option>
    </select>
  </div>
  <div
    class="card bg-gray-600 shadow-xl my-4 p-4 flex flex-col justify-start items-center w-full max-w-screen-2xl"
    style="min-height: 390px"
  >
    <!-- RANDOM LESSON -->
    <h2 class="font-bold text-2xl">Do Lesson:</h2>
    <a
      :href="'https://www.youtube.com' + randomLesson.URL"
      target="_blank"
      class="text-blue-400 underline"
    >
      {{ randomLesson.Anchor }}
    </a>

    <h2 class="font-bold text-2xl mt-4">...& rate:</h2>
    <table class="table">
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
              class="w-5 h-5 cursor-pointer"
              type="radio"
              :name="question"
              value="1"
              @click="session.questionData[question] = 1"
            />
          </td>
          <td>
            <input
              class="w-5 h-5 cursor-pointer"
              type="radio"
              :name="question"
              value="2"
              @click="session.questionData[question] = 2"
            />
          </td>
          <td>
            <input
              class="w-5 h-5 cursor-pointer"
              type="radio"
              :name="question"
              value="3"
              @click="session.questionData[question] = 3"
            />
          </td>
          <td>
            <input
              class="w-5 h-5 cursor-pointer"
              type="radio"
              :name="question"
              value="4"
              @click="session.questionData[question] = 4"
            />
          </td>
          <td>
            <input
              class="w-5 h-5 cursor-pointer"
              type="radio"
              :name="question"
              value="5"
              @click="session.questionData[question] = 5"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <button
      @click="getRandomLesson()"
      class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4"
    >
      Get Another Lesson
    </button>
  </div>
</template>

<style scoped></style>
