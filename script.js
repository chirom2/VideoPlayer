window.readyHandlers = [];
window.ready = function ready(handler) {
  window.readyHandlers.push(handler);
  handleState();
};

window.handleState = function handleState() {
  if (['interactive', 'complete'].indexOf(document.readyState) > -1) {
    while (window.readyHandlers.length > 0) {
      (window.readyHandlers.shift())();
    }
  }
};

document.onreadystatechange = window.handleState;




window.onscroll = function() {
  myFunction()
};

function myFunction() {
  var player = videojs('my-video');
  var topZone = (window.scrollY || window.pageYOffset || document.body.scrollTop) - (document.getElementById('my-video').offsetTop - 100);
  var bottomZone = topZone + player.height();

  console.log("top " + topZone);
  console.log("height " + player.height());

  if (topZone >= 0 && topZone <= player.height()) {
    player.play();
  } else {
    player.pause();
  }
}




ready(function() {
  //Initialisation of the player
  //No volume control - Twitter player skin
  //To disable volume volumeMenuButton propretie
  videojs('my-video', {
    techOrder : ['html5', 'flash'],
    controls : true,
    controlBar: {
      children: [
           'playToggle',
           'progressControl',
           'muteToggle',
           'fullscreenToggle'
       ]
    }
  }).ready(function() {
    var myPlayer = this;
  });

});
