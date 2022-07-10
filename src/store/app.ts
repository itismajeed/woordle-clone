import create from 'zustand'
import { App } from './interfaces/app.interface'

export const useAppStore = create<App>((set) => ({
  darkMode: true,
  toggleDarkMode: () => set(state => ({darkMode: !state.darkMode}))
}))