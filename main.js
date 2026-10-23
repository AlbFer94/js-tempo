/************************** LOADING *****************************/

// Il <div> della pagina che funge da progress-bar
const progressBar = document.getElementById("progress");
progressBar.style.width = "0%";


// Il titolo di questa sezione (Loading...)
const title = document.getElementById("loading-title");

const cadenza = 0.1 * 1000;
let counter = 0;

const timer = setInterval(gestisciTempo, cadenza);

function gestisciTempo() {
	//parte da 0 arriva a 100
	if (counter < 100) {
		//aggiungi 1
		counter++;
		progressBar.style.width = `${counter}%`;
	} else {
		//ferma il timer
		clearInterval(timer);
		title.innerHTML = "Caricamento Completato.";
	}
}



/************************ CRONOMETRO ****************************/

// Lo <span> della pagina in cui scrivere il tempo
const tempoAttuale = document.getElementById("cronometro");

// I tre bottoni del cronometro
const btnPlay = document.getElementById("play-btn");
const btnStop = document.getElementById("stop-btn");
const btnReset = document.getElementById("reset-btn");
btnPlay.disabled = false;

let tempoTrascorso = 0;
let cronometro;


//Gestisco gli eventi
btnPlay.addEventListener("click", function () {

	cronometro = setInterval(() => {
		tempoAttuale.innerHTML = tempoTrascorso;
		tempoTrascorso++
		btnPlay.disabled = true;
		btnStop.disabled = false;
	}, 1000);

	console.log("Premuto Play!");
});

btnStop.addEventListener("click", function () {
	clearInterval(cronometro);
	btnPlay.disabled = false;
	btnStop.disabled = true;
	btnReset.disabled = false;
	console.log("Premuto Stop!");
});

btnReset.addEventListener("click", function () {
	tempoTrascorso = 0
	tempoAttuale.innerHTML = tempoTrascorso;
	console.log("Premuto Reset!");
});