
// for navigate through the menu button
$('nav a').on('click', function(e) {
 e.preventDefault();
 var url = this.href;
 $('nav a.current').removeClass('current');
 $(this).addClass('current');
 $('#content').remove();
 $('#section').load(url + '#content');
});
//function of clock
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').textContent =h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
//function for Date
var d = new Date();
var day=d.getDate();
var month=d.getMonth();
var year=d.getFullYear();
document.getElementById("date").textContent = day + "/" + month + "/" + year ;
//function for StopWatch
    var ms=0;
    var s=0;
    var m=0;
    var timer=false;
    //var st=document.getElementById('stop');
    function Start(){
      if(!timer){
        timer=setInterval(Run,10);
      }
    }
    function Run(){
      document.getElementById('stop').textContent= (m<10?"0"+m:m) + ":" + (s<10?"0"+s:s) + ":" + (ms<10?"0"+ms:ms) ;
      ms++;
      if(ms==100){
        ms=0;
        s++;
      }
      if(s==60){
        s=0;
        m++;
      }
    }
    function Stop(){
      clearInterval(timer);
      timer=false;
    }
    function Reset(){
      clearInterval(timer);
      timer=false;
      ms=0;
      s=0;
      m=0;
    document.getElementById('stop').textContent= (m<10?"0"+m:m) + ":" + (s<10?"0"+s:s) + ":" + (ms<10?"0"+ms:ms) ;
    }
//function for music player
/*var songs = ["play1.mp3","play2.mp3","play3.mp3","play4.mp3"];
var song=new Audio();
var currentSong=0;
window.onload=playSong;

function playSong(){
  song.scr=songs[currentSong];
  song.play();
}
function playOrPauseSong(){

    if(song.paused){
        song.play();
        $("#play img").attr("src","Pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","Play.png");
    }
}
function next(){

    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}

function pre(){

    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src","Pause.png");
  //  $("#image img").attr("src",poster[currentSong]);
  //  $("#bg img").attr("src",poster[currentSong]);
}
*/
var songs = ["Song1.mp3","Song2.mp3","Song3.mp3"];
var poster = ["Poster1.jpg","Poster2.jpg","Poster3.jpg"];

var songTitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");

var song = new Audio();
var currentSong = 0;    // it point to the current song

window.onload = playSong;   // it will call the function playSong when window is load

function playSong(){

    song.src = songs[currentSong];  //set the source of 0th song

    songTitle.textContent = songs[currentSong]; // set the title of song

    song.play();    // play the song
}

function playOrPauseSong(){

    if(song.paused){
        song.play();
        $("#play img").attr("src","Pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","Play.png");
    }
}

song.addEventListener('timeupdate',function(){

    var position = song.currentTime / song.duration;

    fillBar.style.width = position * 100 +'%';
});


function next(){

    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}

function pre(){

    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $("#play ").attr("src","Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}
