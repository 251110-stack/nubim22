
const questionsData = [
  {
    title: "하루 중 가장 많은 시간을 보내는 곳은?",
    hint: "평소 생활 공간을 떠올려 봐.",
    options: [
      { text: "학교와 교실", emoji: "🏫", scores: { study: 2, organize: 1 } },
      { text: "집이나 내 방", emoji: "🏠", scores: { comfort: 2, organize: 1 } },
      { text: "카페나 도서관", emoji: "☕", scores: { focus: 2, portable: 1 } },
      { text: "여러 장소를 계속 이동해", emoji: "🚶", scores: { portable: 2, comfort: 1 } }
    ]
  },
  {
    title: "공부할 때 가장 힘든 순간은?",
    hint: "가장 자주 겪는 상황을 선택해 봐.",
    options: [
      { text: "집중력이 금방 떨어질 때", emoji: "🫠", scores: { focus: 3 } },
      { text: "할 일이 너무 많아 막막할 때", emoji: "📚", scores: { study: 3, organize: 1 } },
      { text: "책상이나 주변이 어수선할 때", emoji: "🌀", scores: { organize: 3 } },
      { text: "오래 앉아 있어서 지칠 때", emoji: "😮‍💨", scores: { comfort: 3 } }
    ]
  },
  {
    title: "너의 책상은 보통 어떤 상태야?",
    hint: "이상적인 책상이 아니라 실제 상태!",
    options: [
      { text: "필요한 것만 깔끔하게 있어", emoji: "✨", scores: { organize: 2, focus: 1 } },
      { text: "책과 필기구가 여기저기 있어", emoji: "📝", scores: { organize: 3 } },
      { text: "꾸미는 것에도 관심이 많아", emoji: "🌷", scores: { comfort: 2, organize: 1 } },
      { text: "책상보다 다른 곳에서 공부해", emoji: "🎒", scores: { portable: 3 } }
    ]
  },
  {
    title: "공부 계획은 어떻게 세우는 편이야?",
    hint: "평소에 실제로 하는 행동을 기준으로!",
    options: [
      { text: "시간 단위로 꼼꼼하게 계획해", emoji: "🗓️", scores: { study: 3 } },
      { text: "할 일 목록만 간단히 적어", emoji: "☑️", scores: { study: 2, organize: 1 } },
      { text: "계획은 세우지만 잘 지키진 못해", emoji: "😅", scores: { focus: 2, study: 1 } },
      { text: "그날그날 기분에 따라 움직여", emoji: "🌊", scores: { comfort: 2, portable: 1 } }
    ]
  },
  {
    title: "집중을 방해하는 가장 큰 요인은?",
    hint: "하나만 골라 줘.",
    options: [
      { text: "주변의 소음", emoji: "🔊", scores: { focus: 3 } },
      { text: "휴대전화와 알림", emoji: "📱", scores: { focus: 3 } },
      { text: "불편한 책상과 의자", emoji: "🪑", scores: { comfort: 3 } },
      { text: "필요한 물건을 찾는 시간", emoji: "🔍", scores: { organize: 3 } }
    ]
  },
  {
    title: "가방에 꼭 챙기는 물건은?",
    hint: "평소 외출할 때를 생각해 봐.",
    options: [
      { text: "노트와 필기구", emoji: "✏️", scores: { study: 2, organize: 1 } },
      { text: "충전기와 전자기기", emoji: "🔌", scores: { portable: 2, focus: 1 } },
      { text: "텀블러와 간식", emoji: "🥤", scores: { comfort: 2, portable: 1 } },
      { text: "필요한 것만 최소한으로", emoji: "🎒", scores: { portable: 3 } }
    ]
  },
  {
    title: "아이템을 고를 때 가장 중요한 것은?",
    hint: "구매할 때 우선순위를 정해 봐.",
    options: [
      { text: "실용성과 기능", emoji: "⚙️", scores: { study: 2, organize: 1 } },
      { text: "디자인과 분위기", emoji: "🎨", scores: { comfort: 3 } },
      { text: "휴대하기 편한 크기", emoji: "👜", scores: { portable: 3 } },
      { text: "집중과 효율을 높이는 것", emoji: "🎯", scores: { focus: 3 } }
    ]
  },
  {
    title: "쉬는 시간에는 주로 무엇을 해?",
    hint: "가장 가까운 것을 골라 줘.",
    options: [
      { text: "다음 공부를 준비해", emoji: "📖", scores: { study: 2 } },
      { text: "휴대전화로 영상이나 SNS를 봐", emoji: "📱", scores: { comfort: 1, focus: 2 } },
      { text: "친구들과 이야기해", emoji: "💬", scores: { portable: 1, comfort: 2 } },
      { text: "잠깐 눈을 감고 쉬어", emoji: "😴", scores: { comfort: 3 } }
    ]
  },
  {
    title: "지금 가장 바꾸고 싶은 것은?",
    hint: "딱 한 가지만 바꿀 수 있다면?",
    options: [
      { text: "공부 시간을 더 효율적으로 쓰기", emoji: "⏱️", scores: { study: 3, focus: 1 } },
      { text: "주변을 깔끔하게 정리하기", emoji: "🗂️", scores: { organize: 3 } },
      { text: "편안한 나만의 공간 만들기", emoji: "🛋️", scores: { comfort: 3 } },
      { text: "어디서든 편하게 생활하기", emoji: "🌍", scores: { portable: 3 } }
    ]
  },
  {
    title: "너에게 가장 필요한 도움은?",
    hint: "마지막 질문이야!",
    options: [
      { text: "계획을 지키도록 도와주는 것", emoji: "📅", scores: { study: 3 } },
      { text: "집중할 수 있는 환경", emoji: "🎧", scores: { focus: 3 } },
      { text: "물건과 공간을 정돈하는 것", emoji: "🧺", scores: { organize: 3 } },
      { text: "일상에 여유와 편안함 더하기", emoji: "☁️", scores: { comfort: 2, portable: 1 } }
    ]
  }
];

