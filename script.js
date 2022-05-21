let prenom = prompt("Hi, What is your name ?", "<Answer :>");
if( prenom == null ){
    alert("Vous avez cliqué sur Annuler");
} else {
    document.getElementById("prenom").textContent = prenom;
}


//// Active + déactive boutons géographie

let boutonQ = document.querySelector(".boutonQ");
let boutonV = document.querySelector(".boutonV");
let boutonF = document.querySelector(".boutonF");
boutonV.disabled = true;
boutonF.disabled = true;
boutonQ.onclick = function () {
  boutonV.disabled = false;
  boutonF.disabled = false;
  boutonQ.disabled = true;
};
boutonV.onclick = function () {
  boutonV.disabled = true;
  boutonF.disabled = true;
  boutonQ.disabled = false;
};
boutonF.onclick = function () {
  boutonV.disabled = true;
  boutonF.disabled = true;
  boutonQ.disabled = false;
};

//// Active + désactive boutons histoire

let boutonQH = document.querySelector(".boutonQH");
let boutonVH = document.querySelector(".boutonVH");
let boutonFH = document.querySelector(".boutonFH");
boutonVH.disabled = true;
boutonFH.disabled = true;
boutonQH.onclick = function () {
  boutonVH.disabled = false;
  boutonFH.disabled = false;
  boutonQH.disabled = true;
};
boutonVH.onclick = function () {
  boutonVH.disabled = true;
  boutonFH.disabled = true;
  boutonQH.disabled = false;
};
boutonFH.onclick = function () {
  boutonVH.disabled = true;
  boutonFH.disabled = true;
  boutonQH.disabled = false;
};

//// Active + désactive boutons sport

let boutonQS = document.querySelector(".boutonQS");
let boutonVS = document.querySelector(".boutonVS");
let boutonFS = document.querySelector(".boutonFS");
boutonVS.disabled = true;
boutonFS.disabled = true;
boutonQS.onclick = function () {
  boutonVS.disabled = false;
  boutonFS.disabled = false;
  boutonQS.disabled = true;
};
boutonVS.onclick = function () {
  boutonVS.disabled = true;
  boutonFS.disabled = true;
  boutonQS.disabled = false;
};
boutonFS.onclick = function () {
  boutonVS.disabled = true;
  boutonFS.disabled = true;
  boutonQS.disabled = false;
};

/// Active + désactive boutons music

let boutonQM = document.querySelector(".boutonQM");
let boutonVM = document.querySelector(".boutonVM");
let boutonFM = document.querySelector(".boutonFM");
boutonVM.disabled = true;
boutonFM.disabled = true;
boutonQM.onclick = function () {
  boutonVM.disabled = false;
  boutonFM.disabled = false;
  boutonQM.disabled = true;
};

boutonVM.onclick = function () {
  boutonVM.disabled = true;
  boutonFM.disabled = true;
  boutonQM.disabled = false;
};
boutonFM.onclick = function () {
  boutonVM.disabled = true;
  boutonFM.disabled = true;
  boutonQM.disabled = false;
};

//// Active + désactive boutons General knowledge

let boutonQK = document.querySelector(".boutonQK");
let boutonVK = document.querySelector(".boutonVK");
let boutonFK = document.querySelector(".boutonFK");
boutonVK.disabled = true;
boutonFK.disabled = true;
boutonQK.onclick = function () {
  boutonVK.disabled = false;
  boutonFK.disabled = false;
  boutonQK.disabled = true;
};
boutonVK.onclick = function () {
  boutonVK.disabled = true;
  boutonFK.disabled = true;
  boutonQK.disabled = false;
};
boutonFK.onclick = function () {
  boutonVK.disabled = true;
  boutonFK.disabled = true;
  boutonQK.disabled = false;
};

//// Active + désactive boutons Science Knowledge

let boutonQN = document.querySelector(".boutonQN");
let boutonVN = document.querySelector(".boutonVN");
let boutonFN = document.querySelector(".boutonFN");
boutonVN.disabled = true;
boutonFN.disabled = true;
boutonQN.onclick = function () {
  boutonVN.disabled = false;
  boutonFN.disabled = false;
  boutonQN.disabled = true;
};
boutonVN.onclick = function () {
  boutonVN.disabled = true;
  boutonFN.disabled = true;
  boutonQN.disabled = false;
};
boutonFK.onclick = function () {
  boutonVN.disabled = true;
  boutonFN.disabled = true;
  boutonQN.disabled = false;
};

//// Début code central

let i = 0;
console.log(i);
let fichier = null;
let score = 0;
document.getElementById("score").textContent = score;

async function questionG() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=20&category=22&difficulty=medium&type=boolean"
  );
  let data = await response.json();
  fichier = data;
  console.log(data.results[i].question);

  let texteAffiche = data.results[i].question;
  document.getElementById("afficher").textContent = texteAffiche;
  i = i + 1;
}

