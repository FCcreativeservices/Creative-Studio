function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Wf50hofQD2":
        Script1();
        break;
      case "6czlG0KaFyI":
        Script2();
        break;
      case "6BOzSVp6eMX":
        Script3();
        break;
      case "64f7Z7yiYAT":
        Script4();
        break;
      case "6F6E75I2F70":
        Script5();
        break;
      case "63rGDG4rHV8":
        Script6();
        break;
      case "6g8YlS3uc6L":
        Script7();
        break;
      case "5o0DoXDFtJz":
        Script8();
        break;
      case "5ycGQKb213D":
        Script9();
        break;
      case "61fWZTC9HA7":
        Script10();
        break;
      case "6F8FPunp5y4":
        Script11();
        break;
      case "6goboJ2ShVz":
        Script12();
        break;
      case "60asf25yd0S":
        Script13();
        break;
      case "5aqUut9sm8U":
        Script14();
        break;
      case "6EIV51BxVGZ":
        Script15();
        break;
      case "5yPHqG5jBUG":
        Script16();
        break;
      case "5r62j9TTb9I":
        Script17();
        break;
      case "5klnw5NV9Rl":
        Script18();
        break;
      case "6qyt3QdoVyd":
        Script19();
        break;
      case "63qwlThToJh":
        Script20();
        break;
      case "6SchaAB6u7v":
        Script21();
        break;
      case "5fnHjQtjxv1":
        Script22();
        break;
      case "5WmwCR7stZ2":
        Script23();
        break;
      case "5vZ4Z89dq0l":
        Script24();
        break;
      case "6EouyF6up9V":
        Script25();
        break;
      case "6jjcIg6HOt9":
        Script26();
        break;
      case "5y7T4VbcuEY":
        Script27();
        break;
      case "6h9Gp6Y9Tym":
        Script28();
        break;
      case "6bA5kJ4T1eP":
        Script29();
        break;
      case "6E6oSBjm6Ii":
        Script30();
        break;
      case "66yyryyGTJT":
        Script31();
        break;
      case "5hKs72KuZhP":
        Script32();
        break;
      case "5cCh4ORgloS":
        Script33();
        break;
      case "6T3WGkj6B8Y":
        Script34();
        break;
      case "6f08NGpNVTC":
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
