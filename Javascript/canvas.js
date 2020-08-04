window.onload = inicio;


	var canvas = document.getElementById('minha-tela'); 
	var ctx = canvas.getContext('2d');
	var mapa = new Image();
	var x = [];
	var y = [];
	var PR = 38;
	var cont = false; 
	var base = 0;
	var umaVez = true;
	var g = 0;
	var time = 0;
	mapa.src = "img/background.png";
	// requestAnimationFrame(gameloop);


	window.onkeydown = pressionaTecla;
	function pressionaTecla(tecla){
		if(!cont){

			if(tecla.keyCode == 39){
				cont = true;
				base = 1;
			}
			if(tecla.keyCode == 37){
				cont = true;
				base = 2;
			}
			if(tecla.keyCode == 40){
				cont = true;
				base = 3;
			}
			if(tecla.keyCode == 38){
				cont = true;
				base = 4;	
			}
		}
	
	}


	function gameloop(){
		ctx.drawImage(mapa, 0, 0);
		if (umaVez) {
			sorteio();
		}
		bixinho();		
		requestAnimationFrame(gameloop);
	}
	
	function sorteio (){
		for (var i = 0; i < 4; i++){
			var j = 0;
			var santo = 0;
			
			do{	
				if(santo == i){
					j = 0;
				}
				do {
					do { 
						x[i] = Math.floor(Math.random()*(570 - 0))+0;	
					}while((x[i] % 38) != 0);

					do {
						y[i] = Math.floor(Math.random()*(570 - 0))+0;	
					}while((y[i] % 38) != 0);

				}while (( y[i] == 38 && x[i] == 152 ) || ( y[i] == 76 && (x[i] == 38 || x[i] == 456)) || (y[i] == 114 && (x[i] == 228 || x[i] == 532)) || (y[i] == 152 && x[i] ==456) || (y[i] == 190 && x[i] == 494) || (y[i] == 228 && x[i] ==114) || (y[i] == 266 && (x[i] == 304 || x[i] == 266)) || (y[i] == 304 && (x[i] == 190 || x[i] == 266 || x[i] == 304)) || (y[i] == 342 && (x[i] == 38 || x[i] == 456)) || (y[i] == 380 && (x[i] == 152 || x[i] == 380)) || (y[i] == 456 && x[i] == 532) || (y[i] == 494 && x[i] == 190) || (y[i] == 532 && (x[i] == 418 || x[i] == 114)));
				for (var k = 0; k <= i; k++){
					if ( j != 1 && k != i)
						if (x[i] == x[k] && y[i] == y[k]){
							j = 1;
						}
					if (k == i){
						santo = k;
					}
				}
			}while (j == 1);
		}
		umaVez = false;	
	}

	function bixinho(){
		if (cont){
			switch(base){
				case 1: //direita
				if (x[g] != 570 && !( y[g] == 0 && (x[g] == 38 || x[g] == 456)) && !(y[g] == 38 && x[g] == 114) && !(y[g] == 76 && (x[g] == 38 || x[g] == 456)) && !(y[g] == 114 && (x[g] == 228 || x[g] == 532)) && !(y[g] == 152 && x[g] == 380) && !(y[g] == 190 && x[g] == 456) && !(y[g] == 228 && x[g] == 76) && !(y[g] == 266 && x[g] == 228) && !(y[g] == 304 && (x[g] == 190 || x[g] == 228)) && !(y[g] == 342 && (x[g] == 38 || x[g] == 418)) && !( y[g] == 380 && (x[g] == 114 || x[g] == 380)) && !(y[g] == 456 && x[g] == 532) && !(y[g] == 494 && x[g] == 190) && !(y[g] == 532 && (x[g] == 76 || x[g] == 380)) && !(y[g] == 570 && (x[g] == 266 || x[g] == 494))){
					var k = 0;
					for (var j = 0; j < 4; j++){
						if (g != j){
							if((x[g] + PR) == x[j] && (y[g] + PR) == y[j]){
								k = 1;
								cont = false;
								base = 0;
							}	
						}
					}
					if(k != 1) {
						x[g] = x[g] + PR;
					}		
				}else {
					cont = false;
					base = 0;
				}
				break;
				case 2: //esquerda
				if (x[g] != 0 && !( y[g] == 0 && (x[g] == 76 || x[g] == 494)) && !(y[g] == 38 && x[g] == 152) && !(y[g] == 76 && (x[g] == 76 || x[g] == 494)) && !(y[g] == 114 && (x[g] == 266 || x[g] == 570)) && !(y[g] == 152 && x[g] == 418) && !(y[g] == 190 && x[g] == 494)  && !(y[g] == 228 && x[g] == 114) && !(y[g] == 266 && x[g] == 342) && !(y[g] == 304 && x[g] == 342) && !(y[g] == 342 && (x[g] == 76 || x[g] == 456)) && !( y[g] == 380 && (x[g] == 152 || x[g] == 418)) && !(y[g] == 456 && x[g] == 570) && !(y[g] == 494 && x[g] == 228) && !(y[g] == 532 && (x[g] == 114 || x[g] == 418)) && !(y[g] == 570 && (x[g] == 304 || x[g] == 532))){
					x[g] = x[g] - PR;
				}else {
					cont = false;
					base = 0;
				}
				break;
				case 3: //baixo
				if (y[g] != 570 && !(x[g] == 0 && (y[g] == 190 || y[g] == 418)) && !(x[g] == 38 && (y[g] == 38 || y[g] == 342)) && !(x[g] == 114 && (y[g] == 228 || y[g] == 494)) && !(x[g] == 152 && (y[g] == 0 || y[g] == 380)) && !(x[g] == 190 && (y[g] == 266 || y[g] == 456)) && !(x[g] == 228 && y[g] == 114) && !(x[g] == 266 && y[g] == 228) && !(x[g] == 304 && y[g] == 228) && !(x[g] == 380 && y[g] == 380) && !(x[g] == 418 && (y[g] == 152 || y[g] == 532)) && !(x[g] == 456 && (y[g] == 76 || y[g] == 304)) && !(x[g] == 494 && y[g] == 152) && !(x[g] == 532 && (y[g] == 76 || y[g] == 418)) && !(x[g] == 570 && (y[g] == 190 || y[g] == 342))){
					y[g] = y[g] + PR;
				}else{
					cont = false;
					base = 0;
				}
				break;
				case 4: //cima
				if (y[g] != 0 && !(x[g] == 0 && (y[g] == 228 || y[g] == 456)) && !(x[g] == 38 && (y[g] == 76 || y[g] == 380)) && !(x[g] == 114 && (y[g] == 266 || y[g] == 532)) && !(x[g] == 152 && (y[g] == 38 || y[g] == 418)) && !(x[g] == 190 && (y[g] == 304 || y[g] == 494)) && !(x[g] == 228 && y[g] == 152) && !(x[g] == 266 && y[g] == 342) && !(x[g] == 304 && y[g] == 342) && !(x[g] == 380 && y[g] == 418) && !( x[g] == 418 && (y[g] == 190 || y[g] == 570)) && !(x[g] == 456 && (y[g] == 114 || y[g] == 342)) && !(x[g] == 494 && y[g] == 190) && !(x[g] == 532 && (y[g] == 114 || y[g] == 456)) && !(x[g] == 570 && (y[g] == 228 || y[g] == 380))){
					y[g] = y[g] - PR;
				}else{
					cont = false;
					base = 0;
				}
				break;
				default:
			}
		}	
		for(var i = 0; i < 4; i++)	{	
			ctx.fillStyle = '#0'+i+'f';
			ctx.fillRect(x[i], y[i], 38, 38);
		}
	}

	var seg = 59;
	var min = 3;

	function inicio() {
		document.getElementById('minha-tela').hidden=true;
		document.getElementById('numero-de-jogadores').hidden=true;
		document.getElementById('controle').hidden=true;
		document.getElementById('crono').hidden=true;
	}

	function start(){
		document.getElementById('start').hidden=true;
		document.getElementById('numero-de-jogadores').hidden=false;
		
	}

	function numeroDeJogadores(){
		var e = document.getElementById('operacao');
		var selecionado = e.options[e.selectedIndex].value;

		if(selecionado == 0){
			start();
		}
		else if(selecionado == 2){
			document.getElementById('j3').hidden=true;
			document.getElementById('j4').hidden=true;

		}
		else if(selecionado == 3){
			document.getElementById('j4').hidden=true;
		}	
		if(selecionado != 0){
			document.getElementById('minha-tela').hidden=false;
			document.getElementById('controle').hidden=false;
			document.getElementById('crono').hidden=false;
			document.getElementById('numero-de-jogadores').hidden=true;
			gameloop();

		}
	}

	function jogada (valor){
		if(valor == 1){
			document.getElementById('j1').setAttribute("disabled", "true");
			setInterval('tempo()', 1000);

		}
		console.log(valor);
	}

	function tempo(){

		if(seg < 10){
			document.getElementById('crono').innerHTML = "0" + min + ":0" + seg;
		}else{
			document.getElementById('crono').innerHTML = "0" + min + ":" + seg;
		}

		seg --;

		if(seg == 0){
			min --;
			seg = 59;
		}
	}
