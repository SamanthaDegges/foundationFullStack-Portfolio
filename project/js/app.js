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
});
