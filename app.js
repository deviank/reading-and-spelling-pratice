const languageKey = "readingSpellingBuddyLanguage";
const progressKey = "readingSpellingBuddyProgress";
const speechRateKey = "readingSpellingBuddySpeechRate";
const speechVoiceKey = "readingSpellingBuddyVoices";
const customStoryKey = "readingSpellingBuddyCustomStory";
const speechRates = [0.55, 0.7, 0.86, 1.02, 1.2];
const storyTypes = ["anything", "celeb", "sports", "animal"];
const storyFacts = [
  { kind: "sports", mood: "rugby", keys: ["siya", "kolisi", "springbok rugby"],
    en: { job: "a rugby captain", work: "plays rugby", place: "the rugby field", manner: "calm and kind", action: "passed the ball to a shy teammate", skill: "passing and tackling", tool: "a rugby ball" },
    af: { job: "'n rugbykaptein", work: "speel rugby", place: "die rugbyveld", manner: "kalm en vriendelik", action: "het die bal vir 'n skaam spanmaat aangegee", skill: "aangee en tackle", tool: "'n rugbybal" } },
  { kind: "sports", mood: "soccer", keys: ["messi", "ronaldo", "soccer", "football", "sokker", "bafana", "banyana"],
    en: { job: "a soccer star", work: "plays soccer", place: "the soccer field", manner: "quick and fair", action: "passed the ball and called a teammate in", skill: "dribbling and passing", tool: "a soccer ball" },
    af: { job: "'n sokkerster", work: "speel sokker", place: "die sokkerveld", manner: "vinnig en regverdig", action: "het die bal aangegee en 'n spanmaat ingeroep", skill: "dribbel en aangee", tool: "'n sokkerbal" } },
  { kind: "sports", mood: "soccer", keys: ["caster", "semenya", "wayde", "niekerk", "usain", "bolt", "sprint", "runner", "athletics", "simbine"],
    en: { job: "a runner", work: "sprints on the track", place: "the running track", manner: "focused and brave", action: "practised starting blocks with a young runner", skill: "fast, steady running", tool: "running shoes" },
    af: { job: "'n hardloper", work: "nael op die baan", place: "die hardloopbaan", manner: "gefokus en dapper", action: "het wegspringblokke saam met 'n jong hardloper geoefen", skill: "vinnig, bestendig hardloop", tool: "hardloopskoene" } },
  { kind: "sports", mood: "school", keys: ["cricket", "amla", "rabada", "de villiers", "de kock", "kohli"],
    en: { job: "a cricket star", work: "bats and bowls", place: "the cricket pitch", manner: "patient and sharp", action: "showed a child how to watch the ball", skill: "timing and teamwork", tool: "a cricket bat" },
    af: { job: "'n krieketster", work: "kolf en boul", place: "die krieketveld", manner: "geduldig en skerp", action: "het 'n kind gewys hoe om die bal dop te hou", skill: "tydsin en spanwerk", tool: "'n krieketkolf" } },
  { kind: "sports", mood: "star", keys: ["serena", "tennis"],
    en: { job: "a tennis champion", work: "plays tennis", place: "the tennis court", manner: "strong and determined", action: "practised a gentle serve with a beginner", skill: "serving and footwork", tool: "a tennis racket" },
    af: { job: "'n tenniskampioen", work: "speel tennis", place: "die tennisbaan", manner: "sterk en vasberade", action: "het 'n sagte serve saam met 'n beginner geoefen", skill: "serve en voete-werk", tool: "'n tennisraket" } },
  { kind: "sports", mood: "science", keys: ["chad", "le clos", "swim", "swimmer"],
    en: { job: "a swimmer", work: "swims long, smooth laps", place: "the swimming pool", manner: "steady and cheerful", action: "showed a child how to blow bubbles and kick", skill: "strong, even strokes", tool: "goggles" },
    af: { job: "'n swemmer", work: "swem lang, gladde bane", place: "die swembad", manner: "bestendig en vrolik", action: "het 'n kind gewys hoe om borrels te blaas en te skop", skill: "sterk, eweredige slae", tool: "'n swembril" } },
  { kind: "sports", mood: "star", keys: ["biles", "gymnast", "gymnastics"],
    en: { job: "a gymnast", work: "practises flips and balance", place: "the gym", manner: "brave and careful", action: "helped a child hold a safe balance", skill: "balance and strength", tool: "a gym mat" },
    af: { job: "'n gimnas", work: "oefen salto's en balans", place: "die gimnasium", manner: "dapper en versigtig", action: "het 'n kind gehelp om veilig te balanseer", skill: "balans en krag", tool: "'n gimnasiummat" } },
  { kind: "sports", mood: "soccer", keys: ["jordan", "basketball", "nba"],
    en: { job: "a basketball star", work: "shoots and passes on the court", place: "the basketball court", manner: "energetic and kind", action: "passed the ball so a shy player could shoot", skill: "jumping and teamwork", tool: "a basketball" },
    af: { job: "'n basketbalster", work: "skiet en gee aan op die baan", place: "die basketbalbaan", manner: "energiek en vriendelik", action: "het die bal aangegee sodat 'n skaam speler kon skiet", skill: "spring en spanwerk", tool: "'n basketbal" } },
  { kind: "celeb", mood: "star", keys: ["taylor", "swift"],
    en: { job: "a singer and songwriter", work: "writes and sings songs", place: "the stage", manner: "warm and thoughtful", action: "sang a slow, kind song for a shy fan", skill: "writing honest songs", tool: "a guitar" },
    af: { job: "'n sanger en liedjieskrywer", work: "skryf en sing liedjies", place: "die verhoog", manner: "warm en deurdag", action: "het 'n sagte, vriendelike liedjie vir 'n skaam aanhanger gesing", skill: "om eerlike liedjies te skryf", tool: "'n kitaar" } },
  { kind: "celeb", mood: "star", keys: ["beyonce", "beyoncé"],
    en: { job: "a singer and dancer", work: "sings and dances", place: "the stage", manner: "powerful and kind", action: "taught a simple dance step and smiled", skill: "singing and dancing together", tool: "a microphone" },
    af: { job: "'n sanger en danser", work: "sing en dans", place: "die verhoog", manner: "kragtig en vriendelik", action: "het 'n eenvoudige danstappie geleer en geglimlag", skill: "om saam te sing en dans", tool: "'n mikrofoon" } },
  { kind: "celeb", mood: "school", keys: ["trevor", "noah"],
    en: { job: "a comedian", work: "tells clever jokes", place: "the stage", manner: "funny and gentle", action: "told a kind joke that made a shy child laugh", skill: "telling stories with a smile", tool: "a microphone" },
    af: { job: "'n komediant", work: "vertel slim grappe", place: "die verhoog", manner: "snaaks en sag", action: "het 'n vriendelike grap vertel wat 'n skaam kind laat lag het", skill: "om stories met 'n glimlag te vertel", tool: "'n mikrofoon" } },
  { kind: "celeb", mood: "star", keys: ["tyla"],
    en: { job: "a singer", work: "sings and dances", place: "the stage", manner: "bright and hardworking", action: "practised a careful dance step with fans", skill: "rhythm and practice", tool: "a microphone" },
    af: { job: "'n sanger", work: "sing en dans", place: "die verhoog", manner: "helder en hardwerkend", action: "het 'n versigtige danstappie saam met aanhangers geoefen", skill: "ritme en oefening", tool: "'n mikrofoon" } },
  { kind: "celeb", mood: "star", keys: ["charlize", "theron", "zendaya", "actor", "actress"],
    en: { job: "an actor", work: "acts in films and practises voices", place: "a film set", manner: "focused and kind", action: "helped a child try a brave, clear line", skill: "using your voice and face", tool: "a script" },
    af: { job: "'n akteur", work: "tree op in films en oefen stemme", place: "'n filmstel", manner: "gefokus en vriendelik", action: "het 'n kind gehelp om 'n dapper, duidelike sin te sê", skill: "om jou stem en gesig te gebruik", tool: "'n draaiboek" } },
  { kind: "celeb", mood: "star", keys: ["dwayne", "johnson"],
    en: { job: "an actor and wrestler", work: "trains hard and makes films", place: "the gym", manner: "strong and cheerful", action: "helped a child lift a tiny weight safely", skill: "hard work and kindness", tool: "a water bottle" },
    af: { job: "'n akteur en stoeier", work: "oefen hard en maak films", place: "die gimnasium", manner: "sterk en vrolik", action: "het 'n kind gehelp om 'n klein gewigjie veilig op te lig", skill: "harde werk en vriendelikheid", tool: "'n waterbottel" } },
  { kind: "celeb", mood: "star", keys: ["rihanna", "sheeran", "singer", "pop star"],
    en: { job: "a singer", work: "sings for people", place: "the stage", manner: "warm and grateful", action: "sang softly so everyone could join in", skill: "sharing music", tool: "a microphone" },
    af: { job: "'n sanger", work: "sing vir mense", place: "die verhoog", manner: "warm en dankbaar", action: "het sag gesing sodat almal saam kon sing", skill: "om musiek te deel", tool: "'n mikrofoon" } },
  { kind: "celeb", mood: "star", keys: ["black coffee", "dj", "master kg", "madjozi"],
    en: { job: "a musician", work: "makes music that makes people dance", place: "the stage", manner: "cool and kind", action: "played a gentle beat and let a child clap along", skill: "finding a good rhythm", tool: "headphones" },
    af: { job: "'n musikant", work: "maak musiek wat mense laat dans", place: "die verhoog", manner: "cool en vriendelik", action: "het 'n sagte ritme gespeel en 'n kind laat saamklap", skill: "om 'n goeie ritme te vind", tool: "oorfone" } },
  { kind: "animal", mood: "karoo", keys: ["meerkat", "suricate", "stokstert"],
    en: { job: "a small Karoo lookout", work: "stands guard for the family", place: "the sunny Karoo", manner: "alert and careful", action: "stood tall on its back legs to look around", skill: "watching for danger", tool: "sharp eyes" },
    af: { job: "'n klein Karoo-wag", work: "staan wag vir die familie", place: "die sonnige Karoo", manner: "wakker en versigtig", action: "het hoog op die agterpote gestaan om te kyk", skill: "om vir gevaar te kyk", tool: "skerp oë" } },
  { kind: "animal", mood: "karoo", keys: ["lion", "leeu"],
    en: { job: "the protector of a pride", work: "protects the pride and rests in the shade", place: "the African savanna", manner: "brave and quiet", action: "gave a low rumble and then lay down to rest with the cubs", skill: "watching over the family", tool: "a strong roar" },
    af: { job: "die beskermer van 'n trop", work: "beskerm die trop en rus in die skadu", place: "die Afrika-savanna", manner: "dapper en stil", action: "het sag gegrom en toe by die kleintjies gaan rus", skill: "om die familie dop te hou", tool: "'n sterk brul" } },
  { kind: "animal", mood: "karoo", keys: ["elephant", "olifant"],
    en: { job: "an elephant", work: "walks with the herd and uses its trunk", place: "the savanna", manner: "gentle and wise", action: "sucked water with its trunk and sprayed a little on its back", skill: "using a trunk to drink", tool: "a long trunk" },
    af: { job: "'n olifant", work: "stap saam met die trop en gebruik sy slurp", place: "die savanna", manner: "sag en wys", action: "het water met die slurp opgesuig en 'n bietjie op die rug gespat", skill: "om met 'n slurp te drink", tool: "'n lang slurp" } },
  { kind: "animal", mood: "soccer", keys: ["cheetah", "jagluiperd"],
    en: { job: "a cheetah", work: "runs in short, super-fast bursts", place: "the open grassland", manner: "fast and focused", action: "sprinted a little way, then stopped to catch its breath", skill: "the fastest sprint among animals", tool: "long, strong legs" },
    af: { job: "'n jagluiperd", work: "hardloop in kort, super-vinnige stuipe", place: "die oop grasveld", manner: "vinnig en gefokus", action: "het 'n entjie gesprint en toe gestop om asem te skep", skill: "die vinnigste nael onder diere", tool: "lang, sterk bene" } },
  { kind: "animal", mood: "science", keys: ["penguin", "pikkewyn"],
    en: { job: "a penguin", work: "waddles on land and swims to find fish", place: "the cold rocky shore", manner: "funny and determined", action: "slid onto its tummy and then dived into the water", skill: "swimming with stiff little wings", tool: "waterproof feathers" },
    af: { job: "'n pikkewyn", work: "waggel op land en swem om vis te kry", place: "die koue rotsoewer", manner: "snaaks en vasberade", action: "het op die pens geskuif en toe in die water geduik", skill: "om met stywe vlerkies te swem", tool: "waterdigte vere" } },
  { kind: "animal", mood: "school", keys: ["dog", "puppy", "hond", "hondjie"],
    en: { job: "a dog", work: "listens, sniffs, and stays loyal", place: "the garden", manner: "friendly and loyal", action: "wagged its tail and fetched a stick", skill: "smelling and following kind voices", tool: "a wet nose" },
    af: { job: "'n hond", work: "luister, ruik en bly lojaal", place: "die tuin", manner: "vriendelik en lojaal", action: "het stert geswaai en 'n stok gaan haal", skill: "ruik en vriendelike stemme volg", tool: "'n nat neus" } },
  { kind: "animal", mood: "school", keys: ["cat", "kitten", "kat", "katjie"],
    en: { job: "a cat", work: "balances, purrs, and hunts tiny pests", place: "a sunny windowsill", manner: "quiet and clever", action: "stretched, purred, then watched a beetle with still paws", skill: "landing softly and watching closely", tool: "soft paws" },
    af: { job: "'n kat", work: "balanseer, spin en jag klein goggas", place: "'n sonnige vensterbank", manner: "stil en slim", action: "het gestrek, gespin en toe 'n kewer dopgehou", skill: "sag land en fyn kyk", tool: "sagte pootjies" } },
  { kind: "animal", mood: "science", keys: ["shark", "haai"],
    en: { job: "a shark", work: "swims far to find food in the sea", place: "the deep ocean", manner: "strong and careful", action: "glided past and used its nose to sense the water", skill: "sensing movement in the water", tool: "a powerful tail" },
    af: { job: "'n haai", work: "swem vêr om kos in die see te kry", place: "die diep oseaan", manner: "sterk en versigtig", action: "het verbygesweef en met die neus die water aangevoel", skill: "om beweging in die water te voel", tool: "'n kragtige stert" } },
  { kind: "animal", mood: "science", keys: ["whale", "walvis", "dolphin", "dolfyn"],
    en: { job: "a sea animal", work: "swims and talks with clicks and songs", place: "the open ocean", manner: "playful and gentle", action: "rose up to breathe and then swam beside a friend", skill: "holding breath and swimming far", tool: "a strong tail" },
    af: { job: "'n seedier", work: "swem en praat met klikke en liedjies", place: "die oop oseaan", manner: "speels en sag", action: "het opgekom om asem te haal en toe langs 'n vriend geswem", skill: "asem ophou en vêr swem", tool: "'n sterk stert" } },
  { kind: "animal", mood: "karoo", keys: ["giraffe", "kameelperd"],
    en: { job: "a giraffe", work: "stretches up to eat high leaves", place: "the savanna", manner: "tall and peaceful", action: "reached the top branches with its long neck", skill: "eating leaves other animals cannot reach", tool: "a long neck" },
    af: { job: "'n kameelperd", work: "rek op om hoë blare te eet", place: "die savanna", manner: "lank en vreedsaam", action: "het die top takke met die lang nek bereik", skill: "om hoë blare te eet", tool: "'n lang nek" } },
  { kind: "animal", mood: "karoo", keys: ["zebra", "rhino", "renoster", "hippo", "seekoei", "buffalo", "leopard", "luiperd", "springbok"],
    en: { job: "a wild African animal", work: "grazes and stays with the group", place: "the veld", manner: "alert and sturdy", action: "moved with the herd to a safer patch of grass", skill: "staying together for safety", tool: "strong legs" },
    af: { job: "'n wilde Afrika-dier", work: "wei en bly by die trop", place: "die veld", manner: "wakker en stewig", action: "het saam met die trop na veiliger gras beweeg", skill: "om saam te bly vir veiligheid", tool: "sterk bene" } },
  { kind: "animal", mood: "school", keys: ["monkey", "baboon", "bobbejaan"],
    en: { job: "a clever animal", work: "climbs, looks, and shares fruit", place: "the trees", manner: "curious and quick", action: "picked a fruit and checked it before eating", skill: "using hands and watching others", tool: "clever fingers" },
    af: { job: "'n slim dier", work: "klim, kyk en deel vrugte", place: "die bome", manner: "nuuskierig en vinnig", action: "het 'n vrug gepluk en dit eers nagekyk", skill: "hande gebruik en ander dop hou", tool: "slim vingers" } },
  { kind: "animal", mood: "science", keys: ["bird", "eagle", "arend", "owl", "uil", "parrot", "papegaai", "voel"],
    en: { job: "a bird", work: "flies, nests, and watches from above", place: "the sky and trees", manner: "light and watchful", action: "flapped up to a branch and tilted its head to listen", skill: "flying and spotting small things", tool: "strong wings" },
    af: { job: "'n voël", work: "vlieg, nes en kyk van bo af", place: "die lug en bome", manner: "lig en oplettend", action: "het op 'n tak gevlieg en die kop gekantel om te luister", skill: "vlieg en klein dingetjies raaksien", tool: "sterk vlerke" } },
  { kind: "animal", mood: "karoo", keys: ["horse", "perd", "pony"],
    en: { job: "a horse", work: "gallops and grazes", place: "the paddock", manner: "gentle and strong", action: "snorted softly and trotted to the fence for a greeting", skill: "running with a smooth rhythm", tool: "hard hooves" },
    af: { job: "'n perd", work: "galop en wei", place: "die kamp", manner: "sag en sterk", action: "het sag gesnuif en na die heining gedraf vir 'n groet", skill: "hardloop met 'n gladde ritme", tool: "harde hoewe" } },
  { kind: "animal", mood: "school", keys: ["rabbit", "bunny", "haas", "hamster"],
    en: { job: "a small pet", work: "hops, sniffs, and hides in safe corners", place: "a quiet hutch", manner: "shy and quick", action: "twitched its nose and hopped to a pile of hay", skill: "listening with long ears", tool: "soft whiskers" },
    af: { job: "'n klein troeteldier", work: "hop, ruik en kruip in veilige hoekies", place: "'n stil hokkie", manner: "skaam en vinnig", action: "het neus getrek en na 'n hoopie hooi gehop", skill: "luister met lang ore", tool: "sagte snorbaarde" } },
  { kind: "animal", mood: "science", keys: ["bee", "bye", "butterfly", "skoenlapper"],
    en: { job: "a tiny helper", work: "flies from flower to flower", place: "the garden", manner: "busy and useful", action: "landed on a blossom and drank a little nectar", skill: "moving pollen so plants can grow", tool: "light wings" },
    af: { job: "'n klein helper", work: "vlieg van blom tot blom", place: "die tuin", manner: "besig en nuttig", action: "het op 'n blom geland en 'n bietjie nektar gedrink", skill: "stuifmeel skuif sodat plante kan groei", tool: "ligte vlerkies" } },
  { kind: "animal", mood: "karoo", keys: ["tortoise", "skilpad", "turtle"],
    en: { job: "a tortoise", work: "walks slowly and carries its shell", place: "a dry, sunny path", manner: "slow and wise", action: "tucked into its shell, then took one careful step forward", skill: "staying safe inside a shell", tool: "a hard shell" },
    af: { job: "'n skilpad", work: "loop stadig en dra sy dop", place: "'n droë, sonnige pad", manner: "stadig en wys", action: "het in die dop ingetrek en toe een versigtige treetjie vorentoe gegee", skill: "veilig bly in 'n dop", tool: "'n harde dop" } },
  { kind: "anything", mood: "sparkle", keys: ["pizza"],
    en: { job: "a favourite food", work: "is baked and shared", place: "the kitchen", manner: "warm and tasty", action: "was sliced and shared with a friend", skill: "bringing people together at lunch", tool: "a plate" },
    af: { job: "'n gunstelingkos", work: "word gebak en gedeel", place: "die kombuis", manner: "warm en lekker", action: "is in stukkies gesny en met 'n vriend gedeel", skill: "om mense by middagete bymekaar te bring", tool: "'n bord" } },
  { kind: "anything", mood: "school", keys: ["lego"],
    en: { job: "a building toy", work: "clicks together into houses and cars", place: "the play table", manner: "colourful and clever", action: "was stacked into a strong little bridge", skill: "building step by step", tool: "tiny bricks" },
    af: { job: "'n bou-speelding", work: "klik aanmekaar in huise en karre", place: "die speeltafel", manner: "kleurryk en slim", action: "is in 'n stewige bruggetjie gestapel", skill: "om treetjie vir treetjie te bou", tool: "klein blokkies" } },
  { kind: "anything", mood: "school", keys: ["book", "boek"],
    en: { job: "a story book", work: "holds words and pictures", place: "the library", manner: "quiet and exciting", action: "was opened to a new page and read slowly", skill: "teaching new words", tool: "pages" },
    af: { job: "'n storieboek", work: "hou woorde en prente", place: "die biblioteek", manner: "stil en opwindend", action: "is by 'n nuwe bladsy oopgemaak en stadig gelees", skill: "om nuwe woorde te leer", tool: "bladsye" } },
  { kind: "anything", mood: "soccer", keys: ["bike", "bicycle", "fiets"],
    en: { job: "a bicycle", work: "rolls along when you pedal", place: "the path", manner: "fast and free", action: "was ridden slowly, then a little faster", skill: "balance and pedalling", tool: "two wheels" },
    af: { job: "'n fiets", work: "rol wanneer jy trap", place: "die paadjie", manner: "vinnig en vry", action: "is eers stadig, toe 'n bietjie vinniger gery", skill: "balans en trap", tool: "twee wiele" } },
  { kind: "celeb", mood: "star", keys: [], id: "generic-celeb",
    en: { job: "a famous star", work: "entertains people", place: "the stage", manner: "warm and friendly", action: "waved and practised a little show for the crowd", skill: "making people smile", tool: "a microphone" },
    af: { job: "'n bekende ster", work: "vermaak mense", place: "die verhoog", manner: "warm en vriendelik", action: "het geswaai en 'n klein vertoning vir die skare geoefen", skill: "om mense te laat glimlag", tool: "'n mikrofoon" } },
  { kind: "sports", mood: "soccer", keys: [], id: "generic-sports",
    en: { job: "a sport star", work: "trains hard every day", place: "the sports field", manner: "brave and fair", action: "helped a teammate practise one more time", skill: "teamwork", tool: "a sports ball" },
    af: { job: "'n sportster", work: "oefen elke dag hard", place: "die sportveld", manner: "dapper en regverdig", action: "het 'n spanmaat gehelp om nog een keer te oefen", skill: "spanwerk", tool: "'n sportbal" } },
  { kind: "animal", mood: "karoo", keys: [], id: "generic-animal",
    en: { job: "a wild animal", work: "finds food and stays alert", place: "the wild", manner: "careful and clever", action: "found a safe path and a little food", skill: "staying safe in nature", tool: "strong senses" },
    af: { job: "'n wilde dier", work: "kry kos en bly wakker", place: "die natuur", manner: "versigtig en slim", action: "het 'n veilige paadjie en 'n bietjie kos gekry", skill: "om in die natuur veilig te bly", tool: "sterk sintuie" } },
  { kind: "anything", mood: "sparkle", keys: [], id: "generic-anything",
    en: { job: "a favourite thing", work: "makes the day feel special", place: "home", manner: "fun and important", action: "was shared with a friend for a little while", skill: "making people happy", tool: "careful hands" },
    af: { job: "'n gunstelingding", work: "maak die dag spesiaal", place: "tuis", manner: "lekker en belangrik", action: "is 'n rukkie met 'n vriend gedeel", skill: "om mense gelukkig te maak", tool: "versigtige hande" } }
];

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
    storyTemplates: {
      celeb: [
        {
          title: "{name} at Work",
          mood: "star",
          text: "{name} is {job}. At {place}, {name} {work}. A young fan felt shy, so {name} {action}. Everyone could see that {name} is {manner}, and that {skill} takes practice.",
          question: "What does {name} do?",
          answers: ["{name} {work}.", "{name} hides in a cave.", "{name} drives a school bus."],
          correctAnswer: "{name} {work}."
        },
        {
          title: "{name} Shares a Skill",
          mood: "school",
          text: "{name} visited a school with {tool}. The teacher said, '{name} is {job}.' Then {name} {action} and showed the class {skill}. The children tried it too, because {name} is {manner}.",
          question: "What did {name} show the class?",
          answers: ["{skill}.", "How to bake a cake.", "How to fly a plane."],
          correctAnswer: "{skill}."
        },
        {
          title: "How {name} Does It",
          mood: "star",
          text: "People know {name} because {name} {work} at {place}. When the work got hard, {name} stayed {manner} and {action}. That is the real way {name} became good at {skill}.",
          question: "How did {name} keep going?",
          answers: ["{name} stayed {manner}.", "{name} gave up at once.", "{name} went home to sleep."],
          correctAnswer: "{name} stayed {manner}."
        }
      ],
      sports: [
        {
          title: "{name} on the Field",
          mood: "soccer",
          text: "{name} is {job} who {work} at {place}. The ground was tricky after rain, but {name} stayed {manner}. Then {name} {action}. A coach said, 'That is real {skill}.'",
          question: "Where does {name} work?",
          answers: ["At {place}.", "In a bakery.", "On the moon."],
          correctAnswer: "At {place}."
        },
        {
          title: "{name} Helps a Teammate",
          mood: "soccer",
          text: "At training, {name} brought {tool}. {name} {work} every day, but still noticed a shy player. {name} {action}. The team learned that {name} is {manner}, and that {skill} matters more than showing off.",
          question: "What did the team learn?",
          answers: ["That {skill} matters.", "That training was cancelled.", "That {name} hid the ball."],
          correctAnswer: "That {skill} matters."
        },
        {
          title: "{name} Starts Early",
          mood: "soccer",
          text: "{name} woke up early to go to {place}. {name} is {job}, so {name} {work} before school. After stretching, {name} {action}. '{name} is {manner},' whispered a friend. 'That is how you get better at {skill}.'",
          question: "When did {name} practise?",
          answers: ["Before school.", "In the middle of the night.", "After bedtime."],
          correctAnswer: "Before school."
        }
      ],
      animal: [
        {
          title: "{name} in Real Life",
          mood: "karoo",
          text: "{name} is {job} and lives in {place}. In real life, {name} {work}. One morning {name} {action}. A ranger smiled and said, '{name} is {manner}. That is {skill}.'",
          question: "What does {name} do in real life?",
          answers: ["{name} {work}.", "{name} drives a taxi.", "{name} bakes bread."],
          correctAnswer: "{name} {work}."
        },
        {
          title: "Watching {name}",
          mood: "science",
          text: "Naledi watched {name} at {place}. {name} used {tool} and {action}. 'See?' said her teacher. '{name} is {job}. Being {manner} helps with {skill}.' Naledi wrote it in her book.",
          question: "What did the teacher say {name} is?",
          answers: ["{job}.", "A robot.", "A school bus."],
          correctAnswer: "{job}."
        },
        {
          title: "{name} Stays Safe",
          mood: "karoo",
          text: "At {place}, {name} needed to stay safe. Because {name} {work}, {name} {action}. That showed {skill}. '{name} is {manner},' said the ranger. 'That is how {job} lives in the wild.'",
          question: "How did {name} stay safe?",
          answers: ["{name} {action}.", "{name} called a taxi.", "{name} put on a hat."],
          correctAnswer: "{name} {action}."
        }
      ],
      anything: [
        {
          title: "The Day of {name}",
          mood: "school",
          text: "{name} is {job}. At {place}, {name} {work}. Then {name} {action}. Thabo told the class that {name} is {manner}, and that {skill} is why he likes it.",
          question: "What is {name}?",
          answers: ["{job}.", "A rushing river.", "A wet soccer field."],
          correctAnswer: "{job}."
        },
        {
          title: "Sharing {name}",
          mood: "school",
          text: "Lerato loved {name} because {name} {work}. At break she used {tool} and {action}. A friend smiled. Sharing showed that {name} is {manner}, and that {skill} feels even better together.",
          question: "What did Lerato do?",
          answers: ["{name} {action}.", "She hid {name} forever.", "She threw {name} away."],
          correctAnswer: "{name} {action}."
        },
        {
          title: "{name} at {place}",
          mood: "sparkle",
          text: "Nobody could finish the job at {place} until they remembered {name}. {name} is {job}, so {name} {work}. After {name} {action}, the day was saved. 'See?' said Zinhle. '{name} is {manner}, and that helps with {skill}.'",
          question: "Where did the story happen?",
          answers: ["At {place}.", "On the moon.", "Inside a volcano."],
          correctAnswer: "At {place}."
        }
      ]
    },
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
      createStory: "Create Story",
      createStoryPrompt: "Pick a type, then type your favourite.",
      storyTypeAria: "Story type",
      storyTypeAnything: "Anything",
      storyTypeCeleb: "Celebrity",
      storyTypeSports: "Sports star",
      storyTypeAnimal: "Animal",
      storyTopicLabel: "What do you like?",
      storyTopicPlaceholder: "Siya Kolisi, a meerkat, pizza...",
      makeStory: "Make my story",
      storyNeedTopic: "Type something you like first.",
      yourStory: "Your Story",
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
    storyTemplates: {
      celeb: [
        {
          title: "{name} by die Werk",
          mood: "star",
          text: "{name} is {job}. {name} {work} by {place}. 'n Jong aanhanger was skaam, so {name} {action}. Almal kon sien {name} is {manner}, en dat {skill} oefening vra.",
          question: "Wat doen {name}?",
          answers: ["{name} {work}.", "{name} kruip in 'n grot.", "{name} bestuur 'n skoolbus."],
          correctAnswer: "{name} {work}."
        },
        {
          title: "{name} Deel 'n Vaardigheid",
          mood: "school",
          text: "{name} het 'n skool besoek met {tool}. Die onderwyser het gesê: '{name} is {job}.' Toe {name} {action} en die klas {skill} gewys. Die kinders het dit ook probeer, want {name} is {manner}.",
          question: "Wat het {name} die klas gewys?",
          answers: ["{skill}.", "Hoe om 'n koek te bak.", "Hoe om 'n vliegtuig te vlieg."],
          correctAnswer: "{skill}."
        },
        {
          title: "Hoe {name} Dit Doen",
          mood: "star",
          text: "Mense ken {name} omdat {name} {work} by {place}. Toe die werk moeilik raak, het {name} {manner} gebly en {action}. Só het {name} goed geraak met {skill}.",
          question: "Hoe het {name} aangehou?",
          answers: ["{name} het {manner} gebly.", "{name} het dadelik opgegee.", "{name} het gaan slaap."],
          correctAnswer: "{name} het {manner} gebly."
        }
      ],
      sports: [
        {
          title: "{name} op die Veld",
          mood: "soccer",
          text: "{name} is {job} wat {work} by {place}. Die grond was lastig ná reën, maar {name} het {manner} gebly. Toe {name} {action}. 'n Afrigter het gesê: 'Dít is egte {skill}.'",
          question: "Waar werk {name}?",
          answers: ["By {place}.", "In 'n bakkery.", "Op die maan."],
          correctAnswer: "By {place}."
        },
        {
          title: "{name} Help 'n Spanmaat",
          mood: "soccer",
          text: "By oefening het {name} {tool} saamgebring. {name} {work} elke dag, maar het nogtans 'n skaam speler raakgesien. {name} {action}. Die span het geleer {name} is {manner}, en dat {skill} meer tel as om af te gee.",
          question: "Wat het die span geleer?",
          answers: ["Dat {skill} saak maak.", "Dat oefening afgestel is.", "Dat {name} die bal weggesteek het."],
          correctAnswer: "Dat {skill} saak maak."
        },
        {
          title: "{name} Begin Vroeg",
          mood: "soccer",
          text: "{name} het vroeg opgestaan om na {place} te gaan. {name} is {job}, so {name} {work} voor skool. Ná strek {name} {action}. '{name} is {manner},' het 'n vriend gefluister. 'Só word jy beter met {skill}.'",
          question: "Wanneer het {name} geoefen?",
          answers: ["Voor skool.", "In die middel van die nag.", "Ná slaaptyd."],
          correctAnswer: "Voor skool."
        }
      ],
      animal: [
        {
          title: "{name} in die Regte Lewe",
          mood: "karoo",
          text: "{name} is {job} en bly in {place}. In die regte lewe {name} {work}. Een oggend {name} {action}. 'n Wildbewaarder het geglimlag en gesê: '{name} is {manner}. Dít is {skill}.'",
          question: "Wat doen {name} in die regte lewe?",
          answers: ["{name} {work}.", "{name} bestuur 'n taxi.", "{name} bak brood."],
          correctAnswer: "{name} {work}."
        },
        {
          title: "{name} Dopgehou",
          mood: "science",
          text: "Naledi het {name} by {place} dopgehou. {name} het {tool} gebruik en {action}. 'Sien jy?' het haar onderwyser gesê. '{name} is {job}. Om {manner} te wees help met {skill}.' Naledi het dit in haar boek geskryf.",
          question: "Wat het die onderwyser gesê is {name}?",
          answers: ["{job}.", "'n Robot.", "'n Skoolbus."],
          correctAnswer: "{job}."
        },
        {
          title: "{name} Bly Veilig",
          mood: "karoo",
          text: "By {place} moes {name} veilig bly. Omdat {name} {work}, {name} {action}. Dit het {skill} gewys. '{name} is {manner},' het die wildbewaarder gesê. 'Só leef {job} in die natuur.'",
          question: "Hoe het {name} veilig gebly?",
          answers: ["{name} {action}.", "{name} het 'n taxi geroep.", "{name} het 'n hoed opgesit."],
          correctAnswer: "{name} {action}."
        }
      ],
      anything: [
        {
          title: "Die Dag van {name}",
          mood: "school",
          text: "{name} is {job}. {name} {work} by {place}. Toe {name} {action}. Thabo het die klas vertel {name} is {manner}, en dat {skill} is hoekom hy daarvan hou.",
          question: "Wat is {name}?",
          answers: ["{job}.", "'n Wilde rivier.", "'n Nat sokkerveld."],
          correctAnswer: "{job}."
        },
        {
          title: "{name} Deel",
          mood: "school",
          text: "Lerato was mal oor {name} omdat {name} {work}. In pouse het sy {tool} gebruik en {name} {action}. 'n Vriendin het geglimlag. Deel het gewys {name} is {manner}, en dat {skill} saam nóg lekkerder is.",
          question: "Wat het met {name} gebeur?",
          answers: ["{name} {action}.", "Iemand het {name} vir altyd weggesteek.", "Iemand het {name} weggegooi."],
          correctAnswer: "{name} {action}."
        },
        {
          title: "{name} by {place}",
          mood: "sparkle",
          text: "Niemand kon die werk by {place} klaarmaak tot hulle aan {name} dink nie. {name} is {job}, so {name} {work}. Nadat {name} {action}, was die dag gered. 'Sien jy?' het Zinhle gesê. '{name} is {manner}, en dit help met {skill}.'",
          question: "Waar speel die storie af?",
          answers: ["By {place}.", "Op die maan.", "In 'n vulkaan."],
          correctAnswer: "By {place}."
        }
      ]
    },
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
      createStory: "Skep Storie",
      createStoryPrompt: "Kies 'n soort, tik dan jou gunsteling.",
      storyTypeAria: "Storie-soort",
      storyTypeAnything: "Enigiets",
      storyTypeCeleb: "Bekende",
      storyTypeSports: "Sportster",
      storyTypeAnimal: "Dier",
      storyTopicLabel: "Waarvan hou jy?",
      storyTopicPlaceholder: "Siya Kolisi, 'n meerkat, pizza...",
      makeStory: "Maak my storie",
      storyNeedTopic: "Tik eers iets waarvan jy hou.",
      yourStory: "Jou Storie",
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
let showingCustomStory = false;
let customStory = null;
let customStoryType = "anything";
let customStoryTopic = "";
let customStoryTemplateIndex = 0;

