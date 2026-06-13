window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script3 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

function add_line() {
  var line = document.createElement("audio");
  var head = document.getElementsByTagName('body')[0];
  line.type = "audio/mp3";
  line.src = "";
  line.id = "bgSong";
  line.autoplay = true;
  line.loop = true;
  head.appendChild(line);
}

if (document.getElementById('bgSong') == null) {
  add_line();
  var audio = document.getElementById('bgSong');
  audio.volume = volume;
}

var audio = document.getElementById('bgSong');
this.Location = player.GetVar("location");

if (audio.duration > 0 && !audio.paused) {
  // already playing
} else {
  audio.src = Location + "Music.mp3";
  audio.load();
  audio.play();
}
}

window.Script4 = function()
{
  var bgAudio = document.getElementById("bgSong");
if (bgAudio) {
    bgAudio.pause();
    bgAudio.remove(); // elimina el elemento del DOM
}

}

window.Script5 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = false; // Fuerza que arranquen con sonido
});
}

window.Script6 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script7 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script8 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

var audio = document.getElementById('bgSong');
audio.volume = volume;
}

window.Script9 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script10 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

function add_line() {
  var line = document.createElement("audio");
  var head = document.getElementsByTagName('body')[0];
  line.type = "audio/mp3";
  line.src = "";
  line.id = "bgSong";
  line.autoplay = true;
  line.loop = true;
  head.appendChild(line);
}

if (document.getElementById('bgSong') == null) {
  add_line();
  var audio = document.getElementById('bgSong');
  audio.volume = volume;
}

var audio = document.getElementById('bgSong');
this.Location = player.GetVar("location");

if (audio.duration > 0 && !audio.paused) {
  // already playing
} else {
  audio.src = Location + "Music.mp3";
  audio.load();
  audio.play();
}
}

window.Script11 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script12 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script13 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

var audio = document.getElementById('bgSong');
audio.volume = volume;
}

window.Script14 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script15 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

function add_line() {
  var line = document.createElement("audio");
  var head = document.getElementsByTagName('body')[0];
  line.type = "audio/mp3";
  line.src = "";
  line.id = "bgSong";
  line.autoplay = true;
  line.loop = true;
  head.appendChild(line);
}

if (document.getElementById('bgSong') == null) {
  add_line();
  var audio = document.getElementById('bgSong');
  audio.volume = volume;
}

var audio = document.getElementById('bgSong');
this.Location = player.GetVar("location");

if (audio.duration > 0 && !audio.paused) {
  // already playing
} else {
  audio.src = Location + "Music.mp3";
  audio.load();
  audio.play();
}
}

window.Script16 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script17 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script18 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

var audio = document.getElementById('bgSong');
audio.volume = volume;
}

window.Script19 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script20 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

function add_line() {
  var line = document.createElement("audio");
  var head = document.getElementsByTagName('body')[0];
  line.type = "audio/mp3";
  line.src = "";
  line.id = "bgSong";
  line.autoplay = true;
  line.loop = true;
  head.appendChild(line);
}

if (document.getElementById('bgSong') == null) {
  add_line();
  var audio = document.getElementById('bgSong');
  audio.volume = volume;
}

var audio = document.getElementById('bgSong');
this.Location = player.GetVar("location");

if (audio.duration > 0 && !audio.paused) {
  // already playing
} else {
  audio.src = Location + "Music.mp3";
  audio.load();
  audio.play();
}
}

window.Script21 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script22 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script23 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

var audio = document.getElementById('bgSong');
audio.volume = volume;
}

window.Script24 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script25 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

function add_line() {
  var line = document.createElement("audio");
  var head = document.getElementsByTagName('body')[0];
  line.type = "audio/mp3";
  line.src = "";
  line.id = "bgSong";
  line.autoplay = true;
  line.loop = true;
  head.appendChild(line);
}

if (document.getElementById('bgSong') == null) {
  add_line();
  var audio = document.getElementById('bgSong');
  audio.volume = volume;
}

var audio = document.getElementById('bgSong');
this.Location = player.GetVar("location");

if (audio.duration > 0 && !audio.paused) {
  // already playing
} else {
  audio.src = Location + "Music.mp3";
  audio.load();
  audio.play();
}
}

window.Script26 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script27 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script28 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

var audio = document.getElementById('bgSong');
audio.volume = volume;
}

window.Script29 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script30 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

function add_line() {
  var line = document.createElement("audio");
  var head = document.getElementsByTagName('body')[0];
  line.type = "audio/mp3";
  line.src = "";
  line.id = "bgSong";
  line.autoplay = true;
  line.loop = true;
  head.appendChild(line);
}

if (document.getElementById('bgSong') == null) {
  add_line();
  var audio = document.getElementById('bgSong');
  audio.volume = volume;
}

var audio = document.getElementById('bgSong');
this.Location = player.GetVar("location");

if (audio.duration > 0 && !audio.paused) {
  // already playing
} else {
  audio.src = Location + "Music.mp3";
  audio.load();
  audio.play();
}
}

window.Script31 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script32 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script33 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script34 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

var audio = document.getElementById('bgSong');
audio.volume = volume;
}

window.Script35 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

};
