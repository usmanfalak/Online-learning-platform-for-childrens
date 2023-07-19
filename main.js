// const collapsibles = document.querySelectorAll("accordian-button");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle(".accordian-body");
//   })
// );

const collapseElementList = document.querySelectorAll(".collapse");
const collapseList = [...collapseElementList].map(
  (collapseEl) => new bootstrap.Collapse(collapseEl)
);
