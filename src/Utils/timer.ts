export const createTimer = (): number => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 30);
  return Number(time);
};
