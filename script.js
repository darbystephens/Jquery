$(document).ready(function() {


$(".available").click(function() {
  var tableElem = $(this);
  var tableNumber = tableElem.attr("data-table");
  $("#hide").fadeIn();
 $("#tableNum").text(tableNumber);

 $("#save").click(function(){
   tableElem.removeClass("available");
   tableElem.addClass("reserved");
   addHoverData();
   $("#hide").fadeOut();
   $("#nameIn").val("");
   $("#partySize").val("");
 });


 function addHoverData() {
   var name = $("#nameIn").val();
   var party = $("#partySize").val();
   tableElem.append('<div class="hoverData"><div>Guest Name: ' + name + '</div><div>Size of party: ' + party + '</div></div>');
 }
});

$("#cancel").click(function(){
    $("#hide").fadeOut();
  });





});
