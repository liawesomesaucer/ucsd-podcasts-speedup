function addScript(scriptURL, onload) {
   var script = document.createElement('script');
   script.setAttribute("type", "application/javascript");
   script.setAttribute("src", scriptURL);
   if (onload) script.onload = onload;
   document.body.appendChild(script);
}

function addSecondScript(){
    addScript(chrome.extension.getURL("updatePodcastSpeed.js"));
}

addScript(chrome.extension.getURL("jquery-1.7.1.min.js"), addSecondScript);

/**
 * Cookie functions from https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
 */
function createCookie(name,value) {
    document.cookie = name + "=" + value + ";";
}

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