const storyLevel = document.querySelector("#storyLevel");
const storyTitle = document.querySelector("#storyTitle");
const storyText = document.querySelector("#storyText");
const questionText = document.querySelector("#questionText");
const answerOptions = document.querySelector("#answerOptions");
const readingFeedback = document.querySelector("#readingFeedback");
const newStoryButton = document.querySelector("#newStoryButton");
const createStoryButton = document.querySelector("#createStoryButton");
const createStoryForm = document.querySelector("#createStoryForm");
const storyTopicInput = document.querySelector("#storyTopicInput");
const createStoryError = document.querySelector("#createStoryError");
const storyTypeChips = document.querySelectorAll(".story-type-chip");
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

function currentStory() {
  if (showingCustomStory && customStory) {
    return customStory;
  }

  return stories()[currentStoryIndex];
}

function storyTemplatesFor(type) {
  const templates = content[currentLang].storyTemplates || {};
  return templates[type] || templates.anything || [];
}

function spellingWords() {
  return content[currentLang].spellingWords;
}

function fillTemplate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function sanitizeTopic(raw) {
  return String(raw || "")
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 40);
}

function loadCustomStoryPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem(customStoryKey) || "{}");
    const type = storyTypes.includes(saved.type) ? saved.type : "anything";
    const topic = sanitizeTopic(saved.topic);
    const templateIndex = Number.isInteger(saved.templateIndex) && saved.templateIndex >= 0
      ? saved.templateIndex
      : 0;

    return { type, topic, templateIndex };
  } catch {
    return { type: "anything", topic: "", templateIndex: 0 };
  }
}

