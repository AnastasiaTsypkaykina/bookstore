function init() {
  render();
}
function render() {
  let contentCard = document.getElementById("card-content");
  contentCard.innerHTML = "";
  for (let index = 0; index < books.length; index++) {
    contentCard.innerHTML += getTemplateBookCard(index);
    let tableRef = document.getElementById("comment-table" + index);

    for (let indexComments = 0; indexComments < books[index].comments.length; indexComments++) {      
      let commentName = books[index].comments[indexComments];
      tableRef.innerHTML += commentsAndNamesTemplate(commentName);
    }
  }
}

function addComment(indexBooks) {
 
  let input = document.getElementById(`comment-input${indexBooks}`);  
  let commentText = input.value;  
  books[indexBooks].comments.push({
    name: "Bücherwurm7",
    comment: commentText,
  });
  let tbodyRef = document.getElementById(`comment-table${indexBooks}`);
 
  tbodyRef.innerHTML +=  `<tr><td>Bücherwurm7: </td><td>${commentText}</td></tr>`;
 
  input.value = "";
}

