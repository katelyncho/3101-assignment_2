document.addEventListener("DOMContentLoaded", () => {
  var bag = document.querySelector(".bag-cell");
  var grid = document.querySelector(".grid");
  if (!bag) return;

  var closed = "/img/bag_closed.png";
  var opened = "/img/bag_opened.png";
  var isClosed = true;

  if (grid) grid.classList.remove("bag-open");

  bag.style.cursor = "pointer";
  bag.style.background = `url('${closed}') center/contain no-repeat`;

  bag.addEventListener("click", () => {
    if (isClosed) {
      bag.style.background = `url('${opened}') center/contain no-repeat`;
      grid && grid.classList.add("bag-open");
    } else {
      bag.style.background = `url('${closed}') center/contain no-repeat`;
      grid && grid.classList.remove("bag-open");
    }
    isClosed = !isClosed;
  });
});
