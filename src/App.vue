<script setup>

import { useCoreStore } from "@/stores/core";
const store = useCoreStore();
</script>

<template>
  <header class="flex gap-4 items-center mb-4">
    <img src="@/assets/progress-logo.svg" alt="" class="w-20 h-20 cursor-pointer" @click="$router.push('/')" />
    <h1 class="text-4xl font-bold">Deliberate Practice Planner</h1>
  </header>

  <!-- {{ store.units }} -->

  <main class="p-2 flex-grow w-full flex flex-col items-center">
    <router-view></router-view>
  </main>

  <footer class="border-t-2 mt-10 w-full p-4 text-sm">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <div id="socials" class="mb-4 flex justify-center gap-2">
      <!-- Twitter Share Button -->
      <a
        href="https://twitter.com/share?url=https://arabic-concordances.koljapluemer.com"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-twitter share-icon"></i> Share on Twitter
      </a>

      <!-- Reddit Share Button -->
      <a
        href="https://www.reddit.com/submit?url=https://arabic-concordances.koljapluemer.com"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-reddit share-icon"></i> Share on Reddit
      </a>

      <!-- Hacker News Share Button -->
      <a
        href="https://news.ycombinator.com/submitlink?u=https://arabic-concordances.koljapluemer.com"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-hacker-news share-icon"></i> Share on Hacker News
      </a>
    </div>

    <ul class="flex flex-col gap-2">
      <li>
        Made by
        <a class="underline" href="https://koljapluemer.com/"
          >Kolja Sam Pluemer</a
        >.
        <a href="mailto:feedback@koljapluemer.com" class="underline"
          >Mail me your feedback!</a
        >
      </li>
      <li>
        Pseudonymous learning is transmitted to improve the app. No personal
        data leaves your device. Cookies are used to store your progress, but
        they are not of the privacy-invading sort.
      </li>
      <li>
        you may also enjoy:
        <a
          class="underline"
          href="https://arabic-pronounciation.koljapluemer.com/"
          >Arabic Pronunciation Tutor (WIP)</a
        >,
        <a
          class="underline"
          href="https://basic-arabic-sentences.koljapluemer.com/"
          >Trainer for Egyptian Arabic Survival Sentences</a
        >, &
        <a class="underline" href="https://arabic-numbers.koljapluemer.com/"
          >Arabic Number Practice</a
        >.
      </li>
      <li>
        More cool stuff at
        <a class="underline" href="https://koljapluemer.com/"
          >koljapluemer.com</a
        >.
      </li>
    </ul>
  </footer>
</template>


<style>

a {
  text-decoration: underline;
}
</style>