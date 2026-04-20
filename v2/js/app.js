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
  { id: 1, title: 'Japanese Tea Ceremony', tag: 'Tradition', desc: 'Explore the art and philosophy behind the traditional Japanese tea ceremony (茶道).', icon: '🍵', lessons: 5 },
  { id: 2, title: 'Samurai & Bushido', tag: 'History', desc: 'Learn about the warrior class of feudal Japan and their code of honor.', icon: '⚔️', lessons: 8 },
  { id: 3, title: 'Japanese Festivals', tag: 'Culture', desc: 'Discover the colorful festivals (matsuri) celebrated throughout Japan.', icon: '🎆', lessons: 6 },
  { id: 4, title: 'Zen & Buddhism', tag: 'Philosophy', desc: 'Understanding the influence of Zen Buddhism on Japanese culture.', icon: '🧘', lessons: 7 },
  { id: 5, title: 'Japanese Cuisine', tag: 'Food', desc: 'From sushi to ramen: explore the world of Japanese culinary arts.', icon: '🍱', lessons: 10 },
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
  document.documentElement.classList.toggle('dark', isDark);
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

  const detail = getEl('courseDetail');
  if (!detail) return;

  let lessonsHTML = '';
  for (let i = 1; i <= course.lessons; i++) {
    const completed = i <= 2;
    lessonsHTML += `
      <div class="lesson-item">
        <div class="lesson-number">${i}</div>
        <div class="lesson-info">
          <h4>Lesson ${i}: ${getLessonTitle(course.title, i)}</h4>
          <p>${completed ? 'Completed' : 'Not started'}</p>
        </div>
        ${completed ? '<i class="fas fa-check-circle lesson-status"></i>' : ''}
      </div>
    `;
  }

  detail.innerHTML = `
    <button class="back-btn" onclick="window.history.back()"><i class="fas fa-arrow-left"></i> Back to Courses</button>
    <div class="course-detail-content">
      <h2>${course.icon} ${course.title}</h2>
      <p style="color: var(--text-secondary); line-height: 1.6;">${course.desc}</p>
      <div class="progress-bar" style="margin-top: 20px;">
        <div class="progress-fill" style="width: ${(2 / course.lessons) * 100}%"></div>
      </div>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 10px;">2 of ${course.lessons} lessons completed</p>
      <div class="lesson-list">
        ${lessonsHTML}
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
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      }]
    },
    options: {
      responsive: true,
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
            stepSize: 10
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

window.addEventListener('DOMContentLoaded', initPage);
