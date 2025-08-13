function init() {
  render();
}
function render() {
  let contentCard = document.getElementById("card-content");
  contentCard.innerHTML = "";
  for (let index = 0; index < books.length; index++) {
    contentCard.innerHTML += getTemplateBookCard(index);
  }
}
