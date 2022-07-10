import create from 'zustand'
import { Attempt, AttemptStore } from './interfaces/attempt.interface'

export const useAttemptStore = create<AttemptStore>((set) => ({
  attempts: [],
  setAttempt: (attempt: Attempt) => set(state => ({ attempts: [...state.attempts, attempt] }))
}))