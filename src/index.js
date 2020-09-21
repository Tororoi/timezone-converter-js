const output = document.getElementById('output');
const incrementButton = document.getElementById('increment-button')

incrementButton.addEventListener('click', () => {
  const currentNumber = Number.parseInt(output.innerText);
  output.innerText = currentNumber + 1;
  let userZone = moment.tz.guess(true);
  let zoneObj = moment.tz.zone(userZone);
  console.log(zoneObj.parse(Date.UTC(2012, 2, 19, 8, 30)))
});