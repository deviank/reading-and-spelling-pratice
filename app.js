const languageKey = "readingSpellingBuddyLanguage";
const progressKey = "readingSpellingBuddyProgress";

const content = {
  en: {
    htmlLang: "en",
    speechLang: "en-ZA",
    stories: [
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
    ],
    spellingWords: [
      { word: "because", clue: "A reason word.", difficulty: "tricky" },
      { word: "friend", clue: "Someone you like and trust.", difficulty: "common" },
      { word: "enough", clue: "As much as needed.", difficulty: "tricky" },
      { word: "through", clue: "Going in one side and out the other.", difficulty: "challenge" },
      { word: "different", clue: "Not the same.", difficulty: "common" },
      { word: "beautiful", clue: "Very lovely to see.", difficulty: "challenge" },
      { word: "quiet", clue: "Not noisy.", difficulty: "common" },
      { word: "early", clue: "Before the expected time.", difficulty: "common" },
      { word: "learn", clue: "To gain knowledge or skill.", difficulty: "common" },
      { word: "answer", clue: "A reply to a question.", difficulty: "tricky" },
      { word: "special", clue: "Different in a good or important way.", difficulty: "common" },
      { word: "favourite", clue: "The one you like best.", difficulty: "tricky" }
    ],
    ui: {
      pageTitle: "Reading & Spelling Buddy",
      navAria: "Main navigation",
      brandAria: "Reading and Spelling Buddy home",
      brand: "Reading Buddy",
      navRead: "Read",
      navSpell: "Spell",
      navWords: "Words",
      navProgress: "Progress",
      langAria: "Language",
      heroEyebrow: "Daily practice for ages 8-10",
      heroTitle: "Build reading confidence one word at a time.",
      heroCopy: "Short reading passages, friendly spelling rounds, and encouraging progress tracking for a 9 year old learner.",
      startReading: "Start Reading",
      trySpelling: "Try Spelling",
      dailyCardAria: "Today's practice target",
      todayGoal: "Today's Goal",
      todayGoalText: "Read 1 story, spell 10 words, and celebrate every improvement.",
      dailyWordsLabel: "words",
      dailyScoreLabel: "% score",
      readEyebrow: "Reading practice",
      readTitle: "Read, understand, and answer.",
      newStory: "New Story",
      readAloud: "Read Aloud",
      comprehension: "Comprehension Check",
      spellEyebrow: "Spelling practice",
      spellTitle: "Listen, type, and learn.",
      hearWord: "Hear Word",
      showHint: "Show Hint",
      typeWord: "Type the word",
      yourAnswer: "Your answer",
      check: "Check",
      tipsTitle: "Practice Tips",
      tip1: "Say the word slowly.",
      tip2: "Break it into syllables.",
      tip3: "Look for tricky letter groups.",
      tip4: "Try again before peeking.",
      wordsEyebrow: "Word bank",
      wordsTitle: "Useful words to master.",
      progressEyebrow: "Progress",
      progressTitle: "Small wins add up.",
      statStories: "reading checks completed",
      statWords: "spelling words practiced",
      statCorrect: "correct answers",
      resetProgress: "Reset Progress",
      footer: "Made for patient practice, encouragement, and steady confidence.",
      practiceWord: "Practice Word",
      wordLabel: "{difficulty} Word",
      difficulty: {
        tricky: "Tricky",
        common: "Common",
        challenge: "Challenge"
      },
      readingCorrect: "Great reading! That is correct.",
      readingWrong: "Good try. The answer is: {answer}",
      typeFirst: "Type your answer first.",
      spellingCorrect: "Excellent spelling!",
      spellingWrong: "Almost. The word is \"{word}\". Try saying it in parts.",
      hint: "Hint: {count} letters, starts with \"{first}\" and ends with \"{last}\".",
      tapWord: "Tap to hear and practise {word}"
    }
  },
  af: {
    htmlLang: "af",
    speechLang: "af-ZA",
    stories: [
      {
        title: "Die Slim Jakkals",
        level: "Vlak 1",
        text: "Finn die jakkals wou die stroom oorsteek, maar die water het vinnig gestroom. Hy het rondgekyk en drie plat klippe gesien. Finn het versigtig van klip tot klip gestap en die oorkant bereik met droë pote.",
        question: "Hoe het Finn die stroom oorgesteek?",
        answers: ["Hy het vinnig geswem.", "Hy het plat klippe gebruik.", "Hy het in 'n boot gespring."],
        correctAnswer: "Hy het plat klippe gebruik."
      },
      {
        title: "Maya se Slim Idee",
        level: "Vlak 2",
        text: "Maya het haar boekmerker by die skool vergeet. Teen slaaptyd wou sy nie haar bladsy verloor nie. Sy het 'n klein stukkie papier gevou, 'n ster daarop geteken, en dit in haar boek gesit.",
        question: "Watter probleem het Maya opgelos?",
        answers: ["Sy het 'n boekmerker nodig gehad.", "Sy het haar skoolsak verloor.", "Sy wou 'n nuwe storie hê."],
        correctAnswer: "Sy het 'n boekmerker nodig gehad."
      },
      {
        title: "Die Nat Wedstryd",
        level: "Vlak 2",
        text: "Die sokkerveld was nat ná die reën. Liam en sy span het stadig beweeg sodat hulle nie sou gly nie. Toe die bal naby die doel rol, het Liam dit na Zane aangegee, wat met 'n sagte skop 'n doel geskiet het.",
        question: "Hoekom het die span stadig beweeg?",
        answers: ["Hulle was moeg.", "Die veld was nat.", "Die wedstryd was verby."],
        correctAnswer: "Die veld was nat."
      },
      {
        title: "Nandi se Nuwe Woord",
        level: "Vlak 3",
        text: "Nandi het die woord 'nuuskierig' in haar wetenskapboek gevind. Sy het haar onderwyser gevra wat dit beteken. Haar onderwyser het geglimlag en gesê: 'Nuuskierig beteken jy wil meer leer.' Nandi het besluit dit is een van haar gunstelingwoorde.",
        question: "Wat beteken nuuskierig in die storie?",
        answers: ["Jy wil meer leer.", "Jy voel baie slaperig.", "Jy hardloop baie vinnig."],
        correctAnswer: "Jy wil meer leer."
      }
    ],
    spellingWords: [
      { word: "omdat", clue: "'n Rede-woord.", difficulty: "tricky" },
      { word: "vriend", clue: "Iemand van wie jy hou en wat jy vertrou.", difficulty: "common" },
      { word: "genoeg", clue: "So veel as wat jy nodig het.", difficulty: "tricky" },
      { word: "deur", clue: "In een kant in en die ander kant uit.", difficulty: "challenge" },
      { word: "anders", clue: "Nie dieselfde nie.", difficulty: "common" },
      { word: "pragtig", clue: "Baie mooi om te sien.", difficulty: "challenge" },
      { word: "stil", clue: "Nie raserig nie.", difficulty: "common" },
      { word: "vroeg", clue: "Voor die verwagte tyd.", difficulty: "common" },
      { word: "leer", clue: "Om kennis of vaardigheid te kry.", difficulty: "common" },
      { word: "antwoord", clue: "Wat jy sê wanneer iemand iets vra.", difficulty: "tricky" },
      { word: "spesiaal", clue: "Anders op 'n goeie of belangrike manier.", difficulty: "common" },
      { word: "gunsteling", clue: "Die een waarvan jy die meeste hou.", difficulty: "tricky" }
    ],
    ui: {
      pageTitle: "Lees- en Spelmaatjie",
      navAria: "Hoofnavigasie",
      brandAria: "Lees- en Spelmaatjie tuis",
      brand: "Leesmaatjie",
      navRead: "Lees",
      navSpell: "Spel",
      navWords: "Woorde",
      navProgress: "Vordering",
      langAria: "Taal",
      heroEyebrow: "Daaglikse oefening vir 8-10 jaar",
      heroTitle: "Bou leesvertroue, een woord op 'n slag.",
      heroCopy: "Kort leesstukkies, vriendelike spelrondtes, en bemoedigende vordering vir 'n 9-jarige leerder.",
      startReading: "Begin Lees",
      trySpelling: "Probeer Spel",
      dailyCardAria: "Vandag se oefendoel",
      todayGoal: "Vandag se Doel",
      todayGoalText: "Lees 1 storie, spel 10 woorde, en vier elke verbetering.",
      dailyWordsLabel: "woorde",
      dailyScoreLabel: "% telling",
      readEyebrow: "Leesoefening",
      readTitle: "Lees, verstaan, en antwoord.",
      newStory: "Nuwe Storie",
      readAloud: "Lees Hardop",
      comprehension: "Begripsvraag",
      spellEyebrow: "Speloefening",
      spellTitle: "Luister, tik, en leer.",
      hearWord: "Hoor Woord",
      showHint: "Wys Wenk",
      typeWord: "Tik die woord",
      yourAnswer: "Jou antwoord",
      check: "Kontroleer",
      tipsTitle: "Oefenwenke",
      tip1: "Sê die woord stadig.",
      tip2: "Breek dit in lettergrepe.",
      tip3: "Soek vir lastige lettergroepies.",
      tip4: "Probeer weer voordat jy kyk.",
      wordsEyebrow: "Woordbank",
      wordsTitle: "Nuttige woorde om te bemeester.",
      progressEyebrow: "Vordering",
      progressTitle: "Klein wennetjies tel op.",
      statStories: "leestoetse voltooi",
      statWords: "spelwoorde geoefen",
      statCorrect: "regte antwoorde",
      resetProgress: "Stel Terug",
      footer: "Gemaak vir geduldige oefening, aanmoediging, en bestendige selfvertroue.",
      practiceWord: "Oefenwoord",
      wordLabel: "{difficulty} Woord",
      difficulty: {
        tricky: "Lastig",
        common: "Algemeen",
        challenge: "Uitdaging"
      },
      readingCorrect: "Mooi gelees! Dit is reg.",
      readingWrong: "Goeie poging. Die antwoord is: {answer}",
      typeFirst: "Tik eers jou antwoord.",
      spellingCorrect: "Uitstekende spelling!",
      spellingWrong: "Amper. Die woord is \"{word}\". Probeer dit in stukkies sê.",
      hint: "Wenk: {count} letters, begin met \"{first}\" en eindig met \"{last}\".",
      tapWord: "Tik om te hoor en {word} te oefen"
    }
  }
};

