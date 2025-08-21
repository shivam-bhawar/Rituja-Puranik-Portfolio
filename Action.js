const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);	
const desktopWelcomeText = "Hi, there! You’ve stumbled upon something special.";
const instructionset = "";
const desktopSubText = "Click on 'Ready' and pretend it’s 1984 again.";
const mobileWelcomeText = "Nice try, Mobile User. But this experience was handcrafted for a Desktop. Trust me - it’s worth the switch.";
const mobileSubText = "";

let i = 0, j = 0, k = 0;	

function typeText() 
{
	const welcome = isMobile ? mobileWelcomeText : desktopWelcomeText;
	if (i < welcome.length) 
	{
		document.getElementById("welcome-text").innerHTML += welcome.charAt(i);
		i++;
		setTimeout(typeText, 50);
	} 
	else 
	{
		typeSubText();
	}
}

function typeSubText() 
{
	const sub = isMobile ? mobileSubText : desktopSubText;
	if (k < sub.length) 
	{
		document.getElementById("sub-text").innerHTML += sub.charAt(k);
		k++;
		setTimeout(typeSubText, 50);
	} 
	else 
	{
		if (!isMobile) 
		{
			document.getElementById("ready-btn").style.display = "inline-block";
		}
	}
}

function hideOverlay() 
{
	document.getElementById('overlay').style.display = 'none';
	
	//Play Background Music
	const audio = document.getElementById('bg-audio');
	audio.muted = false; 
	audio.play();
	
	const popup = document.getElementById('instruction-popup');
	popup.style.display = 'block';
	typeInstructionText();
}

function typeInstructionText() 
{
	const instructions = [
		"1. Click on the Macintosh Body — yes, that chunky beige box on the table.",
		"2. Hit the Start Button — it's at the bottom",
		"3. Click on the Computer Screen — because obviously, that’s where the magic happens."
	];

	const content = document.getElementById("instruction-content");
	let lineIndex = 0;
	let charIndex = 0;

	function typeChar() 
	{
		if (lineIndex < instructions.length) 
		{
			const currentLine = instructions[lineIndex];
			if (charIndex < currentLine.length) 
			{
				content.innerHTML += currentLine.charAt(charIndex);
				charIndex++;
				setTimeout(typeChar, 30); // Adjust speed here
			} else 
			{
				content.innerHTML += "<br><br>"; 
				lineIndex++;
				charIndex = 0;
				setTimeout(typeChar, 500); // Pause before next line
			}
		}
	}

	typeChar();
}

document.addEventListener("DOMContentLoaded", () => 
{
	const collapseBtn = document.getElementById("collapse-btn");
	const iconSpan = collapseBtn.querySelector("span");
	const popup = document.getElementById("instruction-popup");

	collapseBtn.addEventListener("click", () => 
	{
		popup.classList.toggle("collapsed");

		if (popup.classList.contains("collapsed")) 
		{
			iconSpan.innerHTML = "slideshow";
		} 
		else 
		{
		  iconSpan.innerHTML = "disabled_by_default";
		}
	});
});

window.onload = typeText;