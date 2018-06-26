function getIt()
{
  $('p').on('click', function(){
    alert("Hey!")
});
}

function frameIt()
{
  $('img').on('load', function(){
 $("head").append($("<link rel='stylesheet' href='style.css' type='text/css' media='screen' />")); //if true, append the new <link> element to the <head> element in oor HTML page    }
});
}

function pressIt()
{
  $(document).on('keydown', function(e) 
  {
  if(e.which == 71)
    {
     alert('g was pressed');
    }
  })
}

function submitIt()
{
  $("form").on("submit", function() {
  if ($( "input:first" )) {
    alert('Your form is going to be submitted now.');
    return;
  }

});
}



$(document).ready(function(){

frameIt();
getIt();
pressIt();
submitIt();

});
