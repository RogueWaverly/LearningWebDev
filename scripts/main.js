var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

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

myButton.onclick = function()
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