const products = [
  {
    id: "planner",
    name: "스터디 플래너",
    emoji: "📒",
    category: "study",
    description: "오늘 할 일과 공부 시간을 한눈에 정리할 수 있어.",
    reason: "계획을 세우고 실천하는 습관을 만들고 싶을 때 추천해."
  },
  {
    id: "timer",
    name: "집중 타이머",
    emoji: "⏱️",
    category: "focus",
    description: "공부 시간과 휴식 시간을 구분하는 데 도움이 돼.",
    reason: "짧은 시간부터 집중하는 연습을 하고 싶을 때 좋아."
  },
  {
    id: "earplugs",
    name: "소음 차단 귀마개",
    emoji: "🎧",
    category: "focus",
    description: "주변 소음으로 인한 방해를 줄이는 데 활용할 수 있어.",
    reason: "조용한 학습 환경을 만들고 싶을 때 추천해."
  },
  {
    id: "organizer",
    name: "책상 정리함",
    emoji: "🗂️",
    category: "organize",
    description: "자주 쓰는 필기구와 작은 물건을 정리하기 편해.",
    reason: "물건을 찾느라 시간을 쓰는 일을 줄이고 싶을 때 좋아."
  },
  {
    id: "deskmat",
    name: "데스크 매트",
    emoji: "🖥️",
    category: "comfort",
    description: "책상 위 공간을 구분하고 분위기를 정돈할 수 있어.",
    reason: "나만의 편안한 공부 공간을 만들고 싶을 때 추천해."
  },
  {
    id: "lamp",
    name: "스탠드 조명",
    emoji: "💡",
    category: "comfort",
    description: "책상 위를 밝혀 글씨와 책을 보기 편하게 해 줘.",
    reason: "공부하는 공간의 조명 환경을 개선하고 싶을 때 좋아."
  },
  {
    id: "pouch",
    name: "휴대용 파우치",
    emoji: "👝",
    category: "portable",
    description: "충전기와 필기구 등 작은 물건을 한곳에 보관할 수 있어.",
    reason: "이동할 때 필요한 물건을 간편하게 챙기고 싶을 때 추천해."
  },
  {
    id: "tumbler",
    name: "휴대용 텀블러",
    emoji: "🥤",
    category: "comfort",
    description: "학교나 도서관에서도 물을 편하게 챙길 수 있어.",
    reason: "공부 중 수분 섭취를 잊지 않고 싶을 때 좋아."
  },
  {
    id: "charger",
    name: "휴대용 충전 케이블",
    emoji: "🔌",
    category: "portable",
    description: "외출 중 전자기기를 충전할 때 유용해.",
    reason: "여러 장소를 이동하면서 공부하는 사람에게 추천해."
  },
  {
    id: "notebook",
    name: "분류형 노트",
    emoji: "📚",
    category: "study",
    description: "과목이나 주제별로 기록을 정리하기 편해.",
    reason: "흩어진 공부 기록을 체계적으로 모으고 싶을 때 좋아."
  },
  {
    id: "cushion",
    name: "등받이 쿠션",
    emoji: "🪑",
    category: "comfort",
    description: "앉아 있을 때 등받이의 편안함을 보완할 수 있어.",
    reason: "오래 앉아 공부할 때 자세와 착석 환경을 신경 쓰고 싶다면 고려해 봐."
  },
  {
    id: "pencilcase",
    name: "필기구 정리 필통",
    emoji: "✏️",
    category: "organize",
    description: "필기구를 종류별로 모아 보관하기 편해.",
    reason: "가방 속 작은 물건을 정돈하고 싶을 때 추천해."
  }
];

