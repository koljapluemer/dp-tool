<script setup>
import { ref } from "vue";
import { useCoreStore } from "@/stores/core";
import { useRouter } from "vue-router";
const $router = useRouter();
const store = useCoreStore();


</script>

<template>
Current Topic: {{ store.currentlyPracticedTopic }}
</template>

<style scoped></style>
