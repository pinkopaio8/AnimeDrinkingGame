var random = 0;
var before = 0;
var House = new Array(500);
var counter = -1;

function next(){
  counter++;
  document.getElementsByClassName('burp')[0].src = "img/loading.png";
  document.getElementsByClassName('text')[0].innerHTML = "<p>Loading...<p>";
  document.getElementsByClassName('next')[0].disabled = true;
  document.getElementsByClassName('return')[0].disabled = true;
  if (House[counter] !== undefined) {
    $.ajax({
      url: "texts/" + House[counter] + ".html",
      //type: "POST",
      //datatype: "json",
      success: function(result){
          $(".text").html(result);
          document.getElementsByClassName('burp')[0].src = "img/" + House[counter] + ".png";
          document.getElementsByClassName('counter')[0].innerText = "Carta Numero: "+(counter+1);
          document.getElementsByClassName('next')[0].disabled = false;
          document.getElementsByClassName('return')[0].disabled = false;
    }});
  }
  else{
    before = random;
    random = Math.floor(Math.random() * 100);
    while (random == before) {
      random = Math.floor(Math.random() * 100);
    }
    House[counter] = random;
    $.ajax({
      url: "texts/" + random + ".html",
      //type: "POST",
      //datatype: "json",
      success: function(result){
          $(".text").html(result);
          document.getElementsByClassName('burp')[0].src = "img/" + random + ".png";
          document.getElementsByClassName('counter')[0].innerText = "Carta Numero: "+(counter+1);
          document.getElementsByClassName('next')[0].disabled = false;
          document.getElementsByClassName('return')[0].disabled = false;
    }});
  }
}

function back(){
  if (counter < 0) {
    counter = -1;
  }
  else if (counter == 0) {
    counter = 0;
  }
  else {
    document.getElementsByClassName('burp')[0].src = "img/loading.png";
    document.getElementsByClassName('text')[0].innerHTML = "<p>Loading...<p>";
    document.getElementsByClassName('next')[0].disabled = true;
    document.getElementsByClassName('return')[0].disabled = true;
    counter--;
    $.ajax({
      url: "texts/" + House[counter] + ".html",
      //type: "POST",
      //datatype: "json",
      success: function(result){
          $(".text").html(result);
          document.getElementsByClassName('burp')[0].src = "img/" + House[counter] + ".png";
          document.getElementsByClassName('counter')[0].innerText = "Carta Numero: "+(counter+1);
          document.getElementsByClassName('return')[0].disabled = false;
          document.getElementsByClassName('next')[0].disabled = false;
    }});
  }

}

function sword(x){
  x.onclick = null;
  var para = document.createElement("div");
  para.setAttribute("class", "sword");
  para.setAttribute("onclick", "remove(this)");
  $.ajax({
    url: "texts/sword.html",
    success: function(result){
        para.innerHTML+=result;
        document.getElementsByClassName('next')[0].disabled = true;
        document.getElementsByClassName('return')[0].disabled = true;
  }});
      document.body.appendChild(para);
}

function remove(x){
  document.getElementById('justonce').onclick = function() {sword(this);};
  x.remove();
  document.getElementsByClassName('next')[0].disabled = false;
  document.getElementsByClassName('return')[0].disabled = false;
}
