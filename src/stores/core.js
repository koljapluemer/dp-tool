// stores/counter.js
import { defineStore } from 'pinia'

export const useCoreStore = defineStore('counter', {
    state: () => {
        return {
            exercisesCount: 0,
            currentlyPracticedTopic: null,
            units: []
        }
    },

    actions: {
        // just here for dev cleanup puposes (maybe a user wants to do this from some settings menu later...)
        resetStore() {
            this.units = []
        }
    },
    persist: true,
}
)