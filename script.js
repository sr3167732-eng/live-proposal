// =========================================
// Romantic Proposal Project v1.0
// Made (Coded) By Sanju (Sagar) Rai
// =========================================

const typing = document.getElementById("typing");
const playBtn = document.getElementById("playMusic");
const music = document.getElementById("music");
const hearts = document.getElementById("hearts");
const petals = document.getElementById("petals");

// ----------------------------
// Play Music
// ----------------------------

playBtn.addEventListener("click", () => {
    music.play();
    playBtn.style.display = "none";
});

// ----------------------------
// Typewriter Effect
// ----------------------------

const message =
`Every flower reminds me of you...

Every heartbeat whispers your name...

You make my world brighter...

❤️ I Love You 3000 ❤️`;

let i = 0;

function typeWriter(){

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,60);

    }

}

setTimeout(typeWriter,1500);

// ----------------------------
// Floating Hearts
// ----------------------------

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(20+Math.random()*35)+"px";

    heart.style.animation="floatHeart "+(6+Math.random()*5)+"s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },11000);

}

setInterval(createHeart,350);

// ----------------------------
// Falling Flowers
// ----------------------------

function createFlower(){

    const flower=document.createElement("div");

    flower.innerHTML="🌸";

    flower.style.position="absolute";

    flower.style.left=Math.random()*100+"vw";

    flower.style.top="-50px";

    flower.style.fontSize=(20+Math.random()*25)+"px";

    flower.style.animation="flowerFall "+(8+Math.random()*5)+"s linear";

    petals.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },13000);

}

setInterval(createFlower,500);
// ----------------------------
// Twinkling Star Field
// ----------------------------

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createStars() {
    stars = [];

    for (let i = 0; i < 250; i++) {

        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.02 + 0.005
        });

    }
}

createStars();

function drawStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let s of stars) {

        s.alpha += s.speed;

        if (s.alpha >= 1 || s.alpha <= 0)
            s.speed *= -1;

        ctx.beginPath();

        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;

        ctx.fill();

    }

    requestAnimationFrame(drawStars);

}

drawStars();
// ==========================================
// Sparkles
// ==========================================

function createSparkle() {

    const s = document.createElement("div");

    s.innerHTML = "✨";

    s.style.position = "absolute";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.fontSize = (8 + Math.random() * 18) + "px";
    s.style.pointerEvents = "none";
    s.style.opacity = 1;

    document.body.appendChild(s);

    let opacity = 1;

    const fade = setInterval(() => {

        opacity -= 0.03;

        s.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(fade);
            s.remove();
        }

    }, 50);

}

setInterval(createSparkle, 150);

// ==========================================
// Hearts Rotating Around Center
// ==========================================

const orbit = document.createElement("div");

orbit.style.position = "fixed";
orbit.style.left = "50%";
orbit.style.top = "50%";
orbit.style.width = "1px";
orbit.style.height = "1px";
orbit.style.pointerEvents = "none";
orbit.style.zIndex = "50";

document.body.appendChild(orbit);

const orbitHearts = [];

for(let i=0;i<18;i++){

    const h=document.createElement("div");

    h.innerHTML="❤️";

    h.style.position="absolute";

    h.style.fontSize="28px";

    orbit.appendChild(h);

    orbitHearts.push(h);

}

let angle=0;

function rotateHearts(){

    angle+=0.01;

    orbitHearts.forEach((h,index)=>{

        const a=angle+(index*(Math.PI*2/orbitHearts.length));

        const r=170;

        h.style.left=Math.cos(a)*r+"px";

        h.style.top=Math.sin(a)*r+"px";

    });

    requestAnimationFrame(rotateHearts);

}

rotateHearts();