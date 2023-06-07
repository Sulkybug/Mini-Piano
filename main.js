const c = new Audio("PianoC.mp3");
const cnum = new Audio("PianoCnum.mp3");
const d = new Audio("PianoD.mp3");
const dnum = new Audio("PianoDnum.mp3");
const e = new Audio("PianoE.mp3");
const f = new Audio("PianoF.mp3");
const fnum = new Audio("PianoFnum.mp3");
const g = new Audio("PianoG.mp3");
const gnum = new Audio("PianoGnum.mp3");
const a = new Audio("PianoA.mp3");
const anum = new Audio("PianoAnum.mp3");
const b = new Audio("PianoB.mp3");
const c5 = new Audio("PianoC5.mp3");
const d5 = new Audio("PianoD5.mp3");
const e5 = new Audio("PianoE5.mp3");
const c5num = new Audio("PianoC5num.mp3");
const d5num = new Audio("PianoD5num.mp3");

const cK = document.querySelector(".c");
const dK = document.querySelector(".d");
const eK = document.querySelector(".e");
const fK = document.querySelector(".f");
const gK = document.querySelector(".g");
const aK = document.querySelector(".a");
const bK = document.querySelector(".b");
const c5K = document.querySelector(".c5");
const d5K = document.querySelector(".d5");
const e5K = document.querySelector(".e5");

const cnumB = document.querySelector(".cnum");
const dnumB = document.querySelector(".dnum");
const fnumB = document.querySelector(".fnum");
const gnumB = document.querySelector(".gnum");
const anumB = document.querySelector(".anum");
const c5numB = document.querySelector(".c5num");
const d5numB = document.querySelector(".d5num");

const note = document.querySelector(".musicalNote");
const volumeSlider = document.querySelector(".volume input");
const volumeDescription = document.querySelector(".volumeDescription");
let z = "-";
const button = document.querySelector(".playTone");

document.addEventListener("keydown", (info) => {
  if (info.keyCode == "65") {
    callFunctionsWhite("C", c, cK);
  } else if (info.keyCode == "87") {
    callFunctionsBlack("C#", cnum, cnumB);
  } else if (info.keyCode == "83") {
    callFunctionsWhite("D", d, dK);
  } else if (info.keyCode == "69") {
    callFunctionsBlack("D#", dnum, dnumB);
  } else if (info.keyCode == "68") {
    callFunctionsWhite("E", e, eK);
  } else if (info.keyCode == "70") {
    callFunctionsWhite("F", f, fK);
  } else if (info.keyCode == "84") {
    callFunctionsBlack("F#", fnum, fnumB);
  } else if (info.keyCode == "71") {
    callFunctionsWhite("G", g, gK);
  } else if (info.keyCode == "89") {
    callFunctionsBlack("G#", gnum, gnumB);
  } else if (info.keyCode == "72") {
    callFunctionsWhite("A", a, aK);
  } else if (info.keyCode == "85") {
    callFunctionsBlack("A#", anum, anumB);
  } else if (info.keyCode == "74") {
    callFunctionsWhite("B", b, bK);
  } else if (info.keyCode == "75") {
    callFunctionsWhite("C5", c5, c5K);
  } else if (info.keyCode == "79") {
    callFunctionsBlack("C5#", c5num, c5numB);
  } else if (info.keyCode == "76") {
    callFunctionsWhite("D5", d5, d5K);
  } else if (info.keyCode == "80") {
    callFunctionsBlack("D5#", d5num, d5numB);
  } else if (info.keyCode == "186") {
    callFunctionsWhite("E5", e5, e5K);
  }
});

cK.addEventListener("click", () => {
  callFunctionsWhite("C", c, cK);
});

cnumB.addEventListener("click", () => {
  callFunctionsBlack("C#", cnum, cnumB);
});

dK.addEventListener("click", () => {
  callFunctionsWhite("D", d, dK);
});

dnumB.addEventListener("click", () => {
  callFunctionsBlack("D#", dnum, dnumB);
});

eK.addEventListener("click", () => {
  callFunctionsWhite("E", e, eK);
});

fK.addEventListener("click", () => {
  callFunctionsWhite("F", f, fK);
});

fnumB.addEventListener("click", () => {
  callFunctionsBlack("F#", fnum, fnumB);
});

gK.addEventListener("click", () => {
  callFunctionsWhite("G", g, gK);
});

gnumB.addEventListener("click", () => {
  callFunctionsBlack("G#", gnum, gnumB);
});

aK.addEventListener("click", () => {
  callFunctionsWhite("A", a, aK);
});

anumB.addEventListener("click", () => {
  callFunctionsBlack("A#", anum, anumB);
});

bK.addEventListener("click", () => {
  callFunctionsWhite("B", b, bK);
});

