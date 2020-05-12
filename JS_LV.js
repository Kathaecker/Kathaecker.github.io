// Ein- und Ausblenden der "Seite" mit dem Inhaltes "Startseite" "Über uns" "Referenzen" "Impressum"
function zeigeSeite(name) {

for (let a of document.getElementsByClassName("Artikelinhalt")) {
if (a.classList.contains(name)) {
a.style.display = "block"; //Artikelinhalt des Ausgewählten (Name) kann Startseite,Über uns etc sein wird auf display block gesetzt und damit angezeigt

} else
a.style.display = "none";// Alles andere wird auf none gesetzt und wird damit ausgeblendet

}}

window.addEventListener("load", le => { // Hashtagbased Navigation
let h = window.location.hash
if (h != "") {
zeigeSeite(h.replace("#", ""))
} else {
zeigeSeite("displayinitially")
}

})
// MENÜ FÜHRUNG dropdowncontent ein (show) und ausblenden (hide) bei der kleinen Webseite
function hide () {
	document.getElementById("dropdown-content").style.display = "none";
}
function show () {
	document.getElementById("dropdown-content").style.display = "block";
}
// ++++++++++++++++++++++++++Spiel ++++++++++++++++++++++++++++++++
 //Drag and Drop für das Spiel

function allowDrop(ev) {
        ev.preventDefault();}
function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);}
function drop(ev) {
        ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));}


function dragEnter(ev) {
	if ( ev.target.className == "droptarget" ) {
		document.getElementById("demo").innerHTML = "Entered the dropzone";
		ev.target.style.border = "3px dotted red";
	}
}

function dragLeave(ev) {
	if ( ev.target.className == "droptarget" ) {
		document.getElementById("demo").innerHTML = "Left the dropzone";
		ev.target.style.border = "";
	}
}


// +++++++++++++Spiel Ergebnisse+++++++++++++++++
//Spiel Lösungen vergleichenen

function submit001 ()
{ var b=0
    //Bei Drag and Drop
    if (document.getElementById("Loesung1").innerText=="Gänseblümchen")
    { b++}
    if (document.getElementById("Loesung2").innerText=="Tulpe")
    { b++}
    if (document.getElementById("Loesung3").innerText=="Sonnenblume")
    { b++}
    if (document.getElementById("Loesung4").innerText=="Dahlie")
    { b++}
    if (document.getElementById("Loesung5").innerText=="Margarite")
    { b++}
    if (document.getElementById("Loesung6").innerText=="Rose")
    { b++}
	if (document.getElementById("Loe1").innerText=="Gänseblümchen")
	{ b++}
	if (document.getElementById("Loe2").innerText=="Tulpe")
	{ b++}
	if (document.getElementById("Loe3").innerText=="Sonnenblume")
	{ b++}
	if (document.getElementById("Loe4").innerText=="Dahlie")
	{ b++}
	if (document.getElementById("Loe5").innerText=="Margarite")
	{ b++}
	if (document.getElementById("Loe6").innerText=="Rose")
	{ b++}

    var Name = document.getElementById("Spielername").value
    fetch("http://localhost:3000/ergebnis",{method:"POST",headers:{'Content-Type': 'application/json'},//die Daten haben json format
        body:JSON.stringify({Name:Name,AnzahlRichtige:b})}) //welche Daten werden vom request an den Server gesendet ( Name und Anzahl der Richtigen Ergebnisse.
		.then(response=> {
			if (response.status===200){

				alert("Ihre Spielergebnisse finden Sie in der Ergebnistabelle."); // Wenn das Senden funktioniert hat wird ein alert ausgegeben.
				location.reload(true); // aktuallisieren der Tabelle sodass das aktuelle Ergebnis drin steht
			}
		})
}