function saveCustomStoryPrefs() {
  localStorage.setItem(customStoryKey, JSON.stringify({
    type: customStoryType,
    topic: customStoryTopic,
    templateIndex: customStoryTemplateIndex
  }));
}

function setStoryType(type) {
  customStoryType = storyTypes.includes(type) ? type : "anything";

  storyTypeChips.forEach((chip) => {
    const active = chip.dataset.storyType === customStoryType;
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-pressed", String(active));
  });
}

function setCreateStoryFormOpen(open) {
  if (!createStoryForm || !createStoryButton) {
    return;
  }

  createStoryForm.hidden = !open;
  createStoryForm.classList.toggle("is-open", open);
  createStoryButton.setAttribute("aria-expanded", String(open));

  if (!open) {
    return;
  }

  createStoryForm.scrollIntoView({ block: "nearest", behavior: "smooth" });

  if (storyTopicInput) {
    window.setTimeout(() => {
      storyTopicInput.focus({ preventScroll: true });
    }, 200);
  }
}

function fillStoryTemplate(template, values) {
  const fill = (text) => fillTemplate(text, values);

  return {
    title: fill(template.title),
    level: ui().yourStory,
    mood: values.mood || template.mood || "sparkle",
    text: fill(template.text),
    question: fill(template.question),
    answers: template.answers.map((answer) => fill(answer)),
    correctAnswer: fill(template.correctAnswer)
  };
}

