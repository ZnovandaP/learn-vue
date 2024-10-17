import { defineStore } from 'pinia';

//* option store

type CountState = {
  count: number
};

const useCountStore = defineStore('count', {
  state: (): CountState => ({
    count: 0,
  }),

  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    isOdd(state) {
      const { doubleCount } = this;
      return (isDouble: boolean) => {
        if (isDouble) return doubleCount % 2 === 1;

        return state.count % 2 === 1;
      };
    },
    isEven(state) {
      const { doubleCount } = this;
      return (isDouble: boolean) => {
        if (isDouble) return doubleCount % 2 === 0;

        return state.count % 2 === 0;
      };
    },
  },

  actions: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
  },

});

export default useCountStore;
