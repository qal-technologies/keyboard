const three = document.getElementById('three');
const acc = document.getElementById('accessibility');

function show() {
    acc.style.display = 'flex';
    acc.style.height = 'auto';
    acc.style.opacity= '1';
    three.style.display = 'none';
};
function inputt() {
    acc.style.opacity='0';
    acc.style.display = 'none';
    three.style.display = 'block';
}
function play() {
    const sound = document.getElementById('key_sound');

    sound.currentTime = 0;
    sound.play();
};

let isCaps = true;
function caps() {
    //getting all the keys..
    const a = document.getElementById('a');
    const b = document.getElementById('b');
    const c = document.getElementById('c');
    const d = document.getElementById('d');
    const e = document.getElementById('e');
    const f = document.getElementById('f');
    const g = document.getElementById('g');
    const h = document.getElementById('h');
    const i = document.getElementById('i');
    const j = document.getElementById('j');
    const k = document.getElementById('k');
    const l = document.getElementById('l');
    const m = document.getElementById('m');
    const n = document.getElementById('n');
    const o = document.getElementById('o');
    const p = document.getElementById('p');
    const q = document.getElementById('q');
    const r = document.getElementById('r');
    const s = document.getElementById('s');
    const t = document.getElementById('t');
    const u = document.getElementById('u');
    const v = document.getElementById('v');
    const w = document.getElementById('w');
    const x = document.getElementById('x');
    const y = document.getElementById('y');
    const z = document.getElementById('z');
    const key = document.getElementById('key');
    const inpt = document.getElementById('input');
}