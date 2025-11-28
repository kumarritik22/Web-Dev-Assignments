// CONFIG: white note names (left -> right)
const whiteNotes = ["C","D","E","F","G","A","B","C2"];
// bottom labels for white keys (keyboard hints)
const whiteKeyLabels = ["A","S","D","T","Y","U","K","L"];

// black keys config: 'after' = index of white key after which the black sits
const blackConfig = [
  {after:0, name:"C#"},
  {after:1, name:"D#"},
  {after:3, name:"F#"},
  {after:4, name:"G#"},
  {after:5, name:"A#"}
];
// top labels for black keys (keyboard hints)
const blackTopLabels = { "C#":"W", "D#":"E", "F#":"G", "G#":"H", "A#":"J" };

// keyboard -> note mapping
const keyMap = {
  a:"C", s:"D", d:"E", f:"F", g:"G", h:"A", j:"B", k:"C2",
  w:"C#", e:"D#", g:"F#", h:"G#", j:"A#"
};

// sound file mapping (point to your Sounds/ files)
const soundFiles = {
  "C":"Sounds/C.wav","C#":"Sounds/Csharp.wav",
  "D":"Sounds/D.wav","D#":"Sounds/Dsharp.wav",
  "E":"Sounds/E.wav","F":"Sounds/F.wav","F#":"Sounds/Fsharp.wav",
  "G":"Sounds/G.wav","G#":"Sounds/Gsharp.wav","A":"Sounds/A.wav","A#":"Sounds/Asharp.wav",
  "B":"Sounds/B.wav","C2":"Sounds/C2.wav"
};

const piano = document.querySelector("#piano");
const baseAudio = {};
const pressed = new Set();

// preload audio
for (const n in soundFiles) {
  try {
    baseAudio[n] = new Audio(soundFiles[n]);
    baseAudio[n].preload = "auto";
  } catch(e){}
}

// create white keys
whiteNotes.forEach((note, i) => {
  const w = document.createElement("div");
  w.className = "key";
  w.dataset.note = note;
  const bottom = document.createElement("div");
  bottom.className = "bottom-label";
  bottom.textContent = whiteKeyLabels[i] || "";
  w.appendChild(bottom);
  w.addEventListener("click", () => { play(note); flash(w); });
  piano.appendChild(w);
});

// compute widths for positioning
const whiteCount = whiteNotes.length;
const keyWidthPercent = 100 / whiteCount;

// create black keys
blackConfig.forEach(cfg => {
  const b = document.createElement("div");
  b.className = "key black";
  b.dataset.note = cfg.name;
  const top = document.createElement("div");
  top.className = "top-label";
  top.textContent = blackTopLabels[cfg.name] || "";
  b.appendChild(top);

  // center between white index and next
  const leftPercent = (cfg.after + 0.5) * keyWidthPercent;
  b.style.left = leftPercent + "%";

  b.addEventListener("click", (e) => { play(cfg.name); flash(b); e.stopPropagation(); });
  piano.appendChild(b);
});

// play: clone node for polyphony
function play(name){
  const base = baseAudio[name];
  if (!base) return;
  const inst = base.cloneNode();
  inst.currentTime = 0;
  inst.play().catch(err => console.warn("play err", err));
}

function flash(el){
  el.classList.add("active");
  setTimeout(()=>el.classList.remove("active"), 140);
}

// keyboard handling
document.addEventListener("keydown", (ev)=>{
  const k = ev.key.toLowerCase();
  const note = keyMap[k];
  if (!note) return;
  if (pressed.has(k)) return;
  pressed.add(k);
  const el = document.querySelector(`[data-note="${note}"]`);
  if (el) flash(el);
  play(note);
});
document.addEventListener("keyup", ev => pressed.delete(ev.key.toLowerCase()));
