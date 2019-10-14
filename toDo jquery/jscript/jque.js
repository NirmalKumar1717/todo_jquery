$(document).ready (function()
{
	$("#btn").click(function()
	{
		var a = $('input').val(); //instead of 'input' we can use 'this' also* 
			if(a == "")
			{
				alert("Enter some text");
			}
			else
			{
				
				$('ul').append('<li>'+ a +'<span class="glyphicon glyphicon-trash aaaa"> </span> </li>');
				$('input').val("");
			}
	});

	$('input').keypress(function(event) //argument(event) is must for keypress function*
	{
		if(event.which==13) 
		{
			var a = $('input').val(); //instead of 'input' we can use 'this' also* 
			if(a == "")
			{
				alert("Enter some text");
			}
			else{
				
				$('ul').append('<li>'+ a +'<span class="glyphicon glyphicon-trash"> </span> </li>');
				$('input').val("");
			}
		}
	});
	/* if you want to fadeout and remove
	$('ul').on('click', "span", function(event) 
{
	$(this).parent().fadeOut(500,function() //'this' is used to remove the particular  span tag*
	{
	   $(this).remove();
	
	}); 
	event.stopPropagation(); */
	
	
	// if you want only romove the elemenmt 
	$('ul').on('click', "span", function() 
{
	$(this).parent().remove();
});

	$('ul').on('click', "li", function() 
{
	$(this).toggleClass('aaa');
});
 


















}); //document.ready function brackets.


function clearAll()
 {
	 document.getElementById("ddd").innerHTML = "";
 }
 
 function showCompleted()
 {
	var c = document.querySelectorAll("li");
	var m = c.length;
	for (i=0; i<m; i++)
	{
	if(c[i].className =='aaa')
	{
		c[i].style.display = "";
	}
	else
	{
		c[i].style.display = "none";
	}
	}
 }
 
 
 function showActive()
 {
	 var c =document.querySelectorAll('li');
	 var m = c.length;
	 for (i=0; i<m; i++)
	 {
	 if(c[i].className == 'aaa')
	 {
		 c[i].style.display = 'none';
	 }
	 else 
	 {
		 c[i].style.display = '';
	 }
	 }
 }
 
 
 function showAll()
 {
var c =document.querySelectorAll('li');
	 var m = c.length;
	 for (i=0; i<m; i++)
	 {
		 c[i].style.display = "";
 }
 }
 
 