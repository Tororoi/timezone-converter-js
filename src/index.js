const output = document.getElementById('output');
const incrementButton = document.getElementById('increment-button')

incrementButton.addEventListener('click', () => {
  const currentNumber = Number.parseInt(output.innerText);
  output.innerText = currentNumber + 1;
  let userZone = moment.tz.guess(true);
  let zoneObj = moment.tz.zone(userZone);
  // console.log(zoneObj.parse(Date.UTC(2012, 2, 19, 8, 30)))
  // let newZone = moment.tz(Now.format, "Asia/Taipei");
  // console.log(newZone)
  // let a = moment.utc(userNow.format).tz("Asia/Taipei");
  // let b = moment.utc(userNow.format).tz(userZone);
  // console.log(a.format(), b.format())
  // console.log(a.utc().format())
  console.log(userNow.weekday)
});

//------------ Settings ---------------//
Then.all = [];
let otherTimes = [];
//get user's current time as YYYY-MM-DD HH:mm
let userNow = new Now();

//get selected timezone
new Then("Asia/Taipei");
new Then("America/Los_Angeles");

let userTimeDisplay = document.querySelector(".user-time");
let timeDisplayContainer = document.querySelector(".body-outer");

Then.all.forEach(t => {
  let p = document.createElement("p");
  timeDisplayContainer.appendChild(p);
  otherTimes.push({p, t});
})

function updateTime() {
  userTimeDisplay.innerText = userNow.format;
  otherTimes.forEach(o => {
    o.p.innerText = o.t.format;
  })
  // otherTimeDisplay.innerText = userThen.format;
  setTimeout(updateTime, 500);
}
updateTime();


