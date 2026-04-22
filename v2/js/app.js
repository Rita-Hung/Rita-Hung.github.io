// Shared data sets
const vocabulary = [
  { word: '日本語', reading: 'にほんご', meaning: 'Japanese language', example: '日本語を勉強しています。' },
  { word: '桜', reading: 'さくら', meaning: 'Cherry blossom', example: '桜がきれいですね。' },
  { word: '食べる', reading: 'たべる', meaning: 'To eat', example: '朝ごはんを食べます。' },
  { word: '飲む', reading: 'のむ', meaning: 'To drink', example: 'お茶を飲みましょう。' },
  { word: '学校', reading: 'がっこう', meaning: 'School', example: '学校に行きます。' },
  { word: '友達', reading: 'ともだち', meaning: 'Friend', example: '友達と遊びます。' },
  { word: '本', reading: 'ほん', meaning: 'Book', example: '本を読むのが好きです。' },
  { word: '音楽', reading: 'おんがく', meaning: 'Music', example: '音楽を聴いています。' },
  { word: '山', reading: 'やま', meaning: 'Mountain', example: '富士山は美しいです。' },
  { word: '海', reading: 'うみ', meaning: 'Sea/Ocean', example: '海で泳ぎたいです。' },
];

const courses = [
  { 
    id: 1, 
    title: 'Japanese Tea Ceremony', 
    tag: 'Tradition', 
    desc: 'Explore the art and philosophy behind the traditional Japanese tea ceremony (茶道).', 
    icon: '🍵', 
    lessons: 5,
    story: [
      {
        text: "In the misty mountains of Kyoto, where ancient temples whisper secrets to the wind, there lived a master tea ceremony practitioner named Hiroshi. His small tea room, built in the traditional sukiya style, was a sanctuary of peace and mindfulness.",
        keywords: ["茶道 (chadō)", "茶室 (chashitsu)", "数寄屋造り (sukiyazukuri)"]
      },
      {
        text: "Every morning at dawn, Hiroshi would carefully arrange the tea utensils - the chawan (tea bowl), the chasen (bamboo whisk), and the chashaku (tea scoop). Each item was chosen not just for its function, but for its aesthetic harmony and the story it told.",
        keywords: ["茶碗 (chawan)", "茶筅 (chasen)", "茶杓 (chashaku)", "和 (wa)"]
      },
      {
        text: "The tea ceremony, or chado, is more than just drinking tea. It is a spiritual practice that embodies the principles of harmony (wa), respect (kei), purity (sei), and tranquility (jaku). Through the simple act of preparing and sharing matcha, participants connect with the present moment.",
        keywords: ["抹茶 (matcha)", "和敬清寂 (wakeiseijaku)", "敬 (kei)", "清 (sei)", "寂 (jaku)"]
      },
      {
        text: "During the ceremony, every movement is deliberate and graceful. The host carefully measures the bright green matcha powder, whisks it with hot water until it becomes a frothy elixir, and presents it to guests with deep reverence. The guests, in turn, receive the bowl with both hands, turning it slightly before drinking to show appreciation.",
        keywords: ["点前 (temae)", "一服 (ippuku)", "茶道 (sadō)"]
      },
      {
        text: "As you participate in chado, you learn that true beauty lies in simplicity, and that the most profound connections are made in silence. The tea room becomes a microcosm of the universe, where time slows down and the ordinary becomes extraordinary.",
        keywords: ["侘び寂び (wabi-sabi)", "静寂 (seijaku)", "一期一会 (ichigoichie)"]
      }
    ]
  },
  { 
    id: 2, 
    title: 'Samurai & Bushido', 
    tag: 'History', 
    desc: 'Learn about the warrior class of feudal Japan and their code of honor.', 
    icon: '⚔️', 
    lessons: 8,
    story: [
      {
        text: "In the turbulent era of feudal Japan, when warlords battled for supremacy and cherry blossoms fell like tears on bloodstained fields, the samurai emerged as the ultimate warriors. These were not mere soldiers, but knights bound by an unbreakable code of honor.",
        keywords: ["侍 (samurai)", "戦国時代 (sengoku jidai)", "桜 (sakura)"]
      },
      {
        text: "The samurai's life was one of constant readiness. Their katana swords, forged with mystical precision by master swordsmiths, were not just weapons but extensions of their souls. Each blade carried the spirit of its maker and the destiny of its wielder.",
        keywords: ["刀 (katana)", "刀匠 (katana kaji)", "魂 (tamashii)"]
      },
      {
        text: "Bushido, the Way of the Warrior, was more than a set of rules - it was a philosophy that governed every aspect of a samurai's life. Rectitude, courage, benevolence, respect, honesty, honor, and loyalty formed the seven virtues that defined true bushido.",
        keywords: ["武士道 (bushidō)", "義 (gi)", "勇 (yū)", "仁 (jin)", "礼 (rei)", "誠 (sei)", "忠 (chū)"]
      },
      {
        text: "The samurai lived by the principle of 'death before dishonor.' Seppuku, ritual suicide, was the ultimate act of atonement when honor was lost. Yet, beneath their stern exterior, many samurai were poets, artists, and scholars who found beauty in the fleeting nature of life.",
        keywords: ["切腹 (seppuku)", "名誉 (meiyo)", "俳人 (haijin)", "浮世 (ukiyo)"]
      },
      {
        text: "Though the samurai class was abolished in 1876, their spirit lives on in modern Japan. The discipline, loyalty, and respect for tradition that defined the samurai continue to influence Japanese culture, business practices, and martial arts around the world.",
        keywords: ["武士 (bushi)", "忠誠 (chūsei)", "伝統 (dentō)", "武道 (budō)"]
      },
      {
        text: "The samurai's armor, with its intricate lacquered plates and fierce mask-like menpo, was both protection and intimidation. Each piece told a story of battles won and comrades lost, a tangible reminder of the warrior's path.",
        keywords: ["鎧 (yoroi)", "面頬 (menpō)", "兜 (kabuto)", "具足 (gusoku)"]
      },
      {
        text: "In the quiet moments between battles, samurai would practice calligraphy, compose haiku poetry, or arrange flowers in the art of ikebana. They understood that true strength came not just from physical prowess, but from cultivating the spirit and appreciating life's transient beauty.",
        keywords: ["書道 (shodō)", "俳句 (haiku)", "生け花 (ikebana)", "無常 (mujō)"]
      }
    ]
  },
  { 
    id: 3, 
    title: 'Japanese Festivals', 
    tag: 'Culture', 
    desc: 'Discover the colorful festivals (matsuri) celebrated throughout Japan.', 
    icon: '🎆', 
    lessons: 6,
    story: [
      {
        text: "Japan's festivals, or matsuri, are explosions of color, sound, and community spirit that transform ordinary streets into magical wonderlands. From the neon glow of summer fireworks to the solemn beauty of winter illuminations, each festival tells a story of tradition and renewal.",
        keywords: ["祭り (matsuri)", "花火 (hanabi)", "伝統 (dentō)"]
      },
      {
        text: "The Kanamara Matsukuri Festival, also known as the Festival of the Steel Phallus, originated in Kawasaki as a fertility celebration. Local craftsmen would create phallic-shaped mikoshi (portable shrines) and parade them through the streets, blessing participants with good fortune and protection from misfortune.",
        keywords: ["金玉祭り (kanamara matsuri)", "神輿 (mikoshi)", "幸運 (kōun)"]
      },
      {
        text: "During the summer months, Japan comes alive with hanabi taikai - spectacular fireworks displays that light up the night sky. Families spread picnic blankets along riverbanks, sharing food and laughter as the pyrotechnic masterpieces unfold above, each burst telling a story of celebration and community.",
        keywords: ["花火大会 (hanabi taikai)", "花火師 (hanabishi)", "コミュニティ (komyuniti)"]
      },
      {
        text: "The Yuki Matsuri in Sapporo transforms the winter city into a wonderland of ice sculptures. Massive blocks of ice, carved by artists from around the world, depict everything from dragons to Disney characters, glowing ethereally under colored lights as snowflakes dance in the cold night air.",
        keywords: ["雪まつり (yuki matsuri)", "雪像 (yūsō)", "雪 (yuki)"]
      },
      {
        text: "In Kyoto, the Gion Matsuri is a month-long celebration honoring the gods and warding off plagues. Massive yamaboko floats, some weighing over 12 tons, are paraded through the streets by teams of men who have trained for months. The festival reaches its climax with the Yoiyama evening illuminations, when the floats are lit by thousands of lanterns.",
        keywords: ["祇園祭 (gion matsuri)", "山鉾 (yamaboko)", "宵山 (yoiyama)"]
      },
      {
        text: "The Hadaka Matsuri, or Naked Festivals, test participants' endurance and faith as they brave freezing temperatures in nothing but fundoshi loincloths. These festivals, held at temples across Japan, symbolize purification and the casting away of worldly desires for spiritual renewal.",
        keywords: ["裸祭り (hadaka matsuri)", "褌 (fundoshi)", "浄化 (jōka)"]
      }
    ]
  },
  { 
    id: 4, 
    title: 'Zen & Buddhism', 
    tag: 'Philosophy', 
    desc: 'Understanding the influence of Zen Buddhism on Japanese culture.', 
    icon: '🧘', 
    lessons: 7,
    story: [
      {
        text: "In the misty mountains of Kyoto, where ancient temples perch on hillsides like wise old sages, Zen Buddhism found its perfect home in Japan. Brought from China in the 12th century, Zen transformed Japanese culture with its emphasis on meditation, mindfulness, and the beauty of impermanence.",
        keywords: ["禅 (zen)", "仏教 (bukkyō)", "瞑想 (meisō)", "無常 (mujō)"]
      },
      {
        text: "The story of Zen's arrival in Japan is legendary. The monk Eisai, after years of study in China, returned with tea seeds and the teachings of Rinzai Zen. He established the first Zen temple in Japan, introducing not just a religion, but a way of life that would influence art, architecture, and philosophy for centuries.",
        keywords: ["臨済宗 (rinzai shū)", "茶 (cha)", "寺院 (jiin)", "明菴栄西 (myōan eisai)"]
      },
      {
        text: "Zen gardens, with their carefully raked gravel and precisely placed stones, are not mere decorations but meditation aids. The famous rock garden at Ryoan-ji, with its 15 stones arranged on white gravel, invites contemplation of the relationship between emptiness and form, chaos and order.",
        keywords: ["枯山水 (karesansui)", "龍安寺 (ryōan-ji)", "石 (ishi)", "空 (kū)"]
      },
      {
        text: "The tea ceremony, chanoyu, evolved from Zen monastic practices. The simple act of preparing and serving tea became a spiritual discipline, teaching participants to find enlightenment in everyday activities. Every movement, from whisking the matcha to receiving the bowl, is performed with mindful awareness.",
        keywords: ["茶の湯 (chanoyu)", "悟り (satori)", "一期一会 (ichigoichie)", "気づき (kidzuki)"]
      },
      {
        text: "Zen has profoundly influenced Japanese arts. The spontaneity of sumi-e ink painting, the disciplined precision of calligraphy, and the minimalist aesthetics of traditional architecture all reflect Zen principles. Even modern practices like judo and karate carry the philosophical weight of Zen mindfulness.",
        keywords: ["墨絵 (sumi-e)", "書道 (shodō)", "柔道 (jūdō)", "空手 (karate)"]
      },
      {
        text: "The Zen concept of 'mu' - the void or nothingness - challenges our conventional understanding of reality. In Zen koans, paradoxical riddles like 'What is the sound of one hand clapping?' are used to break through logical thinking and achieve enlightenment.",
        keywords: ["無 (mu)", "公案 (kōan)", "禅問答 (zen mondō)", "悟り (satori)"]
      },
      {
        text: "Today, Zen continues to evolve, finding expression in modern contexts. Corporate mindfulness programs, stress-reduction techniques, and even digital meditation apps all draw from the ancient wisdom of Zen, proving that its teachings remain relevant in our fast-paced world.",
        keywords: ["マインドフルネス (maindo furunesu)", "ストレス (sutoresu)", "瞑想 (meisō)", "智慧 (chie)"]
      }
    ]
  },
  { 
    id: 5, 
    title: 'Japanese Cuisine', 
    tag: 'Food', 
    desc: 'From sushi to ramen: explore the world of Japanese culinary arts.', 
    icon: '🍱', 
    lessons: 10,
    story: [
      {
        text: "Japanese cuisine is a symphony of flavors, textures, and philosophies that reflects the country's deep connection to nature and seasons. From the delicate artistry of sushi to the comforting warmth of ramen, each dish tells a story of tradition, innovation, and respect for ingredients.",
        keywords: ["日本料理 (nihon ryōri)", "季節 (kisetsu)", "自然 (shizen)"]
      },
      {
        text: "The origins of sushi are humble yet profound. In ancient times, fish was preserved by fermenting it with rice and salt - a practical solution that evolved into one of the world's most refined cuisines. The vinegar-seasoned rice we know today was developed in the 19th century by Yohei Hanaya, who wanted to serve fresh fish without the wait for fermentation.",
        keywords: ["寿司 (sushi)", "発酵 (hakkō)", "酢 (su)", "鮮魚 (sensakana)"]
      },
      {
        text: "Ramen, that beloved noodle soup, has a fascinating immigrant story. Brought to Japan by Chinese immigrants in the late 19th century, it evolved from simple wheat noodles in broth to a culinary art form with regional variations. Tonkotsu from Kyushu, miso from Hokkaido, and shoyu from Tokyo each tell their own tale of adaptation and innovation.",
        keywords: ["ラーメン (rāmen)", "豚骨 (tonkotsu)", "味噌 (misō)", "醤油 (shōyu)"]
      },
      {
        text: "The art of kaiseki dining represents the pinnacle of Japanese culinary philosophy. This multi-course meal, served in ryokan inns, celebrates the seasons through meticulously prepared small dishes. Each course is designed not just for taste, but for visual beauty and balance, embodying the principle of 'wa' or harmony.",
        keywords: ["懐石 (kaiseki)", "旅館 (ryokan)", "季節感 (kisetsukan)", "栄養 (eiyō)"]
      },
      {
        text: "Tempura, with its crispy golden batter, arrived with Portuguese traders in the 16th century. The Japanese adapted this frying technique, using lighter batters and seasonal vegetables and seafood. The result is a dish that celebrates the natural flavors of fresh ingredients while adding a satisfying crunch.",
        keywords: ["天ぷら (tempura)", "天ぷら粉 (tempura ko)", "野菜 (yasai)", "海鮮 (kaisen)"]
      },
      {
        text: "Bento boxes, those colorful compartmentalized lunches, reflect Japanese efficiency and aesthetics. Originally designed for theater-goers in the 19th century, bentos evolved into works of art that mothers and chefs create with love. Each compartment tells a nutritional story, balancing colors, textures, and nutrients.",
        keywords: ["弁当 (bentō)", "栄養バランス (eiyō baransu)", "色彩 (shikisai)", "愛情 (aijō)"]
      },
      {
        text: "The concept of 'umami,' that fifth taste beyond sweet, sour, salty, and bitter, was discovered by Japanese scientist Kikunae Ikeda in 1908. This savory taste, found in ingredients like seaweed, mushrooms, and fermented foods, explains why Japanese cuisine feels so satisfying and complex.",
        keywords: ["旨味 (umami)", "昆布 (kombu)", "椎茸 (shiitake)", "醸造 (jōzō)"]
      },
      {
        text: "Washoku, traditional Japanese cuisine, was recognized by UNESCO as an Intangible Cultural Heritage in 2013. This recognition celebrates not just the food itself, but the sustainable practices, seasonal awareness, and communal values that Japanese cuisine embodies.",
        keywords: ["和食 (washoku)", "持続可能 (jizoku kanō)", "無形文化遺産 (mukei bunka isan)"]
      },
      {
        text: "Modern Japanese cuisine continues to innovate while honoring tradition. From the avant-garde presentations of molecular gastronomy to the fusion creations of chefs like Nobu Matsuhisa, Japanese culinary arts continue to evolve and influence global cuisine.",
        keywords: ["分子料理 (bunshi ryōri)", "フュージョン (fyūjon)", "革新 (kakushin)", "伝統 (dentō)"]
      },
      {
        text: "The tea that accompanies Japanese meals is more than refreshment - it's a ritual. Green tea, sencha, gyokuro, and matcha each have their place, chosen not just for taste but for the way they complement the meal and aid digestion. The simple act of brewing and serving tea connects eaters to centuries of tradition.",
        keywords: ["緑茶 (ryokucha)", "煎茶 (sencha)", "玉露 (gyokuro)", "抹茶 (matcha)"]
      }
    ]
  },
];

