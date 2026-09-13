const QUESTIONS = [
  {
    key: "sector",
    label: "Quel secteur vous attire le plus ?",
    options: [
      ["ia", "IA & automatisation"],
      ["local", "Services locaux / artisanat"],
      ["education", "Éducation / coaching"],
      ["creatif", "Créatif / contenu"],
      ["commerce", "Commerce / revente"],
    ],
  },
  {
    key: "budget",
    label: "Quel budget de départ pouvez-vous mobiliser ?",
    options: [
      ["bas", "Moins de 300€"],
      ["moyen", "300 à 2000€"],
      ["eleve", "Plus de 2000€"],
    ],
  },
  {
    key: "temps",
    label: "Combien de temps pouvez-vous y consacrer ?",
    options: [
      ["partiel", "Quelques heures par semaine"],
      ["pleintemps", "À temps plein"],
    ],
  },
  {
    key: "competence",
    label: "Quel est votre point fort ?",
    options: [
      ["technique", "Technique / informatique"],
      ["relationnel", "Relationnel / vente"],
      ["creatif", "Créatif"],
      ["organisation", "Organisation / gestion"],
    ],
  },
];

const answers = {};
let step = 0;

const progressEl = document.getElementById("progress");
const quizEl = document.getElementById("quiz");
const resultsEl = document.getElementById("results");

function renderProgress() {
  progressEl.innerHTML = QUESTIONS.map((_, i) => `<span class="${i < step ? "done" : ""}"></span>`).join("");
}

function renderQuestion() {
  renderProgress();
  const q = QUESTIONS[step];
  quizEl.innerHTML = `
    <h2>${q.label}</h2>
    <div class="options">
      ${q.options.map(([value, label]) => `<button data-value="${value}">${label}</button>`).join("")}
    </div>
  `;
  quizEl.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      answers[q.key] = btn.dataset.value;
      step++;
      if (step < QUESTIONS.length) {
        renderQuestion();
      } else {
        showResults();
      }
    });
  });
}

function scoreIdea(idea) {
  let score = 0;
  if (idea.sector === answers.sector) score += 3;
  if (idea.budget === answers.budget) score += 2;
  if (idea.temps === answers.temps) score += 2;
  if (idea.competence === answers.competence) score += 2;
  return score + Math.random(); // léger aléa pour départager et varier les résultats à chaque essai
}

function showResults() {
  quizEl.hidden = true;
  progressEl.hidden = true;

  const ranked = [...IDEES].sort((a, b) => scoreIdea(b) - scoreIdea(a));
  const top3 = ranked.slice(0, 3);

  resultsEl.hidden = false;
  resultsEl.innerHTML = `
    <h2 style="text-align:center; margin-bottom: 18px;">Vos 3 idées</h2>
    ${top3.map((idea) => `
      <div class="idea">
        <h3>${idea.titre}</h3>
        <p class="pitch">${idea.pitch}</p>
        <ol>${idea.etapes.map((e) => `<li>${e}</li>`).join("")}</ol>
        <p class="potentiel">💶 Potentiel : ${idea.potentiel}</p>
      </div>
    `).join("")}
    <div class="cta">
      <p>Envie d'un rapport complet et personnalisé (10 idées détaillées + plan d'action 90 jours) rédigé sur mesure pour votre profil ?</p>
      <a class="btn" href="${buildMailto(top3)}">Commander le rapport complet (19€) →</a>
    </div>
    <div class="actions">
      <button class="secondary" id="restart">Refaire le quiz</button>
      <button class="secondary" id="share">Copier le lien à partager</button>
    </div>
  `;

  document.getElementById("restart").addEventListener("click", () => {
    step = 0;
    Object.keys(answers).forEach((k) => delete answers[k]);
    resultsEl.hidden = true;
    quizEl.hidden = false;
    progressEl.hidden = false;
    renderQuestion();
  });

  document.getElementById("share").addEventListener("click", async (e) => {
    try {
      await navigator.clipboard.writeText(window.location.href.split("?")[0]);
      e.target.textContent = "Lien copié !";
      setTimeout(() => (e.target.textContent = "Copier le lien à partager"), 2000);
    } catch (err) {
      e.target.textContent = "Copiez l'URL depuis la barre d'adresse";
    }
  });
}

function buildMailto(top3) {
  const subject = "Achat - Rapport complet Idées Business (19€)";
  const profil = `Secteur: ${answers.sector}, Budget: ${answers.budget}, Temps: ${answers.temps}, Compétence: ${answers.competence}`;
  const ideesRetenues = top3.map((i) => i.titre).join(", ");
  const body = `Bonjour,\n\nJ'ai fait le quiz Générateur d'Idées Business IA et je souhaite acheter le rapport complet personnalisé (19€) par virement bancaire.\n\nMon profil : ${profil}\nIdées suggérées par le quiz : ${ideesRetenues}\n\nMerci de m'envoyer vos coordonnées bancaires (IBAN) pour finaliser l'achat.\n\nCordialement.`;
  return `mailto:pjbreizh56bzh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

renderQuestion();
