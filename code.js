// minified javascript for bookmarklet
// javascript:(function(){const element=document.getElementsByClassName("xwd__clue-list--obscured");element[0].classList.remove("xwd__clue-list--obscured"),setTimeout(()=>{element[0].classList.remove("xwd__clue-list--obscured")},1),document.getElementsByClassName("modal-system-container")[0].remove(),stopSound();const elements=document.querySelectorAll('[data-group="cells"]')[0],count=elements.children.length,letters=[],numberOverlay=[],clickEvent=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});function getLetters(e){stopSound(),elements.children[e].dispatchEvent(clickEvent),document.getElementsByClassName("xwd__menu--container")[1].children[0].children[0].click(),setTimeout(()=>{stopSound();let t,l;switch(elements.children[e].children.length){case 3:t=elements.children[e]?.children[1]?.children[0]?.textContent??void 0,letters.push(t),l="none",numberOverlay.push(l),stopSound();break;case 4:t=elements.children[e]?.children[2]?.children[0]?.textContent??void 0,letters.push(t),l=elements.children[e]?.children[1]?.textContent??void 0,numberOverlay.push(l),stopSound();break;default:letters.push("blank"),l="none",numberOverlay.push(l),stopSound()}},0)}for(let i=0;i<count;i++)getLetters(i),stopSound();function stopSound(){setTimeout(()=>{document.querySelectorAll("audio").forEach(e=>{e.pause(),e.currentTime=0})},1)}element[0].classList.remove("xwd__clue-list--obscured");const cover=document.createElement("div");cover.id="cover",document.body.appendChild(cover),cover.style.width="100dvw",cover.style.height="300dvh",cover.style.position="absolute",cover.style.zIndex="99",cover.style.backgroundColor="white",cover.style.margin="auto",cover.style.overflow="auto";const cloneThis=document.getElementsByClassName("xwd__layout--cluelists")[0],clone=cloneThis.cloneNode(!0);clone.style.zIndex="99999999 !important",clone.style.top="0 !important",clone.style.right="0 !important",cover.appendChild(clone),cover.getElementsByClassName("xwd__layout--cluelists")[0].classList.remove("xwd__layout--cluelists");const crosswordRect=elements.getBoundingClientRect(),crosswordHeight=crosswordRect.height,crosswordWidth=crosswordRect.width,boxRect=elements.children[0].getBoundingClientRect(),boxHeight=boxRect.height,boxWidth=boxRect.width,newBox=document.createElement("div");newBox.id="newBox",cover.appendChild(newBox),newBox.style.width=`${crosswordWidth}px`,newBox.style.height=`${crosswordHeight}px`,newBox.style.backgroundColor="lightblue",newBox.style.outline="3px solid black",newBox.style.zIndex="99999999",newBox.style.display="grid";let repeatLength=Math.round(crosswordWidth/boxWidth);function createCells(){for(let e=0;e<elements.children.length;e++){let t=document.createElement("div");t.style.position="relative",newBox.appendChild(t);let l=document.createElement("p");if(l.style.height=`${boxHeight}px`,l.style.width=`${boxWidth}px`,l.style.outline="1px solid black",l.style.borderCollapse="collapse",l.style.fontSize=`${boxWidth-5}px`,l.style.textAlign="center",l.style.overflow="hidden",l.style.position="relative",l.id=`${e}`,"blank"==letters[e]?(l.style.backgroundColor="black",l.contentEditable=!1):(l.style.backgroundColor="white",l.contentEditable=!0,l.className="cell"),t.appendChild(l),"none"!==numberOverlay[e]){let n=document.createElement("div");n.className="overlay",n.textContent=`${numberOverlay[e]}`,n.style.position="absolute",n.style.fontSize="100%",n.style.color="black",n.style.zIndex="999999999999",l.parentNode.insertBefore(n,l)}}}newBox.style.gridTemplateColumns=`repeat(${repeatLength}, minmax(${boxWidth}px, 1fr))`,newBox.style.gridTemplateRows="auto",newBox.style.gap="0px",newBox.style.borderCollapse="collapse",newBox.style.marginLeft="5dvh",newBox.style.borderSizing="border-box",newBox.style.position="relative",setTimeout(()=>createCells(),2e3);let cells;setTimeout(()=>{detectCells(),document.getElementById("js-global-nav").remove()},2e3);let beenChecked=0;function detectCells(){cells=document.querySelectorAll("p.cell"),setInterval(()=>{Array.from(cells).some(e=>0==e.textContent.length)&&(beenChecked=0),Array.from(cells).some(e=>e.textContent.length>1)&&cells.forEach(e=>{e.textContent=e.textContent.charAt(0),beenChecked=0}),Array.from(cells).every(e=>e.textContent.length>0)&&0==beenChecked&&checkWin()},25)}const checker=[];function checkWin(){for(let e=0;e<letters.length;e++){let t=document.getElementById(e.toString());t.textContent.toUpperCase()==letters[e]?(checker.push("check"),console.log(`ckeck${e}`)):""==t.textContent&&"blank"==letters[e]&&(checker.push("check"),console.log(`ckeck${e}blank`))}checker.length==letters.length?(document.querySelectorAll("audio").forEach(e=>{e.play()}),alert("yay you win"),function e(t){let l=document.createElement("script");l.src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js",l.onload=t,document.head.appendChild(l)}(function e(){confetti({particleCount:180,spread:120,colors:["#03fcc2","#fc03a9"],origin:{y:1}});let t=Date.now()+1e3;!function e(){confetti({particleCount:6,angle:60,spread:100,colors:["#FFD700"],origin:{x:0,y:1}}),confetti({particleCount:6,angle:120,spread:100,colors:["#FFD700"],origin:{x:1,y:1}}),Date.now()<t&&requestAnimationFrame(e)}()}),beenChecked=1,checker.length=0):(alert("hrrm try again"),beenChecked=1,checker.length=0)}})();