const quizData = {
  vocabulary: [
    { question: 'What does this word mean?', jp: '桜', options: ['Cherry blossom', 'Mountain', 'River', 'Tree'], correct: 0 },
    { question: 'What does this word mean?', jp: '友達', options: ['Family', 'Teacher', 'Friend', 'Student'], correct: 2 },
    { question: 'What does this word mean?', jp: '食べる', options: ['To sleep', 'To eat', 'To drink', 'To walk'], correct: 1 },
    { question: 'What does this word mean?', jp: '本', options: ['Pen', 'Paper', 'Book', 'Desk'], correct: 2 },
    { question: 'What does this word mean?', jp: '海', options: ['Mountain', 'River', 'Lake', 'Sea'], correct: 3 },
  ],
  hiragana: [
    { question: 'How do you read this?', jp: 'あ', options: ['ka', 'a', 'i', 'u'], correct: 1 },
    { question: 'How do you read this?', jp: 'さ', options: ['ta', 'na', 'sa', 'ha'], correct: 2 },
    { question: 'How do you read this?', jp: 'に', options: ['ni', 'nu', 'ne', 'no'], correct: 0 },
    { question: 'How do you read this?', jp: 'ほ', options: ['ha', 'hi', 'fu', 'ho'], correct: 3 },
    { question: 'How do you read this?', jp: 'め', options: ['ma', 'mi', 'mu', 'me'], correct: 3 },
  ],
  culture: [
    { question: 'What is the traditional Japanese tea ceremony called?', jp: '🍵', options: ['Ikebana', 'Sadō', 'Origami', 'Kabuki'], correct: 1 },
    { question: 'What is the Japanese art of flower arrangement?', jp: '🌸', options: ['Bonsai', 'Ikebana', 'Shodo', 'Kendo'], correct: 1 },
    { question: 'What is the code of the samurai called?', jp: '⚔️', options: ['Judo', 'Karate', 'Bushido', 'Aikido'], correct: 2 },
    { question: 'What is the Japanese New Year celebration called?', jp: '🎍', options: ['Hanami', 'Shōgatsu', 'Obon', 'Tanabata'], correct: 1 },
    { question: 'What mountain is the symbol of Japan?', jp: '🗻', options: ['Mt. Aso', 'Mt. Fuji', 'Mt. Hakone', 'Mt. Takao'], correct: 1 },
  ]
};

