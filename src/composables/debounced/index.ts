import { ref, customRef } from '@vue/composition-api';

export function debounce(fn: any, delay = 0, immediate = false) {
  let timeout: any;

  return (...args: string[]) => {
    if (immediate && !timeout) fn(...args);
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export const initialValue = ref('');

export function useDebouncedRef(
  // initialValue: string,
  delay: number,
  immediate?: any
) {
  const state = initialValue;
  // const state = ref(initialValue);
  const debouncedRef = customRef((track, trigger) => ({
    get() {
      track();
      return state.value;
    },
    set: debounce(
      (value: string) => {
        state.value = value;
        trigger();
      },
      delay,
      immediate
    ),
  }));
  return debouncedRef;
}
