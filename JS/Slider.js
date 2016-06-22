var pos=0;
$(document).ready(function(){
		var imgCount=$("#slider").children().length; //get the number of images.
		var slidCount=imgCount-1; 					//Number of slides.
		var slideLength=slidCount*700;				//total moves in pixels.

//slide right

$("#prev").click(function()
{
	if(pos!=0)
	{
		pos+=700;
		$("#slider").animate({left: pos+'px'},600);
	}

});

//slid left

$("#next").click(function()
{
	if(pos>-slideLength)
	{
		pos-=700;
		$("#slider").animate({left:pos+'px'},600);
	}
	else
	{
		pos=0;
			$("#slider").animate({left:pos+'px'},1000); //move to fisrt image
		}
	});
});