const forumPosts = [
  { author: 'Sakura_Fan', avatar: 'S', time: '2 hours ago', content: 'Just finished my first week of learning hiragana! Any tips for memorizing faster? 頑張ります！', likes: 24, comments: 8 },
  { author: 'TokyoDreamer', avatar: 'T', time: '5 hours ago', content: 'Visited Kyoto last month and the temples were absolutely breathtaking. Can\'t wait to go back! 🏯', likes: 56, comments: 12 },
  { author: 'NihongoLearner', avatar: 'N', time: '1 day ago', content: 'Does anyone have recommendations for Japanese podcasts for beginners? Looking for listening practice.', likes: 31, comments: 15 },
];

const dictionary = [
  { word: '愛', reading: 'あい (ai)', meaning: 'Love', example: '愛している - I love you' },
  { word: '美しい', reading: 'うつくしい (utsukushii)', meaning: 'Beautiful', example: '美しい景色 - Beautiful scenery' },
  { word: '勉強', reading: 'べんきょう (benkyou)', meaning: 'Study', example: '日本語を勉強する - To study Japanese' },
  { word: '元気', reading: 'げんき (genki)', meaning: 'Healthy, energetic', example: 'お元気ですか？ - How are you?' },
  { word: '嬉しい', reading: 'うれしい (ureshii)', meaning: 'Happy, glad', example: 'とても嬉しいです - I am very happy' },
];

