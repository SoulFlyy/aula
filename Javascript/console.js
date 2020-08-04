window.onload = inicio;

function inicio() {
	document.getElementById('reset').hidden=true;
	document.getElementById('pronto').hidden=true;
	document.getElementById('man').hidden=true;
	document.getElementById('minha-tela').hidden=true;
	document.getElementById('numero-de-jogadores').hidden=true;
	document.getElementById('controle').hidden=true;
	document.getElementById('crono').hidden=true;
	document.getElementById('chouse').hidden=true;
	document.getElementById('objetivoCorpo').hidden=true;
	document.getElementById('start').hidden=false;
}

function start(){
	document.getElementById('start').hidden=true;
	document.getElementById('numero-de-jogadores').hidden=false;
	
}

