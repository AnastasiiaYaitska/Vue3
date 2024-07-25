import { ref, computed, watch } from 'vue';

export default function useSearch(items, searchProp) {
  const enteredSearchTerm = ref('');

  const activeSearchTerm = ref('');
  const availableItems = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) =>
        item[searchProp].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      filteredItems = items.value;
    }
    return filteredItems;
  });
  const updateSearch = (val) => {
    enteredSearchTerm.value = val;
  };
  watch(enteredSearchTerm, (newValues) => {
    setTimeout(() => {
      if (newValues === enteredSearchTerm.value) {
        activeSearchTerm.value = newValues;
      }
    }, 300);
  });

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch
  }
}
