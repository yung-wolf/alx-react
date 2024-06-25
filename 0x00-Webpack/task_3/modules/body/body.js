import $ from "jquery";
import _ from "lodash";
import "./body.css";

$(document).ready(function() {
  $("body").append("<button>Click here to get started</button>");
  $("body").append("<p id='count'></p>");

  let btnCount = 0;

  function updateCounter() {
    btnCount += 1;
    $("#count").text(`${btnCount} clicks on the button`);
  }

  const debouncedUpdateCounter = _.debounce(updateCounter, 500, {
    leading: true,
    trailing: false
  });

  $("button").on("click", debouncedUpdateCounter);
})