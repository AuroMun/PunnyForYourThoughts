function myFunction() {
    var searchterm = document.getElementById("mySearch").value;
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
('DOMContentLoaded', function() {
  myFunction();
});

document.getElementById('button1').addEventListener('click', myFunction);
document.getElementById('button2').addEventListener('click', yourFunction);
