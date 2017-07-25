window.onload = function() {
	$(document).ready(function() {

$('.skillsb').click(function(){
            $('.skills').toggle();
        });

});
}

var animation = bodymovin.loadAnimation({
  container: document.getElementById('smalls1'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../img/smalls/smalls_sleeping.json'
})

var animation = bodymovin.loadAnimation({
  container: document.getElementById('smalls2'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../img/smalls/smalls_360.json'
})