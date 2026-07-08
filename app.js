const stories = [
  {
    title: "The Clever Fox",
    level: "Level 1",
    text: "Finn the fox wanted to cross the stream, but the water was rushing fast. He looked around and saw three flat stones. Finn stepped carefully from stone to stone and reached the other side with dry paws.",
    question: "How did Finn cross the stream?",
    answers: ["He swam quickly.", "He used flat stones.", "He jumped into a boat."],
    correctAnswer: "He used flat stones."
  },
  {
    title: "Maya's Bright Idea",
    level: "Level 2",
    text: "Maya forgot her bookmark at school. At bedtime, she did not want to lose her page. She folded a small piece of paper, drew a star on it, and slipped it into her book.",
    question: "What problem did Maya solve?",
    answers: ["She needed a bookmark.", "She lost her school bag.", "She wanted a new story."],
    correctAnswer: "She needed a bookmark."
  },
  {
    title: "The Rainy Match",
    level: "Level 2",
    text: "The soccer field was wet after the rain. Liam and his team moved slowly so they would not slip. When the ball rolled near the goal, Liam passed it to Zane, who scored with a gentle kick.",
    question: "Why did the team move slowly?",
    answers: ["They were tired.", "The field was wet.", "The game was over."],
    correctAnswer: "The field was wet."
  },
  {
    title: "Nandi's New Word",
    level: "Level 3",
    text: "Nandi found the word 'curious' in her science book. She asked her teacher what it meant. Her teacher smiled and said, 'Curious means you want to learn more.' Nandi decided it was one of her favourite words.",
    question: "What does curious mean in the story?",
    answers: ["Wanting to learn more.", "Feeling very sleepy.", "Running very fast."],
    correctAnswer: "Wanting to learn more."
  }
];

const spellingWords = [
  { word: "because", clue: "A reason word.", difficulty: "Tricky" },
  { word: "friend", clue: "Someone you like and trust.", difficulty: "Common" },
  { word: "enough", clue: "As much as needed.", difficulty: "Tricky" },
  { word: "through", clue: "Going in one side and out the other.", difficulty: "Challenge" },
  { word: "different", clue: "Not the same.", difficulty: "Common" },
  { word: "beautiful", clue: "Very lovely to see.", difficulty: "Challenge" },
  { word: "quiet", clue: "Not noisy.", difficulty: "Common" },
  { word: "early", clue: "Before the expected time.", difficulty: "Common" },
  { word: "learn", clue: "To gain knowledge or skill.", difficulty: "Common" },
  { word: "answer", clue: "A reply to a question.", difficulty: "Tricky" },
  { word: "special", clue: "Different in a good or important way.", difficulty: "Common" },
  { word: "favourite", clue: "The one you like best.", difficulty: "Tricky" }
];

const progressKey = "readingSpellingBuddyProgress";

let currentStoryIndex = 0;
let currentWordIndex = 0;
let progress = loadProgress();

const storyLevel = document.querySelector("#storyLevel");
const storyTitle = document.querySelector("#storyTitle");
const storyText = document.querySelector("#storyText");
const questionText = document.querySelector("#questionText");
const answerOptions = document.querySelector("#answerOptions");
const readingFeedback = document.querySelector("#readingFeedback");
const newStoryButton = document.querySelector("#newStoryButton");
const readAloudButton = document.querySelector("#readAloudButton");

const dailyWords = document.querySelector("#dailyWords");
const dailyScore = document.querySelector("#dailyScore");
const wordDifficulty = document.querySelector("#wordDifficulty");
const wordClue = document.querySelector("#wordClue");
const speakWordButton = document.querySelector("#speakWordButton");
const showHintButton = document.querySelector("#showHintButton");
const spellingInput = document.querySelector("#spellingInput");
const checkSpellingButton = document.querySelector("#checkSpellingButton");
const spellingHint = document.querySelector("#spellingHint");
const spellingFeedback = document.querySelector("#spellingFeedback");
const wordBank = document.querySelector("#wordBank");

const storiesCompleted = document.querySelector("#storiesCompleted");
const wordsPracticed = document.querySelector("#wordsPracticed");
const correctAnswers = document.querySelector("#correctAnswers");
const resetProgressButton = document.querySelector("#resetProgressButton");

