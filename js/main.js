window.onload = function() {
  document.getElementById("myInput").addEventListener("keyup", filterList);
};

function filterList(event) {
  const nodelist = document.getElementsByClassName("item");
  const list = Array.from(nodelist);
  var filter = event.target.value.toLowerCase();
  list.forEach(function(element) {
    var itemTitle = element.getElementsByTagName("span")[0].innerHTML;
    var shouldBeShown = itemTitle.toLowerCase().indexOf(filter) !== -1;
    element.style.display = shouldBeShown ? "" : "none";
  });
}