const MISTRAL_API_KEY = 'SPWcjz0haCkDtFo5RgEeDaJF78hDxWmC';
const MISTRAL_MODEL = 'mistral-large-latest';

// App State
let currentUser = null;
let currentCardIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let quizState = { current: 0, score: 0, type: null, questions: [] };
let progressChartInstance = null;

function getEl(id) {
  return document.getElementById(id);
}

function safeRun(fn) {
  try {
    fn();
  } catch (e) {
    // ignore missing elements
  }
}

function setUserName(name) {
  const userEl = getEl('userName');
  if (userEl) userEl.textContent = name;
}

function storageUser() {
  if (!currentUser) return;
  localStorage.setItem('sakuraUser', currentUser);
}

function loadUser() {
  const saved = localStorage.getItem('sakuraUser');
  if (saved) {
    currentUser = saved;
    setUserName(currentUser);
  }
}

// Dark mode
function applySystemDarkMode() {
  if (!window.matchMedia) return;
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // Only toggle if not already set by inline script
  if (isDark && !document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark');
  } else if (!isDark && document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
  }
}

function initDarkModeListener() {
  if (!window.matchMedia) return;
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    document.documentElement.classList.toggle('dark', event.matches);
    updateDarkModeToggle();
  });
}

function updateDarkModeToggle() {
  const toggle = getEl('darkModeToggle');
  if (!toggle) return;
  toggle.classList.toggle('active', document.documentElement.classList.contains('dark'));
}

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  updateDarkModeToggle();
}

