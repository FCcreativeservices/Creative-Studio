function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64WxuHPUVy1":
        Script1();
        break;
      case "62xCFhdPOml":
        Script2();
        break;
      case "6PGpv31wgcl":
        Script3();
        break;
      case "5We481fXiQd":
        Script4();
        break;
      case "6FKiHJiGleE":
        Script5();
        break;
      case "6D3Av7RNo1g":
        Script6();
        break;
      case "6H0681TuUns":
        Script7();
        break;
      case "5mv2H1aL9YD":
        Script8();
        break;
      case "6VDxfAhc6Z5":
        Script9();
        break;
      case "6KYi2BYIL3U":
        Script10();
        break;
      case "6XbZpZGuRWJ":
        Script11();
        break;
      case "5ijMXtK3CHv":
        Script12();
        break;
      case "6HUASiRUbND":
        Script13();
        break;
      case "6i1fNdM6aHi":
        Script14();
        break;
      case "64tvG1GNCs9":
        Script15();
        break;
      case "63ztAb7mgvB":
        Script16();
        break;
      case "6Vc1C0voYXl":
        Script17();
        break;
      case "5hajTd8snmd":
        Script18();
        break;
      case "5fqasD3ihx4":
        Script19();
        break;
      case "5tzaQd9KOUR":
        Script20();
        break;
      case "6qhyJa1y7yC":
        Script21();
        break;
      case "6NGaeOPd5J1":
        Script22();
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
