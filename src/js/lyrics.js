// Toggle between romanized and english translations
$(".romanized").click(function(){
	$(".english").toggle();
	  $(".romanized").hide();
});

$(".english").click(function(){
	$(".romanized").toggle();
  $(".english").hide();
});