// Petals
function createPetals() {
  const container = getEl('petals');
  if (!container) return;
  for (let i = 0; i < 15; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (Math.random() * 10 + 10) + 's';
    petal.style.animationDelay = (Math.random() * 10) + 's';
    petal.style.width = (Math.random() * 8 + 8) + 'px';
    petal.style.height = petal.style.width;
    container.appendChild(petal);
  }
}

// Flashcards
function updateCard() {
  const card = vocabulary[currentCardIndex];
  safeRun(() => { getEl('cardWord').textContent = card.word; });
  safeRun(() => { getEl('cardReading').textContent = card.reading; });
  safeRun(() => { getEl('cardMeaning').textContent = card.meaning; });
  safeRun(() => { getEl('cardExample').textContent = card.example; });
  safeRun(() => { getEl('flashcard').classList.remove('flipped'); });

  const progress = ((currentCardIndex + 1) / vocabulary.length) * 100;
  safeRun(() => { getEl('vocabProgress').style.width = progress + '%'; });
}

function flipCard() {
  safeRun(() => { getEl('flashcard').classList.toggle('flipped'); });
}

function markCard(isCorrect) {
  if (isCorrect) {
    correctCount++;
    safeRun(() => { getEl('correctCount').textContent = correctCount; });
  } else {
    wrongCount++;
    safeRun(() => { getEl('wrongCount').textContent = wrongCount; });
  }
  nextCard();
}

function nextCard() {
  currentCardIndex = (currentCardIndex + 1) % vocabulary.length;
  updateCard();
}

function speakJapanese() {
  const card = vocabulary[currentCardIndex];
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(card.word);
    utterance.lang = 'ja-JP'; // Set language to Japanese
    utterance.rate = 0.8; // Slightly slower for clarity
    speechSynthesis.speak(utterance);
  } else {
    alert('Speech synthesis is not supported in your browser.');
  }
}

// Courses
function renderCourses() {
  const container = getEl('coursesList');
  if (!container) return;
  container.innerHTML = courses.map(course => `
    <div class="course-card" onclick="openCourse(${course.id})">
      <div class="course-image">${course.icon}</div>
      <div class="course-content">
        <span class="course-tag">${course.tag}</span>
        <h3 class="course-title">${course.title}</h3>
        <p class="course-desc">${course.desc}</p>
        <div class="course-meta">
          <span><i class="fas fa-book-open"></i> ${course.lessons} lessons</span>
          <span><i class="fas fa-clock"></i> ~${course.lessons * 10} min</span>
        </div>
      </div>
    </div>
  `).join('');
}

