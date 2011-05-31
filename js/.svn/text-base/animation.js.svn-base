$(document).ready(function(){

function SpriteAnim (options) {
  var timerId,
      i = 0,
      element = document.getElementById(options.elementId);

  element.style.width = options.width + "px";
  element.style.height = options.height + "px";
  element.style.backgroundRepeat = "no-repeat";
  element.style.backgroundImage = "url(" + options.sprite + ")";

  timerId = setInterval(function () {
    if (i >= options.frames) {
      i = 0;
    }
    element.style.backgroundPosition = "0px -" + i * options.height + "px";
     i ++;
  }, 400);
    
  this.stopAnimation = function () {
    clearInterval(timerId);
  };
}

var wink = new SpriteAnim({
  width: 300,
  height: 170,
  frames: 15,
  sprite: "img/sprite.png",
  elementId : "anim"
});

});