const profiles = {
  study: {
    title: "계획적인 성장형",
    description: "목표를 세우고 조금씩 성과를 쌓는 방식이 잘 맞는 편이야. 공부 계획을 눈에 보이게 정리하고, 실천한 내용을 확인할 수 있는 도구를 활용해 봐."
  },
  focus: {
    title: "집중력 탐구형",
    description: "공부 환경과 집중 흐름이 학습 경험에 중요한 편이야. 방해 요소를 줄이고, 집중과 휴식 시간을 나누는 방식부터 시도해 봐."
  },
  organize: {
    title: "깔끔한 정리형",
    description: "필요한 물건을 쉽게 찾고 정돈된 공간에서 생활하는 것이 잘 맞는 편이야. 자주 쓰는 물건부터 자리를 정해 두면 일상이 더 편리해질 수 있어."
  },
  comfort: {
    title: "편안함 중시형",
    description: "공간의 분위기와 일상의 편안함을 중요하게 생각하는 편이야. 무리해서 환경을 바꾸기보다 조명이나 책상 주변처럼 자주 쓰는 곳부터 개선해 봐."
  },
  portable: {
    title: "유연한 이동형",
    description: "한곳에 머무르기보다 여러 장소에서 생활하는 방식이 잘 맞는 편이야. 자주 사용하는 물건을 가볍고 간편하게 챙길 수 있도록 준비해 봐."
  }
};

const categoryNames = {
  study: "학습 계획",
  focus: "집중 환경",
  organize: "정리 습관",
  comfort: "생활 편안함",
  portable: "휴대와 이동"
};

const intro = document.getElementById("intro");
const surveyCard = document.getElementById("surveyCard");
const resultCard = document.getElementById("resultCard");
const questionsContainer = document.getElementById("questions");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const progressTrack = document.getElementById("progressTrack");
const formMessage = document.getElementById("formMessage");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");

let currentQuestion = 0;
const answers = Array(questionsData.length).fill(null);

