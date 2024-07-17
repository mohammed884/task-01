<script setup lang="ts">
const { category } = defineProps<{ category: string }>();
const selectedCategory = defineModel<string>("selectedCategory");
const selectCategory = (newValue: string) => {
  selectedCategory.value = newValue;
};
</script>
<template>
  <li>
    <button
      class="p-2 px-4 bg-gray-100 rounded-md transition-colors"
      :class="{ 'bg-gray-800 text-white': category === selectedCategory }"
      @click="() => selectCategory(category)"
    >
      {{ category }}
    </button>
  </li>
</template>
