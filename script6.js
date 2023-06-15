const starbtn = document.querySelector('.start');
const scoretext = document.querySelector('.score');
const kostebekler = document.querySelectorAll('.kostebek');

let oncekikostebek;
let suredoldu;

let score = 0;

function rastgelekostebek() {
  const sira = Math.floor(Math.random() * kostebekler.length);
  const secilenkostebek = kostebekler[sira];
  if (oncekikostebek === secilenkostebek) {
    return rastgelekostebek();
  } else {
    oncekikostebek = secilenkostebek;
  }
  return secilenkostebek;
}

function rasgelesure(min, max) {
  const sure = Math.floor(Math.random() * (max - min)) + min;
  return sure;
}

function yukari() {
  const kostebek = rastgelekostebek();
  const sure = rasgelesure(1000, 1500);
  kostebek.classList.add('secilen');
  setTimeout(() => {
    kostebek.classList.remove('secilen');
    if (!suredoldu) {
      yukari();
    }
  }, sure);
}

function startgame() {
  yukari();
  setTimeout(() => {
    suredoldu = true;
  }, 25000);
}

function peep(e) {
  if (e.target.classList.contains('secilen')) {
    score++;
    e.target.classList.remove('secilen');
  }
  scoretext.textContent = score;
}

starbtn.addEventListener('click', () => {
  startgame();
});

kostebekler.forEach((kostebek) => {
  kostebek.addEventListener('click', peep);
});
