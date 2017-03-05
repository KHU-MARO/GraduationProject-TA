var e = $.Event("keydown");
var saveKey = e.ctrlKey && e.which == 83;
var saveKeyCode = e.ctrlKey && e.keyCode == 83;

$(document).keydown(function(event){
  if(event.keyCode == saveKeyCode){
    alert("keypressed");
  }
});

function Start() {
  saveKey = e.ctrlKey && e.which == 83;
  $(document).trigger(saveKey);
}

//
// $(window).keypress(function(event) {
//   if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19)) return true;
//   alert("Ctrl-S pressed");
//   event.preventDefault();
//   return false;
// });