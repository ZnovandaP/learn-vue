<script setup lang="ts">
import { useRoute } from 'vue-router';
import PostDetail from '@/components/CompositionApi/PostDetail.vue';

const route = useRoute();
const idParams = route.params.id;

</script>

<template>
  <div>
    <Suspense>
      <template #default>
        <PostDetail :post-id="idParams as string" />
      </template>

      <template
        #fallback>
        <p class="text-xl font-bold bg-emerald-300/40">
          ...Loading!
        </p>
      </template>

    </Suspense>
  </div>
</template>

<style scoped>
/* component style */
</style>
