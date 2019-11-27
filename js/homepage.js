var accounts = JSON.parse(localStorage.getItem('accounts'));
var currentId = localStorage.getItem('id');
console.log(accounts[currentId].username);

var newH3 = document.createElement('h3');
var textHere = document.createTextNode('Welcome ' + accounts[currentId].username);
newH3.appendChild(textHere);
var addHere = document.getElementById('welcome');
addHere.appendChild(newH3);