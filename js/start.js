var random = 0;
var before = 0;
var House = new Array(500);
var counter = -1;

function next(){
  counter++;
  document.getElementsByClassName('burp')[0].src = "img/loading.png";
  document.getElementsByClassName('text')[0].innerHTML = "<p>Loading...<p>";
  if (House[counter] !== undefined) {
    $.ajax({
      url: "texts/" + House[counter] + ".html",
      //type: "POST",
      //datatype: "json",
      success: function(result){
          $(".text").html(result);
          document.getElementsByClassName('burp')[0].src = "img/" + House[counter] + ".png";
          document.getElementsByClassName('counter')[0].innerText = "Carta Numero: "+(counter+1);
    }});
  }
  else{
    before = random;
    random = Math.floor(Math.random() * 51);
    while (random == before) {
      random = Math.floor(Math.random() * 51);
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
    }});
  }
}

function back(){
  document.getElementsByClassName('burp')[0].src = "img/loading.png";
  document.getElementsByClassName('text')[0].innerText = "<p>Loading...<p>";
  if (counter < 0) {
    counter = -1;
  }
  else if (counter == 0) {
    counter = 0;
  }
  else {
    counter--;
    $.ajax({
      url: "texts/" + House[counter] + ".html",
      //type: "POST",
      //datatype: "json",
      success: function(result){
          $(".text").html(result);
          document.getElementsByClassName('burp')[0].src = "img/" + House[counter] + ".png";
          document.getElementsByClassName('counter')[0].innerText = "Carta Numero: "+(counter+1);
    }});
  }

}