function Ergebnisseladen() // JSON +JS
{
    fetch("http://localhost:3000/ergebnis")  .then(function(response) {
        if(response.status === 200) { response.json().then(function(data) { // responsestatus gibt an ob alles ok ist wenn 200 kommt

        	var tabelle = document.getElementById("Spielertabelle"); //verlinkung zur Tabelle im html
            var count= Math.min (data.length,20) ; // max 20 Teilnehmer können in die Liste aufgenommen werden
            for (var i=0; i<count;i++) {

                var tableRowElement = document.createElement("tr"); //verlinkung zur tr (Tabellenreihe) im html //
                //Berechnung zur Erstellung der Spielernummer
               var Spielernummer = document.createElement("td"); //verlinkung zur td (Tabellenzeile) im html
                Spielernummer.innerText = i + 1; //Definition Spielernummer Spielernummer bzw. Nummerierungen beginnt in JavaScript mit 0 daher +1
				var Spielername = document.createElement("td"); //Erstellung einer Spalte td und in setzen der neuen variable Spielername in dieser Spalte
                Spielername.innerText = data[i].Name; //var Spielername holt sich die info von Name der von dem User eingegeben wird und wird vom Server geladen- definiert in Ergebnis model, js)
               var AnzahlRichtige = document.createElement("td"); // Erstellung einer Spalte mit der Anzahl der Richten Ergebnissen
               AnzahlRichtige.innerText = data[i].AnzahlRichtige ;// holt er sich vom Server ( definiert im Ergebnis model.js)
                tableRowElement.appendChild(Spielernummer); // Spielernummer (die bereits als td definiert wurde) der Tabelle zuordnen
                 tableRowElement.appendChild(Spielername);// Spielername  (die bereits als td definiert wurde)der Tabelle zuordnen
               tableRowElement.appendChild(AnzahlRichtige); // Anzahl der Richtige  (die bereits als td definiert wurde) der Tabelle zuordnen
                tabelle.appendChild(tableRowElement);// Der Tabelle werden Spielernummer,-name und Anzahl richtige zugewiesen
                }}
        );
// der Browser verbietet request zu anderen Adressen , deswegen muss das html bei localhost abgespeichert sein (selber Speicherort)

        }})}


//+++++++++++Canvas für die Signatur in Kontaktformular im IMPRESSUM+++++++++++++++++++++

// Die Canvas-Funktion beim Laden der Seite aufrufen die beiden Event Listener werden benötigt, dass einmal die Mausfunktion sowie die  Touch Funktion genutzt werden kann

if(window.addEventListener){
	addEventListener("load", drawCanvasmouse, false);
	addEventListener("load", drawCanvastouch, false);
}

// Das Canvas-Element mit der Maus

function drawCanvasmouse() {
	var canvas = document.getElementById('sig-canvas');

	if (canvas.getContext) {
		var context = canvas.getContext('2d');
		context.lineWidth = 3;
	}
	// Cursorposition mit der Maus
	var x, y;
	canvas.onmousemove = function (e) {
		x = e.clientX - canvas.getBoundingClientRect().left;
		y = e.clientY - canvas.getBoundingClientRect().top;
		paint();
	}

	// Malen mit der Maus
	let active = false;
	canvas.onmousedown = function () {

		if (canvas.getAttribute("width") == 0) {
			canvas.setAttribute("width", canvas.offsetWidth) // wird benötigt um die Canvas im css zu ändern da sonst ein offset stattfindet und der Zeiger nicht auf Position ist sondern versetzt zum Zeiger
			canvas.setAttribute("height", canvas.offsetHeight)
		}

		active = true;
		context.beginPath();
		context.moveTo(x, y)
	}
	canvas.onmouseup = function () {
		active = false;
	}
	canvas.onmouseleave = function () {
		active = false;
	}

	function paint() {
		if (active) {
			context.lineTo(x, y);
			context.stroke(); // verbindet die Punkte
		}
	}

	// Farbe wählen per Maus


	var blue = document.getElementById("blau");
	blue.onclick = function () {
		context.strokeStyle = "midnightblue";
	}
	var black = document.getElementById("schwarz");
	black.onclick = function () {
		context.strokeStyle = "black";
	}

	// Default-Farbe

	context.fillStyle = "rgb(0, 0, 0)";
}

// Canvas Löschen

function clearcanvas(){
	var canvas = document.getElementById('sig-canvas');
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
}

//Touch Event Canvas