function loadProgress() {
  const saved = localStorage.getItem(progressKey);

  if (!saved) {
    return {
      storiesCompleted: 0,
      wordsPracticed: 0,
      correctAnswers: 0
    };
  }

  try {
    return JSON.parse(saved);
  } catch {
    return {
      storiesCompleted: 0,
      wordsPracticed: 0,
      correctAnswers: 0
    };
  }
}

function saveProgress() {
  localStorage.setItem(progressKey, JSON.stringify(progress));
  renderProgress();
}

function renderStory() {
  const story = stories[currentStoryIndex];

  storyLevel.textContent = story.level;
  storyTitle.textContent = story.title;
  storyText.textContent = story.text;
  questionText.textContent = story.question;
  readingFeedback.textContent = "";
  readingFeedback.className = "feedback";
  answerOptions.innerHTML = "";

  story.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => checkReadingAnswer(answer, story.correctAnswer));
    answerOptions.appendChild(button);
  });
}

function checkReadingAnswer(answer, correctAnswer) {
  progress.storiesCompleted += 1;

  if (answer === correctAnswer) {
    progress.correctAnswers += 1;
    readingFeedback.textContent = "Great reading! That is correct.";
    readingFeedback.className = "feedback success";
  } else {
    readingFeedback.textContent = `Good try. The answer is: ${correctAnswer}`;
    readingFeedback.className = "feedback try-again";
  }

  saveProgress();
}

function renderWord() {
  const word = spellingWords[currentWordIndex];

  wordDifficulty.textContent = `${word.difficulty} Word`;
  wordClue.textContent = word.clue;
  spellingInput.value = "";
  spellingHint.textContent = "";
  spellingFeedback.textContent = "";
  spellingFeedback.className = "feedback";
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.82;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function checkSpelling() {
  const word = spellingWords[currentWordIndex].word;
  const answer = spellingInput.value.trim().toLowerCase();

  if (!answer) {
    spellingFeedback.textContent = "Type your answer first.";
    spellingFeedback.className = "feedback try-again";
    return;
  }

  progress.wordsPracticed += 1;

  if (answer === word) {
    progress.correctAnswers += 1;
    spellingFeedback.textContent = "Excellent spelling!";
    spellingFeedback.className = "feedback success";
    currentWordIndex = (currentWordIndex + 1) % spellingWords.length;
    window.setTimeout(renderWord, 900);
  } else {
    spellingFeedback.textContent = `Almost. The word is "${word}". Try saying it in parts.`;
    spellingFeedback.className = "feedback try-again";
  }

  saveProgress();
}

function showHint() {
  const word = spellingWords[currentWordIndex].word;
  const firstLetter = word[0];
  const lastLetter = word[word.length - 1];

  spellingHint.textContent = `Hint: ${word.length} letters, starts with "${firstLetter}" and ends with "${lastLetter}".`;
}

function renderWordBank() {
  wordBank.innerHTML = "";

  spellingWords.forEach(({ word, difficulty }) => {
    const chip = document.createElement("div");
    chip.className = "word-chip";
    chip.innerHTML = `${word}<small>${difficulty}</small>`;
    wordBank.appendChild(chip);
  });
}

function renderProgress() {
  storiesCompleted.textContent = progress.storiesCompleted;
  wordsPracticed.textContent = progress.wordsPracticed;
  correctAnswers.textContent = progress.correctAnswers;
  dailyWords.textContent = progress.wordsPracticed;

  const attempts = progress.storiesCompleted + progress.wordsPracticed;
  const score = attempts === 0 ? 0 : Math.round((progress.correctAnswers / attempts) * 100);
  dailyScore.textContent = score;
}

newStoryButton.addEventListener("click", () => {
  currentStoryIndex = (currentStoryIndex + 1) % stories.length;
  renderStory();
});

readAloudButton.addEventListener("click", () => {
  speak(stories[currentStoryIndex].text);
});

speakWordButton.addEventListener("click", () => {
  speak(spellingWords[currentWordIndex].word);
});

showHintButton.addEventListener("click", showHint);
checkSpellingButton.addEventListener("click", checkSpelling);

spellingInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkSpelling();
  }
});

resetProgressButton.addEventListener("click", () => {
  progress = {
    storiesCompleted: 0,
    wordsPracticed: 0,
    correctAnswers: 0
  };
  saveProgress();
});

renderStory();
renderWord();
renderWordBank();
renderProgress();
