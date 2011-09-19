
var idEnCour=1;
var nbSlide;
var preidEnCour;
var tps=5000;
var defil;
var largeur;
function slideselect() {
	nbSlide=$("#diaporama").find("img").length;
	$("#diaporama").addClass('slideselectorcontainer');
	$(".slideselectorcontainer").find("img").each( function(index) {
				$(this).addClass('slideselector');
				$(this).attr('id', 'slideselector'+(index+1));
			});
	
	largeur = $(".slideselectorcontainer").width()
	
	
	
	$(".slideselector").css({'left':'-'+largeur+'px'});
	preidEnCour=nbSlide;
	$(".slideselectorcontainer").append('<div class="slideselectornavigation"></div>');
	for(var i=1;i<=nbSlide;i++) {
		$(".slideselectornavigation").append("<span id=\"nav"+i+"\" onclick=\"changeUneClic("+i+")\">"+i+"</span>");
	};
	//$(".navigation").css({'width':14*nbSlide})
	changeSlide(idEnCour);
	DefileAuto();
};
function changeSlide(idEnCour) {
/*	$("#slide_titre"+preidEnCour).animate({
		"line-height":0
	},900);*/
	$("#slideselector"+preidEnCour).stop(true,true).animate({'left':largeur+'px'},500);

	$("#slideselector"+idEnCour).stop(true,true).css({'left':'-'+largeur+'px'}).animate({'left':0},500);
	/*$("#slide_titre"+idEnCour).css("line-height",0);*/
	/*setTimeout("titreDown("+idEnCour+")",300);*/
	$("#nav"+preidEnCour).removeClass("active");
	$("#nav"+idEnCour).addClass("active");
};

function titreDown(idEnCour) {
	$("#slide_titre"+idEnCour).animate({
		"line-height":60
	},900);
};

function DefileAuto() {
	IncrementeID();
	defil=setTimeout("changeSlide("+idEnCour+");DefileAuto()",tps);
};

function IncrementeID() {
	preidEnCour=idEnCour;
	idEnCour++;
	if(idEnCour>nbSlide) {
		idEnCour=1;
	};
};

function changeUneClic(id) {
	window.clearTimeout(defil);
	if(preidEnCour!=id) {
		changeSlide(id);
		idEnCour=id;
		IncrementeID();
	};
	defil=setTimeout("changeSlide("+idEnCour+");DefileAuto()",tps);
};


