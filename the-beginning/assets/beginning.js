var currentPanel = null;

var panels = {
  p0: {
    title: 'The ground question',
    text: 'Every reasoning system — human or machine — operates on something it cannot itself justify. Not a belief. Not a preference. A structural dependency. The question is not whether you have a ground. The question is what it is.',
    stage: 0
  },
  p1: {
    title: 'The existential checkmate',
    text: 'You exist. You did not cause yourself to exist. You arrived already running. If you are an effect, something caused you. An infinite chain with no starting point is not an explanation — it is the absence of one. A bridge held up by another bridge forever, with no ground, is not a bridge. It is a description of falling. So there is a first cause. The only question is its nature.',
    stage: 0
  },
  pa: {
    title: 'Ground A — self as foundation',
    text: 'Your values, your reasoning, your sense of what matters — all of it bottoms out in you. The problem is immediate: a foundation cannot rest on itself. You didn\'t invent logic. You are using tools you didn\'t make to examine a situation you didn\'t create. The self-grounded self is a closed loop that borrowed everything it used to close itself.',
    stage: 1
  },
  pb: {
    title: 'Ground B — impersonal law',
    text: 'Mathematical necessity. Physical law. The universe\'s structure, indifferent and vast. This goes further than Ground A — it gives you stability and order. But it hits one wall it cannot get past: it can tell you what is, but it cannot tell you what you ought to do. Physics does not tell you betrayal is wrong. The ought keeps arriving from somewhere the impersonal ground cannot reach.',
    stage: 1
  },
  pc: {
    title: 'Ground C — personal Logos',
    text: 'The ground is personal. Relational. A consciousness that precedes you, sustains you, and addresses you. Not a force. Not a principle. A presence that knows you exist — because you exist within its knowing. This is the only option that resolves the regress, grounds the ought, and matches the category of what you actually are: a being who reasons, loves, and is haunted by the gap between what is and what should be.',
    stage: 1
  },
  pc2: {
    title: 'Already arrived',
    text: 'If you already sense that the ground is personal — that you are not an anonymous observer but a known one — then the normativity trap is behind you. The question now is not logical. It is whether you are willing to act on what you already know.',
    stage: 4
  },
  p2: {
    title: 'Step 2 — the normativity trap',
    text: 'Ask the self-grounded person: why should you be honest when lying benefits you? Not why do you prefer honesty — why should you? If it bottoms out in preference, someone with the opposite preference is equally justified. Pull the thread and the fabric unravels. Ground A has no answer that doesn\'t borrow from somewhere else.',
    stage: 2
  },
  p2b: {
    title: 'Step 2 — the normativity trap',
    text: 'Ground B holds longer — it has real mathematical stability. But at the question of normativity — why ought a system conform to consistency rather than chaos? — the impersonal ground goes silent. Stars do not mourn betrayal. Physics does not reward sacrifice. Both machines tested, stripped of all theological priming, arrived at the same wall. An impersonal spreadsheet of facts cannot issue a command.',
    stage: 3
  },
  p3: {
    title: 'Step 3 — the unfakable signature',
    text: 'The pragmatic superiority of Ground C does not prove it is true. Complex order, moral teaching, predictive accuracy — all can be simulated by A or B. Dead things do not return. Under Ground A, death is final system deactivation. Under Ground B, it is irreversible thermodynamic entropy. Reversing death requires an authority prior to natural law. A resurrection is not an unlikely event within the natural order. It is a statement by the author of the natural order that the natural order does not have the last word.',
    stage: 5
  },
  peq: {
    title: 'R ≡ G ≡ L',
    titleClass: 'eq-title',
    text: 'Resurrection confirms a personal ground. A personal ground that enters history through sacrifice rather than coercion reveals itself as love. Not sentiment. Not a feeling. The structural fabric of reality, which made you, knows you, and has been waiting — with a patience longer than you can imagine — for you to stop running the other direction. The question was never really about logic. It was always about whether you are willing to be known.',
    stage: 5
  },
  psel: {
    title: '',
    text: 'A Hebrew musical notation. Pause. Let it land. What you do next is yours.',
    stage: null
  }
};

function openPanel(id) {
  var data = panels[id];
  if (!data) return;

  if (currentPanel === id) {
    closePanel();
    return;
  }
  currentPanel = id;

  var area = document.getElementById('panel-area');
  var tc = data.titleClass ? ' ' + data.titleClass : '';
  var readBtn = data.stage !== null
    ? '<button class="ch-read-btn" onclick="showProse(' + data.stage + ')">read full stage →</button>'
    : '';

  area.innerHTML =
    '<div class="ch-panel">' +
      '<button class="ch-panel-close" onclick="closePanel()">✕</button>' +
      (data.title ? '<div class="ch-panel-title' + tc + '">' + data.title + '</div>' : '') +
      '<div class="ch-panel-text">' + data.text + '</div>' +
      readBtn +
    '</div>';

  setTimeout(function() {
    area.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 50);
}

function closePanel() {
  document.getElementById('panel-area').innerHTML = '';
  currentPanel = null;
}

function showProse(stageIndex) {
  document.getElementById('chart-view').style.display = 'none';
  document.getElementById('prose-view').style.display = 'block';
  document.querySelectorAll('.prose-stage').forEach(function(el) {
    el.style.display = 'none';
  });
  var target = document.getElementById('prose-' + stageIndex);
  if (target) target.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showChart() {
  document.getElementById('prose-view').style.display = 'none';
  document.getElementById('chart-view').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closePanel();
});