let currentLang = loadLanguage();
let currentStoryIndex = 0;
let currentWordIndex = 0;
let progress = loadProgress();
let speechVoices = [];

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
const langButtons = document.querySelectorAll(".lang-button");

function ui() {
  return content[currentLang].ui;
}

function stories() {
  return content[currentLang].stories;
}

function spellingWords() {
  return content[currentLang].spellingWords;
}

function fillTemplate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function loadLanguage() {
  const saved = localStorage.getItem(languageKey);
  return saved === "af" ? "af" : "en";
}

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

function applyUi() {
  const strings = ui();

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = strings[element.dataset.i18n];

    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = strings[element.dataset.i18nPlaceholder];

    if (typeof value === "string") {
      element.setAttribute("placeholder", value);
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = strings[element.dataset.i18nAria];

    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });
}

function updateLangButtons() {
  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setLanguage(lang) {
  if (!content[lang] || lang === currentLang) {
    return;
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  currentLang = lang;
  currentStoryIndex = 0;
  currentWordIndex = 0;
  localStorage.setItem(languageKey, lang);
  applyLanguage();
}

function applyLanguage() {
  document.documentElement.lang = content[currentLang].htmlLang;
  document.title = ui().pageTitle;
  updateLangButtons();
  applyUi();
  renderStory();
  renderWord();
  renderWordBank();
  renderProgress();
}

function renderStory() {
  const story = stories()[currentStoryIndex];

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
  const strings = ui();
  progress.storiesCompleted += 1;

  if (answer === correctAnswer) {
    progress.correctAnswers += 1;
    readingFeedback.textContent = strings.readingCorrect;
    readingFeedback.className = "feedback success";
  } else {
    readingFeedback.textContent = fillTemplate(strings.readingWrong, { answer: correctAnswer });
    readingFeedback.className = "feedback try-again";
  }

  saveProgress();
}

function difficultyLabel(difficulty) {
  return ui().difficulty[difficulty] || difficulty;
}

function renderWord() {
  const word = spellingWords()[currentWordIndex];
  const strings = ui();

  wordDifficulty.textContent = fillTemplate(strings.wordLabel, {
    difficulty: difficultyLabel(word.difficulty)
  });
  wordClue.textContent = word.clue;
  spellingInput.value = "";
  spellingHint.textContent = "";
  spellingFeedback.textContent = "";
  spellingFeedback.className = "feedback";
  highlightWordChip();
}

function loadVoices() {
  if (!("speechSynthesis" in window)) {
    return;
  }

  speechVoices = window.speechSynthesis.getVoices();
}

function pickVoice(lang) {
  const prefix = lang.toLowerCase().slice(0, 2);
  return speechVoices.find((voice) => voice.lang.toLowerCase().startsWith(prefix));
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const lang = content[currentLang].speechLang;
  const voice = pickVoice(lang);

  utterance.lang = lang;
  utterance.rate = 0.82;
  utterance.pitch = 1;

  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.speak(utterance);
}

function checkSpelling() {
  const words = spellingWords();
  const word = words[currentWordIndex].word;
  const answer = spellingInput.value.trim().toLowerCase();
  const strings = ui();

  if (!answer) {
    spellingFeedback.textContent = strings.typeFirst;
    spellingFeedback.className = "feedback try-again";
    return;
  }

  progress.wordsPracticed += 1;

  if (answer === word) {
    progress.correctAnswers += 1;
    spellingFeedback.textContent = strings.spellingCorrect;
    spellingFeedback.className = "feedback success";
    currentWordIndex = (currentWordIndex + 1) % words.length;
    window.setTimeout(renderWord, 900);
  } else {
    spellingFeedback.textContent = fillTemplate(strings.spellingWrong, { word });
    spellingFeedback.className = "feedback try-again";
  }

  saveProgress();
}

function showHint() {
  const word = spellingWords()[currentWordIndex].word;
  const firstLetter = word[0];
  const lastLetter = word[word.length - 1];

  spellingHint.textContent = fillTemplate(ui().hint, {
    count: word.length,
    first: firstLetter,
    last: lastLetter
  });
}

function renderWordBank() {
  wordBank.innerHTML = "";

  spellingWords().forEach(({ word, difficulty }, index) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "word-chip";
    chip.setAttribute("aria-label", fillTemplate(ui().tapWord, { word }));
    chip.innerHTML = `${word}<small>${difficultyLabel(difficulty)}</small>`;
    chip.addEventListener("click", () => {
      currentWordIndex = index;
      renderWord();
      speak(word);
      document.getElementById("spell").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    wordBank.appendChild(chip);
  });

  highlightWordChip();
}

function highlightWordChip() {
  wordBank.querySelectorAll(".word-chip").forEach((chip, index) => {
    chip.classList.toggle("is-active", index === currentWordIndex);
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
  currentStoryIndex = (currentStoryIndex + 1) % stories().length;
  renderStory();
});

readAloudButton.addEventListener("click", () => {
  speak(stories()[currentStoryIndex].text);
});

speakWordButton.addEventListener("click", () => {
  speak(spellingWords()[currentWordIndex].word);
});

showHintButton.addEventListener("click", showHint);
checkSpellingButton.addEventListener("click", checkSpelling);

spellingInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkSpelling();
  }
});

spellingInput.addEventListener("focus", () => {
  document.body.classList.add("keyboard-open");
  window.setTimeout(() => {
    spellingInput.scrollIntoView({ block: "center", behavior: "smooth" });
  }, 250);
});

spellingInput.addEventListener("blur", () => {
  document.body.classList.remove("keyboard-open");
});

resetProgressButton.addEventListener("click", () => {
  progress = {
    storiesCompleted: 0,
    wordsPracticed: 0,
    correctAnswers: 0
  };
  saveProgress();
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

function setActiveDock(id) {
  document.querySelectorAll(".dock-link").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
}

document.querySelectorAll(".dock-link").forEach((link) => {
  link.addEventListener("click", () => {
    setActiveDock(link.getAttribute("href").slice(1));
  });
});

const dockSections = ["read", "spell", "words", "progress"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveDock(visible.target.id);
    }
  }, {
    rootMargin: "-35% 0px -45% 0px",
    threshold: [0.15, 0.4, 0.65]
  });

  dockSections.forEach((section) => observer.observe(section));
}

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
}

applyLanguage();
