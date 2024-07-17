<script setup lang="ts">
import type { IProduct } from "~/interfaces/global";
const { product } = defineProps<{ product: IProduct }>();
</script>
<template>
  <li
    class="w-[300px] border-2 p-4 flex flex-col justify-between mx-auto rounded-md"
  >
    <NuxtImg class="mx-auto" width="200" height="250" :src="product.image" />
    <p class="mt-3">
      {{
        product.title.EN.length > 50
          ? product.title.EN.slice(0, 50) + "..."
          : product.title.EN
      }}
    </p>
    <div class="flex items-center justify-between mt-3">
      <span class="text-sm font-bold">
        {{ product.brand_alias.toUpperCase() }}
      </span>
      <div>
        <Icon
          name="grommet-icons:star"
          v-for="(star, index) in Array(5).fill(0)"
          :class="{
            'text-yellow-300': index + 1 <= Math.round(Number(product.rating)),
          }"
          >s</Icon
        >
      </div>
    </div>
    <div class="flex justify-between mt-3">
      <div>
        <span class="text-sm font-bold text-red-400">{{
          Intl.NumberFormat("ja-JP", {
            style: "currency",
            maximumSignificantDigits: 3,
            currency: "IQD",
          }).format(Number(product.price.original_value))
        }}</span>
        <p class="text-md font-bold">
          {{
            Intl.NumberFormat("ja-JP", {
              style: "currency",
              maximumSignificantDigits: 3,
              currency: "IQD",
            }).format(Number(product.price.value))
          }}
        </p>
      </div>
      <ul class="flex relative">
        <li
          v-if="product.colors.length > 4"
          v-for="color in product.colors.slice(0, 3)"
          class="size-4 p-3 rounded-[50%] ml-[-.5rem]"
          :style="`background-color: ${color}`"
        ></li>
        <li
          v-if="product.colors.length > 4"
          class="size-4 flex items-center justify-center p-3 bg-white border text-[.7rem] font-bold rounded-[50%] text-center ml-[-.5rem] absolute right-[-.5rem]"
        >
          <span> {{ product.colors.length }}+ </span>
        </li>
      </ul>
    </div>
  </li>
</template>
