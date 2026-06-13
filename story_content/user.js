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
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script5 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script6 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

var audio = document.getElementById('bgSong');
audio.volume = volume;
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

window.Script9 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script10 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script11 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

var audio = document.getElementById('bgSong');
audio.volume = volume;
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

window.Script14 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script15 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script16 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

var audio = document.getElementById('bgSong');
audio.volume = volume;
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

window.Script19 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script20 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

window.Script21 = function()
{
  var player = GetPlayer();
var volume = player.GetVar("MusicVolume");

var audio = document.getElementById('bgSong');
audio.volume = volume;
}

window.Script22 = function()
{
  var audios = document.querySelectorAll("audio, video");
audios.forEach(function(media) {
    media.muted = !media.muted;
});
}

};
