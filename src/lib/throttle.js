export function throttle(func, delay) {
  let locked = false;

  return function (...args) {
    if (!locked) {
      locked = true;
      func(...args);

      setTimeout(() => {
        locked = false;
      }, delay);
    }
  };
}
