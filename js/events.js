function getIt()
{
  $('p').on('click', function(){
    alert("Hey!")
});
}

function frameIt()
{
  $('img').on('load', function(){
    
   $("img").addClass("tasty");
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
