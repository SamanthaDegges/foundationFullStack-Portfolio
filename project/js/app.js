$(document).foundation();

$(document).ready(function() {

//TUMBLR API CALL
//   var tumblr = require('node_modules/tumblr.js/lib/tumblr.js');
//   var client = tumblr.createClient({
//     consumer_key: TUMBLR_CONSUMER_KEY,
//     consumer_secret: TUMBLR_CONSUMER_SECRET,
//     token: TUMBLR_TOKEN,
//     token_secret: TUMBLR_TOKEN_SECRET
//   });
//
// // Make the request
// client.userInfo(function (err, data) {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log('works!',data);
//   }
// });

  $(".myTabs").on("click", function(){
    $(".myTabs").removeClass("active");
    $(this).addClass("active");
  });

  $(".name, #subtitle").on("click", function(){
    $(".myTabs").removeClass("active");
    $("#portfolio").addClass("active");
  });


  //var twitterSnippet = '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");<\/script>'

  //$("#twitterDisplay").html(twitterSnippet);
  //$('head').append('<script type="text/javascript" src="your.js"></script>');

  // $("#twitterDisplay").append(twitterSnippet);
  // twttr.widgets.load($("#twitterDisplay"));
  // $("#twitterDisplay").append('<p>test</p>');
  // $("#twitterDisplay").append('<script type="text/javascript" src="twitterSnippet.js"></script>');

});
