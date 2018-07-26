
var tweetText;
$(document).ready(function() {
  var corsString = "https://cors-anywhere.herokuapp.com/";
  var apiString = "api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?";

  var colors = ["#c98411","#281300","#991e00","#470000", "#feb950","#704700","#8a773c"];
  var rand = Math.floor(Math.random() * colors.length);
      
  $('.change').css("background-color", colors[rand]);
    $('.changeText').css("color", colors[rand]);

  $.ajax({
    url: corsString + apiString,
  })

  .done(function(data) {
    console.log(data);
     tweetText=data.quoteText+" -"+data.quoteAuthor;
     if(data.quoteAuthor==""){
      data.quoteAuthor="Anonymous";
     }
    $(".quote").html(data.quoteText + "<br> - " + data.quoteAuthor);
    
  })
  .fail(function(err) {
        console.log('Error: ' + err.status);

  });

});


var tweet= function(){  
      var url="https://twitter.com/intent/tweet";
      var text=tweetText+"\n [Generated by kyletomanelli.com/quote ]";
      var hashtags="kylesrandomquotegenerator";
      var tweetWindow= window.open(url+"?text="+text+";hashtags="+hashtags,"","width=500,height=300");
    
};
