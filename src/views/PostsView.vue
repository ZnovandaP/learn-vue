<script setup lang="ts">
import PostsList from '@/components/CompositionApi/PostsList.vue';

</script>

<template>
  <section class="">
    <h2 class="text-4xl font-bold text-emerald-600">
      Posts View/page
    </h2>

    <div class="mt-4">
      <Suspense>
        <template #default>
          <PostsList />
        </template>

        <template #fallback>
          <p class="text-xl font-bold bg-emerald-300/40">
            ...Loading!
          </p>
        </template>
      </Suspense>
    </div>
  </section>
</template>

<style scoped>
/* component style */
</style>
