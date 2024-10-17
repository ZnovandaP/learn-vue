import { onMounted, onUnmounted } from 'vue';

type ParamsOfUseEventListener = {
  target: Window | Document | EventTarget
  listener: string
  callback: (e?: Event | MouseEvent | KeyboardEvent) => void
};

export default function useEventListener({ target, listener, callback }: ParamsOfUseEventListener) {
  onMounted(() => {
    target.addEventListener(listener, (e) => callback(e));
  });

  onUnmounted(() => {
    target.removeEventListener(listener, (e) => callback(e));
  });
}
