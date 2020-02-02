let c = getCookie("email");
console.log(c);

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  document.querySelector("#logout").onclick = function(){

    let d = new Date();
    d.setTime(d.getTime() - (20*60*1000));
    let expires = d.toUTCString();
    document.cookie = `email=${c}; expires=${expires}; path=/`;
    location.reload();

  }