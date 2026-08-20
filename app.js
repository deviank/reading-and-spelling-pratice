const languageKey = "readingSpellingBuddyLanguage";
const progressKey = "readingSpellingBuddyProgress";
const speechRateKey = "readingSpellingBuddySpeechRate";
const speechVoiceKey = "readingSpellingBuddyVoices";
const speechRates = [0.55, 0.7, 0.86, 1.02, 1.2];

const content = {
  en: {
    htmlLang: "en",
    speechLang: "en-ZA",
    stories: [
      {
        title: "Kito the Meerkat",
        level: "Level 1",
        mood: "karoo",
        text: "Kito the meerkat wanted to cross a stream in the Karoo, but the water was rushing fast. He looked around and saw three flat stones. Kito stepped carefully from stone to stone and reached the other side with dry paws.",
        question: "How did Kito cross the stream?",
        answers: ["He swam quickly.", "He used flat stones.", "He jumped into a boat."],
        correctAnswer: "He used flat stones."
      },
      {
        title: "Maya's Bright Idea",
        level: "Level 2",
        mood: "school",
        text: "Maya forgot her bookmark after break at school. At bedtime, she did not want to lose her page. She folded a small piece of homework paper, drew a bright sun on it, and slipped it into her book.",
        question: "What problem did Maya solve?",
        answers: ["She needed a bookmark.", "She lost her school bag.", "She wanted a new story."],
        correctAnswer: "She needed a bookmark."
      },
      {
        title: "The Rainy Match",
        level: "Level 2",
        mood: "soccer",
        text: "The school soccer field was wet after the afternoon rain. Liam and his team moved slowly so they would not slip. When the ball rolled near the goal, Liam passed it to Zane, who scored with a gentle kick.",
        question: "Why did the team move slowly?",
        answers: ["They were tired.", "The field was wet.", "The game was over."],
        correctAnswer: "The field was wet."
      },
      {
        title: "Nandi's New Word",
        level: "Level 3",
        mood: "science",
        text: "Nandi found the word 'curious' in her science book about meerkats. She asked her teacher what it meant. Her teacher smiled and said, 'Curious means you want to learn more.' Nandi decided it was one of her favourite words.",
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
      heroEyebrow: "For clever kids in South Africa, ages 8-10",
      heroTitle: "Come practise and become a word champ.",
      heroCopy: "Short South African stories, spelling games, and a big high-five for every win.",
      stickerSa: "Made for SA kids",
      stickerLang: "English + Afrikaans",
      stickerWin: "Lekker wins",
      startReading: "Start Reading",
      trySpelling: "Try Spelling",
      dailyCardAria: "Today's practice target",
      todayGoal: "Today's Goal",
      todayGoalText: "Read 1 story, spell 10 words, and do a little dance for every win.",
      dailyWordsLabel: "words",
      dailyScoreLabel: "% score",
      readEyebrow: "Reading practice",
      readTitle: "Open a story. Find the clever answer.",
      newStory: "New Story",
      readAloud: "Read Aloud",
      comprehension: "What happened?",
      spellEyebrow: "Spelling practice",
      spellTitle: "Hear it. Type it. Own it.",
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
      wordsTitle: "Tap a word. Hear it. Spell it.",
      progressEyebrow: "Progress",
      progressTitle: "Your wins are stacking up.",
      statStories: "reading checks completed",
      statWords: "spelling words practiced",
      statCorrect: "correct answers",
      resetProgress: "Reset Progress",
      footer: "Made in South Africa for patient practice, high-fives, and growing confidence.",
      practiceWord: "Practice Word",
      wordLabel: "{difficulty} Word",
      difficulty: {
        tricky: "Tricky",
        common: "Common",
        challenge: "Challenge"
      },
      readingCorrect: "Lekker! That is correct.",
      readingWrong: "Nice try, champ. The answer is: {answer}",
      typeFirst: "Type your answer first.",
      spellingCorrect: "Sharp! Excellent spelling!",
      spellingWrong: "Almost. The word is \"{word}\". Say it in parts and try again.",
      hint: "Hint: {count} letters, starts with \"{first}\" and ends with \"{last}\".",
      tapWord: "Tap to hear and practise {word}",
      voiceHintAf: "This browser has no Afrikaans voice. Open this page in Microsoft Edge and choose Microsoft Adri (Afrikaans).",
      voiceHintEn: "This browser only has an American voice. For a better accent, open this page in Microsoft Edge and choose a United Kingdom English voice.",
      voiceUsing: "Using {voice}",
      voiceLabel: "Voice",
      voiceBest: "Best for this language",
      voiceOther: "Other voices",
      speedAria: "Reading speed",
      slower: "Slower",
      faster: "Faster",
      speedLabel: "Speed",
      speedNames: ["Very slow", "Slow", "Normal", "Fast", "Very fast"]
    }
  },
  af: {
    htmlLang: "af",
    speechLang: "af-ZA",
    stories: [
      {
        title: "Kito die Meerkat",
        level: "Vlak 1",
        mood: "karoo",
        text: "Kito die meerkat wou 'n stroom in die Karoo oorsteek, maar die water het vinnig gestroom. Hy het rondgekyk en drie plat klippe gesien. Kito het versigtig van klip tot klip gestap en die oorkant bereik met droë pote.",
        question: "Hoe het Kito die stroom oorgesteek?",
        answers: ["Hy het vinnig geswem.", "Hy het plat klippe gebruik.", "Hy het in 'n boot gespring."],
        correctAnswer: "Hy het plat klippe gebruik."
      },
      {
        title: "Maya se Slim Idee",
        level: "Vlak 2",
        mood: "school",
        text: "Maya het haar boekmerker ná pouse by die skool vergeet. Teen slaaptyd wou sy nie haar bladsy verloor nie. Sy het 'n klein stukkie huiswerkpapier gevou, 'n helder son daarop geteken, en dit in haar boek gesit.",
        question: "Watter probleem het Maya opgelos?",
        answers: ["Sy het 'n boekmerker nodig gehad.", "Sy het haar skoolsak verloor.", "Sy wou 'n nuwe storie hê."],
        correctAnswer: "Sy het 'n boekmerker nodig gehad."
      },
      {
        title: "Die Nat Wedstryd",
        level: "Vlak 2",
        mood: "soccer",
        text: "Die skool se sokkerveld was nat ná die middagreën. Liam en sy span het stadig beweeg sodat hulle nie sou gly nie. Toe die bal naby die doel rol, het Liam dit na Zane aangegee, wat met 'n sagte skop 'n doel geskiet het.",
        question: "Hoekom het die span stadig beweeg?",
        answers: ["Hulle was moeg.", "Die veld was nat.", "Die wedstryd was verby."],
        correctAnswer: "Die veld was nat."
      },
      {
        title: "Nandi se Nuwe Woord",
        level: "Vlak 3",
        mood: "science",
        text: "Nandi het die woord 'nuuskierig' in haar wetenskapboek oor meerkatte gevind. Sy het haar onderwyser gevra wat dit beteken. Haar onderwyser het geglimlag en gesê: 'Nuuskierig beteken jy wil meer leer.' Nandi het besluit dit is een van haar gunstelingwoorde.",
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
      heroEyebrow: "Vir slim kinders in Suid-Afrika, 8-10 jaar",
      heroTitle: "Kom oefen en word 'n woordkampioen.",
      heroCopy: "Kort Suid-Afrikaanse storiekies, spelspelletjies, en 'n groot hoë-vyf vir elke wen.",
      stickerSa: "Vir SA kinders",
      stickerLang: "Engels + Afrikaans",
      stickerWin: "Lekker wennetjies",
      startReading: "Begin Lees",
      trySpelling: "Probeer Spel",
      dailyCardAria: "Vandag se oefendoel",
      todayGoal: "Vandag se Doel",
      todayGoalText: "Lees 1 storie, spel 10 woorde, en dans 'n bietjie vir elke wen.",
      dailyWordsLabel: "woorde",
      dailyScoreLabel: "% telling",
      readEyebrow: "Leesoefening",
      readTitle: "Maak 'n storie oop. Vind die slim antwoord.",
      newStory: "Nuwe Storie",
      readAloud: "Lees Hardop",
      comprehension: "Wat het gebeur?",
      spellEyebrow: "Speloefening",
      spellTitle: "Hoor dit. Tik dit. Ken dit.",
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
      wordsTitle: "Tik 'n woord. Hoor dit. Spel dit.",
      progressEyebrow: "Vordering",
      progressTitle: "Jou wennetjies stapel op.",
      statStories: "leestoetse voltooi",
      statWords: "spelwoorde geoefen",
      statCorrect: "regte antwoorde",
      resetProgress: "Stel Terug",
      footer: "Gemaak in Suid-Afrika vir geduldige oefening, hoë-vywe, en groeiende selfvertroue.",
      practiceWord: "Oefenwoord",
      wordLabel: "{difficulty} Woord",
      difficulty: {
        tricky: "Lastig",
        common: "Algemeen",
        challenge: "Uitdaging"
      },
      readingCorrect: "Lekker! Dit is reg.",
      readingWrong: "Mooi probeer, kampioen. Die antwoord is: {answer}",
      typeFirst: "Tik eers jou antwoord.",
      spellingCorrect: "Mooi so! Uitstekende spelling!",
      spellingWrong: "Amper. Die woord is \"{word}\". Sê dit in stukkies en probeer weer.",
      hint: "Wenk: {count} letters, begin met \"{first}\" en eindig met \"{last}\".",
      tapWord: "Tik om te hoor en {word} te oefen",
      voiceHintAf: "Hierdie blaaier het geen Afrikaanse stem nie. Maak hierdie blad in Microsoft Edge oop en kies Microsoft Adri (Afrikaans).",
      voiceHintEn: "Hierdie blaaier het net 'n Amerikaanse stem. Vir 'n beter aksent, maak hierdie blad in Microsoft Edge oop en kies 'n Britse Engelse stem.",
      voiceUsing: "Gebruik {voice}",
      voiceLabel: "Stem",
      voiceBest: "Beste vir hierdie taal",
      voiceOther: "Ander stemme",
      speedAria: "Leesspoed",
      slower: "Stadiger",
      faster: "Vinniger",
      speedLabel: "Spoed",
      speedNames: ["Baie stadig", "Stadig", "Normaal", "Vinnig", "Baie vinnig"]
    }
  }
};

let currentLang = loadLanguage();
let currentStoryIndex = 0;
let currentWordIndex = 0;
let speechRateIndex = loadSpeechRateIndex();
let lastSpokenText = "";
let lastSpeakOptions = {};
let speakToken = 0;
let highlightTimers = [];
let progress = loadProgress();
let speechVoices = [];
let chosenVoices = loadChosenVoices();

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
const storyPanel = document.querySelector("#storyPanel");
const celebrateLayer = document.querySelector("#celebrate");

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

function loadSpeechRateIndex() {
  const saved = Number(localStorage.getItem(speechRateKey));

  if (Number.isInteger(saved) && saved >= 0 && saved < speechRates.length) {
    return saved;
  }

  return 2;
}

function loadChosenVoices() {
  try {
    const saved = JSON.parse(localStorage.getItem(speechVoiceKey) || "{}");
    return {
      en: typeof saved.en === "string" ? saved.en : "",
      af: typeof saved.af === "string" ? saved.af : ""
    };
  } catch {
    return { en: "", af: "" };
  }
}

function saveChosenVoices() {
  localStorage.setItem(speechVoiceKey, JSON.stringify(chosenVoices));
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
    clearWordHighlights();
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
  refreshVoices();
  updateSpeedUi();
  renderStory();
  renderWord();
  renderWordBank();
  renderProgress();
}

function renderStory() {
  const story = stories()[currentStoryIndex];

  storyLevel.textContent = story.level;
  storyTitle.textContent = story.title;
  wrapSpokenText(storyText, story.text);
  questionText.textContent = story.question;
  readingFeedback.textContent = "";
  readingFeedback.className = "feedback";
  answerOptions.innerHTML = "";
  storyPanel.dataset.mood = story.mood || "karoo";

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
    celebrate();
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

function refreshVoices() {
  if (!("speechSynthesis" in window)) {
    return;
  }

  speechVoices = Array.from(window.speechSynthesis.getVoices());
  fillVoiceSelects();
  updateVoiceHint();
}

function voiceKey(voice) {
  return `${voice.name} ${voice.lang}`.toLowerCase();
}

function hasAfrikaansVoice() {
  return speechVoices.some((voice) => {
    const key = voiceKey(voice);
    return voice.lang.toLowerCase().startsWith("af") || key.includes("afrikaans") || key.includes("adri");
  });
}

function hasLocalEnglishVoice() {
  return speechVoices.some((voice) => {
    const key = voiceKey(voice);
    const lang = voice.lang.toLowerCase();
    return lang.startsWith("en-za") || lang.startsWith("en-gb") ||
      key.includes("south africa") || key.includes("united kingdom") ||
      key.includes("uk english") || key.includes("english (uk)");
  });
}

function scoreVoice(voice, wantedLang) {
  const lang = (voice.lang || "").replace("_", "-").toLowerCase();
  const key = voiceKey(voice);
  const wanted = wantedLang.toLowerCase();
  let score = 0;

  if (lang === wanted) {
    score += 120;
  }

  if (wanted.startsWith("af")) {
    if (lang.startsWith("af")) {
      score += 100;
    }
    if (key.includes("afrikaans") || key.includes("adri")) {
      score += 110;
    }
  }

  if (wanted.startsWith("en")) {
    if (lang.startsWith("en-za") || key.includes("south africa")) {
      score += 110;
    } else if (lang.startsWith("en-gb") || key.includes("united kingdom") || key.includes("uk english") || key.includes("english (uk)")) {
      score += 80;
    } else if (lang.startsWith("en-au") || key.includes("australian")) {
      score += 45;
    } else if (lang.startsWith("en-us") || key.includes("us english") || key.includes("american") || key.includes("united states")) {
      score += 8;
    } else if (lang.startsWith("en")) {
      score += 20;
    }
  }

  if ((key.includes("natural") || key.includes("online")) && score >= 80) {
    score += 40;
  }

  return score;
}

function voiceFitsLanguage(voice, wantedLang) {
  return scoreVoice(voice, wantedLang) >= 80;
}

function pickVoice(wantedLang) {
  if (!speechVoices.length && "speechSynthesis" in window) {
    speechVoices = Array.from(window.speechSynthesis.getVoices());
  }

  const savedName = chosenVoices[currentLang];
  const saved = speechVoices.find((voice) => voice.name === savedName);

  if (saved && voiceFitsLanguage(saved, wantedLang)) {
    return saved;
  }

  let best = null;
  let bestScore = 0;

  speechVoices.forEach((voice) => {
    const score = scoreVoice(voice, wantedLang);

    if (score > bestScore) {
      best = voice;
      bestScore = score;
    }
  });

  if (best && voiceFitsLanguage(best, wantedLang) && chosenVoices[currentLang] !== best.name) {
    chosenVoices[currentLang] = best.name;
    saveChosenVoices();
  }

  return best;
}

function addVoiceOption(voice) {
  const option = document.createElement("option");
  option.value = voice.name;
  option.textContent = `${voice.name} (${voice.lang})`;
  return option;
}

function fillVoiceSelects() {
  const wantedLang = content[currentLang].speechLang;
  const selected = pickVoice(wantedLang);
  const selectedName = selected ? selected.name : "";
  const strings = ui();
  const recommended = speechVoices
    .filter((voice) => voiceFitsLanguage(voice, wantedLang))
    .sort((a, b) => scoreVoice(b, wantedLang) - scoreVoice(a, wantedLang) || a.name.localeCompare(b.name));
  const recommendedNames = new Set(recommended.map((voice) => voice.name));
  const others = speechVoices
    .filter((voice) => !recommendedNames.has(voice.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  document.querySelectorAll(".voice-select").forEach((select) => {
    select.innerHTML = "";

    if (!speechVoices.length) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "No voices found";
      select.appendChild(option);
      return;
    }

    if (recommended.length) {
      const group = document.createElement("optgroup");
      group.label = strings.voiceBest;
      recommended.forEach((voice) => group.appendChild(addVoiceOption(voice)));
      select.appendChild(group);
    }

    if (others.length) {
      const group = document.createElement("optgroup");
      group.label = strings.voiceOther;
      others.forEach((voice) => group.appendChild(addVoiceOption(voice)));
      select.appendChild(group);
    }

    if (selectedName) {
      select.value = selectedName;
    }
  });
}

function updateVoiceHint() {
  const hints = document.querySelectorAll("[data-voice-hint]");
  const strings = ui();
  const current = pickVoice(content[currentLang].speechLang);

  hints.forEach((hint) => {
    if (currentLang === "af" && !hasAfrikaansVoice()) {
      hint.textContent = strings.voiceHintAf;
      hint.hidden = false;
      return;
    }

    if (currentLang === "en" && !hasLocalEnglishVoice()) {
      hint.textContent = strings.voiceHintEn;
      hint.hidden = false;
      return;
    }

    if (current) {
      hint.textContent = fillTemplate(strings.voiceUsing, { voice: `${current.name} (${current.lang})` });
      hint.hidden = false;
      return;
    }

    hint.textContent = "";
    hint.hidden = true;
  });
}

function wrapSpokenText(container, text) {
  container.replaceChildren();
  const pieces = text.split(/(\s+)/);
  let index = 0;

  pieces.forEach((piece) => {
    if (!piece) {
      return;
    }

    if (/^\s+$/.test(piece)) {
      container.appendChild(document.createTextNode(piece));
      index += piece.length;
      return;
    }

    const span = document.createElement("span");
    span.className = "spoken-word";
    span.dataset.start = String(index);
    span.textContent = piece;
    container.appendChild(span);
    index += piece.length;
  });
}

function stopHighlightTimers() {
  highlightTimers.forEach((id) => window.clearTimeout(id));
  highlightTimers = [];
}

function clearWordHighlights() {
  stopHighlightTimers();
  document.querySelectorAll(".spoken-word.is-reading").forEach((word) => {
    word.classList.remove("is-reading");
  });
  document.querySelectorAll(".word-chip.is-speaking").forEach((chip) => {
    chip.classList.remove("is-speaking");
  });
}

function highlightWordElement(container, current) {
  container.querySelectorAll(".spoken-word").forEach((word) => {
    word.classList.toggle("is-reading", word === current);
  });
}

function highlightAtChar(container, charIndex) {
  const words = Array.from(container.querySelectorAll(".spoken-word"));
  let current = words[0];

  words.forEach((word) => {
    if (Number(word.dataset.start) <= charIndex) {
      current = word;
    }
  });

  if (current) {
    highlightWordElement(container, current);
  }
}

function wordDuration(word, rate) {
  const letters = Math.max(word.replace(/[^\w\u00C0-\u024F]/g, "").length, 2);
  let ms = (170 + letters * 78) / rate;

  if (/[.!?…]$/.test(word)) {
    ms += 260 / rate;
  } else if (/[,;:]$/.test(word)) {
    ms += 120 / rate;
  }

  return Math.max(ms, 140 / rate);
}

function startWordHighlight(container, rate) {
  const words = Array.from(container.querySelectorAll(".spoken-word"));
  let delay = 40;

  words.forEach((word) => {
    const id = window.setTimeout(() => {
      highlightWordElement(container, word);
    }, delay);
    highlightTimers.push(id);
    delay += wordDuration(word.textContent, rate);
  });
}

function speak(text, options = {}) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  const token = speakToken + 1;
  speakToken = token;
  lastSpokenText = text;
  lastSpeakOptions = options;
  clearWordHighlights();
  refreshVoices();
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  const lang = content[currentLang].speechLang;
  const voicesNow = window.speechSynthesis.getVoices();
  const preferredName = chosenVoices[currentLang] || (pickVoice(lang) ? pickVoice(lang).name : "");
  const voice = voicesNow.find((item) => item.name === preferredName);
  const rate = speechRates[speechRateIndex];
  let usedBoundary = false;

  utterance.lang = lang;
  utterance.rate = rate;
  utterance.pitch = 1.04;

  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang || lang;
  }

  if (options.target) {
    startWordHighlight(options.target, rate);
    utterance.addEventListener("boundary", (event) => {
      if (token !== speakToken) {
        return;
      }

      if (event.name && event.name.toLowerCase() !== "word") {
        return;
      }

      usedBoundary = true;
      stopHighlightTimers();
      highlightAtChar(options.target, event.charIndex || 0);
    });
  }

  if (options.chip) {
    options.chip.classList.add("is-speaking");
  }

  const finish = () => {
    if (token !== speakToken) {
      return;
    }

    stopHighlightTimers();
    window.setTimeout(() => {
      if (token === speakToken) {
        clearWordHighlights();
      }
    }, 220);
  };

  utterance.addEventListener("end", finish);
  utterance.addEventListener("error", finish);

  window.setTimeout(() => {
    if (token !== speakToken) {
      return;
    }

    window.speechSynthesis.speak(utterance);
  }, 60);
}

function updateSpeedUi() {
  const strings = ui();
  const label = strings.speedNames[speechRateIndex];

  document.querySelectorAll("[data-speed-value]").forEach((element) => {
    element.textContent = label;
  });

  document.querySelectorAll(".speed-down").forEach((button) => {
    button.disabled = speechRateIndex === 0;
  });

  document.querySelectorAll(".speed-up").forEach((button) => {
    button.disabled = speechRateIndex === speechRates.length - 1;
  });
}

function changeSpeechRate(step) {
  const nextIndex = speechRateIndex + step;

  if (nextIndex < 0 || nextIndex >= speechRates.length) {
    return;
  }

  speechRateIndex = nextIndex;
  localStorage.setItem(speechRateKey, String(speechRateIndex));
  updateSpeedUi();

  if (lastSpokenText && "speechSynthesis" in window && window.speechSynthesis.speaking) {
    speak(lastSpokenText, lastSpeakOptions);
  }
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
    celebrate();
    currentWordIndex = (currentWordIndex + 1) % words.length;
    window.setTimeout(renderWord, 900);
  } else {
    spellingFeedback.textContent = fillTemplate(strings.spellingWrong, { word });
    spellingFeedback.className = "feedback try-again";
  }

  saveProgress();
}

function celebrate() {
  if (!celebrateLayer) {
    return;
  }

  celebrateLayer.innerHTML = "";
  const colors = ["#F4C430", "#E85D04", "#0F7A6C", "#D6286E", "#2F9E6B", "#FFF6E4"];

  for (let i = 0; i < 20; i += 1) {
    const bit = document.createElement("span");
    bit.className = "confetti";
    bit.style.left = `${8 + Math.random() * 84}%`;
    bit.style.background = colors[i % colors.length];
    bit.style.animationDelay = `${Math.random() * 0.18}s`;
    bit.style.transform = `rotate(${Math.random() * 180}deg)`;
    celebrateLayer.appendChild(bit);
  }

  celebrateLayer.classList.add("is-on");
  window.setTimeout(() => {
    celebrateLayer.classList.remove("is-on");
    celebrateLayer.innerHTML = "";
  }, 900);
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
      speak(word, { chip });
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
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  clearWordHighlights();
  speakToken += 1;
  currentStoryIndex = (currentStoryIndex + 1) % stories().length;
  renderStory();
});

readAloudButton.addEventListener("click", () => {
  speak(stories()[currentStoryIndex].text, { target: storyText });
});

speakWordButton.addEventListener("click", () => {
  speak(spellingWords()[currentWordIndex].word);
});

document.querySelectorAll(".speed-down").forEach((button) => {
  button.addEventListener("click", () => changeSpeechRate(-1));
});

document.querySelectorAll(".speed-up").forEach((button) => {
  button.addEventListener("click", () => changeSpeechRate(1));
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

document.querySelectorAll(".voice-select").forEach((select) => {
  select.addEventListener("change", () => {
    chosenVoices[currentLang] = select.value;
    saveChosenVoices();
    fillVoiceSelects();
    updateVoiceHint();
    const preview = currentLang === "af" ? "Hallo. Ek is jou leesmaatjie." : "Hello. I am your reading buddy.";
    speak(lastSpokenText || preview, lastSpokenText ? lastSpeakOptions : {});
  });
});

if ("speechSynthesis" in window) {
  refreshVoices();
  window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
}

applyLanguage();