// code starts here
const element = document.getElementsByClassName('xwd__clue-list--obscured')
element[0].classList.remove('xwd__clue-list--obscured');
setTimeout(() => {element[0].classList.remove('xwd__clue-list--obscured');}, 1);

document.getElementsByClassName('modal-system-container')[0].remove();

stopSound();


const elements = document.querySelectorAll('[data-group="cells"]')[0];
const count = elements.children.length;
const letters = [];
const numberOverlay = [];

const clickEvent = new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
  view: window
});



function getLetters(i) {
    stopSound();
    var clickOnThis = elements.children[i];
    clickOnThis.dispatchEvent(clickEvent);
    document.getElementsByClassName('xwd__menu--container')[1].children[0].children[0].click();

    setTimeout(() => {
stopSound();
let letter;
let overlay;
        switch (elements.children[i].children.length) {

            case 3:
letter = elements.children[i]?.children[1]?.children[0]?.textContent ?? undefined;
letters.push(letter);
overlay = `none`;
numberOverlay.push(overlay);
stopSound();
break;

            case 4:
letter = elements.children[i]?.children[2]?.children[0]?.textContent ?? undefined;
letters.push(letter);
overlay = elements.children[i]?.children[1]?.textContent ?? undefined;
numberOverlay.push(overlay);
stopSound();
break;

            default:
                letters.push(`blank`);
                overlay = `none`;
                numberOverlay.push(overlay);
                stopSound();
}

    }, 0);
}


for (let i = 0; i < (count); i++) {
getLetters(i);
stopSound();
}

function stopSound() {
setTimeout(() => {
    document.querySelectorAll('audio').forEach(el => {
        el.pause();
        el.currentTime = 0;
    });},
    1
    )
}


element[0].classList.remove('xwd__clue-list--obscured')



const cover = document.createElement('div');
cover.id = 'cover';
document.body.appendChild(cover);
cover.style.width = `100dvw`;
cover.style.height = `300dvh`;
cover.style.position = `absolute`;
cover.style.zIndex = `99`;
cover.style.backgroundColor = `white`;
cover.style.margin = `auto`;
cover.style.overflow = `auto`;

const cloneThis = document.getElementsByClassName('xwd__layout--cluelists')[0];
const clone = cloneThis.cloneNode(true);
clone.style.zIndex = `99999999 !important`;
clone.style.top = `0 !important`;
clone.style.right = `0 !important`;
cover.appendChild(clone);
cover.getElementsByClassName('xwd__layout--cluelists')[0].classList.remove('xwd__layout--cluelists');




const crosswordRect = elements.getBoundingClientRect();

const crosswordHeight = crosswordRect.height;
const crosswordWidth = crosswordRect.width;

const boxRect = elements.children[0].getBoundingClientRect();

