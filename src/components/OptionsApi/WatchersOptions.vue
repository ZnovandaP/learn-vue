<script lang="ts">
export default {
  name: 'DemoWatchersOptions',
  data() {
    return {
      question: 'jalo',
      message: '',
    };
  },
  watch: {
    question: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handler(newQuestion: string, oldQuestion: string) {
        if (newQuestion.includes('?')) {
          const answer = this.generatedYesNo();
          this.message = `The answer is: ${answer}`;
        } else {
          this.message = '';
        }
      },

      immediate: true,

    },
  },

  methods: {
    generatedYesNo() {
      const randomNumber = Math.round(Math.random() * 1);
      return randomNumber === 1 && Number.isInteger(randomNumber) ? 'Yes' : 'No';
    },

  },
};
</script>

<template>
  <section class="flex flex-col gap-4 mt-6 ring-1 ring-sky-400/60 rounded-md p-6">
    <h2 class="text-sky-600 font-semibold text-2xl">
      Watchers Options API
    </h2>
    <h2 class="text-emerald-600 font-semibold text-2xl ">
      question data: {{ question }}
    </h2>

    <p class="bg-violet-300/50 font-bold ">
      {{ message }}
    </p>
    <label for="text">
      Question:
      <input
        class="ring-1 ring-neutral-400 px-4 py-2 rounded-md"
        id="text"
        type="text"
        name="text"
        v-model="question">
    </label>
  </section>
</template>
