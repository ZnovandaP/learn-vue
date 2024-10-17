<script setup lang="ts">
import { reactive } from 'vue';
import type { Post, GetDataFetch } from '@/types/post-fetch';

const postsData = reactive<GetDataFetch<Post[]>>({
  data: null,
  isLoading: false,
  isSuccess: false,
  error: null,
});

const getAllPost = async () => {
  postsData.isLoading = true;

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataJson = await res.json();

    postsData.isLoading = false;
    postsData.isSuccess = true;
    postsData.data = dataJson;
  } catch (err) {
    postsData.isSuccess = false;
    postsData.error = 'Data tidak dapat dimuat!';
  }
};

await getAllPost();
</script>

<template>
  <ul class="ml-10 list-disc">
    <li
      v-for="post in postsData.data"
      :key="post.id"
      class=""
    >
      <RouterLink
        :to="`/post/${post.id}`"
        class="font-medium text-emerald-600 hover:bg-emerald-300/40"
      >
        {{post.title}}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
/* component style */
</style>
