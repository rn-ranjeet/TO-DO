//click to check to do
$("ul").on("click", "li" ,function(){
	$(this).toggleClass("selected");
});

//click to remove todo
$("ul").on("click", "span" ,function(event)
{	$(this).parent().fadeOut(500,function()
	{
		$(this).remove();
	});
	event.stopPropagation();
});

//add new li
$("input[type='text'").keypress(function(event)
{
	if(event.which === 13)
	{
		var newTodo = $(this).val();
		$(this).val("")
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" +newTodo+"</li>")

	}
});

$(".fa-plus").click(function()
{
	$("input[type='text'").fadeToggle();
});
