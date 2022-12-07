document.addEventListener("mousemove", logoMove);
function logoMove(e){
  document.querySelectorAll(".object").forEach(function(move){

    var move_axis = move.getAttribute("data-value");
    var x = (e.clientX * move_axis) / 300;
    var y = (e.clientY * move_axis) / 300;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
