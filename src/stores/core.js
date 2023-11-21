// stores/counter.js
import { defineStore } from 'pinia'

export const useCoreStore = defineStore('counter', {
    state: () => {
        return { exercisesCount: 0 }
    },

    actions: {
        increment() {
            this.exercisesCount++
        },
    },
})