//window.addEventListener('load', init);

// Globals

const imgno=7;
// Available Level
const levels = {
  easy: 20,
  medium: 15,
  hard: 10
};

// To change level
var currentLevel;

var time;
let score = 0;
let speed = 0;
let isPlaying;

var x,y;

// DOM Elements


const scoreDisplay = document.querySelector('#score');
const highscore = document.querySelector('#hscore');
const yourscore = document.querySelector('#yscore');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const btn=document.querySelector('#play');
const img1=document.getElementById('img1');
const img2=document.getElementById('img2');

function myfun(type){
  if(message.innerHTML!="Game Over!!"){
  if(type=='img1'){
  if(img1.src.indexOf('Nature')!=-1){
  score++;
  message.innerHTML= "Correct";
  message.style.color="green";
  }else{
    message.innerHTML= "Wrong";
    message.style.color="red";
  }
}else{
  if(img2.src.indexOf('Nature')!=-1){
    score++;
    message.innerHTML= "Correct";
    message.style.color="green";
      console.log(score);
    }else{
      message.innerHTML= "Wrong";
      message.style.color="red";
    }
  }
  if(score>parseInt(highscore.innerText))
  highscore.innerHTML=score;
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
  showImages();}
}

// Initialize Game
function init() {
scoreDisplay.innerHTML="0";
score=0;
  level();
  checkCookie();
  showImages();
  x = setInterval(countdown, 1000);
  y = setInterval(checkStatus, 50);
}

function showImages() {
  const randIndex = Math.floor(Math.random() * imgno)+1;
  const rand=Math.floor(Math.random()*2);
  if(rand==1){
  img1.src="Nature/"+randIndex+".jpg";
  img2.src="Opposite/"+randIndex+".jpg";}
  else{
  img2.src="Nature/"+randIndex+".jpg";
  img1.src="Opposite/"+randIndex+".jpg";
  }
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    message.innerHTML="Game Over!!";
    message.style.color="red";
    isPlaying = false;
    clearInterval(x);
  }
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    clearInterval(y);
    btn.innerHTML='Play Again';
    score = -1;
    setCookie("highscore", highscore.innerText, 365);
  }
}

btn.addEventListener('click',function(){
  img1.style.display="inherit";
  img2.style.display="inherit";
  if(this.innerText=='Play'||this.innerText=='Play Again'){
    message.innerHTML="";
    time=currentLevel;
      init();
      btn.innerHTML="Playing..."
  }
})

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("highscore");
  if (user != "") {
    highscore.innerHTML=user;
  } else {
    if (user != "" && user != null && parseInt(user)<score) {
      setCookie("highscore", score, 365);
      highscore.innerHTML=score;
    }
  }
}

function level() {  
  if(document.getElementById('option1').checked) { 
    currentLevel=levels.easy;
  } 
  else if(document.getElementById('option2').checked) { 
    currentLevel=levels.medium;
  } 
  else if(document.getElementById('option3').checked) { 
      currentLevel=levels.hard;
  } 
  time=currentLevel;
  seconds.innerHTML=time;
} 

/* -----------------------------------------------------------------------*/
 document.onkeydown = function(e) {
  if(event.keyCode == 123) {
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
  return false;
  }
  }

  $(document).bind("contextmenu",function(e) {
    e.preventDefault();
   });
   
   $(document).keydown(function(e){
       if(e.which === 123){
          return false;
       }
   }); 