// Das Canvas-Element
function drawCanvastouch(){
	var canvas = document.getElementById('sig-canvas');
	canvas.setAttribute("width", canvas.offsetWidth) // wird benötigt um die Weite im CSS anzugeben und kein Versatz der aufgenommenen x und y Koordinaten im Unterschriftenfeld zu bekommen.
	canvas.setAttribute("height", canvas.offsetHeight)
	if(canvas.getContext){
		var context = canvas.getContext('2d') ;  //wird als 2D Canvas definiert
		context.lineWidth=3; // Die Punkt bzw. Linienbreite wird auf 3 definiert
	}

	// Cursorposition per Touch

	var xt, yt;// Mausposition neu
	let lastx = xt; // Mausposition alt
	let lasty = yt; // Mausposition alt

	canvas.ontouchmove = function(e){ // wenn die Berührung des Touches( innerhalb des definierten Canvas Feldes) sich bewegt ( touch move) wird die funktion(e)  ausgeführt

		xt = e.touches[0].clientX-canvas.getBoundingClientRect().left; // Koordinate des Berührungspunktes von xt
		yt = e.touches[0].clientY-canvas.getBoundingClientRect().top; // Koordinate des Berührungspunktes von yt

		paintt(); // funtion paint wird aufgerufen und damit auf true gesetzt

	}
	// Malen per Touch
	let active = false;
	// Beim Laden ohne „aktivieren“ der variable wird die Funktion NICHT ausgeführt.
	canvas.ontouchstart = function() { active = true; // Malt wenn der Touch startet active= true

		if (canvas.getAttribute("width") == 0) {
			canvas.setAttribute("width", canvas.offsetWidth) // wird benötigt um die Canvas im css zu ändern da sonst ein offset stattfindet und der Zeiger nicht auf Position ist sondern versetzt zum Zeiger
			canvas.setAttribute("height", canvas.offsetHeight)
		}
		context.beginPath(); // Beginn der Linie
		context.moveTo(lastx,lasty); // Anfangskoordinate der Linie Startpunkt der Linie
	}
	canvas.ontouchend = function(){ active = false;
		} // wenn die Berührung beendet, schaltet die variable active auf false und die nachfolgenden functionen paint wird unterbrochen. Dh. Die Linien für die Un-terschrift wird nicht ausgeführt.
	canvas.ontouchcancel =function(){ active = false; } // beim Verlassen der definierten Unterschriften-box werden die Linien ebenfalls gestoppt. Wie bei einem Touch End.


	function paintt(){
		if(active){ // wenn die Funktion auf active gesetzt wird startet die function
			context.lineTo(xt,yt) ; // von move to zu line to koordinate definiert die Punkte aus function(e)  dass diese mit einer Linie miteinan-der verbunden werden soll
			context.stroke(); // führt die Linie von den Punkten zueinander aus, sodass eine durchgängiger Schriftzug entsteht.
		}}
	// Farbe wählen per Touch
	var blue = document.getElementById("blau"); // Das Feld blau wird definiert
	blue.ontouchstart = function(){ context.strokeStyle = "midnightblue"; } //  beim Touch Start auf das Feld blau wird die Farbe der Punkte und die Linien blau ( Die Unterschrift )
	var black = document.getElementById("schwarz");  // Das Feld schwarz wird definiert
	black.ontouchstart = function(){ context.strokeStyle = "black"; } //  beim Touch Start auf das Feld schwarz wird die Farbe der Punkte und die Linien blau ( Die Unterschrift )

	// Default-Farbe
	context.fillStyle = "rgb(0, 0, 0)"; // Start Farbe (Schwarz)
}


// Startseite Container wechseln slighter
function navigiere(aktuelleid) {

    //Content
    for (sec of document.getElementsByClassName("xcontainerbild")) {
        let div = sec.getElementsByTagName("div")[0];

        if (div.className === "containerbild" + aktuelleid)
            div.style.display = "block";
        else
            div.style.display = "none";
    }
}

// +++++++++++++++++++++++++++++Referenzen+++++++++++++++++++++++++++