document.getElementById("questionG").addEventListener("click", function () {
  questionG();
});
if (i >= 20) {
  alert("There are no more questions for this category");
}

////////// FONCTION VERIF QUESTIONS GEOGRAPHIE

const verifTrue = () => {
  let answer = fichier.results[i].correct_answer;
  console.log(answer);
  if (answer === "True") {
    score = score + 1;
    document.getElementById("score").textContent = score;
    alert("Good answer ! +1 point :)");
  } else {
    alert("Bad answer.. Try another question ! ");
  }

  console.log(score);
};

const verifFalse = () => {
  let answer = fichier.results[i].correct_answer;
  console.log(answer);
  if (answer === "False") {
    score = score + 1;
    document.getElementById("score").textContent = score;
    alert("Good answer ! +1 point :)");
  } else {
    alert("Bad answer");
  }
  console.log(score);
};

document.getElementById("repGT").addEventListener("click", function () {
  verifTrue();
});
document.getElementById("repGF").addEventListener("click", function () {
  verifFalse();
});

console.log(score);

/* HISTOIRE : */

let j = 0;
let fichier2 = null;
document.getElementById("score").textContent = score;

async function questionH() {
  let response2 = await fetch(
    "https://opentdb.com/api.php?amount=20&category=23&difficulty=medium&type=boolean"
  );
  let data2 = await response2.json();
  fichier2 = data2;
  console.log(data2.results[j].question);

  let texteAffiche = data2.results[j].question;
  document.getElementById("afficher2").textContent = texteAffiche;
  j = j + 1;
}

document.getElementById("questionH").addEventListener("click", function () {
  questionH();
});

////////// FONCTION VERIF QUESTIONS HISTOIRE

const verifTrue2 = () => {
  let answer = fichier2.results[j].correct_answer;
  console.log(answer);
  if (answer === "True") {
    score = score + 1;
    document.getElementById("score").textContent = score;
    alert("Good answer ! +1 point :)");
  } else {
    alert("Bad answer, try another question ");
  }

  console.log(score);
};

const verifFalse2 = () => {
  let answer = fichier2.results[j].correct_answer;
  console.log(answer);
  if (answer === "False") {
    score = score + 1;
    document.getElementById("score").textContent = score;
    alert("Good answer ! +1 point :)");
  } else {
    alert("Bad answer, try another question");
  }
  console.log(score);
};

document.getElementById("repHT").addEventListener("click", function () {
  verifTrue2();
});
document.getElementById("repHF").addEventListener("click", function () {
  verifFalse2();
});

console.log(score);

/* SPORTS */

let k = 0;
let fichier3 = null;
document.getElementById("score").textContent = score;

async function questionS() {
  let response3 = await fetch(
    "https://opentdb.com/api.php?amount=15&category=21&type=boolean"
  );
  let data3 = await response3.json();
  fichier3 = data3;
  console.log(data3.results[k].question);

  let texteAffiche = data3.results[k].question;
  document.getElementById("afficher3").textContent = texteAffiche;
  k = k + 1;
}

document.getElementById("questionS").addEventListener("click", function () {
  questionS();
});

////////// FONCTION VERIF QUESTIONS SPORT

const verifTrue3 = () => {
  let answer = fichier3.results[k].correct_answer;
  console.log(answer);
  if (answer === "True") {
    score = score + 1;
    document.getElementById("score").textContent = score;
    alert("Good answer ! +1 point :)");
  } else {
    alert("Bad answer, try another question ");
  }

  console.log(score);
};

const verifFalse3 = () => {
  let answer = fichier3.results[k].correct_answer;
  console.log(answer);
  if (answer === "False") {
    score = score + 1;
    document.getElementById("score").textContent = score;
    alert("Good answer ! +1 point :)");
  } else {
    alert("Bad answer, try another question");
  }
  console.log(score);
};

document.getElementById("repST").addEventListener("click", function () {
  verifTrue3();
});
document.getElementById("repSF").addEventListener("click", function () {
  verifFalse3();
});

console.log(score);

/* Music : */

let l = 0;
let fichier4 = null;
document.getElementById("score").textContent = score;

async function questionM() {
  let response4 = await fetch(
    "https://opentdb.com/api.php?amount=20&category=12&type=boolean"
  );
  let data4 = await response4.json();
  fichier4 = data4;
  console.log(data4.results[l].question);

  let texteAffiche = data4.results[l].question;
  document.getElementById("afficher4").textContent = texteAffiche;
  l = l + 1;
}

document.getElementById("questionM").addEventListener("click", function () {
  questionM();
});

////////// FONCTION VERIF QUESTIONS MUSIC

const verifTrue4 = () => {
  let answer = fichier4.results[l].correct_answer;
  console.log(answer);
  if (answer === "True") {
    score = score + 1;
    document.getElementById("score").textContent = score;
    alert("Good answer ! +1 point :)");
  } else {
    alert("Bad answer, try another question ");
  }

  console.log(score);
};

