function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CLAJIGJe6I":
        Script1();
        break;
      case "6eByyGmR3vh":
        Script2();
        break;
      case "5vFgxND4BF1":
        Script3();
        break;
      case "5mSMqMRmJUr":
        Script4();
        break;
      case "60z3wDgD7bF":
        Script5();
        break;
      case "6bACVsO7dEN":
        Script6();
        break;
      case "61Ag3LRg7hi":
        Script7();
        break;
      case "6l6AP3rT6K2":
        Script8();
        break;
      case "656FDFr2iIh":
        Script9();
        break;
      case "6XSEOEU9oY2":
        Script10();
        break;
      case "60G6N4gOcvy":
        Script11();
        break;
      case "60NNgZm7gTn":
        Script12();
        break;
      case "6e08DIQC8Ua":
        Script13();
        break;
      case "6AuBzvx3kjA":
        Script14();
        break;
      case "5k8A7RoLyF3":
        Script15();
        break;
      case "6CMeSxZDSUn":
        Script16();
        break;
      case "6ERmaxhAg9q":
        Script17();
        break;
      case "6LzhWruW56f":
        Script18();
        break;
      case "65HytHqpT7X":
        Script19();
        break;
      case "5wmkSACoI2P":
        Script20();
        break;
      case "6TV7767deD1":
        Script21();
        break;
      case "6iF5cPb0R0L":
        Script22();
        break;
      case "5Zpdjc7U7QY":
        Script23();
        break;
      case "6JVJxuW8M2k":
        Script24();
        break;
      case "68paW44LtMo":
        Script25();
        break;
      case "6UeYIFud3nB":
        Script26();
        break;
      case "5o6dAzEnVpl":
        Script27();
        break;
      case "6dQJzQUXpIH":
        Script28();
        break;
      case "63ARBDJDxNJ":
        Script29();
        break;
      case "6QOMrKdREt9":
        Script30();
        break;
      case "5m5uIiEtV9d":
        Script31();
        break;
      case "5ruEw5nuupp":
        Script32();
        break;
      case "6AJipXesqE2":
        Script33();
        break;
      case "5itLn16J5YH":
        Script34();
        break;
      case "6Me64BpSG4T":
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
