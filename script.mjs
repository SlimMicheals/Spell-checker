// This is a placeholder file which shows how you can access JSON data defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

let dictionary = [];

async function loadDictionary() {
  try {
    const response = await fetch("./words.json");
    dictionary = await response.json();
    console.log("Dictionary loaded:", dictionary.length);
  } catch (error) {
    console.error("Error loading dictionary:", error);
  }
}

loadDictionary();

const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultsDiv = document.getElementById("results");

textInput.addEventListener("input", () => {
  resultsDiv.innerHTML = "";
});

checkBtn.addEventListener("click", handleSpellCheck);

function handleSpellCheck() {
  const text = textInput.value;

  if (!text) {
    resultsDiv.innerHTML = "Please enter some text.";
    return;
  }

  const cleaned = text
  .toLowerCase()
  .replace(/-/g, " ")
  .replace(/[^\w\s]/g, "")
  .trim();

const words = cleaned.split(/\s+/);

  const misspelled = words.filter(word => {

  // Ignore capitalized words (original text check)
  if (/^[A-Z]/.test(word)) {
    return false;
  }

  return word && !dictionary.includes(word);
});

  displayResults(misspelled);
}

function displayResults(misspelledWords) {
  if (misspelledWords.length === 0) {
    resultsDiv.innerHTML = "No spelling mistakes found.";
  } else {
    resultsDiv.innerHTML =
      "Misspelled words: " + misspelledWords.join(", ");
  }
}