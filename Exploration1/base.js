function stageContent(content){
  $("#stage").html(content);
}

function evaluatePath(path){
  // clean up the endpoint
  var request = path.split("/").pop();

  // request content
  if (request == "ReactTutorial") {
    $.get("ReactTutorial/index.html", stageContent);
  }
  else if (request == "Test") {
    $.get("ReactTutorial/test.html", stageContent);
  }
  else {
    $.get("ReactTutorial/test.html", stageContent);
  }
}

$(function() {
  // evaluate path to start
  evaluatePath(location.pathname);

  // when a link is clicked ..
  $("nav[role=navigation] a").click(function(e){
    // don't follow href
    e.preventDefault();

    // instead remember href
    var request = $(this).attr("href");

    // add href to the browser's history
    history.pushState(null, null, request);

    // then evaluate it
    evaluatePath(request);
  });

  // If the back button is pressed ..
  $(window).on("popstate", function() {
    evaluatePath(location.pathname);
  });
});
