const incrementButton = document.getElementById('increment-button')

incrementButton.addEventListener('click', () => {
  let userZone = moment.tz.guess(true);
  let zoneObj = moment.tz.zone(userZone);
  console.log(zoneObj.parse(Date.UTC(2012, 2, 19, 8, 30)))
  console.log(userNow.zoneObj)
});
//--------- Location Selection ------------//
// let names = 0;
// Object.values(moment.tz._countries).forEach(n => {names+=1; console.log(n)})
//------------ Time Display ---------------//
Then.all = [];
let otherTimes = [];
//get user's current time as YYYY-MM-DD HH:mm
let userNow = new Now();
let root = userNow;

//get selected timezone
new Then("Asia/Taipei");
new Then("Asia/Tehran");

let userTimeDisplay = document.querySelector(".user-time");
let rootTimeDisplay = document.querySelector(".root-time");
let timeDisplayContainer = document.querySelector(".zones");

Then.all.forEach(t => {
  let p = document.createElement("p");
  timeDisplayContainer.appendChild(p);
  otherTimes.push({p, t});
})

function updateTime() {
  userTimeDisplay.innerText = userNow.city + ", " + userNow.country + " " + userNow.format;
  rootTimeDisplay.innerText = userNow.city + ", " + userNow.country + " " + userNow.format;
  otherTimes.forEach(o => {
    o.p.innerText = o.t.city + ", " + o.t.country + " " + o.t.format;
  });
  // otherTimeDisplay.innerText = userThen.format;
  setTimeout(updateTime, 500);
}
updateTime();

//Bonus Features:
//increment time and show locations in that time
//select timezone from map and display time/ date above it or add to list

