// stores/counter.js
import { defineStore } from 'pinia'

export const useCoreStore = defineStore('counter', {
    state: () => {
        return {
            currentlyPracticedTopic: null,
            topics: [],
        }
    },

    actions: {
        addTopic(topic) {
            this.topics.push(topic)
        }
    },
    persist: true,
}
)