function openCourse(id) {
  window.location.href = `course.html?id=${id}`;
}

function getLessonTitle(courseTitle, lessonNum) {
  const titles = {
    'Japanese Tea Ceremony': ['Introduction to Chado', 'History & Origins', 'Tea Utensils', 'The Ceremony Steps', 'Philosophy of Tea'],
    'Samurai & Bushido': ['Who Were the Samurai?', 'Feudal Japan', 'The Bushido Code', 'Famous Samurai', 'Weapons & Armor', 'Decline of Samurai', 'Legacy Today', 'Samurai in Media'],
    'Japanese Festivals': ['Introduction to Matsuri', 'Spring Festivals', 'Summer Festivals', 'Autumn Festivals', 'Winter Festivals', 'Regional Festivals'],
    'Zen & Buddhism': ['Buddhism in Japan', 'Zen Philosophy', 'Zen Temples', 'Meditation Practices', 'Zen Gardens', 'Zen Arts', 'Modern Zen'],
    'Japanese Cuisine': ['Introduction', 'Sushi', 'Ramen', 'Tempura', 'Japanese Breakfast', 'Bento Culture', 'Tea & Sweets', 'Regional Cuisine', 'Seasonal Foods', 'Dining Etiquette'],
  };
  return titles[courseTitle]?.[lessonNum - 1] || `Part ${lessonNum}`;
}

function renderCourseDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));
  if (!id) return;

  const course = courses.find(c => c.id === id);
  if (!course) return;

  window.currentCourse = course;

  const detail = getEl('courseDetail');
  if (!detail) return;

  // Create story paragraphs HTML with keywords
  const storyHTML = course.story.map((paragraph, index) => 
    `<div class="story-paragraph" onclick="openStoryModal(${index})" style="cursor: pointer;">
      <p style="line-height: 1.7; margin-bottom: 15px; color: var(--text-primary);">${paragraph.text}</p>
      <div class="keywords-section">
        <div class="keywords-list">
          ${paragraph.keywords.map(keyword => `<span class="keyword-tag" onclick="event.stopPropagation(); openVocabModal('${keyword.replace(/'/g, "\\'")}')">${keyword}</span>`).join('')}
        </div>
      </div>
    </div>`
  ).join('');

  detail.innerHTML = `
    <button class="back-btn" onclick="window.history.back()"><i class="fas fa-arrow-left"></i> Back to Courses</button>
    <div class="course-detail-content">
      <div class="course-header">
        <div class="course-icon-large">${course.icon}</div>
        <h1>${course.title}</h1>
        <span class="course-tag">${course.tag}</span>
      </div>
      
      <div class="course-description">
        <p style="color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">${course.desc}</p>
      </div>
      
      <div class="course-story">
        <h2 style="color: var(--sakura-dark); margin-bottom: 20px; font-family: 'Playfair Display', serif;">The Story</h2>
        <div class="story-content">
          ${storyHTML}
        </div>
      </div>
      
      <div class="course-progress" style="margin-top: 40px; padding: 20px; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border);">
        <h3 style="margin-bottom: 15px; color: var(--text-primary);">Course Progress</h3>
        <div class="progress-bar" style="margin-bottom: 10px;">
          <div class="progress-fill" style="width: ${(2 / course.lessons) * 100}%"></div>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">2 of ${course.lessons} lessons completed</p>
        <button class="btn btn-primary" style="margin-top: 15px;" onclick="window.location.href='courses.html'">
          <i class="fas fa-book-open"></i> Continue Learning
        </button>
      </div>
    </div>
  `;
}

// Quiz
function resetQuizSelection() {
  const container = getEl('quizContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="quiz-header">
      <h2>Choose Your Quiz</h2>
      <p style="color: var(--text-secondary);">Test your Japanese knowledge</p>
    </div>
    <div class="quiz-select">
      <div class="quiz-type-card" onclick="startQuiz('vocabulary')">
        <i class="fas fa-spell-check"></i>
        <h3>Vocabulary Quiz</h3>
        <p>Match Japanese words with meanings</p>
      </div>
      <div class="quiz-type-card" onclick="startQuiz('hiragana')">
        <i class="fas fa-font"></i>
        <h3>Hiragana Quiz</h3>
        <p>Test your hiragana reading skills</p>
      </div>
      <div class="quiz-type-card" onclick="startQuiz('culture')">
        <i class="fas fa-landmark"></i>
        <h3>Culture Quiz</h3>
        <p>Japanese culture and traditions</p>
      </div>
    </div>
  `;
}

function startQuiz(type) {
  quizState = {
    current: 0,
    score: 0,
    type: type,
    questions: [...quizData[type]].sort(() => Math.random() - 0.5).slice(0, 5)
  };
  renderQuestion();
}

