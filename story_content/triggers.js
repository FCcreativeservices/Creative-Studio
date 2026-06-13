function ExecuteScript(strId)
{
  switch (strId)
  {
      case "69Zvt1yfSpt":
        Script1();
        break;
      case "6FnwB1H8s2m":
        Script2();
        break;
      case "64lwaxWtgxc":
        Script3();
        break;
      case "68I1fiweuPi":
        Script4();
        break;
      case "6EBD9vjqBw6":
        Script5();
        break;
      case "5fcbg3nmNDW":
        Script6();
        break;
      case "5jWg5oaz49b":
        Script7();
        break;
      case "5imKO2Qwbzh":
        Script8();
        break;
      case "69vIUt40tVw":
        Script9();
        break;
      case "6YTyC4UyalC":
        Script10();
        break;
      case "6GpieNRZyzi":
        Script11();
        break;
      case "5uklWfySGfr":
        Script12();
        break;
      case "691yo6RkBeD":
        Script13();
        break;
      case "5UuOrQaQZ3g":
        Script14();
        break;
      case "6T44UYCbXb1":
        Script15();
        break;
      case "6BCsbM5k4XP":
        Script16();
        break;
      case "6KmzicVD9g7":
        Script17();
        break;
      case "5cM2mI4dMSq":
        Script18();
        break;
      case "6nePJPLPka7":
        Script19();
        break;
      case "6k5lSELBauj":
        Script20();
        break;
      case "5qwXpWI87uY":
        Script21();
        break;
      case "6XrpbWyWYOe":
        Script22();
        break;
      case "6S9X20Kl54Y":
        Script23();
        break;
      case "6IkFSACUBYN":
        Script24();
        break;
      case "69G9yxAgo1t":
        Script25();
        break;
      case "5dp5ObIfLGR":
        Script26();
        break;
      case "5uzmlUmzhzq":
        Script27();
        break;
      case "5oyQmD1GY5p":
        Script28();
        break;
      case "603at3RhePl":
        Script29();
        break;
      case "5jwP8pCHXcA":
        Script30();
        break;
      case "6Lf2nJ5BDzi":
        Script31();
        break;
      case "5aAFfj2oune":
        Script32();
        break;
      case "6UAt5ZH2eKc":
        Script33();
        break;
      case "5jB8IHl59cj":
        Script34();
        break;
      case "6OZtjxj03lX":
        Script35();
        break;
  }
}

window.InitExecuteScripts = function()
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
window.Script1 = function()
{
  const target = object('62rqP2pt7Zu');
const duration = 750;
const easing = 'ease-out';
const id = '63dbiV7ItO3';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5g37YhylPQb');
const duration = 750;
const easing = 'ease-out';
const id = '5evEwmNUljd';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
