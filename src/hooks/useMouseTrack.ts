import { reactive } from 'vue';
import useEventListener from './useEventListener';

export default function useMouseTrack() {
  const mousePosition = reactive({
    x: 0,
    y: 0,
  });

  useEventListener({
    target: window,
    listener: 'mousemove',
    callback: (e) => {
      if (e && e instanceof MouseEvent) {
        mousePosition.x = e.pageX;
        mousePosition.y = e.pageY;
      }
    },
  });

  return mousePosition;
}
