<script setup lang="ts">
import type { IProduct } from "~/interfaces/global";
const { default: productsData } = await import("../static/db/products.json");
const products = ref<IProduct[]>(productsData);
const categories = new Set([
  "All",
  ...products.value.map((p) => p.category.replace(/-/g, " ")),
]);
const selectedCategory = ref<string>("All");
watch(selectedCategory, async () => {
  if (selectedCategory.value === "All") return (products.value = productsData);
  products.value = productsData.filter(
    (p) => p.category === selectedCategory.value.replace(/ /g, "-")
  );
});
</script>

<template>
  <div class="w-full min-h-screen">
    <div class="container flex flex-col items-center mx-auto mt-10">
      <h1 class="text-3xl font-bold">New arrivals</h1>
      <p class="sm:text-sm md:text-md opacity-60 mt-3 text-center">
        checkout the latest products and stay ahead in tech
      </p>
    </div>
    <ul
      class="container flex flex-wrap items-center justify-center gap-3 mx-auto pt-10"
    >
      <CategoryList
        v-for="category in categories"
        v-model:selectedCategory="selectedCategory"
        :category="category"
      />
    </ul>
    <span class="w-fit block text-sm font-medium mx-auto mt-4 opacity-50"
      >Total items {{ products.length }}/{{ productsData.length }}</span
    >
    <ul
      class="container grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 pt-10 mx-auto"
    >
      <ProductList v-for="product in products" :product="product" />
    </ul>
  </div>
</template>