function keyDownInModal(event) { // Für das Schließen des Modals mit ESC per Tastatur und das weiterschalten der Bilder ber Tastatur rechts links
	if (event.keyCode === 27) {
		document.getElementById("myModal").style.display = "none"; // ESC Taste drücken und Modal schließt sich
		slideIndex = onreset;
	} else if (event.keyCode === 37) { // Links Taste für ein Bild zurück
		minusSlides(-1);
	} else if (event.keyCode === 39) { //Rechts Taste für ein Bild weiter
		plusSlides(+1);
	}}

function openModal() {
	document.getElementById("myModal").style.display = "block";// Funktion openModal öffnet das Fenster Modal über der Referenzen Seite ( in Css ber z-index 2 defineirt)
    document.addEventListener("keydown", keyDownInModal) // das die Tastatur Funktionen ( keypress von  ESC, rechts und links) nur im geöffneten Modal genutzt werden können, daher in open Modal funktion
	showSlides(slideIndex=1);// Zeigt das Bild mit dem errechneten slideIndex
}

function closeModal() {
	document.getElementById("myModal").style.display = "none"; // Modal wird ausgeblendet über display="none"
	slideIndex = onreset; // der slideindex wird resetet das beim erneuten öffnen des Modals der Slideindex wieder von vorne gestartet wird.
	document.removeEventListener("keydown", keyDownInModal); // wenn Modal geschlossen wird die Tastatur Funktion nicht mehr benötgt und daher wird der Eventlistener geschlossen
}

var slideIndex = 1; //Slideindex startet bei 1

function currentSlide(n) { //aktuelle Seite
    showSlides(slideIndex= n);
}

function plusSlides(n) {
    showSlides(slideIndex += n); // Slides nach rechts weiter wird das nächste Bild angezeigt
}

function minusSlides(n) {
    showSlides(slideIndex += n); // Slides nach links  wird das zuvorherige Bild angezeigt also das Bild -1
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");// Hauptbilder im Modal
	var dots = document.getElementsByClassName("demo"); // kleine Vorschau unter den Großen Bildern von allen Bildern in demo Verison
	var captionText = document.getElementById("caption"); // Text des Bildes des gezeigten großen Bildes

	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", ""); // wenn auf die kleinen demo Bilder geklickt werden öffnet sich das jeweilge dazugehörige Große Bild
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active"; // mit active wird das Bild gehoovert ( in css definiert) un damit leicht transparent dass man sieht welches Bild aktuell in den demo Bildern ausgewählt ist
	captionText.innerHTML = dots[slideIndex-1].alt;
}

//Kontaktanfrage ins Backend

function submitkontaktanfrage ()
{
	var vorname = document.getElementById("vorname").value    //Definition der Variablen zu den html Bereichen
	var nachname = document.getElementById("nachname").value
	var strasse = document.getElementById("strasse").value
	var hausnr = document.getElementById("hausnr").value
	var plz = document.getElementById("plz").value
	var ort = document.getElementById("ort").value
	var email = document.getElementById("email").value
	var telefon = document.getElementById("telefon").value
	var message = document.getElementById("message").value
	var signature = document.getElementById("sig-canvas").toDataURL()

	fetch("http://localhost:3000/formular",{method:"POST",headers:{'Content-Type': 'application/json'},//die Daten haben json format
		body:JSON.stringify({
			vorname:vorname,
			nachname: nachname,
			strasse: strasse,
			hausnr: hausnr,
			plz: plz,
			ort: ort,
			email: email,
			telefon:telefon,
			message: message,
			signature :signature
		})}) //welche Daten ( Vorname, Nachname......) werden vom request an den Server gesendet.
		.then(response=> {
			if (response.status===200){
				alert("Ihre Anfrage wurde erfolgreich gesendet.") // Wenn das Senden funktioniert hat wird ein alert ausgegeben.
			}
			else if (response.status===400) {
				alert( "Alle Felder mit [*] gekennzeichneten Felder müssen ausgefüllt werden.") // Wenn die Felder nicht ausgefüllt sind wird ein alert ausgegeben dass alle mit * markierten Felder ausgefüllt werden müssen.
						}
		})

}
