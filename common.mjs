import words from "./words.json" with { type: "json" };

export const getDictionarySize = () => words.length;

export const wordExists = (word) => {
  return words.includes(word.toLowerCase());
};
