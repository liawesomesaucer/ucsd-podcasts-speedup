function updatePodcastSpeed() {
  var podcastSpeed = readCookie('podcastSpeed') || 2; // TODO: for testing

  // Prevent redirects
  $('#faster').attr('href', '#');
  $('#slower').attr('href', '#');

  podcastSpeed = 2;

  if (!podcastSpeed) return;

  var clicks = (podcastSpeed - 1.0) / 0.05;

  console.log(clicks);
  console.log('updatePodcastSpeed called');

  while (clicks > 0) {
    clicks = clicks - 0.5;
    $('#faster').trigger('click');
    console.log('triggering faster');
  }
  while (clicks < 0) {
    clicks = clicks + 0.5;
    $('#slower').trigger('click');
    console.log('triggering slower');
  }
}

// Need to wait until jquery is loaded - inject our own?
$(document).ready(function() {
  updatePodcastSpeed();
});

/**
 * Cookie functions from https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
 */
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}