function renderQuestion() {
  const question = questionsData[currentQuestion];

  progressText.textContent =
    `${String(currentQuestion + 1).padStart(2, "0")} / ${questionsData.length}`;

  progressFill.style.width =
    `${((currentQuestion + 1) / questionsData.length) * 100}%`;

  progressTrack.setAttribute("aria-valuenow", String(currentQuestion + 1));

  questionsContainer.innerHTML = `
    <fieldset class="question-block">
      <legend class="question-number">
        QUESTION ${String(currentQuestion + 1).padStart(2, "0")}
      </legend>
      <div class="question-title">${question.title}</div>
      <p class="question-hint">${question.hint}</p>
      <div class="option-list">
        ${question.options.map((option, index) => `
          <label class="option-label">
            <input
              type="radio"
              name="question-${currentQuestion}"
              value="${index}"
              ${answers[currentQuestion] === index ? "checked" : ""}
            >
            <span class="option-content">
              <span class="option-emoji" aria-hidden="true">${option.emoji}</span>
              <span>${option.text}</span>
            </span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `;

  backButton.classList.toggle("hidden", currentQuestion === 0);
  nextButton.classList.toggle(
    "hidden",
    currentQuestion === questionsData.length - 1
  );
  submitButton.classList.toggle(
    "hidden",
    currentQuestion !== questionsData.length - 1
  );

  formMessage.textContent = "";
}

function getSelectedAnswer() {
  const selected = document.querySelector(
    `input[name="question-${currentQuestion}"]:checked`
  );

  return selected ? Number(selected.value) : null;
}

function saveCurrentAnswer() {
  const selected = getSelectedAnswer();

  if (selected === null) {
    formMessage.textContent = "답변을 하나 선택해 줘.";
    return false;
  }

  answers[currentQuestion] = selected;
  formMessage.textContent = "";
  return true;
}

function calculateScores() {
  const scores = {
    study: 0,
    focus: 0,
    organize: 0,
    comfort: 0,
    portable: 0
  };

  answers.forEach((answerIndex, questionIndex) => {
    const option = questionsData[questionIndex].options[answerIndex];

    Object.entries(option.scores).forEach(([category, score]) => {
      scores[category] += score;
    });
  });

  return scores;
}

function getRecommendationReason(product, scores) {
  const total = Object.values(scores).reduce((sum, value) => sum + value, 0);
  const share = total ? Math.round((scores[product.category] / total) * 100) : 0;

  return `${categoryNames[product.category]} 관련 응답 비중 ${share}%`;
}

function renderResults() {
  const scores = calculateScores();

  const sortedCategories = Object.keys(scores).sort((a, b) => {
    if (scores[b] !== scores[a]) {
      return scores[b] - scores[a];
    }
    return Object.keys(scores).indexOf(a) - Object.keys(scores).indexOf(b);
  });

  const mainCategory = sortedCategories[0];
  const secondCategory = sortedCategories[1];

  const profile = profiles[mainCategory];

  document.getElementById("profileTitle").textContent = profile.title;
  document.getElementById("profileDesc").textContent = profile.description;

  const rankedProducts = products
    .map((product, index) => ({
      ...product,
      originalIndex: index,
      score: scores[product.category]
    }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.originalIndex - b.originalIndex;
    });

  const chosen = [];
  const usedCategories = new Set();

  for (const product of rankedProducts) {
    if (chosen.length >= 4) break;

    const isTopCategory =
      product.category === mainCategory ||
      product.category === secondCategory;

    if (isTopCategory && !usedCategories.has(product.category)) {
      chosen.push(product);
      usedCategories.add(product.category);
    }
  }

  for (const product of rankedProducts) {
    if (chosen.length >= 4) break;

    if (!chosen.some(item => item.id === product.id)) {
      chosen.push(product);
    }
  }

  const productList = document.getElementById("productList");

  productList.innerHTML = chosen.map((product, index) => `
    <article class="product-card">
      <div class="product-icon" aria-hidden="true">${product.emoji}</div>
      <div>
        <div class="product-rank">RECOMMENDATION 0${index + 1}</div>
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <p class="product-reason">${product.reason}</p>
      </div>
    </article>
  `).join("");

  intro.classList.add("hidden");
  surveyCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("startButton").addEventListener("click", () => {
  intro.classList.add("hidden");
  surveyCard.classList.remove("hidden");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

nextButton.addEventListener("click", () => {
  if (!saveCurrentAnswer()) return;

  if (currentQuestion < questionsData.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  }
});

backButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
});

document.getElementById("surveyForm").addEventListener("submit", event => {
  event.preventDefault();

  if (!saveCurrentAnswer()) return;

  if (answers.some(answer => answer === null)) {
    formMessage.textContent = "아직 답하지 않은 질문이 있어. 답변을 확인해 줘.";
    return;
  }

  renderResults();
});

document.getElementById("restartButton").addEventListener("click", () => {
  currentQuestion = 0;
  answers.fill(null);

  resultCard.classList.add("hidden");
  intro.classList.remove("hidden");
  surveyCard.classList.add("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
});
