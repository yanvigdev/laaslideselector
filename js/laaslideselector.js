
var idEnCour=1;
var nbSlide;
var preidEnCour;
var tps=5000;
var defil;
var largeur;
function slideselect() {
	nbSlide=$("#diaporama").find("img").length;
	$("#diaporama").addClass('carouselcontainer');
	$(".carouselcontainer").find("img").each( function(index) {
				$(this).addClass('slideselector');
				$(this).attr('id', 'slideselector'+(index+1));
			});
	
	largeur = $(".carouselcontainer").width()
	
	
	
	$(".slideselector").css({'left':'-'+largeur+'px'});
	preidEnCour=nbSlide;
	$(".carouselcontainer").append('<div class="navigation"></div>');
	for(var i=1;i<=nbSlide;i++) {
		$(".navigation").append("<span id=\"nav"+i+"\" onclick=\"changeUneClic("+i+")\">"+i+"</span>");
	};
	//$(".navigation").css({'width':14*nbSlide})
	changeSlide(idEnCour);
	DefileAuto();
};
function changeSlide(idEnCour) {
/*	$("#slide_titre"+preidEnCour).animate({
		"line-height":0
	},900);*/
	$("#slideselector"+preidEnCour).animate({'left':largeur+'px'},500);

	$("#slideselector"+idEnCour).css({'left':'-'+largeur+'px'}).animate({'left':0},500);
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


