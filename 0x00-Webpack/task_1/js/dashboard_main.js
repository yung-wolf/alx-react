import $ from "jquery";
import _ from "lodash";

$(document).ready(function() {
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append("<button>Click here to get started</button>");
  $("body").append("<p id='count'></p>");
  $("body").append("<p>Copyright - Holberton School</p>");

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