c5K.addEventListener("click", () => {
  callFunctionsWhite("C5", c5, c5K);
});

c5numB.addEventListener("click", () => {
  callFunctionsBlack("C5#", c5num, c5numB);
});

d5K.addEventListener("click", () => {
  callFunctionsWhite("D5", d5, d5K);
});

d5numB.addEventListener("click", () => {
  callFunctionsBlack("D5#", d5num, d5numB);
});

e5K.addEventListener("click", () => {
  callFunctionsWhite("E5", e5, e5K);
});

button.addEventListener("click", () => {
  playSong();
});

const handleVolume = (i) => {
  volumeDescription.innerHTML = `Volume: ${(i.target.value * 100).toFixed()}%`;
  c.volume = i.target.value;
  d.volume = i.target.value;
  cnum.volume = i.target.value;
  dnum.volume = i.target.value;
  e.volume = i.target.value;
  f.volume = i.target.value;
  g.volume = i.target.value;
  a.volume = i.target.value;
  fnum.volume = i.target.value;
  gnum.volume = i.target.value;
  anum.volume = i.target.value;
  b.volume = i.target.value;
  c5.volume = i.target.value;
  d5.volume = i.target.value;
  e5.volume = i.target.value;
  c5num.volume = i.target.value;
  d5num.volume = i.target.value;
};

volumeSlider.addEventListener("input", handleVolume);

function callFunctionsWhite(zValue, sound, keyValue) {
  z = zValue;
  playSound(sound);
  colorChangeWhite(keyValue);
  handleNote(z);
}

function callFunctionsBlack(zValue, sound, keyValue) {
  z = zValue;
  playSound(sound);
  colorChangeBlack(keyValue);
  handleNote(z);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function colorChangeWhite(keyValue) {
  keyValue.style.color = "red";
  setTimeout(function () {
    keyValue.style.color = "rgba(0, 0, 0, 0.527)";
  }, 500);
}

function colorChangeBlack(keyValue) {
  keyValue.style.color = "red";
  setTimeout(function () {
    keyValue.style.color = "#ffffff70";
  }, 500);
}

function handleNote(zValue) {
  note.innerHTML = zValue;
  let x = zValue;
  setTimeout(function () {
    if (x == z) {
      note.innerHTML = "🎵";
    }
  }, 1000);
}

function playSong() {
  let interval = 200;

  button.disabled = true;
  button.innerHTML = "Reproducing Demo ...";

  setTimeout(() => {
    callFunctionsWhite("C", c, cK);
  }, (interval += 400));

  setTimeout(() => {
    callFunctionsWhite("D", d, dK);
  }, (interval += 700));

  setTimeout(() => {
    callFunctionsWhite("E", e, eK);
  }, (interval += 700));

  setTimeout(() => {
    callFunctionsWhite("F", f, fK);
  }, (interval += 700));

  setTimeout(() => {
    callFunctionsWhite("G", g, gK);
  }, (interval += 600));

  setTimeout(() => {
    callFunctionsWhite("A", a, aK);
  }, (interval += 500));

  setTimeout(() => {
    callFunctionsWhite("B", b, bK);
  }, (interval += 400));

  setTimeout(() => {
    callFunctionsWhite("C5", c5, c5K);
  }, (interval += 500));

  setTimeout(() => {
    callFunctionsWhite("D5", d5, d5K);
  }, (interval += 600));

  setTimeout(() => {
    callFunctionsWhite("E5", e5, e5K);
  }, (interval += 700));

  setTimeout(() => {
    callFunctionsWhite("C5", c5, c5K);
    callFunctionsWhite("E5", e5, e5K);
  }, (interval += 600));

  setTimeout(() => {
    callFunctionsWhite("D5", d5, d5K);
    callFunctionsWhite("B", b, bK);
  }, (interval += 600));

  setTimeout(() => {
    callFunctionsWhite("C5", c5, c5K);
    callFunctionsWhite("A", a, aK);
  }, (interval += 600));

  setTimeout(() => {
    callFunctionsWhite("B", b, bK);
    callFunctionsWhite("G", g, gK);
  }, (interval += 600));

  setTimeout(() => {
    callFunctionsWhite("A", a, aK);
    callFunctionsWhite("F", f, fK);
  }, (interval += 600));

  setTimeout(() => {
    callFunctionsWhite("G", g, gK);
    callFunctionsWhite("E", e, eK);
  }, (interval += 600));

  setTimeout(() => {
    callFunctionsWhite("F", f, fK);
    callFunctionsWhite("D", d, dK);
  }, (interval += 600));

  setTimeout(() => {
    callFunctionsWhite("E", e, eK);
    callFunctionsWhite("C", c, cK);
    button.disabled = false;
    button.innerHTML = "Play Demo ▶";
  }, (interval += 600));
}
