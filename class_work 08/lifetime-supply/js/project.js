document.getElementById('click-me').onclick = Calculate;

function Calculate () {

var maxAge = document.getElementById('max-age').value;
maxAge = parseInt(maxAge);

var age = document.getElementById('age').value;
age = parseInt(age);

var yearsLeft = maxAge - age;

var daysLeft = yearsLeft*365;

var drinksPerDay = document.getElementById('num-per-day').value;
drinksPerDay = parseInt(drinksPerDay);

var totalDrinksLeft = drinksPerDay*daysLeft;

document.getElementById('solution').innerHTML = drinksPerDay*daysLeft;

document.getElementById('drink').innerHTML = document.getElementById('item').value;

}