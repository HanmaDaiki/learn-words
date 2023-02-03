const shuffle = (arr: string []): string [] => {
  return arr.sort(() => Math.random() - 0.5);
};

export { shuffle };