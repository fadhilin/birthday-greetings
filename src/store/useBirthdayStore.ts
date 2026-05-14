import { create } from 'zustand'

type PersonalityType = 'M' | 'S' | 'F' | 'G' | null

interface BirthdayStore {
  name: string
  answers: (number | null)[]
  personalityType: PersonalityType
  setName: (name: string) => void
  setAnswer: (questionIndex: number, answerIndex: number) => void
  setPersonalityType: (type: PersonalityType) => void
  reset: () => void
}

export const useBirthdayStore = create<BirthdayStore>((set) => ({
  name: '',
  answers: new Array(5).fill(null),
  personalityType: null,

  setName: (name) => set({ name }),

  setAnswer: (questionIndex, answerIndex) =>
    set((state) => {
      const newAnswers = [...state.answers]
      newAnswers[questionIndex] = answerIndex
      return { answers: newAnswers }
    }),

  setPersonalityType: (type) => set({ personalityType: type }),

  reset: () =>
    set({
      name: '',
      answers: new Array(5).fill(null),
      personalityType: null,
    }),
}))
