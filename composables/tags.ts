import { acceptHMRUpdate, defineStore } from 'pinia'

export const useTagsStore = defineStore('tags', () => {
  const currentTag = ref(null)

  return {
    currentTag,
  }
})