function renderQuestion() {
  const container = getEl('quizContainer');
  if (!container) return;
  const q = quizState.questions[quizState.current];
  if (!q) return;

  container.innerHTML = `
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${((quizState.current) / quizState.questions.length) * 100}%"></div>
    </div>
    <div class="quiz-question-card">
      <p class="question-number">Question ${quizState.current + 1} of ${quizState.questions.length}</p>
      <p class="question-text">${q.question}</p>
      <p class="question-jp">${q.jp}</p>
      <div class="options-list">
        ${q.options.map((opt, i) => `
          <button class="option-btn" onclick="selectAnswer(${i})">${opt}</button>
        `).join('')}
      </div>
    </div>
  `;
}

function selectAnswer(index) {
  const q = quizState.questions[quizState.current];
  if (!q) return;

  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add('correct');
    } else if (i === index && i !== q.correct) {
      btn.classList.add('incorrect');
    }
  });

  if (index === q.correct) {
    quizState.score++;
  }

  const container = getEl('quizContainer');
  if (!container) return;
  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = `feedback-box ${index === q.correct ? 'correct' : 'incorrect'}`;
  feedbackDiv.innerHTML = index === q.correct ?
    '<i class="fas fa-check-circle"></i> Correct!' :
    `<i class="fas fa-times-circle"></i> Incorrect. The answer was: ${q.options[q.correct]}`;
  container.querySelector('.quiz-question-card')?.appendChild(feedbackDiv);

  setTimeout(() => {
    quizState.current++;
    if (quizState.current < quizState.questions.length) {
      renderQuestion();
    } else {
      showQuizResult();
    }
  }, 1500);
}

function showQuizResult() {
  const percentage = Math.round((quizState.score / quizState.questions.length) * 100);
  const container = getEl('quizContainer');
  if (!container) return;

  let message = '';
  if (percentage === 100) message = 'Perfect! 素晴らしい！';
  else if (percentage >= 80) message = 'Great job! よくできました！';
  else if (percentage >= 60) message = 'Good effort! がんばりましょう！';
  else message = 'Keep practicing! 練習あるのみ！';

  container.innerHTML = `
    <div class="quiz-question-card quiz-result">
      <h2 style="margin-bottom: 20px;">Quiz Complete!</h2>
      <div class="result-score">${percentage}%</div>
      <p class="result-message">${message}</p>
      <p style="color: var(--text-secondary); margin-bottom: 30px;">You got ${quizState.score} out of ${quizState.questions.length} correct</p>
      <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
        <button class="btn btn-secondary" onclick="startQuiz('${quizState.type}')">
          <i class="fas fa-redo"></i> Try Again
        </button>
        <button class="btn btn-primary" onclick="resetQuizSelection()">
          <i class="fas fa-list"></i> Other Quizzes
        </button>
      </div>
    </div>
  `;
}

// Charts
function renderCharts() {
  const canvas = getEl('progressChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (progressChartInstance) {
    progressChartInstance.destroy();
  }
  progressChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
      datasets: [{
        label: 'Words Learned',
        data: [5, 12, 20, 35, 50, 70],
        backgroundColor: 'rgba(255, 182, 193, 0.3)',
        borderColor: 'rgba(255, 182, 193, 1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(255, 182, 193, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.parsed.y} words`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 10,
            color: '#aaa',
            font: { family: "'Noto Sans JP', sans-serif" }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          title: {
            display: true,
            text: 'Words',
            color: '#aaa'
          }
        },
        x: {
          ticks: {
            color: '#aaa',
            font: { family: "'Noto Sans JP', sans-serif" }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      }
    }
  });
}

// Translation
function updateCharCount() {
  const text = getEl('translateInput')?.value || '';
  safeRun(() => { getEl('charCount').textContent = text.length; });
}

async function translateText() {
  const inputEl = getEl('translateInput');
  if (!inputEl) return;
  const text = inputEl.value.trim();
  if (!text) {
    showAlert('Empty Input', 'Please enter some text to translate.');
    return;
  }

  const resultDiv = getEl('translationResult');
  if (!resultDiv) return;

  resultDiv.innerHTML = '<div class="translation-loading"><div class="loading-spinner"></div>Translating...</div>';

  try {
    const prompt = `You are a Japanese-English translator. Translate the following text. If it's English, translate to Japanese with romaji. If it's Japanese, translate to English. Provide the translation and a brief note about any nuances. Keep the response concise.\n\nText: "${text}"`;

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: MISTRAL_MODEL,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 512,
        temperature: 0.3
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const translation = data?.choices?.[0]?.message?.content ?? '';
    if (!translation) {
      throw new Error('No translation returned from Mistral. The browser request may be blocked by CORS.');
    }

    resultDiv.innerHTML = `<div class="translation-result">${marked.parse(translation)}</div>`;
  } catch (err) {
    resultDiv.innerHTML = `<p style="color: #E74C3C;">Error: ${err.message || 'Translation service unavailable'}</p>`;
  }
}

