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