const verifFalse4 = () => {
  let answer = fichier4.results[l].correct_answer;
  console.log(answer);
  if (answer === "False") {
    score = score + 1;
    document.getElementById("score").textContent = score;
    alert("Good answer ! +1 point :)");
  } else {
    alert("Bad answer, try another question");
  }
  console.log(score);
};

document.getElementById("repMT").addEventListener("click", function () {
  verifTrue4();
});
document.getElementById("repMF").addEventListener("click", function () {
  verifFalse4();
});

console.log(score);

/* GENREAL KNOWLEDGE */

let m = 0;
let fichier5 = null;
document.getElementById("score").textContent = score;

async function questionK() {
  let response5 = await fetch(
    "https://opentdb.com/api.php?amount=20&category=9&type=boolean"
  );
  let data5 = await response5.json();
  fichier5 = data5;
  console.log(data5.results[m].question);

  let texteAffiche = data5.results[m].question;
  document.getElementById("afficher5").textContent = texteAffiche;
  m = m + 1;
}

document.getElementById("questionK").addEventListener("click", function () {
  questionK();
});

////////// FONCTION VERIF QUESTIONS GENERAL KNOWLEDGE

const verifTrue5 = () => {
  let answer = fichier5.results[m].correct_answer;
  console.log(answer);
  if (answer === "True") {
    score = score + 1;
    document.getElementById("score").textContent = score;
    alert("Good answer ! +1 point :)");
  } else {
    alert("Bad answer, try another question ");
  }

  console.log(score);
};

const verifFalse5 = () => {
  let answer = fichier5.results[m].correct_answer;
  console.log(answer);
  if (answer === "False") {
    score = score + 1;
    document.getElementById("score").textContent = score;
    alert("Good answer ! +1 point :)");
  } else {
    alert("Bad answer, try another question");
  }
  console.log(score);
};

document.getElementById("repKT").addEventListener("click", function () {
  verifTrue5();
});
document.getElementById("repKF").addEventListener("click", function () {
  verifFalse5();
});

console.log(score);

/* Science and nature : */

let n = 0;
let fichier6 = null;
document.getElementById("score").textContent = score;

async function questionN() {
  let response6 = await fetch(
    "https://opentdb.com/api.php?amount=20&category=17&type=boolean"
  );
  let data6 = await response6.json();
  fichier6 = data6;
  console.log(data6.results[n].question);

  let texteAffiche = data6.results[n].question;
  document.getElementById("afficher6").textContent = texteAffiche;
  n = n + 1;
}

document.getElementById("questionN").addEventListener("click", function () {
  questionN();
});

////////// FONCTION VERIF QUESTIONS Science and Nature

const verifTrue6 = () => {
  let answer = fichier6.results[n].correct_answer;
  console.log(answer);
  if (answer === "True") {
    score = score + 1;
    document.getElementById("score").textContent = score;
    alert("Good answer ! +1 point :)");
  } else {
    alert("Bad answer, Try another question");
  }

  console.log(score);
};

const verifFalse6 = () => {
  let answer = fichier6.results[n].correct_answer;
  console.log(answer);
  if (answer === "False") {
    score = score + 1;
    document.getElementById("score").textContent = score;
    alert("Good answer ! +1 point :)");
  } else {
    alert("Bad answer, try another question");
  }
  console.log(score);
};

document.getElementById("repNT").addEventListener("click", function () {
  verifTrue6();
});
document.getElementById("repNF").addEventListener("click", function () {
  verifFalse6();
});
console.log(score)
















/// Confetti

var maxParticleCount = 150; //set max confetti count
var particleSpeed = 2; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

(function() {
	startConfetti = startConfettiInner;
	stopConfetti = stopConfettiInner;
	toggleConfetti = toggleConfettiInner;
	removeConfetti = removeConfettiInner;
	var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
	var streamingConfetti = false;
	var animationTimer = null;
	var particles = [];
	var waveAngle = 0;
	
	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0];
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = 0;
		return particle;
	}

	function startConfettiInner() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, 16.6666667);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none");
			document.body.appendChild(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
		}
		var context = canvas.getContext("2d");
		while (particles.length < maxParticleCount)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		if (animationTimer === null) {
			(function runAnimation() {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				if (particles.length === 0)
					animationTimer = null;
				else {
					updateParticles();
					drawParticles(context);
					animationTimer = requestAnimFrame(runAnimation);
				}
			})();
		}
	}

	function stopConfettiInner() {
		streamingConfetti = false;
	}

	function removeConfettiInner() {
		stopConfetti();
		particles = [];
	}

	function toggleConfettiInner() {
		if (streamingConfetti)
			stopConfettiInner();
		else
			startConfettiInner();
	}

	function drawParticles(context) {
		var particle;
		var x;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			context.strokeStyle = particle.color;
			x = particle.x + particle.tilt;
			context.moveTo(x + particle.diameter / 2, particle.y);
			context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle);
				particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= maxParticleCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();

if (score>=1){
  startConfetti()
}
