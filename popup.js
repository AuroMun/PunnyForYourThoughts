var highlighted = 1;
function myFunction() {
    var searchterm = document.getElementById("mySearch").value;
    document.getElementById('button1').style.border = "2px solid #f44336"
    document.getElementById('button2').style.border = "2px solid #e7e7e7"
    highlighted = 1;
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.datamuse.com/words?ml=" + searchterm,
      "method": "GET",
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
      $("#wordlist").html('');
      for(var i=0; i<Math.min(response.length, 100000); i++){
        $("#wordlist").append('<li class="collection-item">'+response[i].word+'</li>');
      }
    });
}
function yourFunction() {
    var searchterm = document.getElementById("mySearch").value;
    document.getElementById('button2').style.border = "2px solid #f44336"
    document.getElementById('button1').style.border = "2px solid #e7e7e7"
    highlighted = 2;
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.datamuse.com/words?sl=" + searchterm,
      "method": "GET",
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
      $("#wordlist").html('');
      for(var i=0; i<Math.min(response.length, 1000000); i++){
        $("#wordlist").append('<li class="collection-item">'+response[i].word+'</li>');
      }
    });
}
function perfSearch() {
  if(highlighted==1)myFunction();
  else yourFunction();
}
('DOMContentLoaded', function() {
  myFunction();
});

document.getElementById('button1').addEventListener('click', myFunction);
document.getElementById('button2').addEventListener('click', yourFunction);
document.getElementById('mySearch').addEventListener('keyup', perfSearch);
