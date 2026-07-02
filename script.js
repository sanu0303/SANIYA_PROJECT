const moodData = {

happy:{

score:95,

songs:[
{
title:"Zingaat",
video:"https://www.youtube.com/embed/2gcsgfzqN8k?si=b5VW2GLZhSsoD-jF"
},
{
title:"Zindagi Zindagi",
video:"https://www.youtube.com/embed/rRpfAHwtveQ?si=pCzOtGzbcOhteAvV"
},
{
title:"Sharaarat",
video:"https://www.youtube.com/embed/v5jVX0QYwQo?si=uUPu0lCoEP1CX9vb"
},
{
    title:"O Rangrez",
    video:"https://www.youtube.com/embed/jmpUP1MaQ9Q?si=rqpLtIQVZU6BHIvi"
}
],

activity:
"Call your friends, go out for a walk and celebrate the moment.",

quote:
"Happiness grows when shared."
},

sad:{

score:40,

songs:[
{
title:"Teri Deewani",
video:"https://www.youtube.com/embed/zZasH6qkn8M?si=mC0k5TJhsmEowMky"
},
{
title:"Maagu Kasa Mi",
video:"https://www.youtube.com/embed/DkGV--T10c4?si=nflMGDIyHLOj6Zfd"
},
{
title:"Kaakan",
video:"https://www.youtube.com/embed/9HNx1NIwdAc?si=AHhCgZTPEXJtixr2"
},
{
title:"Rula Ke gaya Ishq Tera",
video:"https://www.youtube.com/embed/M1_0-su3fiU?si=W9cAEORWBG38kk_t"
}
],

activity:
"Write your feelings in a journal and spend time with loved ones.",

quote:
"Every storm runs out of rain."
},

stressed:{

score:55,

songs:[
{
title:"Relaxing Flute Music",
video:"https://www.youtube.com/embed/tF4z5kntXAA?si=3KQhg01ZKPhFyMk9"
},
{
title:"Meditation Music",
video:"https://www.youtube.com/embed/Dg9ALgX_kMI?si=qI8sIIKFqdvNGQkC"
},
{
title:"Peaceful Piano",
video:"https://www.youtube.com/embed/WK7LqjCnNVo?si=UcKXRg2Gd3xzyV3E"
},
{
    title:"Mind fresh songs",
    video:"https://www.youtube.com/embed/XBqZijvxEEc?si=v0GuOAWOR2UE7521"
}
],

activity:
"Take deep breaths and relax for 10 minutes.",

quote:
"One step at a time."
},

focused:{

score:90,

songs:[
{
title:"LoFi Study Beats",
video:"https://www.youtube.com/embed/b_b9c2ewvaM?si=lcurCyDOvZb1PaA9"
},
{
title:"Deep Focus Music",
video:"https://www.youtube.com/embed/Rcofz-30dnU?si=vuJczVLZHBP0BE2u"
},
{
title:"Coding Playlist",
video:"https://www.youtube.com/embed/0w80F8FffQ4?si=Urv6K09--8guf06r"
}
],

activity:
"Use Pomodoro technique and avoid distractions.",

quote:
"Focus on progress, not perfection."
},

excited:{

score:100,

songs:[
{
title:"Chak De India",
video:"https://www.youtube.com/embed/bnqLzCsffwY?si=W8v9BOiYcnYS-8Mn"
},
{
title:"Jai Jai Maharashtra",
video:"https://www.youtube.com/embed/sXqqbOIz3VY?si=T8JwLqiFsQHtCm7A"
},
{
title:"Khol De Par",
video:"https://www.youtube.com/embed/u871WK7kem8?si=sGetaYxc2kAUQ3Y0"
},
{
    title:"Ziddi Dil",
    video:"https://www.youtube.com/embed/puKD3nkB1h4?si=0N0Kq92D4IYaJVU-"
}
],

activity:
"Channel your energy into a new project.",

quote:
"Energy creates opportunities."
}

};

function showMood(mood){

const data = moodData[mood];

generateSongs(data.songs);

document.getElementById("activity").innerText =
data.activity;

document.getElementById("quote").innerText =
data.quote;

animateScore(data.score);

saveMood(mood);

updateStats();

changeTheme(mood);

createMusicNotes();

document.getElementById("analysis")
.innerHTML =
"🧠 Analyzing Emotion...";

setTimeout(()=>{

document.getElementById("analysis")
.innerHTML =
insights[mood];

},1000);

const avatars = {

happy:"😊",

sad:"😔",

stressed:"😩",

focused:"🎯",

excited:"🥳"

};

document.getElementById("avatar")
.innerHTML =
avatars[mood];

}

function generateSongs(songs){

const container =
document.getElementById("songContainer");

container.innerHTML = "";

songs.forEach(song=>{

container.innerHTML += `

<div class="song-card">

<div class="song-title">
🎵 ${song.title}
</div>

<button
class="play-btn"
onclick="playSong('${song.video}')">

Play

</button>

</div>

`;

});

}

function playSong(video){

document.getElementById("player").src =
video;

}

function animateScore(score){

document.getElementById("progressBar").style.width =
score + "%";

document.getElementById("scoreText").innerText =
score + "% Mood Energy";

}

function saveMood(mood){

let moods =
JSON.parse(
sessionStorage.getItem("moodHistory")
) || [];

moods.push(mood);

sessionStorage.setItem(
"moodHistory",
JSON.stringify(moods)
);

displayHistory();

}

function displayHistory(){

let moods =
JSON.parse(
sessionStorage.getItem("moodHistory")
) || [];

const history =
document.getElementById("history");

history.innerHTML = "";

moods.slice().reverse().forEach(item=>{

history.innerHTML +=

`<li>${item}</li>`;

});

}

function updateStats(){

let moods =
JSON.parse(
sessionStorage.getItem("moodHistory")
) || [];

let counts = {};

moods.forEach(mood=>{

counts[mood] =
(counts[mood] || 0) + 1;

});

const stats =
document.getElementById("stats");

stats.innerHTML = "";

for(let mood in counts){

stats.innerHTML += `

<div class="stat-box">

${mood.toUpperCase()} :
${counts[mood]}

</div>

`;

}

}

function changeTheme(mood){

const body =
document.body;

if(mood==="happy"){

body.style.background =
"linear-gradient(135deg,#f59e0b,#f97316)";

}

if(mood==="sad"){

body.style.background =
"linear-gradient(135deg,#2563eb,#06b6d4)";

}

if(mood==="stressed"){

body.style.background =
"linear-gradient(135deg,#10b981,#22c55e)";

}

if(mood==="focused"){

body.style.background =
"linear-gradient(135deg,#7c3aed,#4f46e5)";

}

if(mood==="excited"){

body.style.background =
"linear-gradient(135deg,#ec4899,#8b5cf6)";

}

}

displayHistory();
updateStats();

function createMusicNotes(){

const container =
document.getElementById("music-notes");

for(let i=0;i<15;i++){

const note =
document.createElement("div");

note.classList.add("note");

note.innerHTML =
["🎵","🎶","♫"][Math.floor(Math.random()*3)];

note.style.left =
Math.random()*100 + "%";

note.style.animationDuration =
(4 + Math.random()*4) + "s";

container.appendChild(note);

setTimeout(()=>{
note.remove();
},7000);

}

}

const insights = {

happy:
"You appear energetic and socially active today.",

sad:
"You may need emotional support and self-care.",

focused:
"You are ready for deep work and productivity.",

stressed:
"Your mind needs relaxation and recovery.",

excited:
"You have high energy levels and motivation."

};