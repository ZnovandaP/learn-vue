<!-- eslint-disable no-console -->
<script  setup lang="ts">
import {
  computed, ref, onMounted, watch, toValue,
} from 'vue';
import { v4 } from 'uuid';
import InputSearch from './InputSearch.vue';
import ButtonAddList from './ButtonAddList.vue';

type Task = {
  id: string,
  title: string
  type: string
  status: string
};

const search = ref('');

const tasks = ref<Task[]>([
  {
    id: v4(),
    title: 'Bugfix page not found not working',
    type: 'Bugfix',
    status: 'Critical',
  },
  {
    id: v4(),
    title: 'refactor folder component',
    type: 'Refactor',
    status: 'Medium',
  },
  {
    id: v4(),
    title: 'Bugfix cart product duplicat qty',
    type: 'Bugfix',
    status: 'Critical',
  },
]);

const inputComponentRef = ref<InstanceType<typeof InputSearch> | null>(null);

const tasksSearch = computed(() => tasks.value
  .filter((task) => task.title.toLowerCase().includes(search.value.toLowerCase())));

const taskIsNotFound = computed(() => tasksSearch.value.length < 1);

watch(search, (newSearch, oldSearch) => {
  console.log({ newSearch, oldSearch });

  console.log(toValue(search));
});

onMounted(() => {
  const inputRef = inputComponentRef?.value?.$refs.inputRef as HTMLInputElement;
  inputRef.focus();
});

const handlingAddNewList = (e: MouseEvent) => { // handling add new list (emit event)
  e.preventDefault();
  e.stopPropagation();

  tasks.value = [...tasks.value, {
    id: v4(),
    title: 'Bugfix cart product duplicat qty',
    type: 'Bugfix',
    status: 'Critical',
  }];
};

</script>

<template>
  <div class="task-container">
    <h1 class="heading-section">
      Rendering List (Task Management) with Transition Vue
    </h1>

    <input-search v-model:search-model="search" ref="inputComponentRef" />

    <ButtonAddList @add-list="handlingAddNewList">
      Add New List
    </ButtonAddList>

    <!-- vue render list with vue directive -->
    <TransitionGroup appear name="card-container" tag="div" class="card-container">
      <div class="card" v-for="(task) in tasksSearch" :key="task.id">
        <h2 class="card-title">
          {{task.title}}
        </h2>

        <div class="card-note-container">
          <p class="card-note-container__type badge">{{task.type}}</p>
          <p class="card-note-container__status badge">{{task.status}}</p>
        </div>
      </div>
      <h2 class="not-found" v-if="taskIsNotFound">
        Task not found!!
      </h2>
    </TransitionGroup>

  </div>
</template>

<style lang="scss" scoped>
  .card-container-move,
  .card-container-enter-active,
  .card-container-leave-active {
    transition: all .6s  cubic-bezier(0.55, 0, 0.1, 1);
  }

  .card-container-leave-active {
  position: absolute;
}

  .card-container-enter-from,
  .card-container-leave-to {
  opacity: 0;
  transform: scaleY(.3) translate(0, -50px);
  height: 2em;
}

  .task-container {
    border: 2px solid salmon;
    border-radius: .5rem;
    padding: 1rem;
    width: 100%;

    &>.not-found {
      text-align: center;
    }

    .heading-section {
      text-align: center;
      width: 100%;
    }

    .card-container {
      margin-top: 1.5rem;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;
      position: relative;

      .card {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        background-color: rgb(234, 230, 230);
        color: #333;
        width: 100%;
        padding: 1rem;
        border-radius: .6rem;

        &-title {
          font-weight: 500;
          font-size: 1.25rem;
        }

        &-note-container {
          display: flex;
          gap: 1.5rem;

          &>.badge{
            padding: .25rem 1rem;
            font-size: .7rem;
            font-weight: 500;
            color: white;
            border-radius: 1rem;
          }

          &__status {
            background-color: rgba(242, 66, 22, .8);
          }

          &__type {
            background-color: rgba(56, 108, 11, 0.8);
          }
        }
      }

    }
  }
</style>
