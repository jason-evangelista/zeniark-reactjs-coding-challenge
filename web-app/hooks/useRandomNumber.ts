const useRandomNumber = (): number => {
  const generateRandom = Math.floor(Math.random() * 30);
  return generateRandom;
};

export { useRandomNumber };