const boxHeight = boxRect.height;
const boxWidth = boxRect.width;



const newBox = document.createElement('div');
newBox.id = 'newBox';
cover.appendChild(newBox);


newBox.style.width = `${crosswordWidth}px`;
newBox.style.height = `${crosswordHeight}px`;
newBox.style.backgroundColor = 'lightblue';
newBox.style.outline = '3px solid black';
newBox.style.zIndex = `99999999`;
newBox.style.display = `grid`;
let repeatLength = Math.round(crosswordWidth / boxWidth)
newBox.style.gridTemplateColumns = `repeat(${repeatLength}, minmax(${boxWidth}px, 1fr))`;
newBox.style.gridTemplateRows = `auto`;
newBox.style.gap = `0px`;
newBox.style.borderCollapse = `collapse`;
newBox.style.marginLeft = `5dvh`;
newBox.style.borderSizing = `border-box`;
newBox.style.position = `relative`;


setTimeout(() => createCells(), 2000);


function createCells() {
for (let i = 0; i < (elements.children.length); i++) {

let cellWrapper = document.createElement("div");
cellWrapper.style.position = `relative`;
newBox.appendChild(cellWrapper);


let cell = document.createElement("p");
cell.style.height = `${boxHeight}px`;
cell.style.width = `${boxWidth}px`;
cell.style.outline = '1px solid black';
cell.style.borderCollapse = `collapse`;
cell.style.fontSize = `${boxWidth - 5}px`;
cell.style.textAlign = `center`;
cell.style.overflow = `hidden`;
cell.style.position = `relative`;
cell.id = `${i}`;
if (letters[i] == `blank`) {cell.style.backgroundColor = `black`; cell.contentEditable = false;} else {cell.style.backgroundColor = `white`;
cell.contentEditable = true;
cell.className = `cell`;
}
cellWrapper.appendChild(cell);


if (numberOverlay[i] !== `none`) {

const makeOverlay = document.createElement('div');
makeOverlay.className = 'overlay';
makeOverlay.textContent = `${numberOverlay[i]}`;
makeOverlay.style.position = `absolute`;
makeOverlay.style.fontSize = `100%`;
makeOverlay.style.color = `black`;
makeOverlay.style.zIndex = `999999999999`;
cell.parentNode.insertBefore(makeOverlay, cell);


}

}
}

let cells;

setTimeout(() => {
detectCells();
document.getElementById("js-global-nav").remove();
}, 2000);


let beenChecked = 0;

function detectCells() {
cells = document.querySelectorAll('p.cell');

setInterval(() => {
if (Array.from(cells).some(p => p.textContent.length == 0)) {
    beenChecked = 0;
}
if (Array.from(cells).some(p => p.textContent.length > 1)) {
  cells.forEach(p => {
    p.textContent = p.textContent.charAt(0);
    beenChecked = 0;
  });
}
if ((Array.from(cells).every(p => p.textContent.length > 0)) && (beenChecked == 0)) {
checkWin();
}
;}, 25)

}


const checker = [];
function checkWin() {
for (let i = 0; i < letters.length; i++) {
  const checkedCell = document.getElementById(i.toString());
  if (checkedCell.textContent.toUpperCase() == letters[i]) {
    checker.push(`check`);
    console.log(`ckeck${i}`);
  } else if ((checkedCell.textContent == ``) && (letters[i] == `blank`)) {
    checker.push(`check`);
    console.log(`ckeck${i}blank`);
  }
}





function loadConfettiLibrary(callback) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
  script.onload = callback;
  document.head.appendChild(script);
}

function runConfetti() {

confetti({ particleCount: 180, spread: 120, colors: ['#03fcc2', '#fc03a9'], origin: { y: 1 } });

    const duration = 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 6, angle: 60, spread: 100, colors: ['#FFD700'], origin: { x: 0, y: 1 } });
      confetti({ particleCount: 6, angle: 120, spread: 100, colors: ['#FFD700'], origin: { x: 1, y: 1 } });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}









if (checker.length == letters.length) {
document.querySelectorAll('audio').forEach(el => {
        el.play();
    });
alert(`yay you win`);

loadConfettiLibrary(runConfetti);

beenChecked = 1;
checker.length = 0;
} else {
alert(`hrrm try again`);
beenChecked = 1;
checker.length = 0;
}

}
