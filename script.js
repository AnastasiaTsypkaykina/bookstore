function init() {
  render();
}
function render() {
  let contentCard = document.getElementById("card-content");
  contentCard.innerHTML = "";
  for (let index = 0; index < books.length; index++) {    
    let hearts = showRightLike(index);
    contentCard.innerHTML +=  getTemplateBookCard(index, hearts.redHeart, hearts.emptyHeart);
    let tableRef = document.getElementById("comment-table" + index);
    for (
      let indexComments = 0;
      indexComments < books[index].comments.length;
      indexComments++
    ) {
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

  tbodyRef.innerHTML += `<tr><td>Bücherwurm7: </td><td>${commentText}</td></tr>`;

  input.value = "";
}
function showRightLike(indexBooks) {
  if (books[indexBooks].liked === true) {
    return { redHeart: "", emptyHeart: " d_none" };
  } else {
    return { redHeart: " d_none", emptyHeart: "" };
  }
}
function changeLiked(indexBooks) {
  
  if (books[indexBooks].liked === true) {
   
    books[indexBooks].liked = false;
    minusALike(indexBooks);
    redHeart(indexBooks);

    
  } else {
    books[indexBooks].liked = true;
    plusALike(indexBooks);
    emptyHeart(indexBooks);
  } 
  
}

function redHeart(indexBooks) {
  let red = document.getElementById("red-heart-img" + indexBooks);
  let empty = document.getElementById("empty-heart-img" + indexBooks);
  red.classList.add("d_none");
  empty.classList.remove("d_none");
  
}

function emptyHeart(indexBooks) {
  let empty = document.getElementById("empty-heart-img" + indexBooks);
  let red = document.getElementById("red-heart-img" + indexBooks);
  empty.classList.add("d_none");
  red.classList.remove("d_none");
  
}
function plusALike(indexBooks) {
  books[indexBooks].likes += 1;
  let likesRef = document.getElementById("likes" + indexBooks);
  likesRef.innerText = books[indexBooks].likes;
}
function minusALike(indexBooks) {
  books[indexBooks].likes -= 1;
  let likesRef = document.getElementById("likes" + indexBooks);
  likesRef.innerText = books[indexBooks].likes;
}