// Dictionary
function renderDictionary(filter = '') {
  const container = getEl('dictResults');
  if (!container) return;
  const filtered = filter ?
    dictionary.filter(d =>
      d.word.includes(filter) ||
      d.reading.toLowerCase().includes(filter.toLowerCase()) ||
      d.meaning.toLowerCase().includes(filter.toLowerCase())
    ) : dictionary;

  container.innerHTML = filtered.map(entry => `
    <div class="dict-entry">
      <div class="dict-word">${entry.word}</div>
      <div class="dict-reading">${entry.reading}</div>
      <div class="dict-meaning">${entry.meaning}</div>
      <div class="dict-example">${entry.example}</div>
    </div>
  `).join('');

  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 40px;">No results found</p>';
  }
}

function searchDictionary() {
  const query = getEl('dictSearch')?.value || '';
  renderDictionary(query);
}

// Forum
function renderForum() {
  const container = getEl('forumPosts');
  if (!container) return;
  container.innerHTML = `
    <button class="btn btn-primary" style="width: 100%; margin-bottom: 20px;" onclick="showAlert('Coming Soon', 'Post creation will be available soon!')">
      <i class="fas fa-plus"></i> Create New Post
    </button>
  ` + forumPosts.map(post => `
    <div class="forum-post">
      <div class="post-header">
        <div class="post-avatar">${post.avatar}</div>
        <div>
          <div class="post-author">${post.author}</div>
          <div class="post-time">${post.time}</div>
        </div>
      </div>
      <p class="post-content">${post.content}</p>
      <div class="post-actions">
        <button class="post-action"><i class="fas fa-heart"></i> ${post.likes}</button>
        <button class="post-action"><i class="fas fa-comment"></i> ${post.comments}</button>
        <button class="post-action"><i class="fas fa-share"></i> Share</button>
      </div>
    </div>
  `).join('');
}

// Alerts
function showAlert(title, message, callback) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay active';
  overlay.innerHTML = `
    <div class="alert-modal">
      <h3>${title}</h3>
      <p>${message}</p>
      <div class="alert-modal-buttons">
        <button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove(); ${callback ? callback + '()' : ''}">OK</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function speakText(text, lang = 'en-US') {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  } else {
    alert('Text-to-speech not supported in this browser.');
  }
}

function stopSpeaking() {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
  }
}

function openStoryModal(index) {
  const course = window.currentCourse;
  if (!course || !course.story[index]) return;
  
  const paragraph = course.story[index];
  speakText(paragraph.text, 'en-US');
}

function openVocabModal(keyword) {
  const match = keyword.match(/^(.+?)\s*\((.+?)\)$/);
  const japanese = match ? match[1] : keyword;
  
  speakText(japanese, 'ja-JP');
}

function handleLogin(e) {
  e.preventDefault();
  const email = getEl('loginEmail')?.value || '';
  currentUser = email.split('@')[0] || 'Learner';
  storageUser();
  setUserName(currentUser);
  safeRun(() => { getEl('loginModal').classList.remove('active'); });
  window.location.href = 'home.html';
}

function handleSignup(e) {
  e.preventDefault();
  const name = getEl('signupName')?.value || 'Learner';
  currentUser = name;
  storageUser();
  setUserName(currentUser);
  safeRun(() => { getEl('signupModal').classList.remove('active'); });
  window.location.href = 'home.html';
}

function logout() {
  currentUser = null;
  localStorage.removeItem('sakuraUser');
  window.location.href = 'index.html';
}

// Page initialization
function initPage() {
  applySystemDarkMode();
  initDarkModeListener();
  loadUser();
  updateDarkModeToggle();
  createPetals();

  const page = document.body.dataset.page;
  if (page === 'home') {
    setUserName(currentUser || 'Learner');
  }
  if (page === 'vocabulary') {
    updateCard();
  }
  if (page === 'courses') {
    renderCourses();
  }
  if (page === 'courseDetail') {
    renderCourseDetail();
  }
  if (page === 'quiz') {
    resetQuizSelection();
  }
  if (page === 'charts') {
    renderCharts();
  }
  if (page === 'translate') {
    updateCharCount();
  }
  if (page === 'dictionary') {
    renderDictionary();
  }
  if (page === 'forum') {
    renderForum();
  }
  if (page === 'settings') {
    updateDarkModeToggle();
  }

  setActiveNav(page);
}

function setActiveNav(page) {
  const map = {
    home: 'home.html',
    vocabulary: 'vocabulary.html',
    courses: 'courses.html',
    charts: 'charts.html',
    translate: 'translate.html',
    dictionary: 'dictionary.html',
    forum: 'forum.html',
  };
  const target = map[page];
  if (!target) return;

  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('href') === target);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initPage();
  document.addEventListener('click', stopSpeaking);
});
