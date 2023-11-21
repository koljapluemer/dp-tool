// stores/counter.js
import { defineStore } from 'pinia'

export const useCoreStore = defineStore('counter', {
    state: () => {
        return {
            exercisesCount: 0,
            currentlyPracticedTopic: null,
            questionsAnswers: []
        }
    },

    actions: {
        increment() {
            this.exercisesCount++
        }
    },
    persist: true,
}
)