function normalizeTopicKey(topic) {
  return String(topic || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function findMatchingFact(list, needle) {
  let best = null;
  let bestLen = 0;

  list.forEach((fact) => {
    (fact.keys || []).forEach((key) => {
      if (key && needle.includes(key) && key.length > bestLen) {
        best = fact;
        bestLen = key.length;
      }
    });
  });

  return best;
}

function resolveStoryFact(topic, type) {
  const needle = normalizeTopicKey(topic);
  const typedFacts = storyFacts.filter((fact) => fact.kind === type && (fact.keys || []).length);
  const namedFacts = storyFacts.filter((fact) => (fact.keys || []).length);
  const match = findMatchingFact(typedFacts, needle) || findMatchingFact(namedFacts, needle);

  if (match) {
    return match;
  }

  return storyFacts.find((fact) => fact.id === `generic-${type}`)
    || storyFacts.find((fact) => fact.id === "generic-anything");
}

function pickTemplateIndex(type, excludeIndex) {
  const list = storyTemplatesFor(type);

  if (list.length <= 1) {
    return 0;
  }

  let index = Math.floor(Math.random() * list.length);

  if (index === excludeIndex) {
    index = (index + 1) % list.length;
  }

  return index;
}

function displayTopic(topic) {
  const text = String(topic || "").trim();

  if (/[A-Z]/.test(text) && /[a-z]/.test(text)) {
    return text;
  }

  return text.replace(/\S+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

function buildCustomStory(topic, type, templateIndex) {
  const fact = resolveStoryFact(topic, type);

  if (!topic || !fact) {
    return null;
  }

  const kind = fact.kind || type;
  const list = storyTemplatesFor(kind);

  if (!list.length) {
    return null;
  }

  const index = ((templateIndex % list.length) + list.length) % list.length;
  const traits = fact[currentLang] || fact.en || {};

  return fillStoryTemplate(list[index], {
    name: displayTopic(topic),
    mood: fact.mood,
    ...traits
  });
}

function refreshCustomStory() {
  if (!showingCustomStory || !customStoryTopic) {
    customStory = null;
    return;
  }

  customStory = buildCustomStory(customStoryTopic, customStoryType, customStoryTemplateIndex);
}

function stopStorySpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  clearWordHighlights();
  speakToken += 1;
}

function restoreCustomStoryForm() {
  const saved = loadCustomStoryPrefs();
  customStoryType = saved.type;
  customStoryTopic = saved.topic;
  customStoryTemplateIndex = saved.templateIndex;
  setStoryType(customStoryType);

  if (storyTopicInput) {
    storyTopicInput.value = customStoryTopic;
  }
}

function makeCustomStory(event) {
  if (event) {
    event.preventDefault();
  }

  const topic = sanitizeTopic(storyTopicInput ? storyTopicInput.value : "");

  if (createStoryError) {
    createStoryError.textContent = "";
  }

  if (!topic) {
    if (createStoryError) {
      createStoryError.textContent = ui().storyNeedTopic;
    }

    if (storyTopicInput) {
      storyTopicInput.focus();
    }

    return;
  }

  customStoryTopic = topic;
  storyTopicInput.value = topic;
  const fact = resolveStoryFact(topic, customStoryType);
  const kind = fact && fact.kind ? fact.kind : customStoryType;
  customStoryTemplateIndex = pickTemplateIndex(
    kind,
    showingCustomStory ? customStoryTemplateIndex : -1
  );
  customStory = buildCustomStory(customStoryTopic, customStoryType, customStoryTemplateIndex);
  showingCustomStory = Boolean(customStory);
  saveCustomStoryPrefs();
  stopStorySpeech();
  setCreateStoryFormOpen(false);
  renderStory();
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
  refreshCustomStory();
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
  const story = currentStory();

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
  const colors = ["#007AFF", "#34C759", "#AF52DE", "#FF9500", "#FF3B30", "#5AC8FA"];

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
  showingCustomStory = false;
  customStory = null;
  setCreateStoryFormOpen(false);
  stopStorySpeech();
  currentStoryIndex = (currentStoryIndex + 1) % stories().length;
  renderStory();
});

if (createStoryButton && createStoryForm) {
  createStoryButton.addEventListener("click", () => {
    const shouldOpen = !createStoryForm.classList.contains("is-open");
    setCreateStoryFormOpen(shouldOpen);
  });
}

storyTypeChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    setStoryType(chip.dataset.storyType);
    saveCustomStoryPrefs();
  });
});

if (createStoryForm) {
  createStoryForm.addEventListener("submit", makeCustomStory);
}

if (storyTopicInput) {
  storyTopicInput.addEventListener("focus", () => {
    document.body.classList.add("keyboard-open");
    window.setTimeout(() => {
      storyTopicInput.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 250);
  });

  storyTopicInput.addEventListener("blur", () => {
    document.body.classList.remove("keyboard-open");
  });
}

readAloudButton.addEventListener("click", () => {
  speak(currentStory().text, { target: storyText });
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

restoreCustomStoryForm();
applyLanguage();
