import { ref, readonly, computed } from 'vue'

export type Theme = 'professional' | 'zelda'

const currentTheme = ref<Theme>('professional')

export function useTheme() {
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'professional' ? 'zelda' : 'professional'
  }

  const setTheme = (theme: Theme) => {
    currentTheme.value = theme
  }

  return {
    currentTheme: readonly(currentTheme),
    toggleTheme,
    setTheme,
    isProfessional: computed(() => currentTheme.value === 'professional'),
    isZelda: computed(() => currentTheme.value === 'zelda')
  }
}
