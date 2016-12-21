var myHeading = document.querySelector('h1');
var changeUserButton = document.getElementById('changeUserButton');

function setUserName()
{
	var myName = prompt('Please enter your name.');
	if(myName !== null)
	{
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Welcome, ' + myName + ", to Waverly Place!";
	}
}

if(!localStorage.getItem('name'))
{
	setUserName();
}
else
{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome, ' + storedName + ", to Waverly Place!";
}

changeUserButton.onclick = function()
{
 	setUserName();
}



document.querySelector('html').onclick = function()
{
	//alert('Ouch! Stop poking me!');
}



var myImage = document.querySelector('img');

myImage.onclick = function()
{
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/find-your-wei.png')
	{
		myImage.setAttribute ('src','images/lose-yourself.webp');
	}
	else
	{
		myImage.setAttribute ('src','images/find-your-wei.png');
	}
}

var shuffleButton = document.getElementById('shuffleButton');
var thisArray = ['A','B','C','D','E','F','G'];

function displayArray(array, id)
{
	document.getElementById(id).innerHTML = "<ol>";

	for(var i=0; i<array.length; i++)
	{
		document.getElementById(id).innerHTML += "<li>" + array[i] + "</li>";
	}

	document.getElementById(id).innerHTML += "</ol>";
}

function swap(array, i, j)
{
	var itemAtJ = array[j];
	array[j] = array[i];
	array[i] = itemAtJ;
}

function shuffleArray(array)
{
	for(var i=0; i<array.length; i++)
	{
		var randomIndex = Math.floor((Math.random() * array.length));
		
		/*var itemAtIndex = array[randomIndex];
		array[randomIndex] = array[i];
		array[i] = itemAtIndex;*/
		swap(array, i, randomIndex);
	}
}

displayArray(thisArray,"arrayDiv");

shuffleButton.onclick = function()
{
	shuffleArray(thisArray);
	displayArray(thisArray,"arrayDiv");
}

/* 
// Fisher-Yates shuffle algorithm
// Time: O(N)
// Space: additional O(1)
// Every permutation is equally likely
Array.prototype.shuffle = function()
{
	var input = this;
	for(var i = input.length-1; i >= 0; i--)
	{
		var itemAtIndex = input[randomIndex];
		input[randomIndex] = input[i];
		input[i] = itemAtIndex;
	}
	return input;
}
*/