<script setup lang="ts">
import useFetch from '@/hooks/useFetch';
import type { Post } from '@/types/post-fetch';

type PostDetailProps = {
  postId: string
};

const { postId } = defineProps<PostDetailProps>();

const dataPost = await useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
</script>

<template>
  <div class="flex flex-col gap-6">
    <h2 class="text-2xl text-emerald-600 bg-emerald-300/30 text-pretty first-letter:uppercase first-letter:text-5xl">
      {{ dataPost.data?.title }}
    </h2>

    <p class="font-medium tracking-wide text-pretty">
      {{ dataPost.data?.body }}
    </p>
  </div>
</template>

<style scoped>
/* component style */
</style>
